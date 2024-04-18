const UserModel = require('../../models/user-model');
const authModule = require('../../middlewares/auth');

exports.getAllUsers = async (req, res) => {
    try{
        const data = await UserModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.createUser = async (req, res) => {
    const data = new UserModel({
        name: req.body.name,
        age: req.body.age,
        country: req.body.country,
        email : req.body.email,
        gender : req.body.gender
    })

    try {
        const dataToSave = await data.save();
        console.log(dataToSave)
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getUserById = async (req, res) => {
    try{
        const data = await UserModel.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await UserModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await UserModel.findByIdAndDelete(id)
        res.send(`User ${data.name} has been removed..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.getUserByEmail = async (req,res) => {
    try{
        const userByEmail = await UserModel.find({email: req.params.email});
        if(userByEmail.length > 0){
            const [user] = userByEmail;
            res.json({
                userDetails : userByEmail,
                authToken : authModule.generateAuthToken(user._id)
            })
        }
        else {
            res.status(404).json({message: 'User not found', userDetails : []})
        }
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
