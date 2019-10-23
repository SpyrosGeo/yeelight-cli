var exec = require('child_process').exec;
import fs from 'fs';
import ip from '../scripts/ipInit';
export function cli(args){
  const cmd = args[2];
 
  const fnArg = (JSON.stringify(args.splice(2)));
    if(fnArg ==='["init"]'){
      console.log(ip);
    }
    if(cmd === "on"){
      exec('scripts/yeelight-scene.sh 0 On');
      console.log("light On");
    }else if(cmd === "off"){
      exec('scripts/yeelight-scene.sh 0 Off');
      console.log("light Off");
    }else if(cmd === "4300"){
      exec('scripts/yeelight-scene.sh 0 4300');
    }else if(cmd === "warm" ){
      exec('scripts/yeelight-scene.sh 0 Warm');
    }else if(args.splice(2).length === 0){
      console.log("use ylight on/off options");
    }

}
