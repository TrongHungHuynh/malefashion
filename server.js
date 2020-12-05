if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const shopRouter = require('./routes/shop');
const productRouter = require('./routes/product');
const aboutRouter = require('./routes/about');
const blogRouter = require('./routes/blog');
const contactRouter = require('./routes/contact');
const checkoutRouter = require('./routes/checkout');
const cartRouter = require('./routes/cart');

// Set public static folder
app.use(express.static(__dirname + '/public'));

// Use view engine
const expressHbs = require('express-handlebars');
const hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Set database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// Set routers
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/shop', shopRouter);
app.use('/product', productRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/contact', contactRouter);
app.use('/checkout', checkoutRouter);
app.use('/cart', cartRouter);

// Set server port & start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
    console.log('Server is running at port ' + app.get('port'));
});