const express = require('express');
const morgan = require('morgan');
const mongoose=require('mongoose');
const Blog = require('./models/blog');
//express app
const app = express();

//coonect to mongodb
const dbURI="mongodb+srv://priyanka:priya1234@node.harasfs.mongodb.net/node";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result)=>app.listen(3000))
  .catch((err)=>console.log(err));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');if we give ejs files in another folder like myviews


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog3',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('629f5acab97ba7530816b28b')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  //res.sendFile('./views/index.html', { root: __dirname });
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  //res.sendFile('./views/about.html', { root: __dirname });
  res.render('about',{title:'About'});
});

// redirects
//app.get('/about-us', (req, res) => {
   // res.redirect('/about');
  //});
  app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'create a new blog'});
  });

  app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });

  // 404 page
  app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404',{title:'404'});
  });