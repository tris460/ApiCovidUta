const illness = require('../models/illness');
const illnessCtrl = {};


illnessCtrl.getUsers = async (req, res) => {
    const ill = await illness.find();
    res.json(ill);
};

illnessCtrl.createIllness = async (req,res) => {
    const newIllness = new user({
        name: req.body.name,
        symptoms: req.body.symptoms,
        notes : req.body.notes,
        status: req.body.status
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
        name: req.body.name,
        symptoms: req.body.symptoms,
        notes : req.body.notes,
        status: req.body.status
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