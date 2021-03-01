const Connection = require('./lib/connection');
const Client = require('./lib/client');
const Discovery = require('./lib/discovery');

module.exports = {
    Connection,
    Client,
    Discovery,
    discovery: Discovery
}