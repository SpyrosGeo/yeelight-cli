var exec = require('child_process').exec;
var inquirer = require('inquirer');
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
  

    if(cmd ==="init"){
      inquirer.prompt(questions).then(answers =>{
        console.log(answers.ip);
      });
    }else if(cmd === "on"){
      exec('scripts/yeelight-scene.sh 0 On');
      console.log("light On");
    }else if(cmd === "off"){
      exec('scripts/yeelight-scene.sh 0 Off');
      console.log("light Off");
    }else if(cmd === "4300"){
      exec('scripts/yeelight-scene.sh 0 4300');
    }else if(cmd === "warm" ){
      exec('scripts/yeelight-scene.sh 0 Warm');
    }else if(fnArg.length === 0){
      console.log("use ylight on/off options");
    }

}
