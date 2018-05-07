
module.exports.delegate = (sessionAttributes, slots) => {
       return {
            sessionAttributes,
            dialogAction: {
                type: 'Delegate',
                slots
            }
       }
}

module.exports.elicitSlot = (sessionAttributes, intentName, slots, slotToElicit, message) =>{
      return {
            sessionAttributes,
            dialogAction: {
                type: 'ElicitSlot',
                intentName,
                slots,
                slotToElicit,
                message
            }
      }
}