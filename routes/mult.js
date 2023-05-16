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

    const schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                minLength: 2,
                maxLength: 20
            },
            surname: {
                type: 'string',
                maxLength: 20
            },
            age: {
                type: 'integer'   
            },
            email: {
                type: 'string',
                pattern: '^[a-z0-9_-]+@[a-z0-9]+\.[a-z]{2,6}$'
            },
            phone: {
                type: 'string',
                pattern: '^\\+380[0-9]{9}$'
            }
        },
        required: ['name', 'email', 'phone'],
        additionalProperties: false,
    };
    let data = req.body;

    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid){
        res.json(validate.errors[0].message);
    }else{
        res.json('validated!');
    }

});


module.exports = router;