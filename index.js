const express = require('express')
const app = express()
app.use(express.json())
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
]

app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/suma/courses', (req, res) => {
    res.send(courses);
});
// app.get('/suma/courses/:id', (req,res) =>{
//   const course =  courses.find( c => c.id === parseInt(req.params.id))
//   if (!course) res.status(404).send('not found')
//   res.send(course)
// })
app.post('/suma/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('running on port...'));