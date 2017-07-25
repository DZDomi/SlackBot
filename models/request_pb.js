/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ledmodule.GifRequest', null, global);
goog.exportSymbol('proto.ledmodule.PictureRequest', null, global);
goog.exportSymbol('proto.ledmodule.Request', null, global);
goog.exportSymbol('proto.ledmodule.Request.Action', null, global);
goog.exportSymbol('proto.ledmodule.TextRequest', null, global);
goog.exportSymbol('proto.ledmodule.VideoRequest', null, global);

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
proto.ledmodule.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledmodule.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ledmodule.Request.displayName = 'proto.ledmodule.Request';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledmodule.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.ledmodule.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledmodule.Request} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ledmodule.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getField(msg, 1),
    sender: jspb.Message.getField(msg, 2),
    textrequest: (f = msg.getTextrequest()) && proto.ledmodule.TextRequest.toObject(includeInstance, f),
    picturerequest: (f = msg.getPicturerequest()) && proto.ledmodule.PictureRequest.toObject(includeInstance, f),
    gifrequest: (f = msg.getGifrequest()) && proto.ledmodule.GifRequest.toObject(includeInstance, f),
    videorequest: (f = msg.getVideorequest()) && proto.ledmodule.VideoRequest.toObject(includeInstance, f)
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
 * @return {!proto.ledmodule.Request}
 */
proto.ledmodule.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledmodule.Request;
  return proto.ledmodule.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledmodule.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledmodule.Request}
 */
proto.ledmodule.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ledmodule.Request.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 3:
      var value = new proto.ledmodule.TextRequest;
      reader.readMessage(value,proto.ledmodule.TextRequest.deserializeBinaryFromReader);
      msg.setTextrequest(value);
      break;
    case 4:
      var value = new proto.ledmodule.PictureRequest;
      reader.readMessage(value,proto.ledmodule.PictureRequest.deserializeBinaryFromReader);
      msg.setPicturerequest(value);
      break;
    case 5:
      var value = new proto.ledmodule.GifRequest;
      reader.readMessage(value,proto.ledmodule.GifRequest.deserializeBinaryFromReader);
      msg.setGifrequest(value);
      break;
    case 6:
      var value = new proto.ledmodule.VideoRequest;
      reader.readMessage(value,proto.ledmodule.VideoRequest.deserializeBinaryFromReader);
      msg.setVideorequest(value);
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
proto.ledmodule.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledmodule.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledmodule.Request} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ledmodule.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ledmodule.Request.Action} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTextrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ledmodule.TextRequest.serializeBinaryToWriter
    );
  }
  f = message.getPicturerequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ledmodule.PictureRequest.serializeBinaryToWriter
    );
  }
  f = message.getGifrequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ledmodule.GifRequest.serializeBinaryToWriter
    );
  }
  f = message.getVideorequest();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ledmodule.VideoRequest.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.ledmodule.Request.Action = {
  TEXT: 1,
  PICTURE: 2,
  GIF: 3,
  VIDEO: 4
};

/**
 * required Action action = 1;
 * @return {!proto.ledmodule.Request.Action}
 */
proto.ledmodule.Request.prototype.getAction = function() {
  return /** @type {!proto.ledmodule.Request.Action} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/** @param {!proto.ledmodule.Request.Action} value */
proto.ledmodule.Request.prototype.setAction = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.ledmodule.Request.prototype.clearAction = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.Request.prototype.hasAction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string sender = 2;
 * @return {string}
 */
proto.ledmodule.Request.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ledmodule.Request.prototype.setSender = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.ledmodule.Request.prototype.clearSender = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.Request.prototype.hasSender = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TextRequest textRequest = 3;
 * @return {?proto.ledmodule.TextRequest}
 */
proto.ledmodule.Request.prototype.getTextrequest = function() {
  return /** @type{?proto.ledmodule.TextRequest} */ (
    jspb.Message.getWrapperField(this, proto.ledmodule.TextRequest, 3));
};


/** @param {?proto.ledmodule.TextRequest|undefined} value */
proto.ledmodule.Request.prototype.setTextrequest = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ledmodule.Request.prototype.clearTextrequest = function() {
  this.setTextrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.Request.prototype.hasTextrequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional PictureRequest pictureRequest = 4;
 * @return {?proto.ledmodule.PictureRequest}
 */
proto.ledmodule.Request.prototype.getPicturerequest = function() {
  return /** @type{?proto.ledmodule.PictureRequest} */ (
    jspb.Message.getWrapperField(this, proto.ledmodule.PictureRequest, 4));
};


/** @param {?proto.ledmodule.PictureRequest|undefined} value */
proto.ledmodule.Request.prototype.setPicturerequest = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.ledmodule.Request.prototype.clearPicturerequest = function() {
  this.setPicturerequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.Request.prototype.hasPicturerequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional GifRequest gifRequest = 5;
 * @return {?proto.ledmodule.GifRequest}
 */
proto.ledmodule.Request.prototype.getGifrequest = function() {
  return /** @type{?proto.ledmodule.GifRequest} */ (
    jspb.Message.getWrapperField(this, proto.ledmodule.GifRequest, 5));
};


/** @param {?proto.ledmodule.GifRequest|undefined} value */
proto.ledmodule.Request.prototype.setGifrequest = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.ledmodule.Request.prototype.clearGifrequest = function() {
  this.setGifrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.Request.prototype.hasGifrequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional VideoRequest videoRequest = 6;
 * @return {?proto.ledmodule.VideoRequest}
 */
proto.ledmodule.Request.prototype.getVideorequest = function() {
  return /** @type{?proto.ledmodule.VideoRequest} */ (
    jspb.Message.getWrapperField(this, proto.ledmodule.VideoRequest, 6));
};


/** @param {?proto.ledmodule.VideoRequest|undefined} value */
proto.ledmodule.Request.prototype.setVideorequest = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.ledmodule.Request.prototype.clearVideorequest = function() {
  this.setVideorequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.Request.prototype.hasVideorequest = function() {
  return jspb.Message.getField(this, 6) != null;
};



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
proto.ledmodule.TextRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledmodule.TextRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ledmodule.TextRequest.displayName = 'proto.ledmodule.TextRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledmodule.TextRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ledmodule.TextRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledmodule.TextRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ledmodule.TextRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getField(msg, 1)
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
 * @return {!proto.ledmodule.TextRequest}
 */
proto.ledmodule.TextRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledmodule.TextRequest;
  return proto.ledmodule.TextRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledmodule.TextRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledmodule.TextRequest}
 */
proto.ledmodule.TextRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.ledmodule.TextRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledmodule.TextRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledmodule.TextRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ledmodule.TextRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string text = 1;
 * @return {string}
 */
proto.ledmodule.TextRequest.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ledmodule.TextRequest.prototype.setText = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.ledmodule.TextRequest.prototype.clearText = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ledmodule.TextRequest.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};



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
proto.ledmodule.PictureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledmodule.PictureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ledmodule.PictureRequest.displayName = 'proto.ledmodule.PictureRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledmodule.PictureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ledmodule.PictureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledmodule.PictureRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ledmodule.PictureRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ledmodule.PictureRequest}
 */
proto.ledmodule.PictureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledmodule.PictureRequest;
  return proto.ledmodule.PictureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledmodule.PictureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledmodule.PictureRequest}
 */
proto.ledmodule.PictureRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ledmodule.PictureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledmodule.PictureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledmodule.PictureRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ledmodule.PictureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.ledmodule.GifRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledmodule.GifRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ledmodule.GifRequest.displayName = 'proto.ledmodule.GifRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledmodule.GifRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ledmodule.GifRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledmodule.GifRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ledmodule.GifRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ledmodule.GifRequest}
 */
proto.ledmodule.GifRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledmodule.GifRequest;
  return proto.ledmodule.GifRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledmodule.GifRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledmodule.GifRequest}
 */
proto.ledmodule.GifRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ledmodule.GifRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledmodule.GifRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledmodule.GifRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ledmodule.GifRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.ledmodule.VideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledmodule.VideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ledmodule.VideoRequest.displayName = 'proto.ledmodule.VideoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledmodule.VideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ledmodule.VideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledmodule.VideoRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ledmodule.VideoRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.ledmodule.VideoRequest}
 */
proto.ledmodule.VideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledmodule.VideoRequest;
  return proto.ledmodule.VideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledmodule.VideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledmodule.VideoRequest}
 */
proto.ledmodule.VideoRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ledmodule.VideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledmodule.VideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledmodule.VideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ledmodule.VideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.ledmodule);
