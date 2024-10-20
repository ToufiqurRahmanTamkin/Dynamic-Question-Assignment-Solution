const mongoose = require('mongoose');

const CycleConfigSchema = new mongoose.Schema({
  region: { type: String, required: true },
  cycle_duration: { type: Number, required: true },
  start_time: { type: Date, required: true },
});

module.exports = mongoose.model('CycleConfig', CycleConfigSchema);
