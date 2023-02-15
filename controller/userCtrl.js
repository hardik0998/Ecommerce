const User=require('../models/userModels')

const createUser = async (req,res)=>{
    const email = req.body.email;
    const findUser = await User.findOne({email:email});
    if(!findUser){
        // create new user
        const newUser =await User.create(req.body);
        res.json(newUser)

    }

    else{
        // already exist
        res.json({
            msg:"User Already Exist",
            success:false
        })
    }
}

module.exports = {createUser}


