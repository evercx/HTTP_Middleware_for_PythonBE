const fs = require('fs');
const axios = require('axios');
const f =require('../lib/functions');



async function sendPostRequest(){

    let fileBuffer = await f.readFile('./1.pdf').catch((err)=>err);
    console.log(fileBuffer);

    queryParams = {
        type:1,
        filetype:'pdf'
    };

    postConfig = {
        method: 'post',
        url: '/api/file',
        baseURL:'http://127.0.0.1:3000/',
        headers:{'Content-Type':'application/octet-stream'},
        data: fileBuffer,
        params:queryParams
    };

    let res = await axios.request(postConfig);
    console.log(res.data);

}

sendPostRequest();






