const handlePropertyIntent=require('./handle-property-intent');

module.exports=(intentRequest)=>{
    console.log('HANDLE INTENT START',intentRequest)
    const intent = intentRequest.currentIntent.name

    if(intent==='Property') {
          console.log('..handling property intent');
          return handlePropertyIntent(intentRequest);

    }

}