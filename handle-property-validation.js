
const propertyCategoryList = require('./property-types').propertyCategoryList;
const propertyCategoryType = require('./property-types').propertyCategory;
const residentialUnitList = require('./property-types').residentialUnitList
const residentialUnitType = require('./property-types').residentialUnit;

module.exports=(slots)=> { 
    const ownershipType = slots.ownershipType;
    const propertyCategory = slots.propertyCategory;
    const propertyType = slots.propertyType;
    const city = slots.city;

    if(propertyCategory && propertyCategoryList.indexOf(propertyCategory.toLowerCase())===-1) {
        const options = getOptions('Select a category',propertyCategoryList);
        return createValidationResult(false,'propertyCategory',`We do have not ${propertyCategory} category, could you choose from the available options? `, options);
    }

    if(propertyCategory && propertyCategory.toLowerCase()===propertyCategoryType.residentialUnits.toLowerCase()) {
           if(propertyType && residentialUnitList.indexOf(propertyType.toLowerCase())===-1) {
             const options = getOptions('Select a category',residentialUnitList);
             return createValidationResult(false,'propertyType',`We do not have ${propertyType}, could your select from our available options?`, options);
           }
    }
    
    return createValidationResult(true,null,null);
    function getOptions(title) {
        return {
            title
        }
    }

    function createValidationResult(isValid, violatedSlot,message, options) {
        if(message==null) {
            console.log('--validation res no message')
           return {
            isValid, 
            violatedSlot
         //   options
           }
        }
        console.log('--validation res with message')
        return {
            isValid, 
            violatedSlot,
            message: {contentType: 'PlainText', content: message} ,
            options
        }
    }
}