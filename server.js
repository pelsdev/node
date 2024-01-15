const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/'))

const tasks = [
    "hello there",
    "hey here",
    "how far you"
]
app.post('/save-task',(req, res) => {
const taskObj = req.body
tasks.push(taskObj.task)
console.log("savedTask: ", taskObj.task)
res.send({
    savedTask: taskObj.task
})
} )

app.get('/get-tasks', (req, res) =>{
    

    res.send({tasks: tasks})
})


app.listen(3000, function(){
    console.log("app listening on port 3000")
})

