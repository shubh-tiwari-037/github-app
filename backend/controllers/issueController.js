
const createIssue=(req,res)=>{
    res.send("Issue created");
};

const updateIssueById=(req,res)=>{
    res.send("Issue updated");
};

const deleteIssueById=(req,res)=>{
    res.send("Issue deleted");
};

const getAllIssue=(req,res)=>{
    res.send("All Issue fateched");
};

const getIssueById=(req,res)=>{
    res.send("Issue Detailed fatched")
}

module.exports={
   createIssue, 
   updateIssueById,
   deleteIssueById,
   getAllIssue,
   getIssueById
};