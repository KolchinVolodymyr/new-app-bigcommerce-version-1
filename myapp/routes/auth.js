const express = require('express'),
router = express.Router(),
BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
    clientId: 'dycanejti0ozmx9t99yhwzd038sph0q',
    secret: 'ba846e1b950323d374f38877ab29988d45ec258f76cba3d776b381248ff8a3dd',
    callback: 'https://761d-188-230-124-168.ngrok.io/auth',
    responseType: 'json'
});

router.get('/', (req, res, next) => {
    bigCommerce.authorize(req.query)
        .then(data => console.log(data))
        .then(data => res.render('auth', { title: 'Authorized!' }))
        .then(() => {
            console.log('qwerty');
            bigCommerce.get('/products')
                .then(data => {
                    console.log("qqqqq", data);
                    // Catch any errors, or handle the data returned
                });

        })
        .catch(err => console.log('err', err));
});
module.exports = router;