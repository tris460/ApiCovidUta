const illness = require('../models/illness');
const illnessCtrl = {};


illnessCtrl.getIllnesses = async (req, res) => {
    const ill = await illness.find();
    res.json(ill);
};

illnessCtrl.createIllness = async (req,res) => {
    const newIllness = new illness({
        idUser: req.body.idUser,
        strDate: req.body.strDate,
        strName: req.body.strName,
        arrSymptoms: req.body.arrSymptoms,
        intStatus: req.body.intStatus,
        strNotes : req.body.strNotes,
    });
    await newIllness.save();
    res.json({
       'status' : 'Illness saved'
    });
    console.log(req.body);
};

illnessCtrl.getIllness = async (req,res) => {
    const find = await illness.findById(req.params.id);
    res.json(find);
};

illnessCtrl.editIllness = async (req,res) => {
    const { id } = req.params;
    const newIllness = {
        idUser: req.body.idUser,
        strDate: req.body.strDate,
        strName: req.body.strName,
        arrSymptoms: req.body.arrSymptoms,
        intStatus: req.body.intStatus,
        strNotes : req.body.strNotes,
    }
    //(id, new object, if it doesn't exist create it)
    await illness.findByIdAndUpdate(id, {$set: newIllness}, {new:true});
    res.json({
        status: 'Illness updated'
    });
};

illnessCtrl.deleteIllness = async (req,res) => {
    await illness.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Illness deleted'
    });
};

module.exports = illnessCtrl;