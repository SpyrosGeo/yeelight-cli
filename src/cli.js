var exec = require('child_process').exec;
var inquirer = require('inquirer');
var finalIp='test';


export function cli(args){
  if(args[2] == null){
    console.log("Use the following commands: on||off||disco||warm||default|red|green|blue");
    console.log("You can also use commands to set Brightness with number pernentage without the % ");
  }else {
  const cmd = args[2].toLowerCase();
  const fnArg = (args.splice(2));
  const rgb = args[3];
 
  
     if(cmd === "on"|| cmd ==="off"|| cmd ==="disco"||cmd ==="warm"){
      //added Capitalization of the first letter to work with the script
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-scene.sh 0 ${cmd.charAt(0).toUpperCase()+cmd.slice(1)}`);
      console.log(`lights ${cmd}!`);
    }else if(cmd === "default"|| cmd ==="6500"){
      exec('/home/thatguy/My-repos/ylight/scripts/yeelight-scene.sh 0 6500');
      exec('/home/thatguy/My-repos/ylight/scripts/yeelight-brightness.sh 0 100');
	console.log("setting to default!");
    }else if(cmd === "50"||cmd==="100") {
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-brightness.sh 0 ${cmd}`);
    }else if(cmd ==="blue"){
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-rgb.sh 0 0,0,255`);
    }else if(cmd ==="red"){
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-rgb.sh 0 255,0,0`);
    }else if(cmd ==="green"){
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-rgb.sh 0 0,255,0`);
    }else if (cmd !== "on" || cmd !== "off" || cmd !== "disco" || cmd !== "warm" || cmd !== "default" || cmd !== "help") {
      console.log("Not valid command! run 'ylight' for commands");
    }
    
    
}

}


