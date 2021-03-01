![Publish](https://github.com/Nafaya/esphome-native-api/workflows/Publish%20npm%20package/badge.svg)
![Test](https://github.com/Nafaya/esphome-native-api/workflows/Test/badge.svg?branch=main)

# Esphome native api
This library implements client for [Esphome Native APi](https://esphome.io/components/api.html).

## Installation

```bash
$ npm i esphome-native-api
```
## Synopsis
### Device info and list entities
```javascript
const { Client } = require('esphome-native-api');
const client = new Client({
    host: '<esp host or ip>',
    port: 6053
});
client.on('deviceInfo', deviceInfo => {
    console.log('Device info:', deviceInfo);
});
client.on('newEntity', entity => {
    console.log('New entity:', entity);

    // enable light
    if (entity.name === 'Light') {
        entity.setState(true);
    }
});
```

### Discovery
```javascript
const { Discovery } = require('esphome-native-api');
Discovery().then(results => {
    console.log(results);
    /*
    [
        {
        mac: '240ac45eebd4',
        host: 'esp32_binary_fan.local',
        version: '1.16.1',
        address: '192.168.0.144',
        family: 'IPv4'
        }
    ]
    */
});
```

```javascript
const { Discovery } = require('esphome-native-api');
const discovery = new Discovery();
discovery.on('info', console.log);
/*
{
    mac: '240ac45eebd4',
    host: 'esp32_binary_fan.local',
    version: '1.16.1',
    address: '192.168.0.144',
    family: 'IPv4'
}
*/
discovery.run();
```

### Logging
```javascript
const { Client } = require('esphome-native-api');
const client = new Client({
    host: '<esp host or ip>',
    port: 6053,
    initializeSubscribeLogs: true
});
client.on('logs', ({ message }) => {
    console.log(message);
});
```
## Documantation

### Discovery

```
const { Discovery } = require('esphome-native-api');
const discovery = new Discovery(options);
```
`options` - optional
    `multicast` - optional. Default - `true`. Use udp multicasting
    `interface` - optional. Explicitly specify a network interface.  defaults to all
    `port` - optional. Default - `5353`. Set the udp port
    `ip` - optional. Default - `224.0.0.251`. Set the udp ip
    `ttl` - optional. Default - `255`. Set the multicast ttl
    `loopback` - optional. Default - `true`. Receive your own packets
    `reuseAddr` - optional. Default - `true`. Set the reuseAddr option when creating the socket (requires node >=0.11.13)
    
```

const { Discovery } = require('esphome-native-api');
Discovery(options).then(console.log)
```
`options` - optional
    `timeout` - optional. Default - `5`. Time in seconds how long to wait for responses
    `*` - all options above



### Client
More frienly layer over the [Connection](#Connection)
```javascript
const { Client } = require('esphome-native-api');
const client = new Client({
    clearSession = false,
    initializeDeviceInfo = true,
    initializeListEntities = true,
    initializeSubscribeStates = true,
    initializeSubscribeLogs = false,
    port = 6053,
    host,
    clientInfo = 'esphomenativeapi',
    password = '',
    reconnect = true,
    reconnectInterval = 30000,
    pingInterval = 15000,
    pingAttempts = 3
});
```

- `host` - (REQUIRED). Host or ip to connect to.
- `port` - optional.  Default - `6053`. Port to connect to.
- `password` - passsword. Default - `''`. Password used to authorized the client
- `reconnect` - optional. Default - `true`. indicates wheter reconnect automatically or not
- `reconnectInterval` - optional. Default - `30000`. Number. Amount of miliseconds to wait before new try
- `clearSession` - optional. Default - `true`. Set `true` to forget any information after reconnection
- `initializeDeviceInfo` - optional. Default - `true`. Set `true` to retrieve device info after connection is established
- `initializeListEntities` - optional. Default - `true`. Set `true` to retrieve list of device's entities after connection is established
- `initializeSubscribeStates` - optional. Default - `true`.
- `initializeSubscribeLogs` - optional. Default - `false`.
- `clientInfo` - string, name of client to be sent to esphome device. (Not necessary to send but nice for debugging issues)
- `clientInfo` - string, name of client to be sent to esphome device. Usually needed only for tracking connection on esphome device. See [Connection](#Connection)
- `pingInterval` - optional. Default - `15000`. Ping interval. Amount of miliseconds. See [Connection](#Connection)
- `pingAttempts` - optional. Default - `3`. Number of failed ping attempts after witch connection is considered to be corrupted. See [Connection](#Connection)


### Client methods and attributes
- `connect()` - starts client
- `disconnect()` - srops client
- `connected` - indicates if client is connected to esphome and autorized
- `initialized` - indicates if client is connected and autorized and all initialization step are done
- `entities` - array of discovered [entities](#Entities)
- `connection` - connection instance

### Client events
- `connected` - emmited if client is connected to esphome and autorized
- `disconnected` - emmited when connection is corrupted
- `initialized` - emmited if client is connected and autorized and all initialization step are done
- `deviceInfo` - emmited when deviceInfo is retrieved or updated. Activated with `initializeDeviceInfo` options passed to `Client`'s constructor.
- `newEntity` - emmited when new entity is discovered. Activated with `initializeListEntities` options passed to `Client`'s constructor. First argument is instance of one of [entities](#Entities) class
- `logs` - emmited when esphome send any logs. Activated with `initializeSubscribeLogs` options passed to `Client`'s constructor. First argument is object with `level`, `tag`, `message`, `send_failed`
- `error` - emitted when any error occurs

### Entities
Each entity class defines individual interaction with esphome components.
All entities have 
- `config`attrubute - entity configuration receved from esphome
- `state` event when new state is received
- `state` attribute
- `destroyed` event which is called when corresponfing client is no longer connection to this entity(See `clearSession` option) and
- `name` attribute equal to name of entity


#### Binary sensor
Only base functionality
#### Camera
#### Climate
#### Cover
#### Fan
#### Light
#### Sensor
Only base functionality
#### Switch
#### TestSensor
Only base functionality


### Connection
```javascript
const { Connection } = require('esphome-native-api');
const connection = new Connection({
    port = 6053,
    host,
    clientInfo = 'esphomenativeapi',
    password = '',
    reconnect = true,
    reconnectInterval = 30000,
    pingInterval = 15000,
    pingAttempts = 3
});
```
- `host` - (REQUIRED). Host or ip to connect to.
- `port` - optional.  Default - `6053`. Port to connect to.
- `password` - passsword. Default - `''`. Password used to authorized the client
- `reconnect` - optional. Default - `true`. indicates wheter reconnect automatically or not
- `reconnectInterval` - optional. Default - `30000`. Number. Amount of miliseconds to wait before new try
- `clientInfo` - string, name of client to be sent to esphome device. (Not necessary to send but nice for debugging issues)
- `clientInfo` - string, name of client to be sent to esphome device. Usually needed only for tracking connection on esphome device.
- `pingInterval` - optional. Default - `15000`. Ping interval. Amount of miliseconds.
- `pingAttempts` - optional. Default - `3`. Number of failed ping attempts after witch connection is considered to be corrupted.

#### Methods and attributes
- `socketConnected` - `true` if socket is connected but no 
- `connected` - `true` if client is introduced to esphome device
- `authorized` - `true` if client is logged in esphome device
- `connecting`
- `reconnecting`
- `disconnecting`
- `connect()` - do connection try
- `connect()` - do connection try
- `disconnect()` - close connection
- `async deviceInfoService()` - subsribes to entities state changes. Returns device info object
- `async getTimeService()` - subsribes to entities state changes. Returns time object
- `async listEntitiesService()` - subsribes to entities state changes. Returns entities list
- `async subscribeStatesService()` - subsribes to entities state changes
- `async subscribeLogsService(level = 3, dumpConfig = false)` - subsribes to logs. Params:
    - `level` - logs level. 0 - NONE, 1 - ERROR, 2 - WARN, 3 - INFO, 4 - DEBUG, 5 - DEBUG, 6 - VERBOSE, 7 - VERY_VERBOSE
    - `dumpConfig`
- `async cameraImageService(single = true, stream = false)` - requests camera image. Params:
    - `single`
    - `stream`
- `async coverCommandService({ key, legacyCommand, position, tilt, stop })` - sends command to cover entity. Params:
    - `key` - REQUIRED. key/id of entity
    - `legacyCommand` - optional. 0 - OPEN, 1 - CLOSE, 2 - STOP
    - `position` - optional. integer
    - `tilt` - optional. integer
    - `stop` - optional. boolean
- `async lightCommandService({ key, state, brightness, red, green, blue, white, colorTemperature, transitionLength, flashLength, effect })` - sends command to light entity. Params:
    - `key` - REQUIRED. key/id of entity
    - `state` - optional. boolean
    - `brightness` - optional. integer
    - `red` - optional. integer 0-255
    - `green` - optional. integer 0-255
    - `blue` - optional. integer 0-255
    - `white` - optional. integer 0-255
    - `colorTemperature` - optional. integer
    - `flashLength` - optional. integer
    - `effect` - optional. effect from effects array in config list
- `async switchCommandService({ key, state })` - sends command to switch entity
Params:
    - `key` - REQUIRED. key/id of entity
    - `state` - optional. boolean
- `async climateCommandService({ key, mode, targetTemperature, targetTemperatureLow, targetTemperatureHigh, away, fanMode, swingMode })` - sends command to climate entity
Params:
    - `key` - REQUIRED. key/id of entity
    - `mode` - optional. 0 - OFF, 1 - AUTO, 2 - COOL, 3 - HEAT, 4 - FAN_ONLY, 5 - DRY.  See `supported_modes` attr in config
    - `targetTemperature`- optional. float
    - `targetTemperatureLow`- optional. float
    - `targetTemperatureHigh`- optional. float
    - `away` - optional. Boolean
    - `fanMode` - optional. 0 - ON, 1 - OFF, 2 - AUTO, 3 - LOW, 4 - MEDIUM, 5 - HIGH, 6 - MIDDLE, 7 - FOCUS, 8 - DIFFUSE. See `supported_fan_modes` attr in config
    - `swingMode` - optional. 0 - OFF, 1 - BOTH, 2 - VERTICAL, 3 - HORIZONTAL. See `supported_swing_modes` attr in config

#### Connection events
- `message.<type>` - when valid message from esphome device is received. First arg is message. The event is called before `message` event(more genetal analogue)
- `message` - when valid message from esphome device is received. First arg is type, second is message.
- `socketConnected` - emmited when socket is connected
- `socketDisconnected` - emmited when socket is disconnected
- `connected` - emmited if client is introduced to esphome device
- `disconnected` - emmited if session is corruptred
- `authorized` - emmited if client is logged in esphome device
- `unauthorized` - emmited if session is corruptred
- `data` - when any data is received
- `error` - when any error is occured
- `unhandledData` - when data is received, but an error occured and we have unprocessed data


#### Connection events
- `message.<type>` - when valid message from esphome device is received. First arg is message. The event is called before `message` event(more genetal analogue)
- `message` - when valid message from esphome device is received. First arg is type, second is message.
- `socketConnected` - emmited when socket is connected
- `socketDisconnected` - emmited when socket is disconnected
- `connected` - emmited if client is introduced to esphome device
- `disconnected` - emmited if session is corruptred
- `authorized` - emmited if client is logged in esphome device
- `unauthorized` - emmited if session is corruptred
- `data` - when any data is received
- `error` - when any error is occured
- `unhandledData` - when data is received, but an error occured and we have unprocessed data
