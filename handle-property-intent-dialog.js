
const validateSlots = require('./handle-property-validation');
const lexResponse = require('./lex-response');

module.exports=(intentRequest)=> {

     const slots = intentRequest.currentIntent.slots;
     const validationResult = validateSlots(slots);

     if(!validationResult.isValid) {
         console.log('----is invalid')
         slots[`${validationResult.violatedSlot}`] = null;

         return Promise.resolve(lexResponse.elicitSlot(
             intentRequest.sessionAttributes,
             intentRequest.currentIntent.name,
             slots,
             validationResult.violatedSlot,
             validationResult.message
         ))
     }
     console.log('-----is valid')
     return Promise.resolve(lexResponse.delegate(intentRequest.sessionAttributes,
     intentRequest.currentIntent.slots));

}