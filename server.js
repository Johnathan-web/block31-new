const express = require('express');
const app = express();
const employees = require('./employees');

app.use(express.json());

app.get('/', async(req, res, next) => {
    res.status(201).send('Hello Employees!');
})

app.get('/employees', async(req, res, next) => {
    res.status(200).json(employees);
})
app.get('/employees/:id', async(req, res, next) =>{
    const {id} =req.params;
    try {
        const employeeWithId = employees.filter((employee)=>employee.id === id)
        res.status(200).json(employeeWithId)

    }catch(err){
        res.status(404).send('couldnt find employee with that id')
    }
})
app.get('/employees/random', async(req,res,next) => {
    const randomId = Math.floor(Math.random()* employees.length)
    const randomEmployee = employees.find((employee) => employee.id === randomId)
    res.status(200).send(randomEmployee);
})


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})