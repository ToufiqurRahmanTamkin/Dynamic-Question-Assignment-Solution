const cron = require('node-cron');
const redisClient = require('../config/cache');
const CycleConfig = require('../models/CycleConfig');

//Invalidate cache and
//reset at the start of each cycle
const resetCache = async () => {
  const configs = await CycleConfig.find({});
  configs.forEach(async (config) => {
    await redisClient.del(config.region);
    console.log(`Cache reset for region: ${config.region}`);
  });
};

//Schedule a cron job to run
//at 7 PM SGT on Mondays (cycle reset time)
cron.schedule('0 19 * * 1', resetCache, {
  timezone: 'Asia/Singapore',
});
