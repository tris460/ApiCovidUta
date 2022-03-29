const user = require('../models/users');
const userCtrl = {};


userCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) => {
    const newUsr = new user({
        id: req.body.id,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastName: req.body.lastName,
        secondLastName: req.body.secondLastName,
        age: req.body.age,
        allergies: req.body.allergies,
        otherIllnesses: req.body.otherIllnesses,
        career: req.body.career,
        degree: req.body.degree,
        group: req.body.group,
        status: req.body.status
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
        id: req.body.id,
        role: req.body.role,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastName: req.body.lastName,
        secondLastName: req.body.secondLastName,
        age: req.body.age,
        allergies: req.body.allergies,
        otherIllnesses: req.body.otherIllnesses,
        career: req.body.career,
        degree: req.body.degree,
        group: req.body.group,
        status: req.body.status
    }
    //(id, objeto nuevo, si no existe, crealo)
    await user.findByIdAndUpdate(id, {$set: newUsr}, {new:true});
    res.json({
        status: 'Employee update'
    });
};

userCtrl.deleteEmployee = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee deleted'
    });
};

module.exports = userCtrl;