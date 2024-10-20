const { getQuestionForCycle } = require('../services/questionService');

const getQuestion = async (req, res) => {
  try {
    const region = req.params.region;
    const question = await getQuestionForCycle(region);
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getQuestion };
