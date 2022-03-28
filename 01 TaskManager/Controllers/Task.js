//Create controller function getAllTask
const GetAllTask=(req,res)=>
{
    res.send("All Items from controls ")
}

const CreateTask=(req,res)=>
{
    res.send("Task Created Successfully ")
}

const GetTaskDetails=(req,res)=>
{
    res.send("Task Detail Accessed")
}

const UpdateTask=(req,res)=>
{
    res.send("Update Task  Successfully")
}

const DeleteTask=(req,res)=>
{
    res.send("Delete Task  Successfully")
}



module.exports=
{
    GetAllTask,
    CreateTask,
    GetTaskDetails,
    UpdateTask,
    DeleteTask,
}