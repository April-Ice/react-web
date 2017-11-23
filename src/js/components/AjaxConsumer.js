import { Modal } from 'antd';
import cookie from 'react-cookie';

// import $ from 'jquery'

//get 请求
export function fetchData(_that, options, callback, errorCallback) {
    //url, type, condition, _that
    let defaultOptions= {
        url: null,        //请求地址
        type: 'post',    //请求方式
        traditional: false,//传递数组 用
        contentType:'application/x-www-form-urlencoded; charset=utf-8',  //提交请求的方式  application/json; charset=utf-8
        condition: {}    //请求条件
    };
    let _options;
    if(typeof(options) == "undefined" || options == null || options.length==0){
        _options = defaultOptions;
    }else {
        _options =  {...defaultOptions, ...options};
    }
    if(typeof(_options.url) == "undefined" || _options.url == null || _options.url.length==0){
        console.log("fetchData 请求地址不能为空");
        return null;
    }
    console.log("_options=======", JSON.stringify(_options));
    $.ajax({
        url: _options.url,
        type: _options.type,
        dataType: 'json',
        traditional: _options.traditional,
        contentType: _options.contentType,
        data: _options.condition,
        success: function (resData) {
            let code = resData.code;
            if(code == "-1"){
                    Modal.warning({
                        title: '提示',
                        content: '尚未登录或登录超时，将返回登录页',
                        onOk() {
                            location.href = '/'
                        },
                    });
            }else if(code != "1"){
                Modal.warning({
                    title: '提示',
                    content: resData.msg,
                });
                if(typeof(errorCallback) != 'undefined' && errorCallback != null){
                    errorCallback(resData);
                }
            }else{
                window.isLogin = true;
                //_that.setState({resData: resData});
                if(typeof(callback) != 'undefined' && callback != null){
                    callback(resData);
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("ajax请求失败，状态码：", XMLHttpRequest.status,",状态:", XMLHttpRequest.readyState, ",错误信息:",textStatus);
            let errorMSG = '请求失败！请检查您的网络！';
            if(XMLHttpRequest.status == "404"){
                errorMSG = '请求地址未找到。';
            }else if(XMLHttpRequest.status == "500"){
                errorMSG = '内部服务器错误。';
            }else if(textStatus === "timeout"){
                errorMSG = '请求超时！';
            }
            Modal.error({
                title: '错误提示',
                content: errorMSG,
            });

        }
    });
}
