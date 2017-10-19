var engine = require('../src/store-engine')

var storages = [
	require('../storages/localStorage'), 
	require('../storages/sessionStorage'), 
	require('../storages/cookieStorage'), 
	require('../storages/memoryStorage'),
]
var plugins = [
	require('../plugins/operations')
]

module.exports = engine.createStore(storages, plugins)
