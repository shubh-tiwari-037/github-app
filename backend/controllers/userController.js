
const getAllUsers=(req,res)=>{
    res.send("All users fatched");
};

const signup=(req,res)=>{
    res.send("signup ");
}

const login=(req,res)=>{
    res.send("login in ");
}

const getUserProfile=(req,res)=>{
    res.send("Profile fetched");
}

const updateUserProfile=(req,res)=>{
    res.send("profile updated");
}

const deleteUserProfile=(req,res)=>{
    res.send("deleted user profile");
}

module.exports={
getAllUsers,
signup,
login,
updateUserProfile,
deleteUserProfile,
getUserProfile
};