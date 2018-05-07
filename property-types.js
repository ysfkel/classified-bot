const propertyCategory= {
    residentialUnits: 'residential units',
    plot: 'plot',
    commercialUnits:'commercial units',
    bulkUnits: 'bulk units',
    land: 'land'
}

const residentialUnit= {
    townhouse:'townhouse',
    penthouse: 'penthouse',
    villa: 'villa',
    flat: 'flat',
    bungalow: 'bungalow',
    apartment: 'apartment',
    duplex: 'duplex'
}

module.exports.propertyCategory= propertyCategory;

module.exports.residentialUnit=residentialUnit;

module.exports.propertyCategoryList=[
    propertyCategory.residentialUnits,
    propertyCategory.plot,
    propertyCategory.commercialUnits,
    propertyCategory.bulkUnits,
    propertyCategory.land
]


module.exports.residentialUnitList=[
    residentialUnit.townhouse,
    residentialUnit.penthouse,
    residentialUnit.villa,
    residentialUnit.flat,
    residentialUnit.bungalow,
    residentialUnit.apartment,
    residentialUnit.duplex
]
