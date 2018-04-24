const fs = require('fs');


module.exports = {

    writeFile: function(fileName,fileContent){

        let writeFileResult = new Promise(function(resolve,reject){
            fs.writeFile(fileName,fileContent,(err)=>{
                if(err) reject(err);
                resolve("saved successfully.")
            })
        });

        return writeFileResult;
    },

    readFile: function (path){

        let readFileResult = new Promise(function(resolve,reject){
            fs.readFile(path,(err,data)=>{
                if(err) reject(err);
                resolve(data)
            })
        });

        return readFileResult;
    },

    unlinkFile: function(path){
        let unlinkFileResult = new Promise(function(resolve,reject){
            fs.unlink(path,(err)=>{
                if(err) reject(err);
                resolve("unlink successfully.");
            })
        });

        return unlinkFileResult;
    },

    guid : function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    },




};

