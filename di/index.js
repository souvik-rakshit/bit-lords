const {createContainer, asValue, asClass, InjectionMode, Lifetime} = require('awilix');
const NodeCache = require("node-cache");

function getScope() {
    return {lifetime: Lifetime.SINGLETON};
}

const container = createContainer({injectionMode: InjectionMode.CLASSIC});

container.register({
    inMemoryCacheClient: asValue(new NodeCache()),
    inMemDb: asValue(require('../in-mem-db.json'))
});

container.register('category', asClass(require('../api/category'), getScope()));
container.register('seller', asClass(require('../api/seller'), getScope()));

module.exports = container;
