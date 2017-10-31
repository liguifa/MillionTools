const sys = require("sys");
const http = require("http");

module.exports = class server{
    start(port){
        http.createServer(function(request,response){
            sys.puts(request.url);
            let route = this._matchRoute(request.url);
            if(route){

            }
        }).listen(port);
    }

    registerRoute(route){
        this._route = route;
    }

    _getHandle(url){
        
    }

    _matchRoute(url){
        try{
            return this.route.find(r=>{
                let regex = new RegExp(r.rule,"g");
                if(regex.test(url)){
                    return r;
                }
            });
        } catch(e) {
            throw e;
        }
    }
}