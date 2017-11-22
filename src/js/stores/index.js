import Reflux from 'reflux';
import Actions from '../actions';
import { browserHistory } from 'react-router';
import {message, Modal} from 'antd'
export default Reflux.createStore({

	listenables: [Actions],
	//successMessage 成功时，时候弹出提示操作成功的提示信息
	onWmsAjax (url,sendMothed,condition,fn,successMessage,_this) {
		if (!url || url == null){
			Modal.error({
				title: '错误提示',
				content: '请指定url',
			});
		}
		if (!sendMothed || sendMothed == null){
			Modal.error({
				title: '错误提示',
				content: '请指定请求方法',
			});
		}
		if (!condition || condition == null){
			condition = {}
		}
		let that = _this;
		$.ajax({
            url: url,
            type: sendMothed,
            dataType: 'json',
            data: condition,
            success: function (resData) {
                if(resData.Code == "-1"){
                    console.log("登录超时了！");
                    //清除登录cookie
                    // cookie.remove("userId");
                    // cookie.remove("userPwd");
                    browserHistory.push('/');

                } else if(resData.code == '1'){
					//是否需要提示信息
					if (successMessage != false) {
						message.success('操作成功');
					}
                    // that.trigger(resData);
					if (fn) {
						fn(resData);
					}

                } else { //失败的时候弹框提示
					if(that.state.loading){
						that.setState({
							loading: false
						})
					}
					Modal.error({
						title: '错误提示',
						content: resData.msg,
					});
				}
	                // that.trigger(resData)
            },
			error:function (e){
				 console.log("ajax请求失败，状态码：", XMLHttpRequest.status,",状态:", XMLHttpRequest.readyState, ",错误信息:",textStatus);
					if(that.state.loading){
						that.setState({
							loading: false
						})
					}
			}
			
        })
	},


    onPageElementChange () {  //TableList 列表点击分页、每页显示多少条时的监听

    },
	storesResData: []

});
