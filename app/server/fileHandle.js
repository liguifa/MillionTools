const handle = require("handle.js");
const fs = require("fs");
const httpcodes = require("httpcodes.js");
const contentTypes = require("contentTypes.js");

module.exports = class fileHandle extends handle{
    handle(url,httpContext){
        let filename = this._getFilename(url);
        let file = this._getFile(filename);
        httpContext.response.writeHead(httpcodes.OK,{'Content-Type':`${contentTypes.TEXT}`});
        httpContext.response.write(file);
        httpContext.response.end();
    }

    _getFilename(url){
        if(url){
            url += "&";
        }
        let regex = new RegExp("/.+?&",g);
        return regex.exec(url);
    }

    _getFile(filename){
        try{
            return fs.readFileSync(filename,"utf8");
        } catch(e) {
            throw e;
        }
    }
}