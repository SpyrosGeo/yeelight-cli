var exec = require('child_process').exec;
var inquirer = require('inquirer');
var finalIp='test';


export function cli(args){
  const cmd = args[2];
  const fnArg = (args.splice(2));
  const questions =[
    {
      name:'ip',
      type:'input',
      message:'Enter the Yeelights Local IP',
      validate:function(value){
        if(value.length){
          // console.log(value);
          return true;
        }
      }
    }
  ]
  
  
     if(cmd === "on"|| cmd ==="off"|| cmd ==="disco"||cmd ==="warm"){
      //added Capitalization of the first letter to work with the script
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-scene.sh 0 ${cmd.charAt(0).toUpperCase()+cmd.slice(1)}`);
      console.log(`lights ${cmd}!`);
    }else if(cmd === "default"|| cmd ==="4300"){
      exec('/home/thatguy/My-repos/ylight/scripts/yeelight-scene.sh 0 4300');
      exec('/home/thatguy/My-repos/ylight/scripts/yeelight-brightness.sh 0 100');
    }else if(cmd === "50"||cmd==="100") {
      exec(`/home/thatguy/My-repos/ylight/scripts/yeelight-brightness.sh 0 ${cmd}`);
    }else if (cmd === "help"){
      console.log("Use the following commands: on||off||disco||warm||default");
      console.log("You can also use commands to set Brightness with number pernentage without the %");
    } else if (cmd !== "on" || cmd !== "off" || cmd !== "disco" || cmd !== "warm" || cmd !== "default" || cmd !== "help") {
      console.log("Not valid command! use 'help'");
    }
    
    
}




