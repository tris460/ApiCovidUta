const express = require('express');
const router = express.Router();

const illCtrl = require('../controllers/illness.controller');

router.get('/', illCtrl.getIllness);

router.post('/',illCtrl.createIllness);

router.get('/:id',illCtrl.getIllness);

router.put('/:id',illCtrl.editIllness);

router.delete('/:id',illCtrl.deleteIllness);

module.exports = router;