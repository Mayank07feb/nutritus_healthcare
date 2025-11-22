const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const seoData = require('./seoData'); // centralized meta data

const app = express();
const PORT = 3000;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // default layout

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// ---------------------
// MAIN PAGES (ONLY THESE 5)
// ---------------------

// Home
app.get('/', (req, res) => res.render('index', seoData.home));

// About Us
app.get('/about', (req, res) => res.render('about', seoData.about));

// Products
app.get('/products', (req, res) => res.render('products', seoData.products));

// Lab Reports
app.get('/lab-reports', (req, res) => res.render('lab-reports', seoData.lab_reports));

// Blogs
app.get('/blogs', (req, res) => res.render('blogs', seoData.blogs));

// Contact Us
app.get('/contact', (req, res) => res.render('contact', seoData.contact));

// ---------------------
// 404 Page
// ---------------------
app.use((req, res) => {
  res.status(404).render('404', {
    meta_title: 'Page Not Found',
    meta_description: 'Oops! The page you are looking for does not exist.'
  });
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
