//request express modules 
const express= require('express')
//Setup router 
const router=express.Router()

//Task router from /Controllers/Task
const {GetAllTask,CreateTask,GetTaskDetails,UpdateTask,DeleteTask}=require('../Controllers/Task')



//Execute Task
router.route('/').get(GetAllTask).post(CreateTask)
//Execute Task with id
router.route('/:id').get(GetTaskDetails).patch(UpdateTask).delete(DeleteTask)




module.exports=router