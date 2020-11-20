const EntitiesList = [
    require('./BinarySensor'),
    require('./Camera'),
    require('./Light'),
    require('./Climate'),
    require('./Cover'),
    require('./Fan'),
    require('./Light'),
    require('./Sensor'),
    require('./Switch'),
    require('./TextSensor')
]
    
const Entities = Object.fromEntries(EntitiesList.map(v => [v.name, v]));

module.exports = {
    create(entityName, data) {
        const EntityClass = Entities[entityName];
        if (!EntityClass) throw new Error(`entity ${entityName} not supported`);
        return new EntityClass(data);
    },
    Entities
}