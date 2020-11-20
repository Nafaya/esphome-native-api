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
    host: 'esp host or ip>',
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

### Logging
```javascript
const { Client } = require('esphome-native-api');
const client = new Client({
    host: 'esp host or ip>',
    port: 6053,
    initializeSubscribeLogs: true
});
client.on('logs', ({ message }) => {
    console.log(message);
})
```