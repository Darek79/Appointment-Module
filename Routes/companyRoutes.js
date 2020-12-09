const { Router } = require('express');
const router = Router();

const { createCompany } = require('./../Controller/companyController');

router.route('/create').post(createCompany);

module.exports = router;
