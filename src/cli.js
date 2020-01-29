'use strict'
var exec = require('child_process').exec;
const fs = require('fs');
var path = require('path')
let ip ='test'
const YeeDiscovery = require('yeelight-platform').Discovery
const discoveryService = new YeeDiscovery()

function discover(){
discoveryService.on('started', () => {
  // console.log('** Discovery Started **')
})

discoveryService.on('didDiscoverDevice', (device) => {
  //  ip = device.host
  let ip = device.host;
     fs.writeFile(`${__dirname}/../scripts/yeelight-ips`,ip,(err)=>{
         if(err) throw err
         console.log('added IP :',ip)
       })
})

discoveryService.listen()
}
export function cli(args){
  if(args[2] == null){
    console.log("Use the following commands: init||on||off||disco||warm||default|red|green|blue");
    console.log("You can also use commands to set Brightness with number pernentage without the % ");
  }else {
  const cmd = args[2].toLowerCase();
  // const ip = args[3];
  // const fnArg = (args.splice(2));

  const rgb = args[3];
 
  
     if(cmd === "on"|| cmd ==="off"|| cmd ==="disco"||cmd ==="warm"){
      //added Capitalization of the first letter to work with the script
      exec(`${__dirname}/../scripts/yeelight-scene.sh 0 ${cmd.charAt(0).toUpperCase()+cmd.slice(1)}`);
      console.log(`lights ${cmd}!`);
    }else if(cmd === "default"){
      exec(`${__dirname}/../scripts/yeelight-scene.sh 0 6500`);
      exec(`${__dirname}/../scripts/yeelight-brightness.sh 0 100`);
	  console.log("setting to default!");
    }else if(cmd === "50"||cmd==="100") {
      exec(`${__dirname}/../scripts/yeelight-brightness.sh 0 ${cmd}`);
    }else if(cmd ==="blue"){
      exec(`${__dirname}/../scripts/yeelight-rgb.sh 0 0,0,255`);
    }else if(cmd ==="red"){
      exec(`${__dirname}/../scripts/yeelight-rgb.sh 0 255,0,0`);
    }else if(cmd ==="green"){
      exec(`${__dirname}/../scripts/yeelight-rgb.sh 0 0,255,0`);
    }else if(cmd === 'init'){
    discover();
    }else if (cmd !== "on" || cmd !== "off" || cmd !== "disco" || cmd !== "warm" || cmd !== "default" || cmd !== "help") {
      console.log("Not valid command! run 'ylight' for commands");
    }
    
    
}

}


