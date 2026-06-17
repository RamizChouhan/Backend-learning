const express = require('express');
const {handleGetAllUsers,handleCreateNewUser,handleUpdateUserById,handleDeleteUserById} = require("../Controllers/user");

const router = express.Router();

router.route("/").
get( handleGetAllUsers)
post(handleCreateNewUser);

router.
   route("/:id")
   .patch(handleUpdateUserById)
   .delete(handleDeleteUserById);

module.exports = router;