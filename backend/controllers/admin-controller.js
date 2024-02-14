import Admin from "../models/Admin";

export const addAdmin = async (re,res,next) => {
    const { email, password} = req.body;
    if (
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
      ) {
        return res.status(422).json({ message: "Invalid Inputs" });
      }

    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({ email });
    } catch (err){
        return console.log(err);
    }

    if(existingAdmin) {
        return res.status(400).json({message: "Admin already exists"});

    }

    let admin;
    const hashedPassword = new hashedPassword;
    try {
        admin = new Admin ({ email, hashedPassword});
        admin = await admin.save();
    } catch (err){
        return console.log(err);
    }
    return res.status(201).json({ admin });
};

export const adminLogin = async(req,res,next) => { 
    const { email, password } = req.body;
    if (
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
      ) {
        return res.status(422).json({ message: "Invalid Inputs" });
      }

      
};