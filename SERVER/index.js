const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Blog = require('./module')
const dbURI = require('./config')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.get('/', ((req, res) => {
    res.send('this is home page!')
}))

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(9000))
    .catch((err) => console.log(err))
// rout

app.get('/get-users', (req, res)=> {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => res.send(err))
})

app.get('/single-user', (req, res)=> {
    Blog.findById('5fda058e1b6b2d6065bec642')
        .then((result) => res.send(result))
        .catch((err) => res.send(err))
})

app.post('/add-user', (req, res)=> {
    const blogs = new Blog({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        profession: req.body.profession
    });

    blogs.save()
        .then(result => res.send(result))
        .catch(err => res.send(err))
    res.redirect('/get-users')

})


// const port = process.env.PORT || 3000;
// app.listen(port, ()=> {
//     console.log(`listening to port: ${port}`)
// })
