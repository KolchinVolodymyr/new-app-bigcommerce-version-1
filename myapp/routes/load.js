const express = require('express'),
router = express.Router(),
BigCommerce = require('node-bigcommerce');
const bigCommerce = new BigCommerce({
    secret: 'ba846e1b950323d374f38877ab29988d45ec258f76cba3d776b381248ff8a3dd',
    responseType: 'json'
});

router.get('/', (req, res, next) => {
try {
//c6ooumlp86415onfhwl8gv2mjcqd0dk
        bigCommerce.get('/products')
            .then(data => {
                console.log("qqqqq", data);
                // Catch any errors, or handle the data returned
            });
    console.log("req.query", req.query)
    const data = bigCommerce.verify(req.query['signed_payload']);
//    console.log('data', data);
    res.render('welcome', { title: 'Welcome!'});
} catch (err) {
    next(err);
}
});

module.exports = router;