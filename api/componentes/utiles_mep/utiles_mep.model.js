'use strict';
const mongoose = require('mongoose');

let schema_util_mep = new mongoose.Schema(
  {
    util : {type : String, required : true},
    descripcion : {type : String, required: true},
    cantidad : {type : String, required : true},
    nivel : {type: String, required : true}
  }
);

module.exports = mongoose.model('util_mep', schema_util_mep);
