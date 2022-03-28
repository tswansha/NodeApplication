//request express modules 
const express= require('express')
//Create express app
const app=express()
//Set up experss server port
const port=3000

//Import tasks from ./Router/task.js 
const task=require('./Routers/Task')

//Middleware
//app.use(express.json())

//Route 
app.get('/',(req,res)=>
{
    res.send('Task Manager app')

})

//bind task /api/v1/tasks to express application 
app.use('/api/v1/tasks',task)

//app listning via port 3000 
app.listen(port,console.log(`Server is listining via port ${port}`))

console.log('Task Manager App')
