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
        return {
            "pageInfo": null,
            "code": "success",
            "msg": null,
            "data": null
        }
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
});
