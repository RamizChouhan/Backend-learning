

const User = require("../Models/Users");

console.log(User);
async function  handleGetAllUsers(req,res) {
     const allDBusers = await User.find({});
     console.log(allDBusers);
    const html = `<ul>

        ${allDBusers.map((user) => `<li>${user.firstName}</li><br>
        <li>${user.lastName}</li><li>${user.email}</li>`).join("")}
     </ul>
    `
    return res.status(200).send(html);

}


async function handleCreateNewUser(req,res) {
        console.log(req.body);
    const body = req.body;
   if(!body.firstName||
      !body.lastName||
      !body.email||
      !body.gender||
      !body.jobTitle
    ){
       return res.status(400).json({msg:"All Fields Are required"});
    }

    const result = await User.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        gender:body.gender,
        jobTitle:body.jobTitle,
    });

    console.log("result :",result);
    return res.status(201).json({msg:"success"});
}

async function handleUpdateUserById(req,res){
       const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body, { new: true });
    return res.status(200).send({ "msg": "SuccessFull" ,updatedUser});
}

async function handleDeleteUserById(req,res){
    
    await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            "Msg": "Successfully Deleted"
        });
}
module.exports = {
     handleGetAllUsers,
     handleCreateNewUser,
     handleUpdateUserById,
     handleDeleteUserById
}