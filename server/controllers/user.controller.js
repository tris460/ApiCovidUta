const user = require('../models/users');
const userCtrl = {};


userCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) => {
    const newUsr = new user({
        _id: req.body._id,
        strRol: req.body.strRol,
        strEmail: req.body.strEmail,
        strPassword: req.body.strPassword,
        strName: req.body.strName,
        strLastName: req.body.strLastName,
        strSecondLastName: req.body.strSecondLastName,
        intAge: req.body.intAge,
        arrAllergies: req.body.arrAllergies,
        arrPreviousIllnesses: req.body.arrPreviousIllnesses,
        strCareer: req.body.strCareer,
        intGrade: req.body.intGrade,
        chaGroup: req.body.chaGroup,
    });
    await newUsr.save();
    res.json({
       'status' : 'User saved'
    });
    console.log(req.body);
};

userCtrl.getUser = async (req,res) => {
    const find = await user.findById(req.params.id);
    res.json(find);
};

userCtrl.editEmployee = async (req,res) => {
    const { id } = req.params;
    const newUsr = {
        _id: req.body._id,
        strR: req.body.strRol,
        strEmail: req.body.strEmail,
        strPassword: req.body.strPassword,
        strName: req.body.strName,
        strLastName: req.body.strLastName,
        strSecondLastName: req.body.strSecondLastName,
        intAge: req.body.intAge,
        arrAllergies: req.body.arrAllergies,
        arrPreviousIllnesses: req.body.arrPreviousIllnesses,
        strCareer: req.body.strCareer,
        intGrade: req.body.intGrade,
        chaGroup: req.body.chaGroup,
    }
    //(id, objeto nuevo, si no existe, crealo)
    await user.findByIdAndUpdate(id, {$set: newUsr}, {new:true});
    res.json({
        status: 'User updated'
    });
};

userCtrl.deleteEmployee = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'User deleted'
    });
};

module.exports = userCtrl;