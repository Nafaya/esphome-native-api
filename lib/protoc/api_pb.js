// source: api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var api_options_pb = require('./api_options_pb.js');
goog.object.extend(proto, api_options_pb);
goog.exportSymbol('proto.BinarySensorStateResponse', null, global);
goog.exportSymbol('proto.ButtonCommandRequest', null, global);
goog.exportSymbol('proto.CameraImageRequest', null, global);
goog.exportSymbol('proto.CameraImageResponse', null, global);
goog.exportSymbol('proto.ClimateAction', null, global);
goog.exportSymbol('proto.ClimateCommandRequest', null, global);
goog.exportSymbol('proto.ClimateFanMode', null, global);
goog.exportSymbol('proto.ClimateMode', null, global);
goog.exportSymbol('proto.ClimatePreset', null, global);
goog.exportSymbol('proto.ClimateStateResponse', null, global);
goog.exportSymbol('proto.ClimateSwingMode', null, global);
goog.exportSymbol('proto.ColorMode', null, global);
goog.exportSymbol('proto.ConnectRequest', null, global);
goog.exportSymbol('proto.ConnectResponse', null, global);
goog.exportSymbol('proto.CoverCommandRequest', null, global);
goog.exportSymbol('proto.CoverOperation', null, global);
goog.exportSymbol('proto.CoverStateResponse', null, global);
goog.exportSymbol('proto.DeviceInfoRequest', null, global);
goog.exportSymbol('proto.DeviceInfoResponse', null, global);
goog.exportSymbol('proto.DisconnectRequest', null, global);
goog.exportSymbol('proto.DisconnectResponse', null, global);
goog.exportSymbol('proto.EntityCategory', null, global);
goog.exportSymbol('proto.ExecuteServiceArgument', null, global);
goog.exportSymbol('proto.ExecuteServiceRequest', null, global);
goog.exportSymbol('proto.FanCommandRequest', null, global);
goog.exportSymbol('proto.FanDirection', null, global);
goog.exportSymbol('proto.FanSpeed', null, global);
goog.exportSymbol('proto.FanStateResponse', null, global);
goog.exportSymbol('proto.GetTimeRequest', null, global);
goog.exportSymbol('proto.GetTimeResponse', null, global);
goog.exportSymbol('proto.HelloRequest', null, global);
goog.exportSymbol('proto.HelloResponse', null, global);
goog.exportSymbol('proto.HomeAssistantStateResponse', null, global);
goog.exportSymbol('proto.HomeassistantServiceMap', null, global);
goog.exportSymbol('proto.HomeassistantServiceResponse', null, global);
goog.exportSymbol('proto.LegacyCoverCommand', null, global);
goog.exportSymbol('proto.LegacyCoverState', null, global);
goog.exportSymbol('proto.LightCommandRequest', null, global);
goog.exportSymbol('proto.LightStateResponse', null, global);
goog.exportSymbol('proto.ListEntitiesBinarySensorResponse', null, global);
goog.exportSymbol('proto.ListEntitiesButtonResponse', null, global);
goog.exportSymbol('proto.ListEntitiesCameraResponse', null, global);
goog.exportSymbol('proto.ListEntitiesClimateResponse', null, global);
goog.exportSymbol('proto.ListEntitiesCoverResponse', null, global);
goog.exportSymbol('proto.ListEntitiesDoneResponse', null, global);
goog.exportSymbol('proto.ListEntitiesFanResponse', null, global);
goog.exportSymbol('proto.ListEntitiesLightResponse', null, global);
goog.exportSymbol('proto.ListEntitiesLockResponse', null, global);
goog.exportSymbol('proto.ListEntitiesNumberResponse', null, global);
goog.exportSymbol('proto.ListEntitiesRequest', null, global);
goog.exportSymbol('proto.ListEntitiesSelectResponse', null, global);
goog.exportSymbol('proto.ListEntitiesSensorResponse', null, global);
goog.exportSymbol('proto.ListEntitiesServicesArgument', null, global);
goog.exportSymbol('proto.ListEntitiesServicesResponse', null, global);
goog.exportSymbol('proto.ListEntitiesSwitchResponse', null, global);
goog.exportSymbol('proto.ListEntitiesTextSensorResponse', null, global);
goog.exportSymbol('proto.LockCommand', null, global);
goog.exportSymbol('proto.LockCommandRequest', null, global);
goog.exportSymbol('proto.LockState', null, global);
goog.exportSymbol('proto.LockStateResponse', null, global);
goog.exportSymbol('proto.LogLevel', null, global);
goog.exportSymbol('proto.NumberCommandRequest', null, global);
goog.exportSymbol('proto.NumberMode', null, global);
goog.exportSymbol('proto.NumberStateResponse', null, global);
goog.exportSymbol('proto.PingRequest', null, global);
goog.exportSymbol('proto.PingResponse', null, global);
goog.exportSymbol('proto.SelectCommandRequest', null, global);
goog.exportSymbol('proto.SelectStateResponse', null, global);
goog.exportSymbol('proto.SensorLastResetType', null, global);
goog.exportSymbol('proto.SensorStateClass', null, global);
goog.exportSymbol('proto.SensorStateResponse', null, global);
goog.exportSymbol('proto.ServiceArgType', null, global);
goog.exportSymbol('proto.SubscribeHomeAssistantStateResponse', null, global);
goog.exportSymbol('proto.SubscribeHomeAssistantStatesRequest', null, global);
goog.exportSymbol('proto.SubscribeHomeassistantServicesRequest', null, global);
goog.exportSymbol('proto.SubscribeLogsRequest', null, global);
goog.exportSymbol('proto.SubscribeLogsResponse', null, global);
goog.exportSymbol('proto.SubscribeStatesRequest', null, global);
goog.exportSymbol('proto.SwitchCommandRequest', null, global);
goog.exportSymbol('proto.SwitchStateResponse', null, global);
goog.exportSymbol('proto.TextSensorStateResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HelloRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HelloRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HelloRequest.displayName = 'proto.HelloRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HelloResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HelloResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HelloResponse.displayName = 'proto.HelloResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConnectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConnectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConnectRequest.displayName = 'proto.ConnectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ConnectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ConnectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ConnectResponse.displayName = 'proto.ConnectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DisconnectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DisconnectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DisconnectRequest.displayName = 'proto.DisconnectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DisconnectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DisconnectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DisconnectResponse.displayName = 'proto.DisconnectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PingRequest.displayName = 'proto.PingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PingResponse.displayName = 'proto.PingResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceInfoRequest.displayName = 'proto.DeviceInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeviceInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeviceInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeviceInfoResponse.displayName = 'proto.DeviceInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesRequest.displayName = 'proto.ListEntitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesDoneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesDoneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesDoneResponse.displayName = 'proto.ListEntitiesDoneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeStatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeStatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeStatesRequest.displayName = 'proto.SubscribeStatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesBinarySensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesBinarySensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesBinarySensorResponse.displayName = 'proto.ListEntitiesBinarySensorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BinarySensorStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BinarySensorStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BinarySensorStateResponse.displayName = 'proto.BinarySensorStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesCoverResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesCoverResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesCoverResponse.displayName = 'proto.ListEntitiesCoverResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CoverStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CoverStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CoverStateResponse.displayName = 'proto.CoverStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CoverCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CoverCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CoverCommandRequest.displayName = 'proto.CoverCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesFanResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesFanResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesFanResponse.displayName = 'proto.ListEntitiesFanResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FanStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FanStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FanStateResponse.displayName = 'proto.FanStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FanCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FanCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FanCommandRequest.displayName = 'proto.FanCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesLightResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListEntitiesLightResponse.repeatedFields_, null);
};
goog.inherits(proto.ListEntitiesLightResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesLightResponse.displayName = 'proto.ListEntitiesLightResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LightStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LightStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LightStateResponse.displayName = 'proto.LightStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LightCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LightCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LightCommandRequest.displayName = 'proto.LightCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesSensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesSensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesSensorResponse.displayName = 'proto.ListEntitiesSensorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SensorStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SensorStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SensorStateResponse.displayName = 'proto.SensorStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesSwitchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesSwitchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesSwitchResponse.displayName = 'proto.ListEntitiesSwitchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SwitchStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwitchStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SwitchStateResponse.displayName = 'proto.SwitchStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SwitchCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SwitchCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SwitchCommandRequest.displayName = 'proto.SwitchCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesTextSensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesTextSensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesTextSensorResponse.displayName = 'proto.ListEntitiesTextSensorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TextSensorStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TextSensorStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TextSensorStateResponse.displayName = 'proto.TextSensorStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeLogsRequest.displayName = 'proto.SubscribeLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeLogsResponse.displayName = 'proto.SubscribeLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeHomeassistantServicesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeHomeassistantServicesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeHomeassistantServicesRequest.displayName = 'proto.SubscribeHomeassistantServicesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HomeassistantServiceMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HomeassistantServiceMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HomeassistantServiceMap.displayName = 'proto.HomeassistantServiceMap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HomeassistantServiceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.HomeassistantServiceResponse.repeatedFields_, null);
};
goog.inherits(proto.HomeassistantServiceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HomeassistantServiceResponse.displayName = 'proto.HomeassistantServiceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeHomeAssistantStatesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeHomeAssistantStatesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeHomeAssistantStatesRequest.displayName = 'proto.SubscribeHomeAssistantStatesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeHomeAssistantStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeHomeAssistantStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeHomeAssistantStateResponse.displayName = 'proto.SubscribeHomeAssistantStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.HomeAssistantStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.HomeAssistantStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.HomeAssistantStateResponse.displayName = 'proto.HomeAssistantStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetTimeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetTimeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetTimeRequest.displayName = 'proto.GetTimeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetTimeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetTimeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetTimeResponse.displayName = 'proto.GetTimeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesServicesArgument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesServicesArgument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesServicesArgument.displayName = 'proto.ListEntitiesServicesArgument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesServicesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListEntitiesServicesResponse.repeatedFields_, null);
};
goog.inherits(proto.ListEntitiesServicesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesServicesResponse.displayName = 'proto.ListEntitiesServicesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteServiceArgument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ExecuteServiceArgument.repeatedFields_, null);
};
goog.inherits(proto.ExecuteServiceArgument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteServiceArgument.displayName = 'proto.ExecuteServiceArgument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExecuteServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ExecuteServiceRequest.repeatedFields_, null);
};
goog.inherits(proto.ExecuteServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExecuteServiceRequest.displayName = 'proto.ExecuteServiceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesCameraResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesCameraResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesCameraResponse.displayName = 'proto.ListEntitiesCameraResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CameraImageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CameraImageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CameraImageResponse.displayName = 'proto.CameraImageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CameraImageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CameraImageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CameraImageRequest.displayName = 'proto.CameraImageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesClimateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListEntitiesClimateResponse.repeatedFields_, null);
};
goog.inherits(proto.ListEntitiesClimateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesClimateResponse.displayName = 'proto.ListEntitiesClimateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClimateStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClimateStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClimateStateResponse.displayName = 'proto.ClimateStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClimateCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ClimateCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClimateCommandRequest.displayName = 'proto.ClimateCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesNumberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesNumberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesNumberResponse.displayName = 'proto.ListEntitiesNumberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NumberStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NumberStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NumberStateResponse.displayName = 'proto.NumberStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NumberCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NumberCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NumberCommandRequest.displayName = 'proto.NumberCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesSelectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListEntitiesSelectResponse.repeatedFields_, null);
};
goog.inherits(proto.ListEntitiesSelectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesSelectResponse.displayName = 'proto.ListEntitiesSelectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SelectStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SelectStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SelectStateResponse.displayName = 'proto.SelectStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SelectCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SelectCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SelectCommandRequest.displayName = 'proto.SelectCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesLockResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesLockResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesLockResponse.displayName = 'proto.ListEntitiesLockResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LockStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LockStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LockStateResponse.displayName = 'proto.LockStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LockCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LockCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LockCommandRequest.displayName = 'proto.LockCommandRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListEntitiesButtonResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListEntitiesButtonResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListEntitiesButtonResponse.displayName = 'proto.ListEntitiesButtonResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ButtonCommandRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ButtonCommandRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ButtonCommandRequest.displayName = 'proto.ButtonCommandRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HelloRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.HelloRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HelloRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HelloRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientInfo: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HelloRequest}
 */
proto.HelloRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HelloRequest;
  return proto.HelloRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HelloRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HelloRequest}
 */
proto.HelloRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HelloRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HelloRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HelloRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HelloRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientInfo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string client_info = 1;
 * @return {string}
 */
proto.HelloRequest.prototype.getClientInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HelloRequest} returns this
 */
proto.HelloRequest.prototype.setClientInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HelloResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.HelloResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HelloResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HelloResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiVersionMajor: jspb.Message.getFieldWithDefault(msg, 1, 0),
    apiVersionMinor: jspb.Message.getFieldWithDefault(msg, 2, 0),
    serverInfo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HelloResponse}
 */
proto.HelloResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HelloResponse;
  return proto.HelloResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HelloResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HelloResponse}
 */
proto.HelloResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApiVersionMajor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApiVersionMinor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerInfo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HelloResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HelloResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HelloResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HelloResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiVersionMajor();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getApiVersionMinor();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getServerInfo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint32 api_version_major = 1;
 * @return {number}
 */
proto.HelloResponse.prototype.getApiVersionMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.HelloResponse} returns this
 */
proto.HelloResponse.prototype.setApiVersionMajor = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 api_version_minor = 2;
 * @return {number}
 */
proto.HelloResponse.prototype.getApiVersionMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.HelloResponse} returns this
 */
proto.HelloResponse.prototype.setApiVersionMinor = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string server_info = 3;
 * @return {string}
 */
proto.HelloResponse.prototype.getServerInfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.HelloResponse} returns this
 */
proto.HelloResponse.prototype.setServerInfo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.HelloResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.HelloResponse} returns this
 */
proto.HelloResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConnectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ConnectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConnectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConnectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    password: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConnectRequest}
 */
proto.ConnectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConnectRequest;
  return proto.ConnectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConnectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConnectRequest}
 */
proto.ConnectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConnectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConnectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConnectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConnectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string password = 1;
 * @return {string}
 */
proto.ConnectRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ConnectRequest} returns this
 */
proto.ConnectRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ConnectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ConnectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ConnectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConnectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invalidPassword: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ConnectResponse}
 */
proto.ConnectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ConnectResponse;
  return proto.ConnectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ConnectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ConnectResponse}
 */
proto.ConnectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInvalidPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ConnectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ConnectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ConnectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ConnectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvalidPassword();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool invalid_password = 1;
 * @return {boolean}
 */
proto.ConnectResponse.prototype.getInvalidPassword = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ConnectResponse} returns this
 */
proto.ConnectResponse.prototype.setInvalidPassword = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DisconnectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DisconnectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DisconnectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DisconnectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DisconnectRequest}
 */
proto.DisconnectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DisconnectRequest;
  return proto.DisconnectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DisconnectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DisconnectRequest}
 */
proto.DisconnectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DisconnectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DisconnectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DisconnectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DisconnectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DisconnectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DisconnectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DisconnectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DisconnectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DisconnectResponse}
 */
proto.DisconnectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DisconnectResponse;
  return proto.DisconnectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DisconnectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DisconnectResponse}
 */
proto.DisconnectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DisconnectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DisconnectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DisconnectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DisconnectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.PingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PingRequest}
 */
proto.PingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PingRequest;
  return proto.PingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PingRequest}
 */
proto.PingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.PingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PingResponse}
 */
proto.PingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PingResponse;
  return proto.PingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PingResponse}
 */
proto.PingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceInfoRequest}
 */
proto.DeviceInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceInfoRequest;
  return proto.DeviceInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceInfoRequest}
 */
proto.DeviceInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeviceInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DeviceInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeviceInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usesPassword: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    macAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    esphomeVersion: jspb.Message.getFieldWithDefault(msg, 4, ""),
    compilationTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    model: jspb.Message.getFieldWithDefault(msg, 6, ""),
    hasDeepSleep: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    projectName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    projectVersion: jspb.Message.getFieldWithDefault(msg, 9, ""),
    webserverPort: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeviceInfoResponse}
 */
proto.DeviceInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeviceInfoResponse;
  return proto.DeviceInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeviceInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeviceInfoResponse}
 */
proto.DeviceInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUsesPassword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMacAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEsphomeVersion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompilationTime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDeepSleep(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectVersion(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWebserverPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeviceInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeviceInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeviceInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeviceInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsesPassword();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMacAddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEsphomeVersion();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCompilationTime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getHasDeepSleep();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getProjectName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getProjectVersion();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getWebserverPort();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional bool uses_password = 1;
 * @return {boolean}
 */
proto.DeviceInfoResponse.prototype.getUsesPassword = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setUsesPassword = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string mac_address = 3;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getMacAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setMacAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string esphome_version = 4;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getEsphomeVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setEsphomeVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string compilation_time = 5;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getCompilationTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setCompilationTime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string model = 6;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool has_deep_sleep = 7;
 * @return {boolean}
 */
proto.DeviceInfoResponse.prototype.getHasDeepSleep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setHasDeepSleep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string project_name = 8;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getProjectName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setProjectName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string project_version = 9;
 * @return {string}
 */
proto.DeviceInfoResponse.prototype.getProjectVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setProjectVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 webserver_port = 10;
 * @return {number}
 */
proto.DeviceInfoResponse.prototype.getWebserverPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeviceInfoResponse} returns this
 */
proto.DeviceInfoResponse.prototype.setWebserverPort = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesRequest}
 */
proto.ListEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesRequest;
  return proto.ListEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesRequest}
 */
proto.ListEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesDoneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesDoneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesDoneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesDoneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesDoneResponse}
 */
proto.ListEntitiesDoneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesDoneResponse;
  return proto.ListEntitiesDoneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesDoneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesDoneResponse}
 */
proto.ListEntitiesDoneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesDoneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesDoneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesDoneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesDoneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeStatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeStatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeStatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeStatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeStatesRequest}
 */
proto.SubscribeStatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeStatesRequest;
  return proto.SubscribeStatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeStatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeStatesRequest}
 */
proto.SubscribeStatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeStatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeStatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeStatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeStatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesBinarySensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesBinarySensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesBinarySensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesBinarySensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    deviceClass: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isStatusBinarySensor: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    icon: jspb.Message.getFieldWithDefault(msg, 8, ""),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesBinarySensorResponse}
 */
proto.ListEntitiesBinarySensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesBinarySensorResponse;
  return proto.ListEntitiesBinarySensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesBinarySensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesBinarySensorResponse}
 */
proto.ListEntitiesBinarySensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceClass(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStatusBinarySensor(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 9:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesBinarySensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesBinarySensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesBinarySensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesBinarySensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDeviceClass();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsStatusBinarySensor();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string device_class = 5;
 * @return {string}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getDeviceClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setDeviceClass = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_status_binary_sensor = 6;
 * @return {boolean}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getIsStatusBinarySensor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setIsStatusBinarySensor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool disabled_by_default = 7;
 * @return {boolean}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string icon = 8;
 * @return {string}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional EntityCategory entity_category = 9;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesBinarySensorResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesBinarySensorResponse} returns this
 */
proto.ListEntitiesBinarySensorResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BinarySensorStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.BinarySensorStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BinarySensorStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BinarySensorStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    missingState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BinarySensorStateResponse}
 */
proto.BinarySensorStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BinarySensorStateResponse;
  return proto.BinarySensorStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BinarySensorStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BinarySensorStateResponse}
 */
proto.BinarySensorStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissingState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BinarySensorStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BinarySensorStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BinarySensorStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BinarySensorStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMissingState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.BinarySensorStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.BinarySensorStateResponse} returns this
 */
proto.BinarySensorStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool state = 2;
 * @return {boolean}
 */
proto.BinarySensorStateResponse.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.BinarySensorStateResponse} returns this
 */
proto.BinarySensorStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool missing_state = 3;
 * @return {boolean}
 */
proto.BinarySensorStateResponse.prototype.getMissingState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.BinarySensorStateResponse} returns this
 */
proto.BinarySensorStateResponse.prototype.setMissingState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesCoverResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesCoverResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesCoverResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesCoverResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    assumedState: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    supportsPosition: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    supportsTilt: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    deviceClass: jspb.Message.getFieldWithDefault(msg, 8, ""),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    icon: jspb.Message.getFieldWithDefault(msg, 10, ""),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesCoverResponse}
 */
proto.ListEntitiesCoverResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesCoverResponse;
  return proto.ListEntitiesCoverResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesCoverResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesCoverResponse}
 */
proto.ListEntitiesCoverResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssumedState(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsPosition(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsTilt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceClass(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 11:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesCoverResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesCoverResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesCoverResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesCoverResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAssumedState();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSupportsPosition();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSupportsTilt();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDeviceClass();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesCoverResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesCoverResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesCoverResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesCoverResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool assumed_state = 5;
 * @return {boolean}
 */
proto.ListEntitiesCoverResponse.prototype.getAssumedState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setAssumedState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool supports_position = 6;
 * @return {boolean}
 */
proto.ListEntitiesCoverResponse.prototype.getSupportsPosition = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setSupportsPosition = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool supports_tilt = 7;
 * @return {boolean}
 */
proto.ListEntitiesCoverResponse.prototype.getSupportsTilt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setSupportsTilt = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string device_class = 8;
 * @return {string}
 */
proto.ListEntitiesCoverResponse.prototype.getDeviceClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setDeviceClass = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool disabled_by_default = 9;
 * @return {boolean}
 */
proto.ListEntitiesCoverResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string icon = 10;
 * @return {string}
 */
proto.ListEntitiesCoverResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional EntityCategory entity_category = 11;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesCoverResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesCoverResponse} returns this
 */
proto.ListEntitiesCoverResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CoverStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CoverStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CoverStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CoverStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    legacyState: jspb.Message.getFieldWithDefault(msg, 2, 0),
    position: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    tilt: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    currentOperation: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CoverStateResponse}
 */
proto.CoverStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CoverStateResponse;
  return proto.CoverStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CoverStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CoverStateResponse}
 */
proto.CoverStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.LegacyCoverState} */ (reader.readEnum());
      msg.setLegacyState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPosition(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTilt(value);
      break;
    case 5:
      var value = /** @type {!proto.CoverOperation} */ (reader.readEnum());
      msg.setCurrentOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CoverStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CoverStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CoverStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CoverStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getLegacyState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getTilt();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getCurrentOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.CoverStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CoverStateResponse} returns this
 */
proto.CoverStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional LegacyCoverState legacy_state = 2;
 * @return {!proto.LegacyCoverState}
 */
proto.CoverStateResponse.prototype.getLegacyState = function() {
  return /** @type {!proto.LegacyCoverState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.LegacyCoverState} value
 * @return {!proto.CoverStateResponse} returns this
 */
proto.CoverStateResponse.prototype.setLegacyState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional float position = 3;
 * @return {number}
 */
proto.CoverStateResponse.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CoverStateResponse} returns this
 */
proto.CoverStateResponse.prototype.setPosition = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float tilt = 4;
 * @return {number}
 */
proto.CoverStateResponse.prototype.getTilt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CoverStateResponse} returns this
 */
proto.CoverStateResponse.prototype.setTilt = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional CoverOperation current_operation = 5;
 * @return {!proto.CoverOperation}
 */
proto.CoverStateResponse.prototype.getCurrentOperation = function() {
  return /** @type {!proto.CoverOperation} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.CoverOperation} value
 * @return {!proto.CoverStateResponse} returns this
 */
proto.CoverStateResponse.prototype.setCurrentOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CoverCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CoverCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CoverCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CoverCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hasLegacyCommand: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    legacyCommand: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasPosition: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    position: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    hasTilt: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    tilt: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    stop: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CoverCommandRequest}
 */
proto.CoverCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CoverCommandRequest;
  return proto.CoverCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CoverCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CoverCommandRequest}
 */
proto.CoverCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLegacyCommand(value);
      break;
    case 3:
      var value = /** @type {!proto.LegacyCoverCommand} */ (reader.readEnum());
      msg.setLegacyCommand(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasPosition(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPosition(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasTilt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTilt(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CoverCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CoverCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CoverCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CoverCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getHasLegacyCommand();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLegacyCommand();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHasPosition();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHasTilt();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTilt();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getStop();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.CoverCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool has_legacy_command = 2;
 * @return {boolean}
 */
proto.CoverCommandRequest.prototype.getHasLegacyCommand = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setHasLegacyCommand = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional LegacyCoverCommand legacy_command = 3;
 * @return {!proto.LegacyCoverCommand}
 */
proto.CoverCommandRequest.prototype.getLegacyCommand = function() {
  return /** @type {!proto.LegacyCoverCommand} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.LegacyCoverCommand} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setLegacyCommand = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool has_position = 4;
 * @return {boolean}
 */
proto.CoverCommandRequest.prototype.getHasPosition = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setHasPosition = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional float position = 5;
 * @return {number}
 */
proto.CoverCommandRequest.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setPosition = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool has_tilt = 6;
 * @return {boolean}
 */
proto.CoverCommandRequest.prototype.getHasTilt = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setHasTilt = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional float tilt = 7;
 * @return {number}
 */
proto.CoverCommandRequest.prototype.getTilt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setTilt = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional bool stop = 8;
 * @return {boolean}
 */
proto.CoverCommandRequest.prototype.getStop = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CoverCommandRequest} returns this
 */
proto.CoverCommandRequest.prototype.setStop = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesFanResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesFanResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesFanResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesFanResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    supportsOscillation: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    supportsSpeed: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    supportsDirection: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    supportedSpeedCount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    icon: jspb.Message.getFieldWithDefault(msg, 10, ""),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesFanResponse}
 */
proto.ListEntitiesFanResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesFanResponse;
  return proto.ListEntitiesFanResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesFanResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesFanResponse}
 */
proto.ListEntitiesFanResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsOscillation(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsSpeed(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsDirection(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSupportedSpeedCount(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 11:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesFanResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesFanResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesFanResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesFanResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSupportsOscillation();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSupportsSpeed();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSupportsDirection();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSupportedSpeedCount();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesFanResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesFanResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesFanResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesFanResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool supports_oscillation = 5;
 * @return {boolean}
 */
proto.ListEntitiesFanResponse.prototype.getSupportsOscillation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setSupportsOscillation = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool supports_speed = 6;
 * @return {boolean}
 */
proto.ListEntitiesFanResponse.prototype.getSupportsSpeed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setSupportsSpeed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool supports_direction = 7;
 * @return {boolean}
 */
proto.ListEntitiesFanResponse.prototype.getSupportsDirection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setSupportsDirection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional int32 supported_speed_count = 8;
 * @return {number}
 */
proto.ListEntitiesFanResponse.prototype.getSupportedSpeedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setSupportedSpeedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool disabled_by_default = 9;
 * @return {boolean}
 */
proto.ListEntitiesFanResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string icon = 10;
 * @return {string}
 */
proto.ListEntitiesFanResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional EntityCategory entity_category = 11;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesFanResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesFanResponse} returns this
 */
proto.ListEntitiesFanResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FanStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.FanStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FanStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FanStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    oscillating: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    speed: jspb.Message.getFieldWithDefault(msg, 4, 0),
    direction: jspb.Message.getFieldWithDefault(msg, 5, 0),
    speedLevel: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FanStateResponse}
 */
proto.FanStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FanStateResponse;
  return proto.FanStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FanStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FanStateResponse}
 */
proto.FanStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOscillating(value);
      break;
    case 4:
      var value = /** @type {!proto.FanSpeed} */ (reader.readEnum());
      msg.setSpeed(value);
      break;
    case 5:
      var value = /** @type {!proto.FanDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeedLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FanStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FanStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FanStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FanStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getOscillating();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getSpeedLevel();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.FanStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FanStateResponse} returns this
 */
proto.FanStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool state = 2;
 * @return {boolean}
 */
proto.FanStateResponse.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanStateResponse} returns this
 */
proto.FanStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool oscillating = 3;
 * @return {boolean}
 */
proto.FanStateResponse.prototype.getOscillating = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanStateResponse} returns this
 */
proto.FanStateResponse.prototype.setOscillating = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional FanSpeed speed = 4;
 * @return {!proto.FanSpeed}
 */
proto.FanStateResponse.prototype.getSpeed = function() {
  return /** @type {!proto.FanSpeed} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.FanSpeed} value
 * @return {!proto.FanStateResponse} returns this
 */
proto.FanStateResponse.prototype.setSpeed = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional FanDirection direction = 5;
 * @return {!proto.FanDirection}
 */
proto.FanStateResponse.prototype.getDirection = function() {
  return /** @type {!proto.FanDirection} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.FanDirection} value
 * @return {!proto.FanStateResponse} returns this
 */
proto.FanStateResponse.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int32 speed_level = 6;
 * @return {number}
 */
proto.FanStateResponse.prototype.getSpeedLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.FanStateResponse} returns this
 */
proto.FanStateResponse.prototype.setSpeedLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FanCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.FanCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FanCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FanCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hasState: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    hasSpeed: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    speed: jspb.Message.getFieldWithDefault(msg, 5, 0),
    hasOscillating: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    oscillating: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    hasDirection: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    direction: jspb.Message.getFieldWithDefault(msg, 9, 0),
    hasSpeedLevel: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    speedLevel: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FanCommandRequest}
 */
proto.FanCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FanCommandRequest;
  return proto.FanCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FanCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FanCommandRequest}
 */
proto.FanCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSpeed(value);
      break;
    case 5:
      var value = /** @type {!proto.FanSpeed} */ (reader.readEnum());
      msg.setSpeed(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasOscillating(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOscillating(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDirection(value);
      break;
    case 9:
      var value = /** @type {!proto.FanDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSpeedLevel(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSpeedLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FanCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FanCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FanCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FanCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getHasState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHasSpeed();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getSpeed();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getHasOscillating();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getOscillating();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getHasDirection();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getHasSpeedLevel();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getSpeedLevel();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.FanCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool has_state = 2;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getHasState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setHasState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool state = 3;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool has_speed = 4;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getHasSpeed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setHasSpeed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional FanSpeed speed = 5;
 * @return {!proto.FanSpeed}
 */
proto.FanCommandRequest.prototype.getSpeed = function() {
  return /** @type {!proto.FanSpeed} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.FanSpeed} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setSpeed = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional bool has_oscillating = 6;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getHasOscillating = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setHasOscillating = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool oscillating = 7;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getOscillating = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setOscillating = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool has_direction = 8;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getHasDirection = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setHasDirection = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional FanDirection direction = 9;
 * @return {!proto.FanDirection}
 */
proto.FanCommandRequest.prototype.getDirection = function() {
  return /** @type {!proto.FanDirection} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.FanDirection} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional bool has_speed_level = 10;
 * @return {boolean}
 */
proto.FanCommandRequest.prototype.getHasSpeedLevel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setHasSpeedLevel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int32 speed_level = 11;
 * @return {number}
 */
proto.FanCommandRequest.prototype.getSpeedLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.FanCommandRequest} returns this
 */
proto.FanCommandRequest.prototype.setSpeedLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListEntitiesLightResponse.repeatedFields_ = [12,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesLightResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesLightResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesLightResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesLightResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    supportedColorModesList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    legacySupportsBrightness: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    legacySupportsRgb: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    legacySupportsWhiteValue: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    legacySupportsColorTemperature: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    minMireds: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    maxMireds: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    effectsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    icon: jspb.Message.getFieldWithDefault(msg, 14, ""),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesLightResponse}
 */
proto.ListEntitiesLightResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesLightResponse;
  return proto.ListEntitiesLightResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesLightResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesLightResponse}
 */
proto.ListEntitiesLightResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 12:
      var values = /** @type {!Array<!proto.ColorMode>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedColorModes(values[i]);
      }
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacySupportsBrightness(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacySupportsRgb(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacySupportsWhiteValue(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacySupportsColorTemperature(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinMireds(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxMireds(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addEffects(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 15:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesLightResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesLightResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesLightResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesLightResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSupportedColorModesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      12,
      f
    );
  }
  f = message.getLegacySupportsBrightness();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLegacySupportsRgb();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getLegacySupportsWhiteValue();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getLegacySupportsColorTemperature();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getMinMireds();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getMaxMireds();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getEffectsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesLightResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesLightResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesLightResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesLightResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ColorMode supported_color_modes = 12;
 * @return {!Array<!proto.ColorMode>}
 */
proto.ListEntitiesLightResponse.prototype.getSupportedColorModesList = function() {
  return /** @type {!Array<!proto.ColorMode>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<!proto.ColorMode>} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setSupportedColorModesList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {!proto.ColorMode} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.addSupportedColorModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.clearSupportedColorModesList = function() {
  return this.setSupportedColorModesList([]);
};


/**
 * optional bool legacy_supports_brightness = 5;
 * @return {boolean}
 */
proto.ListEntitiesLightResponse.prototype.getLegacySupportsBrightness = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setLegacySupportsBrightness = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool legacy_supports_rgb = 6;
 * @return {boolean}
 */
proto.ListEntitiesLightResponse.prototype.getLegacySupportsRgb = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setLegacySupportsRgb = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool legacy_supports_white_value = 7;
 * @return {boolean}
 */
proto.ListEntitiesLightResponse.prototype.getLegacySupportsWhiteValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setLegacySupportsWhiteValue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool legacy_supports_color_temperature = 8;
 * @return {boolean}
 */
proto.ListEntitiesLightResponse.prototype.getLegacySupportsColorTemperature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setLegacySupportsColorTemperature = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional float min_mireds = 9;
 * @return {number}
 */
proto.ListEntitiesLightResponse.prototype.getMinMireds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setMinMireds = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float max_mireds = 10;
 * @return {number}
 */
proto.ListEntitiesLightResponse.prototype.getMaxMireds = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setMaxMireds = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * repeated string effects = 11;
 * @return {!Array<string>}
 */
proto.ListEntitiesLightResponse.prototype.getEffectsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setEffectsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.addEffects = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.clearEffectsList = function() {
  return this.setEffectsList([]);
};


/**
 * optional bool disabled_by_default = 13;
 * @return {boolean}
 */
proto.ListEntitiesLightResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional string icon = 14;
 * @return {string}
 */
proto.ListEntitiesLightResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional EntityCategory entity_category = 15;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesLightResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesLightResponse} returns this
 */
proto.ListEntitiesLightResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LightStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.LightStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LightStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LightStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    brightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    colorMode: jspb.Message.getFieldWithDefault(msg, 11, 0),
    colorBrightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    red: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    green: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    blue: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    white: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    colorTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    coldWhite: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    warmWhite: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    effect: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LightStateResponse}
 */
proto.LightStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LightStateResponse;
  return proto.LightStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LightStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LightStateResponse}
 */
proto.LightStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrightness(value);
      break;
    case 11:
      var value = /** @type {!proto.ColorMode} */ (reader.readEnum());
      msg.setColorMode(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setColorBrightness(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRed(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGreen(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBlue(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWhite(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setColorTemperature(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setColdWhite(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWarmWhite(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEffect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LightStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LightStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LightStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LightStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getColorMode();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getColorBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getRed();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getGreen();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getBlue();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getWhite();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getColorTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getColdWhite();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getWarmWhite();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getEffect();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.LightStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool state = 2;
 * @return {boolean}
 */
proto.LightStateResponse.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional float brightness = 3;
 * @return {number}
 */
proto.LightStateResponse.prototype.getBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional ColorMode color_mode = 11;
 * @return {!proto.ColorMode}
 */
proto.LightStateResponse.prototype.getColorMode = function() {
  return /** @type {!proto.ColorMode} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.ColorMode} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setColorMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional float color_brightness = 10;
 * @return {number}
 */
proto.LightStateResponse.prototype.getColorBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setColorBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float red = 4;
 * @return {number}
 */
proto.LightStateResponse.prototype.getRed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setRed = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float green = 5;
 * @return {number}
 */
proto.LightStateResponse.prototype.getGreen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setGreen = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float blue = 6;
 * @return {number}
 */
proto.LightStateResponse.prototype.getBlue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setBlue = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float white = 7;
 * @return {number}
 */
proto.LightStateResponse.prototype.getWhite = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setWhite = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float color_temperature = 8;
 * @return {number}
 */
proto.LightStateResponse.prototype.getColorTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setColorTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float cold_white = 12;
 * @return {number}
 */
proto.LightStateResponse.prototype.getColdWhite = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setColdWhite = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float warm_white = 13;
 * @return {number}
 */
proto.LightStateResponse.prototype.getWarmWhite = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setWarmWhite = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional string effect = 9;
 * @return {string}
 */
proto.LightStateResponse.prototype.getEffect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.LightStateResponse} returns this
 */
proto.LightStateResponse.prototype.setEffect = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LightCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.LightCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LightCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LightCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hasState: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    hasBrightness: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    brightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    hasColorMode: jspb.Message.getBooleanFieldWithDefault(msg, 22, false),
    colorMode: jspb.Message.getFieldWithDefault(msg, 23, 0),
    hasColorBrightness: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    colorBrightness: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
    hasRgb: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    red: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    green: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    blue: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    hasWhite: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    white: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    hasColorTemperature: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    colorTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    hasColdWhite: jspb.Message.getBooleanFieldWithDefault(msg, 24, false),
    coldWhite: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0),
    hasWarmWhite: jspb.Message.getBooleanFieldWithDefault(msg, 26, false),
    warmWhite: jspb.Message.getFloatingPointFieldWithDefault(msg, 27, 0.0),
    hasTransitionLength: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    transitionLength: jspb.Message.getFieldWithDefault(msg, 15, 0),
    hasFlashLength: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    flashLength: jspb.Message.getFieldWithDefault(msg, 17, 0),
    hasEffect: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    effect: jspb.Message.getFieldWithDefault(msg, 19, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LightCommandRequest}
 */
proto.LightCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LightCommandRequest;
  return proto.LightCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LightCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LightCommandRequest}
 */
proto.LightCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasBrightness(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrightness(value);
      break;
    case 22:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasColorMode(value);
      break;
    case 23:
      var value = /** @type {!proto.ColorMode} */ (reader.readEnum());
      msg.setColorMode(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasColorBrightness(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setColorBrightness(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasRgb(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRed(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGreen(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBlue(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasWhite(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWhite(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasColorTemperature(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setColorTemperature(value);
      break;
    case 24:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasColdWhite(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setColdWhite(value);
      break;
    case 26:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasWarmWhite(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWarmWhite(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasTransitionLength(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTransitionLength(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasFlashLength(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFlashLength(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasEffect(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setEffect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LightCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LightCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LightCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LightCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getHasState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHasBrightness();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHasColorMode();
  if (f) {
    writer.writeBool(
      22,
      f
    );
  }
  f = message.getColorMode();
  if (f !== 0.0) {
    writer.writeEnum(
      23,
      f
    );
  }
  f = message.getHasColorBrightness();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getColorBrightness();
  if (f !== 0.0) {
    writer.writeFloat(
      21,
      f
    );
  }
  f = message.getHasRgb();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRed();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getGreen();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getBlue();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getHasWhite();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getWhite();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getHasColorTemperature();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getColorTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
  f = message.getHasColdWhite();
  if (f) {
    writer.writeBool(
      24,
      f
    );
  }
  f = message.getColdWhite();
  if (f !== 0.0) {
    writer.writeFloat(
      25,
      f
    );
  }
  f = message.getHasWarmWhite();
  if (f) {
    writer.writeBool(
      26,
      f
    );
  }
  f = message.getWarmWhite();
  if (f !== 0.0) {
    writer.writeFloat(
      27,
      f
    );
  }
  f = message.getHasTransitionLength();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getTransitionLength();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = message.getHasFlashLength();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getFlashLength();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getHasEffect();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getEffect();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool has_state = 2;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool state = 3;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool has_brightness = 4;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasBrightness = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasBrightness = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional float brightness = 5;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool has_color_mode = 22;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasColorMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 22, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasColorMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 22, value);
};


/**
 * optional ColorMode color_mode = 23;
 * @return {!proto.ColorMode}
 */
proto.LightCommandRequest.prototype.getColorMode = function() {
  return /** @type {!proto.ColorMode} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {!proto.ColorMode} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setColorMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 23, value);
};


/**
 * optional bool has_color_brightness = 20;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasColorBrightness = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasColorBrightness = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional float color_brightness = 21;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getColorBrightness = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setColorBrightness = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional bool has_rgb = 6;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasRgb = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasRgb = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional float red = 7;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getRed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setRed = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float green = 8;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getGreen = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setGreen = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float blue = 9;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getBlue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setBlue = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional bool has_white = 10;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasWhite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasWhite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional float white = 11;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getWhite = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setWhite = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional bool has_color_temperature = 12;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasColorTemperature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasColorTemperature = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional float color_temperature = 13;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getColorTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setColorTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional bool has_cold_white = 24;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasColdWhite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 24, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasColdWhite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 24, value);
};


/**
 * optional float cold_white = 25;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getColdWhite = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setColdWhite = function(value) {
  return jspb.Message.setProto3FloatField(this, 25, value);
};


/**
 * optional bool has_warm_white = 26;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasWarmWhite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 26, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasWarmWhite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 26, value);
};


/**
 * optional float warm_white = 27;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getWarmWhite = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setWarmWhite = function(value) {
  return jspb.Message.setProto3FloatField(this, 27, value);
};


/**
 * optional bool has_transition_length = 14;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasTransitionLength = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasTransitionLength = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional uint32 transition_length = 15;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getTransitionLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setTransitionLength = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool has_flash_length = 16;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasFlashLength = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasFlashLength = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional uint32 flash_length = 17;
 * @return {number}
 */
proto.LightCommandRequest.prototype.getFlashLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setFlashLength = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional bool has_effect = 18;
 * @return {boolean}
 */
proto.LightCommandRequest.prototype.getHasEffect = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setHasEffect = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string effect = 19;
 * @return {string}
 */
proto.LightCommandRequest.prototype.getEffect = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.LightCommandRequest} returns this
 */
proto.LightCommandRequest.prototype.setEffect = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesSensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesSensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesSensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesSensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    unitOfMeasurement: jspb.Message.getFieldWithDefault(msg, 6, ""),
    accuracyDecimals: jspb.Message.getFieldWithDefault(msg, 7, 0),
    forceUpdate: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    deviceClass: jspb.Message.getFieldWithDefault(msg, 9, ""),
    stateClass: jspb.Message.getFieldWithDefault(msg, 10, 0),
    legacyLastResetType: jspb.Message.getFieldWithDefault(msg, 11, 0),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesSensorResponse}
 */
proto.ListEntitiesSensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesSensorResponse;
  return proto.ListEntitiesSensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesSensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesSensorResponse}
 */
proto.ListEntitiesSensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnitOfMeasurement(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAccuracyDecimals(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceUpdate(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceClass(value);
      break;
    case 10:
      var value = /** @type {!proto.SensorStateClass} */ (reader.readEnum());
      msg.setStateClass(value);
      break;
    case 11:
      var value = /** @type {!proto.SensorLastResetType} */ (reader.readEnum());
      msg.setLegacyLastResetType(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 13:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesSensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesSensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesSensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesSensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUnitOfMeasurement();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAccuracyDecimals();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getForceUpdate();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getDeviceClass();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStateClass();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getLegacyLastResetType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesSensorResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesSensorResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesSensorResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesSensorResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesSensorResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string unit_of_measurement = 6;
 * @return {string}
 */
proto.ListEntitiesSensorResponse.prototype.getUnitOfMeasurement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setUnitOfMeasurement = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 accuracy_decimals = 7;
 * @return {number}
 */
proto.ListEntitiesSensorResponse.prototype.getAccuracyDecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setAccuracyDecimals = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool force_update = 8;
 * @return {boolean}
 */
proto.ListEntitiesSensorResponse.prototype.getForceUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setForceUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string device_class = 9;
 * @return {string}
 */
proto.ListEntitiesSensorResponse.prototype.getDeviceClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setDeviceClass = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional SensorStateClass state_class = 10;
 * @return {!proto.SensorStateClass}
 */
proto.ListEntitiesSensorResponse.prototype.getStateClass = function() {
  return /** @type {!proto.SensorStateClass} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.SensorStateClass} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setStateClass = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional SensorLastResetType legacy_last_reset_type = 11;
 * @return {!proto.SensorLastResetType}
 */
proto.ListEntitiesSensorResponse.prototype.getLegacyLastResetType = function() {
  return /** @type {!proto.SensorLastResetType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.SensorLastResetType} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setLegacyLastResetType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional bool disabled_by_default = 12;
 * @return {boolean}
 */
proto.ListEntitiesSensorResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional EntityCategory entity_category = 13;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesSensorResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesSensorResponse} returns this
 */
proto.ListEntitiesSensorResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SensorStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SensorStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SensorStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    missingState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SensorStateResponse}
 */
proto.SensorStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SensorStateResponse;
  return proto.SensorStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SensorStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SensorStateResponse}
 */
proto.SensorStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissingState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SensorStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SensorStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SensorStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SensorStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMissingState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.SensorStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SensorStateResponse} returns this
 */
proto.SensorStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float state = 2;
 * @return {number}
 */
proto.SensorStateResponse.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.SensorStateResponse} returns this
 */
proto.SensorStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bool missing_state = 3;
 * @return {boolean}
 */
proto.SensorStateResponse.prototype.getMissingState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SensorStateResponse} returns this
 */
proto.SensorStateResponse.prototype.setMissingState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesSwitchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesSwitchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesSwitchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesSwitchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    assumedState: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 8, 0),
    deviceClass: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesSwitchResponse}
 */
proto.ListEntitiesSwitchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesSwitchResponse;
  return proto.ListEntitiesSwitchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesSwitchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesSwitchResponse}
 */
proto.ListEntitiesSwitchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssumedState(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 8:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceClass(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesSwitchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesSwitchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesSwitchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesSwitchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAssumedState();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getDeviceClass();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesSwitchResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesSwitchResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesSwitchResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesSwitchResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesSwitchResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool assumed_state = 6;
 * @return {boolean}
 */
proto.ListEntitiesSwitchResponse.prototype.getAssumedState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setAssumedState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool disabled_by_default = 7;
 * @return {boolean}
 */
proto.ListEntitiesSwitchResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional EntityCategory entity_category = 8;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesSwitchResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string device_class = 9;
 * @return {string}
 */
proto.ListEntitiesSwitchResponse.prototype.getDeviceClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSwitchResponse} returns this
 */
proto.ListEntitiesSwitchResponse.prototype.setDeviceClass = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SwitchStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SwitchStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwitchStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwitchStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SwitchStateResponse}
 */
proto.SwitchStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwitchStateResponse;
  return proto.SwitchStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwitchStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwitchStateResponse}
 */
proto.SwitchStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SwitchStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwitchStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwitchStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwitchStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.SwitchStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SwitchStateResponse} returns this
 */
proto.SwitchStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool state = 2;
 * @return {boolean}
 */
proto.SwitchStateResponse.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SwitchStateResponse} returns this
 */
proto.SwitchStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SwitchCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SwitchCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SwitchCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwitchCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SwitchCommandRequest}
 */
proto.SwitchCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SwitchCommandRequest;
  return proto.SwitchCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SwitchCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SwitchCommandRequest}
 */
proto.SwitchCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SwitchCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SwitchCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SwitchCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SwitchCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.SwitchCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SwitchCommandRequest} returns this
 */
proto.SwitchCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool state = 2;
 * @return {boolean}
 */
proto.SwitchCommandRequest.prototype.getState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SwitchCommandRequest} returns this
 */
proto.SwitchCommandRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesTextSensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesTextSensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesTextSensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesTextSensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesTextSensorResponse}
 */
proto.ListEntitiesTextSensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesTextSensorResponse;
  return proto.ListEntitiesTextSensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesTextSensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesTextSensorResponse}
 */
proto.ListEntitiesTextSensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 7:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesTextSensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesTextSensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesTextSensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesTextSensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesTextSensorResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesTextSensorResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesTextSensorResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesTextSensorResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesTextSensorResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool disabled_by_default = 6;
 * @return {boolean}
 */
proto.ListEntitiesTextSensorResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional EntityCategory entity_category = 7;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesTextSensorResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesTextSensorResponse} returns this
 */
proto.ListEntitiesTextSensorResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TextSensorStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.TextSensorStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TextSensorStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TextSensorStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, ""),
    missingState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TextSensorStateResponse}
 */
proto.TextSensorStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TextSensorStateResponse;
  return proto.TextSensorStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TextSensorStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TextSensorStateResponse}
 */
proto.TextSensorStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissingState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TextSensorStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TextSensorStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TextSensorStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TextSensorStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMissingState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.TextSensorStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.TextSensorStateResponse} returns this
 */
proto.TextSensorStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.TextSensorStateResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.TextSensorStateResponse} returns this
 */
proto.TextSensorStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool missing_state = 3;
 * @return {boolean}
 */
proto.TextSensorStateResponse.prototype.getMissingState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.TextSensorStateResponse} returns this
 */
proto.TextSensorStateResponse.prototype.setMissingState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dumpConfig: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeLogsRequest}
 */
proto.SubscribeLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeLogsRequest;
  return proto.SubscribeLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeLogsRequest}
 */
proto.SubscribeLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.LogLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDumpConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDumpConfig();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional LogLevel level = 1;
 * @return {!proto.LogLevel}
 */
proto.SubscribeLogsRequest.prototype.getLevel = function() {
  return /** @type {!proto.LogLevel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.LogLevel} value
 * @return {!proto.SubscribeLogsRequest} returns this
 */
proto.SubscribeLogsRequest.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool dump_config = 2;
 * @return {boolean}
 */
proto.SubscribeLogsRequest.prototype.getDumpConfig = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SubscribeLogsRequest} returns this
 */
proto.SubscribeLogsRequest.prototype.setDumpConfig = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sendFailed: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeLogsResponse}
 */
proto.SubscribeLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeLogsResponse;
  return proto.SubscribeLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeLogsResponse}
 */
proto.SubscribeLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.LogLevel} */ (reader.readEnum());
      msg.setLevel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendFailed();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional LogLevel level = 1;
 * @return {!proto.LogLevel}
 */
proto.SubscribeLogsResponse.prototype.getLevel = function() {
  return /** @type {!proto.LogLevel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.LogLevel} value
 * @return {!proto.SubscribeLogsResponse} returns this
 */
proto.SubscribeLogsResponse.prototype.setLevel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.SubscribeLogsResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeLogsResponse} returns this
 */
proto.SubscribeLogsResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool send_failed = 4;
 * @return {boolean}
 */
proto.SubscribeLogsResponse.prototype.getSendFailed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SubscribeLogsResponse} returns this
 */
proto.SubscribeLogsResponse.prototype.setSendFailed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeHomeassistantServicesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeHomeassistantServicesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeHomeassistantServicesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeHomeassistantServicesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeHomeassistantServicesRequest}
 */
proto.SubscribeHomeassistantServicesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeHomeassistantServicesRequest;
  return proto.SubscribeHomeassistantServicesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeHomeassistantServicesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeHomeassistantServicesRequest}
 */
proto.SubscribeHomeassistantServicesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeHomeassistantServicesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeHomeassistantServicesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeHomeassistantServicesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeHomeassistantServicesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HomeassistantServiceMap.prototype.toObject = function(opt_includeInstance) {
  return proto.HomeassistantServiceMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HomeassistantServiceMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HomeassistantServiceMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HomeassistantServiceMap}
 */
proto.HomeassistantServiceMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HomeassistantServiceMap;
  return proto.HomeassistantServiceMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HomeassistantServiceMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HomeassistantServiceMap}
 */
proto.HomeassistantServiceMap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HomeassistantServiceMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HomeassistantServiceMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HomeassistantServiceMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HomeassistantServiceMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.HomeassistantServiceMap.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HomeassistantServiceMap} returns this
 */
proto.HomeassistantServiceMap.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.HomeassistantServiceMap.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HomeassistantServiceMap} returns this
 */
proto.HomeassistantServiceMap.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.HomeassistantServiceResponse.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HomeassistantServiceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.HomeassistantServiceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HomeassistantServiceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HomeassistantServiceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    service: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.HomeassistantServiceMap.toObject, includeInstance),
    dataTemplateList: jspb.Message.toObjectList(msg.getDataTemplateList(),
    proto.HomeassistantServiceMap.toObject, includeInstance),
    variablesList: jspb.Message.toObjectList(msg.getVariablesList(),
    proto.HomeassistantServiceMap.toObject, includeInstance),
    isEvent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HomeassistantServiceResponse}
 */
proto.HomeassistantServiceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HomeassistantServiceResponse;
  return proto.HomeassistantServiceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HomeassistantServiceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HomeassistantServiceResponse}
 */
proto.HomeassistantServiceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 2:
      var value = new proto.HomeassistantServiceMap;
      reader.readMessage(value,proto.HomeassistantServiceMap.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    case 3:
      var value = new proto.HomeassistantServiceMap;
      reader.readMessage(value,proto.HomeassistantServiceMap.deserializeBinaryFromReader);
      msg.addDataTemplate(value);
      break;
    case 4:
      var value = new proto.HomeassistantServiceMap;
      reader.readMessage(value,proto.HomeassistantServiceMap.deserializeBinaryFromReader);
      msg.addVariables(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsEvent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HomeassistantServiceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HomeassistantServiceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HomeassistantServiceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HomeassistantServiceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.HomeassistantServiceMap.serializeBinaryToWriter
    );
  }
  f = message.getDataTemplateList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.HomeassistantServiceMap.serializeBinaryToWriter
    );
  }
  f = message.getVariablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.HomeassistantServiceMap.serializeBinaryToWriter
    );
  }
  f = message.getIsEvent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string service = 1;
 * @return {string}
 */
proto.HomeassistantServiceResponse.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HomeassistantServiceResponse} returns this
 */
proto.HomeassistantServiceResponse.prototype.setService = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated HomeassistantServiceMap data = 2;
 * @return {!Array<!proto.HomeassistantServiceMap>}
 */
proto.HomeassistantServiceResponse.prototype.getDataList = function() {
  return /** @type{!Array<!proto.HomeassistantServiceMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.HomeassistantServiceMap, 2));
};


/**
 * @param {!Array<!proto.HomeassistantServiceMap>} value
 * @return {!proto.HomeassistantServiceResponse} returns this
*/
proto.HomeassistantServiceResponse.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.HomeassistantServiceMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.HomeassistantServiceMap}
 */
proto.HomeassistantServiceResponse.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.HomeassistantServiceMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.HomeassistantServiceResponse} returns this
 */
proto.HomeassistantServiceResponse.prototype.clearDataList = function() {
  return this.setDataList([]);
};


/**
 * repeated HomeassistantServiceMap data_template = 3;
 * @return {!Array<!proto.HomeassistantServiceMap>}
 */
proto.HomeassistantServiceResponse.prototype.getDataTemplateList = function() {
  return /** @type{!Array<!proto.HomeassistantServiceMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.HomeassistantServiceMap, 3));
};


/**
 * @param {!Array<!proto.HomeassistantServiceMap>} value
 * @return {!proto.HomeassistantServiceResponse} returns this
*/
proto.HomeassistantServiceResponse.prototype.setDataTemplateList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.HomeassistantServiceMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.HomeassistantServiceMap}
 */
proto.HomeassistantServiceResponse.prototype.addDataTemplate = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.HomeassistantServiceMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.HomeassistantServiceResponse} returns this
 */
proto.HomeassistantServiceResponse.prototype.clearDataTemplateList = function() {
  return this.setDataTemplateList([]);
};


/**
 * repeated HomeassistantServiceMap variables = 4;
 * @return {!Array<!proto.HomeassistantServiceMap>}
 */
proto.HomeassistantServiceResponse.prototype.getVariablesList = function() {
  return /** @type{!Array<!proto.HomeassistantServiceMap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.HomeassistantServiceMap, 4));
};


/**
 * @param {!Array<!proto.HomeassistantServiceMap>} value
 * @return {!proto.HomeassistantServiceResponse} returns this
*/
proto.HomeassistantServiceResponse.prototype.setVariablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.HomeassistantServiceMap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.HomeassistantServiceMap}
 */
proto.HomeassistantServiceResponse.prototype.addVariables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.HomeassistantServiceMap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.HomeassistantServiceResponse} returns this
 */
proto.HomeassistantServiceResponse.prototype.clearVariablesList = function() {
  return this.setVariablesList([]);
};


/**
 * optional bool is_event = 5;
 * @return {boolean}
 */
proto.HomeassistantServiceResponse.prototype.getIsEvent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.HomeassistantServiceResponse} returns this
 */
proto.HomeassistantServiceResponse.prototype.setIsEvent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeHomeAssistantStatesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeHomeAssistantStatesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeHomeAssistantStatesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeHomeAssistantStatesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeHomeAssistantStatesRequest}
 */
proto.SubscribeHomeAssistantStatesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeHomeAssistantStatesRequest;
  return proto.SubscribeHomeAssistantStatesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeHomeAssistantStatesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeHomeAssistantStatesRequest}
 */
proto.SubscribeHomeAssistantStatesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeHomeAssistantStatesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeHomeAssistantStatesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeHomeAssistantStatesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeHomeAssistantStatesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeHomeAssistantStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeHomeAssistantStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeHomeAssistantStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeHomeAssistantStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    attribute: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeHomeAssistantStateResponse}
 */
proto.SubscribeHomeAssistantStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeHomeAssistantStateResponse;
  return proto.SubscribeHomeAssistantStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeHomeAssistantStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeHomeAssistantStateResponse}
 */
proto.SubscribeHomeAssistantStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeHomeAssistantStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeHomeAssistantStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeHomeAssistantStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeHomeAssistantStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAttribute();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string entity_id = 1;
 * @return {string}
 */
proto.SubscribeHomeAssistantStateResponse.prototype.getEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeHomeAssistantStateResponse} returns this
 */
proto.SubscribeHomeAssistantStateResponse.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string attribute = 2;
 * @return {string}
 */
proto.SubscribeHomeAssistantStateResponse.prototype.getAttribute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeHomeAssistantStateResponse} returns this
 */
proto.SubscribeHomeAssistantStateResponse.prototype.setAttribute = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.HomeAssistantStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.HomeAssistantStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.HomeAssistantStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HomeAssistantStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    entityId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attribute: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.HomeAssistantStateResponse}
 */
proto.HomeAssistantStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.HomeAssistantStateResponse;
  return proto.HomeAssistantStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.HomeAssistantStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.HomeAssistantStateResponse}
 */
proto.HomeAssistantStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttribute(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.HomeAssistantStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.HomeAssistantStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.HomeAssistantStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.HomeAssistantStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntityId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttribute();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string entity_id = 1;
 * @return {string}
 */
proto.HomeAssistantStateResponse.prototype.getEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.HomeAssistantStateResponse} returns this
 */
proto.HomeAssistantStateResponse.prototype.setEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.HomeAssistantStateResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.HomeAssistantStateResponse} returns this
 */
proto.HomeAssistantStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string attribute = 3;
 * @return {string}
 */
proto.HomeAssistantStateResponse.prototype.getAttribute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.HomeAssistantStateResponse} returns this
 */
proto.HomeAssistantStateResponse.prototype.setAttribute = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetTimeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetTimeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetTimeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTimeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetTimeRequest}
 */
proto.GetTimeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetTimeRequest;
  return proto.GetTimeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetTimeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetTimeRequest}
 */
proto.GetTimeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetTimeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetTimeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetTimeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTimeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetTimeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetTimeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetTimeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTimeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    epochSeconds: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetTimeResponse}
 */
proto.GetTimeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetTimeResponse;
  return proto.GetTimeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetTimeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetTimeResponse}
 */
proto.GetTimeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setEpochSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetTimeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetTimeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetTimeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetTimeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpochSeconds();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * optional fixed32 epoch_seconds = 1;
 * @return {number}
 */
proto.GetTimeResponse.prototype.getEpochSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetTimeResponse} returns this
 */
proto.GetTimeResponse.prototype.setEpochSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesServicesArgument.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesServicesArgument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesServicesArgument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesServicesArgument.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesServicesArgument}
 */
proto.ListEntitiesServicesArgument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesServicesArgument;
  return proto.ListEntitiesServicesArgument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesServicesArgument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesServicesArgument}
 */
proto.ListEntitiesServicesArgument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.ServiceArgType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesServicesArgument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesServicesArgument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesServicesArgument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesServicesArgument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ListEntitiesServicesArgument.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesServicesArgument} returns this
 */
proto.ListEntitiesServicesArgument.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ServiceArgType type = 2;
 * @return {!proto.ServiceArgType}
 */
proto.ListEntitiesServicesArgument.prototype.getType = function() {
  return /** @type {!proto.ServiceArgType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ServiceArgType} value
 * @return {!proto.ListEntitiesServicesArgument} returns this
 */
proto.ListEntitiesServicesArgument.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListEntitiesServicesResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesServicesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesServicesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesServicesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesServicesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    proto.ListEntitiesServicesArgument.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesServicesResponse}
 */
proto.ListEntitiesServicesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesServicesResponse;
  return proto.ListEntitiesServicesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesServicesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesServicesResponse}
 */
proto.ListEntitiesServicesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = new proto.ListEntitiesServicesArgument;
      reader.readMessage(value,proto.ListEntitiesServicesArgument.deserializeBinaryFromReader);
      msg.addArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesServicesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesServicesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesServicesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesServicesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ListEntitiesServicesArgument.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ListEntitiesServicesResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesServicesResponse} returns this
 */
proto.ListEntitiesServicesResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesServicesResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesServicesResponse} returns this
 */
proto.ListEntitiesServicesResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated ListEntitiesServicesArgument args = 3;
 * @return {!Array<!proto.ListEntitiesServicesArgument>}
 */
proto.ListEntitiesServicesResponse.prototype.getArgsList = function() {
  return /** @type{!Array<!proto.ListEntitiesServicesArgument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ListEntitiesServicesArgument, 3));
};


/**
 * @param {!Array<!proto.ListEntitiesServicesArgument>} value
 * @return {!proto.ListEntitiesServicesResponse} returns this
*/
proto.ListEntitiesServicesResponse.prototype.setArgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ListEntitiesServicesArgument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesServicesArgument}
 */
proto.ListEntitiesServicesResponse.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ListEntitiesServicesArgument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesServicesResponse} returns this
 */
proto.ListEntitiesServicesResponse.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ExecuteServiceArgument.repeatedFields_ = [6,7,8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteServiceArgument.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteServiceArgument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteServiceArgument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteServiceArgument.toObject = function(includeInstance, msg) {
  var f, obj = {
    bool: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    legacyInt: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_float: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    string: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pb_int: jspb.Message.getFieldWithDefault(msg, 5, 0),
    boolArrayList: (f = jspb.Message.getRepeatedBooleanField(msg, 6)) == null ? undefined : f,
    intArrayList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    floatArrayList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 8)) == null ? undefined : f,
    stringArrayList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteServiceArgument}
 */
proto.ExecuteServiceArgument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteServiceArgument;
  return proto.ExecuteServiceArgument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteServiceArgument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteServiceArgument}
 */
proto.ExecuteServiceArgument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBool(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLegacyInt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloat(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setString(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setInt(value);
      break;
    case 6:
      var values = /** @type {!Array<boolean>} */ (reader.isDelimited() ? reader.readPackedBool() : [reader.readBool()]);
      for (var i = 0; i < values.length; i++) {
        msg.addBoolArray(values[i]);
      }
      break;
    case 7:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedSint32() : [reader.readSint32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIntArray(values[i]);
      }
      break;
    case 8:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFloatArray(values[i]);
      }
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addStringArray(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteServiceArgument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteServiceArgument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteServiceArgument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteServiceArgument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBool();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getLegacyInt();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getFloat();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getString();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInt();
  if (f !== 0) {
    writer.writeSint32(
      5,
      f
    );
  }
  f = message.getBoolArrayList();
  if (f.length > 0) {
    writer.writeRepeatedBool(
      6,
      f
    );
  }
  f = message.getIntArrayList();
  if (f.length > 0) {
    writer.writeRepeatedSint32(
      7,
      f
    );
  }
  f = message.getFloatArrayList();
  if (f.length > 0) {
    writer.writeRepeatedFloat(
      8,
      f
    );
  }
  f = message.getStringArrayList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional bool bool_ = 1;
 * @return {boolean}
 */
proto.ExecuteServiceArgument.prototype.getBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setBool = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int32 legacy_int = 2;
 * @return {number}
 */
proto.ExecuteServiceArgument.prototype.getLegacyInt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setLegacyInt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float float_ = 3;
 * @return {number}
 */
proto.ExecuteServiceArgument.prototype.getFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setFloat = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string string_ = 4;
 * @return {string}
 */
proto.ExecuteServiceArgument.prototype.getString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setString = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional sint32 int_ = 5;
 * @return {number}
 */
proto.ExecuteServiceArgument.prototype.getInt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setInt = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated bool bool_array = 6;
 * @return {!Array<boolean>}
 */
proto.ExecuteServiceArgument.prototype.getBoolArrayList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedBooleanField(this, 6));
};


/**
 * @param {!Array<boolean>} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setBoolArrayList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.addBoolArray = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.clearBoolArrayList = function() {
  return this.setBoolArrayList([]);
};


/**
 * repeated sint32 int_array = 7;
 * @return {!Array<number>}
 */
proto.ExecuteServiceArgument.prototype.getIntArrayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setIntArrayList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.addIntArray = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.clearIntArrayList = function() {
  return this.setIntArrayList([]);
};


/**
 * repeated float float_array = 8;
 * @return {!Array<number>}
 */
proto.ExecuteServiceArgument.prototype.getFloatArrayList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 8));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setFloatArrayList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.addFloatArray = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.clearFloatArrayList = function() {
  return this.setFloatArrayList([]);
};


/**
 * repeated string string_array = 9;
 * @return {!Array<string>}
 */
proto.ExecuteServiceArgument.prototype.getStringArrayList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.setStringArrayList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.addStringArray = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ExecuteServiceArgument} returns this
 */
proto.ExecuteServiceArgument.prototype.clearStringArrayList = function() {
  return this.setStringArrayList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ExecuteServiceRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExecuteServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ExecuteServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExecuteServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    proto.ExecuteServiceArgument.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExecuteServiceRequest}
 */
proto.ExecuteServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExecuteServiceRequest;
  return proto.ExecuteServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExecuteServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExecuteServiceRequest}
 */
proto.ExecuteServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = new proto.ExecuteServiceArgument;
      reader.readMessage(value,proto.ExecuteServiceArgument.deserializeBinaryFromReader);
      msg.addArgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExecuteServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExecuteServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExecuteServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExecuteServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ExecuteServiceArgument.serializeBinaryToWriter
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.ExecuteServiceRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ExecuteServiceRequest} returns this
 */
proto.ExecuteServiceRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ExecuteServiceArgument args = 2;
 * @return {!Array<!proto.ExecuteServiceArgument>}
 */
proto.ExecuteServiceRequest.prototype.getArgsList = function() {
  return /** @type{!Array<!proto.ExecuteServiceArgument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ExecuteServiceArgument, 2));
};


/**
 * @param {!Array<!proto.ExecuteServiceArgument>} value
 * @return {!proto.ExecuteServiceRequest} returns this
*/
proto.ExecuteServiceRequest.prototype.setArgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ExecuteServiceArgument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ExecuteServiceArgument}
 */
proto.ExecuteServiceRequest.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ExecuteServiceArgument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ExecuteServiceRequest} returns this
 */
proto.ExecuteServiceRequest.prototype.clearArgsList = function() {
  return this.setArgsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesCameraResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesCameraResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesCameraResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesCameraResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    icon: jspb.Message.getFieldWithDefault(msg, 6, ""),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesCameraResponse}
 */
proto.ListEntitiesCameraResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesCameraResponse;
  return proto.ListEntitiesCameraResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesCameraResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesCameraResponse}
 */
proto.ListEntitiesCameraResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 7:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesCameraResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesCameraResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesCameraResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesCameraResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesCameraResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesCameraResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesCameraResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesCameraResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool disabled_by_default = 5;
 * @return {boolean}
 */
proto.ListEntitiesCameraResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string icon = 6;
 * @return {string}
 */
proto.ListEntitiesCameraResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional EntityCategory entity_category = 7;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesCameraResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesCameraResponse} returns this
 */
proto.ListEntitiesCameraResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CameraImageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CameraImageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CameraImageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CameraImageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    data: msg.getData_asB64(),
    done: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CameraImageResponse}
 */
proto.CameraImageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CameraImageResponse;
  return proto.CameraImageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CameraImageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CameraImageResponse}
 */
proto.CameraImageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CameraImageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CameraImageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CameraImageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CameraImageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getDone();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.CameraImageResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CameraImageResponse} returns this
 */
proto.CameraImageResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.CameraImageResponse.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.CameraImageResponse.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.CameraImageResponse.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.CameraImageResponse} returns this
 */
proto.CameraImageResponse.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool done = 3;
 * @return {boolean}
 */
proto.CameraImageResponse.prototype.getDone = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CameraImageResponse} returns this
 */
proto.CameraImageResponse.prototype.setDone = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CameraImageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CameraImageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CameraImageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CameraImageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    single: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    stream: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CameraImageRequest}
 */
proto.CameraImageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CameraImageRequest;
  return proto.CameraImageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CameraImageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CameraImageRequest}
 */
proto.CameraImageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingle(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStream(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CameraImageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CameraImageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CameraImageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CameraImageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSingle();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getStream();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool single = 1;
 * @return {boolean}
 */
proto.CameraImageRequest.prototype.getSingle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CameraImageRequest} returns this
 */
proto.CameraImageRequest.prototype.setSingle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool stream = 2;
 * @return {boolean}
 */
proto.CameraImageRequest.prototype.getStream = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CameraImageRequest} returns this
 */
proto.CameraImageRequest.prototype.setStream = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListEntitiesClimateResponse.repeatedFields_ = [7,13,14,15,16,17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesClimateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesClimateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesClimateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesClimateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    supportsCurrentTemperature: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    supportsTwoPointTargetTemperature: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    supportedModesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    visualMinTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    visualMaxTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    visualTemperatureStep: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    legacySupportsAway: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    supportsAction: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    supportedFanModesList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    supportedSwingModesList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
    supportedCustomFanModesList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
    supportedPresetsList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
    supportedCustomPresetsList: (f = jspb.Message.getRepeatedField(msg, 17)) == null ? undefined : f,
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    icon: jspb.Message.getFieldWithDefault(msg, 19, ""),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 20, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesClimateResponse}
 */
proto.ListEntitiesClimateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesClimateResponse;
  return proto.ListEntitiesClimateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesClimateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesClimateResponse}
 */
proto.ListEntitiesClimateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsCurrentTemperature(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsTwoPointTargetTemperature(value);
      break;
    case 7:
      var values = /** @type {!Array<!proto.ClimateMode>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedModes(values[i]);
      }
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVisualMinTemperature(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVisualMaxTemperature(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVisualTemperatureStep(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacySupportsAway(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsAction(value);
      break;
    case 13:
      var values = /** @type {!Array<!proto.ClimateFanMode>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedFanModes(values[i]);
      }
      break;
    case 14:
      var values = /** @type {!Array<!proto.ClimateSwingMode>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedSwingModes(values[i]);
      }
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedCustomFanModes(value);
      break;
    case 16:
      var values = /** @type {!Array<!proto.ClimatePreset>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSupportedPresets(values[i]);
      }
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedCustomPresets(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 20:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesClimateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesClimateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesClimateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesClimateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSupportsCurrentTemperature();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getSupportsTwoPointTargetTemperature();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getSupportedModesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      7,
      f
    );
  }
  f = message.getVisualMinTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getVisualMaxTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getVisualTemperatureStep();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getLegacySupportsAway();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getSupportsAction();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getSupportedFanModesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      13,
      f
    );
  }
  f = message.getSupportedSwingModesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      14,
      f
    );
  }
  f = message.getSupportedCustomFanModesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getSupportedPresetsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      16,
      f
    );
  }
  f = message.getSupportedCustomPresetsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      17,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesClimateResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesClimateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesClimateResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesClimateResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool supports_current_temperature = 5;
 * @return {boolean}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportsCurrentTemperature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportsCurrentTemperature = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool supports_two_point_target_temperature = 6;
 * @return {boolean}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportsTwoPointTargetTemperature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportsTwoPointTargetTemperature = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated ClimateMode supported_modes = 7;
 * @return {!Array<!proto.ClimateMode>}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportedModesList = function() {
  return /** @type {!Array<!proto.ClimateMode>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<!proto.ClimateMode>} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportedModesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {!proto.ClimateMode} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.addSupportedModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.clearSupportedModesList = function() {
  return this.setSupportedModesList([]);
};


/**
 * optional float visual_min_temperature = 8;
 * @return {number}
 */
proto.ListEntitiesClimateResponse.prototype.getVisualMinTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setVisualMinTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float visual_max_temperature = 9;
 * @return {number}
 */
proto.ListEntitiesClimateResponse.prototype.getVisualMaxTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setVisualMaxTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional float visual_temperature_step = 10;
 * @return {number}
 */
proto.ListEntitiesClimateResponse.prototype.getVisualTemperatureStep = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setVisualTemperatureStep = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional bool legacy_supports_away = 11;
 * @return {boolean}
 */
proto.ListEntitiesClimateResponse.prototype.getLegacySupportsAway = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setLegacySupportsAway = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool supports_action = 12;
 * @return {boolean}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportsAction = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportsAction = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated ClimateFanMode supported_fan_modes = 13;
 * @return {!Array<!proto.ClimateFanMode>}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportedFanModesList = function() {
  return /** @type {!Array<!proto.ClimateFanMode>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<!proto.ClimateFanMode>} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportedFanModesList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {!proto.ClimateFanMode} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.addSupportedFanModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.clearSupportedFanModesList = function() {
  return this.setSupportedFanModesList([]);
};


/**
 * repeated ClimateSwingMode supported_swing_modes = 14;
 * @return {!Array<!proto.ClimateSwingMode>}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportedSwingModesList = function() {
  return /** @type {!Array<!proto.ClimateSwingMode>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<!proto.ClimateSwingMode>} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportedSwingModesList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {!proto.ClimateSwingMode} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.addSupportedSwingModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.clearSupportedSwingModesList = function() {
  return this.setSupportedSwingModesList([]);
};


/**
 * repeated string supported_custom_fan_modes = 15;
 * @return {!Array<string>}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportedCustomFanModesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportedCustomFanModesList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.addSupportedCustomFanModes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.clearSupportedCustomFanModesList = function() {
  return this.setSupportedCustomFanModesList([]);
};


/**
 * repeated ClimatePreset supported_presets = 16;
 * @return {!Array<!proto.ClimatePreset>}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportedPresetsList = function() {
  return /** @type {!Array<!proto.ClimatePreset>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<!proto.ClimatePreset>} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportedPresetsList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {!proto.ClimatePreset} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.addSupportedPresets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.clearSupportedPresetsList = function() {
  return this.setSupportedPresetsList([]);
};


/**
 * repeated string supported_custom_presets = 17;
 * @return {!Array<string>}
 */
proto.ListEntitiesClimateResponse.prototype.getSupportedCustomPresetsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 17));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setSupportedCustomPresetsList = function(value) {
  return jspb.Message.setField(this, 17, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.addSupportedCustomPresets = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 17, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.clearSupportedCustomPresetsList = function() {
  return this.setSupportedCustomPresetsList([]);
};


/**
 * optional bool disabled_by_default = 18;
 * @return {boolean}
 */
proto.ListEntitiesClimateResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string icon = 19;
 * @return {string}
 */
proto.ListEntitiesClimateResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional EntityCategory entity_category = 20;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesClimateResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesClimateResponse} returns this
 */
proto.ListEntitiesClimateResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClimateStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ClimateStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClimateStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClimateStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    mode: jspb.Message.getFieldWithDefault(msg, 2, 0),
    currentTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    targetTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    targetTemperatureLow: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    targetTemperatureHigh: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    legacyAway: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    action: jspb.Message.getFieldWithDefault(msg, 8, 0),
    fanMode: jspb.Message.getFieldWithDefault(msg, 9, 0),
    swingMode: jspb.Message.getFieldWithDefault(msg, 10, 0),
    customFanMode: jspb.Message.getFieldWithDefault(msg, 11, ""),
    preset: jspb.Message.getFieldWithDefault(msg, 12, 0),
    customPreset: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClimateStateResponse}
 */
proto.ClimateStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClimateStateResponse;
  return proto.ClimateStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClimateStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClimateStateResponse}
 */
proto.ClimateStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.ClimateMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCurrentTemperature(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetTemperature(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetTemperatureLow(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetTemperatureHigh(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacyAway(value);
      break;
    case 8:
      var value = /** @type {!proto.ClimateAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 9:
      var value = /** @type {!proto.ClimateFanMode} */ (reader.readEnum());
      msg.setFanMode(value);
      break;
    case 10:
      var value = /** @type {!proto.ClimateSwingMode} */ (reader.readEnum());
      msg.setSwingMode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomFanMode(value);
      break;
    case 12:
      var value = /** @type {!proto.ClimatePreset} */ (reader.readEnum());
      msg.setPreset(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomPreset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClimateStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClimateStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClimateStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClimateStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getCurrentTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getTargetTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTargetTemperatureLow();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getTargetTemperatureHigh();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getLegacyAway();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getFanMode();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getSwingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getCustomFanMode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPreset();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getCustomPreset();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.ClimateStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ClimateMode mode = 2;
 * @return {!proto.ClimateMode}
 */
proto.ClimateStateResponse.prototype.getMode = function() {
  return /** @type {!proto.ClimateMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ClimateMode} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional float current_temperature = 3;
 * @return {number}
 */
proto.ClimateStateResponse.prototype.getCurrentTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setCurrentTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float target_temperature = 4;
 * @return {number}
 */
proto.ClimateStateResponse.prototype.getTargetTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setTargetTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float target_temperature_low = 5;
 * @return {number}
 */
proto.ClimateStateResponse.prototype.getTargetTemperatureLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setTargetTemperatureLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float target_temperature_high = 6;
 * @return {number}
 */
proto.ClimateStateResponse.prototype.getTargetTemperatureHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setTargetTemperatureHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional bool legacy_away = 7;
 * @return {boolean}
 */
proto.ClimateStateResponse.prototype.getLegacyAway = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setLegacyAway = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional ClimateAction action = 8;
 * @return {!proto.ClimateAction}
 */
proto.ClimateStateResponse.prototype.getAction = function() {
  return /** @type {!proto.ClimateAction} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ClimateAction} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ClimateFanMode fan_mode = 9;
 * @return {!proto.ClimateFanMode}
 */
proto.ClimateStateResponse.prototype.getFanMode = function() {
  return /** @type {!proto.ClimateFanMode} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.ClimateFanMode} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setFanMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional ClimateSwingMode swing_mode = 10;
 * @return {!proto.ClimateSwingMode}
 */
proto.ClimateStateResponse.prototype.getSwingMode = function() {
  return /** @type {!proto.ClimateSwingMode} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.ClimateSwingMode} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setSwingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string custom_fan_mode = 11;
 * @return {string}
 */
proto.ClimateStateResponse.prototype.getCustomFanMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setCustomFanMode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional ClimatePreset preset = 12;
 * @return {!proto.ClimatePreset}
 */
proto.ClimateStateResponse.prototype.getPreset = function() {
  return /** @type {!proto.ClimatePreset} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.ClimatePreset} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setPreset = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string custom_preset = 13;
 * @return {string}
 */
proto.ClimateStateResponse.prototype.getCustomPreset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ClimateStateResponse} returns this
 */
proto.ClimateStateResponse.prototype.setCustomPreset = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClimateCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ClimateCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClimateCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClimateCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    hasMode: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    mode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasTargetTemperature: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    targetTemperature: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    hasTargetTemperatureLow: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    targetTemperatureLow: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    hasTargetTemperatureHigh: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    targetTemperatureHigh: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    hasLegacyAway: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    legacyAway: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    hasFanMode: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    fanMode: jspb.Message.getFieldWithDefault(msg, 13, 0),
    hasSwingMode: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    swingMode: jspb.Message.getFieldWithDefault(msg, 15, 0),
    hasCustomFanMode: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    customFanMode: jspb.Message.getFieldWithDefault(msg, 17, ""),
    hasPreset: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    preset: jspb.Message.getFieldWithDefault(msg, 19, 0),
    hasCustomPreset: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    customPreset: jspb.Message.getFieldWithDefault(msg, 21, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClimateCommandRequest}
 */
proto.ClimateCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClimateCommandRequest;
  return proto.ClimateCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClimateCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClimateCommandRequest}
 */
proto.ClimateCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasMode(value);
      break;
    case 3:
      var value = /** @type {!proto.ClimateMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasTargetTemperature(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetTemperature(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasTargetTemperatureLow(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetTemperatureLow(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasTargetTemperatureHigh(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTargetTemperatureHigh(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasLegacyAway(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegacyAway(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasFanMode(value);
      break;
    case 13:
      var value = /** @type {!proto.ClimateFanMode} */ (reader.readEnum());
      msg.setFanMode(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasSwingMode(value);
      break;
    case 15:
      var value = /** @type {!proto.ClimateSwingMode} */ (reader.readEnum());
      msg.setSwingMode(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasCustomFanMode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomFanMode(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasPreset(value);
      break;
    case 19:
      var value = /** @type {!proto.ClimatePreset} */ (reader.readEnum());
      msg.setPreset(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasCustomPreset(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomPreset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClimateCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClimateCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClimateCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClimateCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getHasMode();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHasTargetTemperature();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTargetTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getHasTargetTemperatureLow();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTargetTemperatureLow();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getHasTargetTemperatureHigh();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getTargetTemperatureHigh();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getHasLegacyAway();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getLegacyAway();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getHasFanMode();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getFanMode();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getHasSwingMode();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getSwingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getHasCustomFanMode();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getCustomFanMode();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getHasPreset();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getPreset();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getHasCustomPreset();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getCustomPreset();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.ClimateCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool has_mode = 2;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional ClimateMode mode = 3;
 * @return {!proto.ClimateMode}
 */
proto.ClimateCommandRequest.prototype.getMode = function() {
  return /** @type {!proto.ClimateMode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ClimateMode} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool has_target_temperature = 4;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasTargetTemperature = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasTargetTemperature = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional float target_temperature = 5;
 * @return {number}
 */
proto.ClimateCommandRequest.prototype.getTargetTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setTargetTemperature = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional bool has_target_temperature_low = 6;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasTargetTemperatureLow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasTargetTemperatureLow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional float target_temperature_low = 7;
 * @return {number}
 */
proto.ClimateCommandRequest.prototype.getTargetTemperatureLow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setTargetTemperatureLow = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional bool has_target_temperature_high = 8;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasTargetTemperatureHigh = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasTargetTemperatureHigh = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional float target_temperature_high = 9;
 * @return {number}
 */
proto.ClimateCommandRequest.prototype.getTargetTemperatureHigh = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setTargetTemperatureHigh = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional bool has_legacy_away = 10;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasLegacyAway = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasLegacyAway = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool legacy_away = 11;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getLegacyAway = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setLegacyAway = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool has_fan_mode = 12;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasFanMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasFanMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional ClimateFanMode fan_mode = 13;
 * @return {!proto.ClimateFanMode}
 */
proto.ClimateCommandRequest.prototype.getFanMode = function() {
  return /** @type {!proto.ClimateFanMode} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.ClimateFanMode} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setFanMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional bool has_swing_mode = 14;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasSwingMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasSwingMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional ClimateSwingMode swing_mode = 15;
 * @return {!proto.ClimateSwingMode}
 */
proto.ClimateCommandRequest.prototype.getSwingMode = function() {
  return /** @type {!proto.ClimateSwingMode} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.ClimateSwingMode} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setSwingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional bool has_custom_fan_mode = 16;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasCustomFanMode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasCustomFanMode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional string custom_fan_mode = 17;
 * @return {string}
 */
proto.ClimateCommandRequest.prototype.getCustomFanMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setCustomFanMode = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional bool has_preset = 18;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasPreset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasPreset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional ClimatePreset preset = 19;
 * @return {!proto.ClimatePreset}
 */
proto.ClimateCommandRequest.prototype.getPreset = function() {
  return /** @type {!proto.ClimatePreset} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.ClimatePreset} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setPreset = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional bool has_custom_preset = 20;
 * @return {boolean}
 */
proto.ClimateCommandRequest.prototype.getHasCustomPreset = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setHasCustomPreset = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional string custom_preset = 21;
 * @return {string}
 */
proto.ClimateCommandRequest.prototype.getCustomPreset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.ClimateCommandRequest} returns this
 */
proto.ClimateCommandRequest.prototype.setCustomPreset = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesNumberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesNumberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesNumberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesNumberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    minValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    maxValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    step: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 10, 0),
    unitOfMeasurement: jspb.Message.getFieldWithDefault(msg, 11, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesNumberResponse}
 */
proto.ListEntitiesNumberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesNumberResponse;
  return proto.ListEntitiesNumberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesNumberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesNumberResponse}
 */
proto.ListEntitiesNumberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinValue(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxValue(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStep(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 10:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnitOfMeasurement(value);
      break;
    case 12:
      var value = /** @type {!proto.NumberMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesNumberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesNumberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesNumberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesNumberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMinValue();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMaxValue();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getStep();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getUnitOfMeasurement();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesNumberResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesNumberResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesNumberResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesNumberResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesNumberResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float min_value = 6;
 * @return {number}
 */
proto.ListEntitiesNumberResponse.prototype.getMinValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setMinValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float max_value = 7;
 * @return {number}
 */
proto.ListEntitiesNumberResponse.prototype.getMaxValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setMaxValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float step = 8;
 * @return {number}
 */
proto.ListEntitiesNumberResponse.prototype.getStep = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setStep = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional bool disabled_by_default = 9;
 * @return {boolean}
 */
proto.ListEntitiesNumberResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional EntityCategory entity_category = 10;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesNumberResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional string unit_of_measurement = 11;
 * @return {string}
 */
proto.ListEntitiesNumberResponse.prototype.getUnitOfMeasurement = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setUnitOfMeasurement = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional NumberMode mode = 12;
 * @return {!proto.NumberMode}
 */
proto.ListEntitiesNumberResponse.prototype.getMode = function() {
  return /** @type {!proto.NumberMode} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.NumberMode} value
 * @return {!proto.ListEntitiesNumberResponse} returns this
 */
proto.ListEntitiesNumberResponse.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NumberStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.NumberStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NumberStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NumberStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    missingState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NumberStateResponse}
 */
proto.NumberStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NumberStateResponse;
  return proto.NumberStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NumberStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NumberStateResponse}
 */
proto.NumberStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissingState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NumberStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NumberStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NumberStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NumberStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMissingState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.NumberStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.NumberStateResponse} returns this
 */
proto.NumberStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float state = 2;
 * @return {number}
 */
proto.NumberStateResponse.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.NumberStateResponse} returns this
 */
proto.NumberStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional bool missing_state = 3;
 * @return {boolean}
 */
proto.NumberStateResponse.prototype.getMissingState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.NumberStateResponse} returns this
 */
proto.NumberStateResponse.prototype.setMissingState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NumberCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.NumberCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NumberCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NumberCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NumberCommandRequest}
 */
proto.NumberCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NumberCommandRequest;
  return proto.NumberCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NumberCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NumberCommandRequest}
 */
proto.NumberCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NumberCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NumberCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NumberCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NumberCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.NumberCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.NumberCommandRequest} returns this
 */
proto.NumberCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float state = 2;
 * @return {number}
 */
proto.NumberCommandRequest.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.NumberCommandRequest} returns this
 */
proto.NumberCommandRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListEntitiesSelectResponse.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesSelectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesSelectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesSelectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesSelectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    optionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesSelectResponse}
 */
proto.ListEntitiesSelectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesSelectResponse;
  return proto.ListEntitiesSelectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesSelectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesSelectResponse}
 */
proto.ListEntitiesSelectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addOptions(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 8:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesSelectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesSelectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesSelectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesSelectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesSelectResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesSelectResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesSelectResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesSelectResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesSelectResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string options = 6;
 * @return {!Array<string>}
 */
proto.ListEntitiesSelectResponse.prototype.getOptionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setOptionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.addOptions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.clearOptionsList = function() {
  return this.setOptionsList([]);
};


/**
 * optional bool disabled_by_default = 7;
 * @return {boolean}
 */
proto.ListEntitiesSelectResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional EntityCategory entity_category = 8;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesSelectResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesSelectResponse} returns this
 */
proto.ListEntitiesSelectResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SelectStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SelectStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SelectStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SelectStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, ""),
    missingState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SelectStateResponse}
 */
proto.SelectStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SelectStateResponse;
  return proto.SelectStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SelectStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SelectStateResponse}
 */
proto.SelectStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMissingState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SelectStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SelectStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SelectStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SelectStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMissingState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.SelectStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SelectStateResponse} returns this
 */
proto.SelectStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.SelectStateResponse.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SelectStateResponse} returns this
 */
proto.SelectStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool missing_state = 3;
 * @return {boolean}
 */
proto.SelectStateResponse.prototype.getMissingState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SelectStateResponse} returns this
 */
proto.SelectStateResponse.prototype.setMissingState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SelectCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SelectCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SelectCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SelectCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SelectCommandRequest}
 */
proto.SelectCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SelectCommandRequest;
  return proto.SelectCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SelectCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SelectCommandRequest}
 */
proto.SelectCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SelectCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SelectCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SelectCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SelectCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.SelectCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.SelectCommandRequest} returns this
 */
proto.SelectCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string state = 2;
 * @return {string}
 */
proto.SelectCommandRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SelectCommandRequest} returns this
 */
proto.SelectCommandRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesLockResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesLockResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesLockResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesLockResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 7, 0),
    assumedState: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    supportsOpen: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    requiresCode: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    codeFormat: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesLockResponse}
 */
proto.ListEntitiesLockResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesLockResponse;
  return proto.ListEntitiesLockResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesLockResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesLockResponse}
 */
proto.ListEntitiesLockResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 7:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAssumedState(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupportsOpen(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequiresCode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodeFormat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesLockResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesLockResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesLockResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesLockResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getAssumedState();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getSupportsOpen();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRequiresCode();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCodeFormat();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesLockResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesLockResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesLockResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesLockResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesLockResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool disabled_by_default = 6;
 * @return {boolean}
 */
proto.ListEntitiesLockResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional EntityCategory entity_category = 7;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesLockResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional bool assumed_state = 8;
 * @return {boolean}
 */
proto.ListEntitiesLockResponse.prototype.getAssumedState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setAssumedState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool supports_open = 9;
 * @return {boolean}
 */
proto.ListEntitiesLockResponse.prototype.getSupportsOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setSupportsOpen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool requires_code = 10;
 * @return {boolean}
 */
proto.ListEntitiesLockResponse.prototype.getRequiresCode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setRequiresCode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string code_format = 11;
 * @return {string}
 */
proto.ListEntitiesLockResponse.prototype.getCodeFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesLockResponse} returns this
 */
proto.ListEntitiesLockResponse.prototype.setCodeFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LockStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.LockStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LockStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LockStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LockStateResponse}
 */
proto.LockStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LockStateResponse;
  return proto.LockStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LockStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LockStateResponse}
 */
proto.LockStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.LockState} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LockStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LockStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LockStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LockStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.LockStateResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LockStateResponse} returns this
 */
proto.LockStateResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional LockState state = 2;
 * @return {!proto.LockState}
 */
proto.LockStateResponse.prototype.getState = function() {
  return /** @type {!proto.LockState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.LockState} value
 * @return {!proto.LockStateResponse} returns this
 */
proto.LockStateResponse.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LockCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.LockCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LockCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LockCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0),
    command: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hasCode: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    code: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LockCommandRequest}
 */
proto.LockCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LockCommandRequest;
  return proto.LockCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LockCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LockCommandRequest}
 */
proto.LockCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {!proto.LockCommand} */ (reader.readEnum());
      msg.setCommand(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LockCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LockCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LockCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LockCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
  f = message.getCommand();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getHasCode();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.LockCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.LockCommandRequest} returns this
 */
proto.LockCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional LockCommand command = 2;
 * @return {!proto.LockCommand}
 */
proto.LockCommandRequest.prototype.getCommand = function() {
  return /** @type {!proto.LockCommand} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.LockCommand} value
 * @return {!proto.LockCommandRequest} returns this
 */
proto.LockCommandRequest.prototype.setCommand = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool has_code = 3;
 * @return {boolean}
 */
proto.LockCommandRequest.prototype.getHasCode = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LockCommandRequest} returns this
 */
proto.LockCommandRequest.prototype.setHasCode = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string code = 4;
 * @return {string}
 */
proto.LockCommandRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.LockCommandRequest} returns this
 */
proto.LockCommandRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListEntitiesButtonResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListEntitiesButtonResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListEntitiesButtonResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesButtonResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uniqueId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    disabledByDefault: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    entityCategory: jspb.Message.getFieldWithDefault(msg, 7, 0),
    deviceClass: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListEntitiesButtonResponse}
 */
proto.ListEntitiesButtonResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListEntitiesButtonResponse;
  return proto.ListEntitiesButtonResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListEntitiesButtonResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListEntitiesButtonResponse}
 */
proto.ListEntitiesButtonResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObjectId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabledByDefault(value);
      break;
    case 7:
      var value = /** @type {!proto.EntityCategory} */ (reader.readEnum());
      msg.setEntityCategory(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceClass(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListEntitiesButtonResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListEntitiesButtonResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListEntitiesButtonResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListEntitiesButtonResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUniqueId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDisabledByDefault();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getEntityCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getDeviceClass();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string object_id = 1;
 * @return {string}
 */
proto.ListEntitiesButtonResponse.prototype.getObjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setObjectId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional fixed32 key = 2;
 * @return {number}
 */
proto.ListEntitiesButtonResponse.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ListEntitiesButtonResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string unique_id = 4;
 * @return {string}
 */
proto.ListEntitiesButtonResponse.prototype.getUniqueId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setUniqueId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string icon = 5;
 * @return {string}
 */
proto.ListEntitiesButtonResponse.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool disabled_by_default = 6;
 * @return {boolean}
 */
proto.ListEntitiesButtonResponse.prototype.getDisabledByDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setDisabledByDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional EntityCategory entity_category = 7;
 * @return {!proto.EntityCategory}
 */
proto.ListEntitiesButtonResponse.prototype.getEntityCategory = function() {
  return /** @type {!proto.EntityCategory} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.EntityCategory} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setEntityCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string device_class = 8;
 * @return {string}
 */
proto.ListEntitiesButtonResponse.prototype.getDeviceClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ListEntitiesButtonResponse} returns this
 */
proto.ListEntitiesButtonResponse.prototype.setDeviceClass = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ButtonCommandRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ButtonCommandRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ButtonCommandRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ButtonCommandRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ButtonCommandRequest}
 */
proto.ButtonCommandRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ButtonCommandRequest;
  return proto.ButtonCommandRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ButtonCommandRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ButtonCommandRequest}
 */
proto.ButtonCommandRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ButtonCommandRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ButtonCommandRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ButtonCommandRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ButtonCommandRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f !== 0) {
    writer.writeFixed32(
      1,
      f
    );
  }
};


/**
 * optional fixed32 key = 1;
 * @return {number}
 */
proto.ButtonCommandRequest.prototype.getKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ButtonCommandRequest} returns this
 */
proto.ButtonCommandRequest.prototype.setKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.EntityCategory = {
  ENTITY_CATEGORY_NONE: 0,
  ENTITY_CATEGORY_CONFIG: 1,
  ENTITY_CATEGORY_DIAGNOSTIC: 2
};

/**
 * @enum {number}
 */
proto.LegacyCoverState = {
  LEGACY_COVER_STATE_OPEN: 0,
  LEGACY_COVER_STATE_CLOSED: 1
};

/**
 * @enum {number}
 */
proto.CoverOperation = {
  COVER_OPERATION_IDLE: 0,
  COVER_OPERATION_IS_OPENING: 1,
  COVER_OPERATION_IS_CLOSING: 2
};

/**
 * @enum {number}
 */
proto.LegacyCoverCommand = {
  LEGACY_COVER_COMMAND_OPEN: 0,
  LEGACY_COVER_COMMAND_CLOSE: 1,
  LEGACY_COVER_COMMAND_STOP: 2
};

/**
 * @enum {number}
 */
proto.FanSpeed = {
  FAN_SPEED_LOW: 0,
  FAN_SPEED_MEDIUM: 1,
  FAN_SPEED_HIGH: 2
};

/**
 * @enum {number}
 */
proto.FanDirection = {
  FAN_DIRECTION_FORWARD: 0,
  FAN_DIRECTION_REVERSE: 1
};

/**
 * @enum {number}
 */
proto.ColorMode = {
  COLOR_MODE_UNKNOWN: 0,
  COLOR_MODE_ON_OFF: 1,
  COLOR_MODE_BRIGHTNESS: 2,
  COLOR_MODE_WHITE: 7,
  COLOR_MODE_COLOR_TEMPERATURE: 11,
  COLOR_MODE_COLD_WARM_WHITE: 19,
  COLOR_MODE_RGB: 35,
  COLOR_MODE_RGB_WHITE: 39,
  COLOR_MODE_RGB_COLOR_TEMPERATURE: 47,
  COLOR_MODE_RGB_COLD_WARM_WHITE: 51
};

/**
 * @enum {number}
 */
proto.SensorStateClass = {
  STATE_CLASS_NONE: 0,
  STATE_CLASS_MEASUREMENT: 1,
  STATE_CLASS_TOTAL_INCREASING: 2
};

/**
 * @enum {number}
 */
proto.SensorLastResetType = {
  LAST_RESET_NONE: 0,
  LAST_RESET_NEVER: 1,
  LAST_RESET_AUTO: 2
};

/**
 * @enum {number}
 */
proto.LogLevel = {
  LOG_LEVEL_NONE: 0,
  LOG_LEVEL_ERROR: 1,
  LOG_LEVEL_WARN: 2,
  LOG_LEVEL_INFO: 3,
  LOG_LEVEL_CONFIG: 4,
  LOG_LEVEL_DEBUG: 5,
  LOG_LEVEL_VERBOSE: 6,
  LOG_LEVEL_VERY_VERBOSE: 7
};

/**
 * @enum {number}
 */
proto.ServiceArgType = {
  SERVICE_ARG_TYPE_BOOL: 0,
  SERVICE_ARG_TYPE_INT: 1,
  SERVICE_ARG_TYPE_FLOAT: 2,
  SERVICE_ARG_TYPE_STRING: 3,
  SERVICE_ARG_TYPE_BOOL_ARRAY: 4,
  SERVICE_ARG_TYPE_INT_ARRAY: 5,
  SERVICE_ARG_TYPE_FLOAT_ARRAY: 6,
  SERVICE_ARG_TYPE_STRING_ARRAY: 7
};

/**
 * @enum {number}
 */
proto.ClimateMode = {
  CLIMATE_MODE_OFF: 0,
  CLIMATE_MODE_HEAT_COOL: 1,
  CLIMATE_MODE_COOL: 2,
  CLIMATE_MODE_HEAT: 3,
  CLIMATE_MODE_FAN_ONLY: 4,
  CLIMATE_MODE_DRY: 5,
  CLIMATE_MODE_AUTO: 6
};

/**
 * @enum {number}
 */
proto.ClimateFanMode = {
  CLIMATE_FAN_ON: 0,
  CLIMATE_FAN_OFF: 1,
  CLIMATE_FAN_AUTO: 2,
  CLIMATE_FAN_LOW: 3,
  CLIMATE_FAN_MEDIUM: 4,
  CLIMATE_FAN_HIGH: 5,
  CLIMATE_FAN_MIDDLE: 6,
  CLIMATE_FAN_FOCUS: 7,
  CLIMATE_FAN_DIFFUSE: 8
};

/**
 * @enum {number}
 */
proto.ClimateSwingMode = {
  CLIMATE_SWING_OFF: 0,
  CLIMATE_SWING_BOTH: 1,
  CLIMATE_SWING_VERTICAL: 2,
  CLIMATE_SWING_HORIZONTAL: 3
};

/**
 * @enum {number}
 */
proto.ClimateAction = {
  CLIMATE_ACTION_OFF: 0,
  CLIMATE_ACTION_COOLING: 2,
  CLIMATE_ACTION_HEATING: 3,
  CLIMATE_ACTION_IDLE: 4,
  CLIMATE_ACTION_DRYING: 5,
  CLIMATE_ACTION_FAN: 6
};

/**
 * @enum {number}
 */
proto.ClimatePreset = {
  CLIMATE_PRESET_NONE: 0,
  CLIMATE_PRESET_HOME: 1,
  CLIMATE_PRESET_AWAY: 2,
  CLIMATE_PRESET_BOOST: 3,
  CLIMATE_PRESET_COMFORT: 4,
  CLIMATE_PRESET_ECO: 5,
  CLIMATE_PRESET_SLEEP: 6,
  CLIMATE_PRESET_ACTIVITY: 7
};

/**
 * @enum {number}
 */
proto.NumberMode = {
  NUMBER_MODE_AUTO: 0,
  NUMBER_MODE_BOX: 1,
  NUMBER_MODE_SLIDER: 2
};

/**
 * @enum {number}
 */
proto.LockState = {
  LOCK_STATE_NONE: 0,
  LOCK_STATE_LOCKED: 1,
  LOCK_STATE_UNLOCKED: 2,
  LOCK_STATE_JAMMED: 3,
  LOCK_STATE_LOCKING: 4,
  LOCK_STATE_UNLOCKING: 5
};

/**
 * @enum {number}
 */
proto.LockCommand = {
  LOCK_UNLOCK: 0,
  LOCK_LOCK: 1,
  LOCK_OPEN: 2
};

goog.object.extend(exports, proto);
