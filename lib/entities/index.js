const EntitiesList = [
    require('./BinarySensor'),
    require('./Button'),
    require('./Camera'),
    require('./Climate'),
    require('./Cover'),
    require('./Fan'),
    require('./Light'),
    require('./Lock'),
    require('./Number'),
    require('./Select'),
    require('./Sensor'),
    require('./Siren'),
    require('./Switch'),
    require('./TextSensor')
]

const Entities = Object.fromEntries(EntitiesList.map(v => [v.name, v]));

module.exports = {
    create(entityClassName, data) {
        const EntityClass = Entities[entityClassName];
        if (!EntityClass) throw new Error(`entity ${entityClassName} not supported`);
        return new EntityClass(data);
    },
    Entities
}