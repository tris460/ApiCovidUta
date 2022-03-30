const express = require('express');
const router = express.Router();

const illnessCtrl = require('../controllers/illness.controller');

router.get('/', illnessCtrl.getIllness);

router.post('/',illnessCtrl.createIllness);

router.get('/:id',illnessCtrl.getIllness);

router.put('/:id',illnessCtrl.editIllness);

router.delete('/:id',illnessCtrl.deleteIllness);

module.exports = router;