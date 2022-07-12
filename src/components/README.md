# Introduction

React library to work with axios more convenient.

# Installation
You need to install Axios to support use-vc-axios
```npm install axios``` 
And you can install use-vc-axios
```npm install use-vc-axios```

# Usage

Create apiInstance.js and export to call when using use-vc-axios
```js
    import axios from "axios";
    const instance = axios.create({
        baseURL: 'http://survivalswimclub.com/mysystem',
        headers: {
            "authorization":'Bearer YWxhZGRpbjpvcGVuc2VzYW1l'
        }
    });
    export default instance;
```
`React`

Call api instance
```import instance from apiInstance.js```

Call library
```import { useVCAxios } from 'use-vc-axios'```
```import { useVCLazyAxios } from 'use-vc-axios'```

`useVCAxios example:`
```js
    const { data, loading, refetch } = useVCAxios({
            axiosInstance: instance,
            url: '/get/getAxios.php',
            variables: {
                data:'test'
            },
            method:'POST'
    })
```

`useVCLazyAxios example:`
```js
    const { data, loading, operation } = useVCLazyAxios({
        axiosInstance: instance,
        url: '/get/getAxios.php',

        method:'POST'
    })
```

```js
    <button onClick={() => operation({variables:{data:'test'}})}>refetch</button>
```

# API
useVCAxios:
`axiosInstance:` api which created in apiInstance.js `axiosInstance: instance`, Required
`method:` String `GET | POST | PUT`, Default `GET`
`url:` String, `example: /get/data`, which after base URL that'd defined in `apiInstance.js`, Required
`variables:` Object, data which send to `url`, Not required

response:
`data:` Response data from backend
`loading:` Boolean, Status of requesting `true | false`
`error:` Error data if any problem is happening
`refetch:` Function, to excute your method again

useVCLaxyAxios:
`axiosInstance:` api which created in apiInstance.js `axiosInstance: instance`, Required
`method:` String `GET | POST | PUT`, Default `GET`
`url:` String, `example: /get/data`, which after base URL that'd defined in `apiInstance.js`, Required

response:
`operation:` Function, to trigger and send `variables example: {data:'test'}` to your method
`data:` Response data from backend
`loading:` Boolean, Status of requesting `true | false`
`error:` Error data if any problem is happening