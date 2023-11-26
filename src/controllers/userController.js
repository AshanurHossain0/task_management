const userModel = require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');

const register = async function ( req , res ) {

    //validators
    const validName = (name) => {
        return (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(name));
    }
    const validEmail = (email) => {
        return (/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(email));
    }

    //Actual code
    try {
        const data = req.body;
        let {name, email, password} = data;

        if (Object.keys(data).length == 0) {
            return res.status(400).send({ status: false, message: "please provide user data!" });
        }

        //name
        if (!name || !name.trim()) {
            return res.status(400).send({ status: false, message: "please provide name!" });
        }
        name=name.trim();

        if (!validName(name)) {
            return res.status(400).send({ status: false, message: "please provide a valid name" });
        }

        //email
        if (!email || !email.trim()) {
            return res.status(400).send({ status: false, message: "please provide a email" });
        }
        email=email.trim().toLowerCase();
        if (!validEmail(email)) {
            return res.status(400).send({ status: false, message: "please provide a valid email" });
        }

        const existEmail = await userModel.findOne({email});

        if (existEmail) {
            return res.status(400).send({ status: false, message: "email already exist!" });
        }

        //password
        if (!password || !password.trim()) {
            return res.status(400).send({ status: false, message: "please provide a password" });
        }
        password=password.trim();
        const hashedPass = bcrypt.hashSync(password,8);

        //user creation
        let newUser = await userModel.create({name,email,password:hashedPass});

        res.status(201).send({ status: true, message: "Success", data: newUser });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
}

const login = async function (req, res) {
    try {
        let { email, password } = req.body;

        //checking presence of email and password in request
        if (!email || !password) {
            return res.status(400).send({ status: false, msg: "email and password are mandatory" })
        }

        email=email.trim().toLowerCase();
        password=password.trim();

        //checking user existance in database with email
        let user = await userModel.findOne({ email})
        if (!user) {
            return res.status(404).send({ status: false, msg: "no user found with this email"})
        }

        const isCorrectPassword=bcrypt.compareSync(password, user.password)
        if(! isCorrectPassword) return res.status(400).send({status:false,message:"incorrect password"})

        let payload = {
            exp: Math.floor(Date.now() / 1000) + 30*24*3600,
            iat: Date.now(), userId: user["_id"],
        };
        let token = jwt.sign(payload, "task_manage23");
        return res.status(200).send({ status: true, token})
    }
    catch(err){
        res.status(500).send({status:false, message:err.message})
    }
}

module.exports={register,login};