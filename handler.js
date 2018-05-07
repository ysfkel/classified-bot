'use strict';
const handleIntent=require('./handle-intent');
module.exports.intents = (event, context, callback) => {
   console.log('HANDLING BOT',event.bot.name)
   try{
     handleIntent(event).then(response=>{
      callback(null,response)
      console.log('----LAMBDA',event,context)
     })
   }
   catch(e) {
      console.log('error',e)
   }
  
};
