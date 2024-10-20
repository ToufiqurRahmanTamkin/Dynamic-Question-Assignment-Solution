const Question = require('../models/Question');
const CycleConfig = require('../models/CycleConfig');
const redisClient = require('../config/cache');

const getCurrentCycle = (start_time, cycle_duration) => {
  const now = new Date();
  const timeDiff = now - new Date(start_time);
  const cycleInMilliseconds = cycle_duration * 24 * 60 * 60 * 1000;
  return Math.floor(timeDiff / cycleInMilliseconds) + 1;
};

const getQuestionForCycle = async (region) => {
  const cachedQuestion = await redisClient.get(region);
  if (cachedQuestion) {
    return JSON.parse(cachedQuestion);
  }

  const cycleConfig = await CycleConfig.findOne({ region });
  if (!cycleConfig) throw new Error(`No cycle configuration for region: ${region}`);

  const currentCycle = getCurrentCycle(cycleConfig.start_time, cycleConfig.cycle_duration);

  const question = await Question.findOne({ region, cycle: currentCycle });
  if (!question) throw new Error('No question assigned for this cycle.');

  await redisClient.set(region, JSON.stringify(question), { EX: cycleConfig.cycle_duration * 24 * 60 * 60 });

  return question;
};

module.exports = { getQuestionForCycle };
