

const createRepository=(req,res)=>{
    res.send("Repositery created");
};

const getAllRepositories=(req,res)=>{
    res.send("All Repositories fetched !!!");
};

const fetchRepositoryById=(req,res)=>{
    res.send(" Repository detailed fetched !!!");
};

const fetchRepositoryByName=(req,res)=>{
    res.send(" Repository Detailes fetched !!!");
};

const fetchRepositoriesForCurrentUser=(req,res)=>{
    res.send(" Repository for logged in user Fetched!!!");
};


const updateRepositoryById=(req,res)=>{
    res.send(" repository updated !!!");
};

const toggleVisibilityById=(req,res)=>{
    res.send(" visibility Toggled !!!");
};

const deleteRepositoryById=(req,res)=>{
    res.send(" repository Deleted !!!");
};


module.exports={
createRepository,
getAllRepositories,
fetchRepositoryById,
fetchRepositoryByName,
fetchRepositoriesForCurrentUser,
updateRepositoryById,
toggleVisibilityById,
deleteRepositoryById

}