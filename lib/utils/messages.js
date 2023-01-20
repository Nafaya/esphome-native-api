const pb = require('../protoc/api_pb');
const { varuint_to_bytes, recv_varuint } = require('./index');

const id_to_type =
{
    1: 'HelloRequest',
    2: 'HelloResponse',
    3: 'ConnectRequest',
    4: 'ConnectResponse',
    5: 'DisconnectRequest',
    6: 'DisconnectResponse',
    7: 'PingRequest',
    8: 'PingResponse',
    9: 'DeviceInfoRequest',
    10: 'DeviceInfoResponse',
    11: 'ListEntitiesRequest',
    12: 'ListEntitiesBinarySensorResponse',
    13: 'ListEntitiesCoverResponse',
    14: 'ListEntitiesFanResponse',
    15: 'ListEntitiesLightResponse',
    16: 'ListEntitiesSensorResponse',
    17: 'ListEntitiesSwitchResponse',
    18: 'ListEntitiesTextSensorResponse',
    19: 'ListEntitiesDoneResponse',
    20: 'SubscribeStatesRequest',
    21: 'BinarySensorStateResponse',
    22: 'CoverStateResponse',
    23: 'FanStateResponse',
    24: 'LightStateResponse',
    25: 'SensorStateResponse',
    26: 'SwitchStateResponse',
    27: 'TextSensorStateResponse',
    28: 'SubscribeLogsRequest',
    29: 'SubscribeLogsResponse',
    30: 'CoverCommandRequest',
    31: 'FanCommandRequest',
    32: 'LightCommandRequest',
    33: 'SwitchCommandRequest',
    34: 'SubscribeHomeassistantServicesRequest',
    35: 'HomeassistantServiceResponse',
    36: 'GetTimeRequest',
    37: 'GetTimeResponse',
    38: 'SubscribeHomeAssistantStatesRequest',
    39: 'SubscribeHomeAssistantStateResponse',
    40: 'HomeAssistantStateResponse',
    41: 'ListEntitiesServicesResponse',
    42: 'ExecuteServiceRequest',
    43: 'ListEntitiesCameraResponse',
    44: 'CameraImageResponse',
    45: 'CameraImageRequest',
    46: 'ListEntitiesClimateResponse',
    47: 'ClimateStateResponse',
    48: 'ClimateCommandRequest',
    49: 'ListEntitiesNumberResponse',
    50: 'NumberStateResponse',
    51: 'NumberCommandRequest',
    52: 'ListEntitiesSelectResponse',
    53: 'SelectStateResponse',
    54: 'SelectCommandRequest',
    55: 'ListEntitiesSirenResponse',
    56: 'SirenStateResponse',
    57: 'SirenCommandRequest',
    58: 'ListEntitiesLockResponse',
    59: 'LockStateResponse',
    60: 'LockCommandRequest',
    61: 'ListEntitiesButtonResponse',
    62: 'ButtonCommandRequest',
    63: 'ListEntitiesMediaPlayerResponse',
    64: 'MediaPlayerStateResponse',
    65: 'MediaPlayerCommandRequest',
    66: 'SubscribeBluetoothLEAdvertisementsRequest',
    67: 'BluetoothLEAdvertisementResponse',
    68: 'BluetoothDeviceRequest',
    69: 'BluetoothDeviceConnectionResponse',
    70: 'BluetoothGATTGetServicesRequest',
    71: 'BluetoothGATTGetServicesResponse',
    72: 'BluetoothGATTGetServicesDoneResponse',
    73: 'BluetoothGATTReadRequest',
    74: 'BluetoothGATTReadResponse',
    75: 'BluetoothGATTWriteRequest',
    76: 'BluetoothGATTReadDescriptorRequest',
    77: 'BluetoothGATTWriteDescriptorRequest',
    78: 'BluetoothGATTNotifyRequest',
    79: 'BluetoothGATTNotifyDataResponse',
    80: 'SubscribeBluetoothConnectionsFreeRequest',
    81: 'BluetoothConnectionsFreeResponse',
    82: 'BluetoothGATTErrorResponse',
    83: 'BluetoothGATTWriteResponse',
    84: 'BluetoothGATTNotifyResponse'
}
const type_to_id = Object.fromEntries(Object.entries(id_to_type).map(([k, v]) => [v, k]));

for(const [ id, type ] of Object.entries(id_to_type)){
    pb[type].type = type;
    pb[type].id = id;
}

module.exports = {
    id_to_type,
    type_to_id,
    serialize(message) {
        const encoded = message.serializeBinary();
        return Buffer.from([
            0,
            ...varuint_to_bytes(encoded.length),
            ...varuint_to_bytes(message.constructor.id),
            ...encoded
        ]);
    },
    deserialize(buffer) {
        if (buffer.length < 3) return null;
        let offset = 0;
        const next = () => {
            if (offset >= buffer.length) return null;
            return buffer[offset++];
        }
        const t =next();
        if (t !== 0) throw new Error('Bad format. Expected 0 at the begin');

        const message_length = recv_varuint(next);
        if (message_length === null) return null;
        const message_id = recv_varuint(next);
        if (message_id === null) return null;
        if (message_length + offset > buffer.length) return null;
        // else if(message_length + offset < buffer.length) throw new Error(`Bad format. Expected buffer length = ${message_length + offset}. Received ${buffer.length}`);
        const message = pb[id_to_type[message_id]].deserializeBinary(buffer.slice(offset, message_length + offset));
        message.length = message_length + offset;
        return message;
    },
    pb
}