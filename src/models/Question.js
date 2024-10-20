const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionId: { type: Number, required: true },
  region: { type: String, required: true },
  cycle: { type: Number, required: true },
  questionText: { type: String, required: true },
});

module.exports = mongoose.model('Question', QuestionSchema);
