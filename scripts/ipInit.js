var fs = require('fs');
import answers from '../src/cli';
// var  = fs.readFileSync('yeelight-ips', 'utf8');
// var ip = fs.writeFileSync('yeelight-ips', 'test');
// console.log(ip)
// export default ip;
var stream = fs.createWriteStream('yeelight-ips');
stream.once('open', function (fd) {
    stream.write(answers.ip);
    stream.end();
})
