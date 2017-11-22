/*
import Mock from "mockjs"


//ajax 请求响应时间，默认是10 - 100
Mock.setup({timeout: '10-200'});

Mock.mock(/\.json/, {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
});
Mock.mock('/number', {
    'data|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
});
Mock.mock('/base/auth/login2', 'post', {
    "pageInfo": null,
    "code": "success",
    "msg": null,
    "data": null
});
Mock.mock('/base/auth/login', 'post', function(options) {
    // let username = options.body.username;
    // let password = options.body.password;
    // console.log("options.body====", options.body);
    // console.log("options.body====", JSON.stringify(options.body));
    // console.log("username====", username);
    // if(username == "123"){

        return {
            "pageInfo": null,
            "code": "success",
            "msg": null,
            "data": null
        }


    // }else{

        // return {
        //     "pageInfo": null,
        //     "code": "fail",
        //     "msg": "用户登录密码错误",
        //     "data": null
        // }


    // }
});
Mock.mock('/menu', {
    'errCode': '200',
    'data|1-10': [
        {
            'id|+1': 1,
            'title': '',
            'email': '@EMAIL'
        }
    ]
});*/
