const getRawBody = require('raw-body');
const fs = require('fs');
const f = require('../lib/functions');




module.exports = {

    request_model: async function(ctx, next){

        let type = ctx.request.query.type || null;
        let fileType = ctx.request.query.filetype || null;

        console.log(type);
        console.log(fileType);

        if(!type || !fileType ){
            ctx.body = {
                "result": "请求信息填写有误",
                "status":"100",
                "msg":"请求信息填写有误"
            };
            return;
        }

        let fileBuffer = await getRawBody(ctx.req);
        let fileBufferLength = fileBuffer.length;
        console.log(fileBuffer);
        console.log(fileBufferLength);

        filePath = './receive/' + f.guid() + "." + fileType;
        let saveResult = await f.writeFile(filePath,fileBuffer);
        console.log(saveResult);
        let unlinkResult = await f.unlinkFile(filePath);

        resultJSON = {
            msg : filePath,
            result: fileType,
            type : type,
            fileType : fileType,
            fileSize : fileBufferLength
        };
        ctx.response.body = resultJSON;

    }

}