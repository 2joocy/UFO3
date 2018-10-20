var ping = require('ping');
 
var hosts = ['128.199.144.199', '167.99.51.33', '46.101.253.149'];

pingServers();

setInterval(() => {
    pingServers();
}, 10000)

function pingServers(){
    let startDate = new Date().getTime();
    hosts.forEach(function(host){
        ping.sys.probe(host, function(isAlive){
            let endDate = new Date().getTime();
            var msg = isAlive ? host + ' : ping: ' + (endDate - startDate) : 'host ' + host + ' is dead';
            console.log(msg);
        });
    });
}
