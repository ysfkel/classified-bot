const handlePropertyIntentDialog = require('./handle-property-intent-dialog');

module.exports=(intentRequest)=> {
      
    const invocationSource = intentRequest.invocationSource;

    if(invocationSource==='DialogCodeHook') {
          return handlePropertyIntentDialog(intentRequest);
    }
}