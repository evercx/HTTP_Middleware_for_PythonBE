

const config = require('config');
const router = require('koa-router')();


const req_model_controller = require('../controllers/request_model_controller');

// router.prefix(config.get("api_url"));

router.post('/api/file', req_model_controller.request_model);



module.exports = router;