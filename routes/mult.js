const express = require('express');
const multer  = require('multer');
const path = require('path');

const pathUp = path.join(__dirname + '../public/uploads');
const upload = multer({ dest: pathUp });

const Ajv = require('ajv');
const router = express.Router();
const ajv = new Ajv();

router.get('/', (req, res) => {
    
    res.render('mult');
});

router.post('/personal', upload.none(), (req, res) => {

    console.log(req.body);
    //const dataFF = req.body;
    res.json({status: 'ok'})

});


module.exports = router;