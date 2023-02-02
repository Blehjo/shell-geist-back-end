const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// router.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, Content-Type, Accept"
//   );
//   next();
// });

router.use('/api', apiRoutes);
router.use('/', homeRoutes)

module.exports = router;