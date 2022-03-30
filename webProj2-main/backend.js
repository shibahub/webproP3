/* Import express, path, body-parser  */
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const session = require('express-session');
var bodyParser = require('body-parser');
app.use(express.json());
var cors=require('cors');


const path = require('path');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
//
//--------------------------

app.post('/auth',cors(), function (request, response) {
    var username = request.body.username;
    var password = request.body.password;

    //res.jsonp({success : true})
    //if("SELECT* FROM user WHERE urole ='user'")

    if (username && password) {
        connection.query('SELECT * FROM user WHERE username = ? AND pword = ?', [username, password], function (error, results, fields) {
            if (results.length > 0) {
                if (results[0].urole === 'admin') {
                    request.session.loggedin = true;
                    request.session.username = username;

                    //alert("welcome");

                    //
                    console.log(results);
                    console.log(`Welcome User: ${username}`);
                    authUser(request, response, results[0].urole)
                    response.redirect('/admin');

                } else {
                    request.session.loggedin = true;
                    request.session.username = username;

                    //alert("welcome");

                    //
                    console.log(results);
                    console.log(`Welcome User: ${username}`);
                    authUser(request, response, results[0].urole)
                    response.redirect('/homepage');

                }


            } else {
                console.log('Incorrect Username and/or Password!');
                response.redirect('/auth-alert');
            }
            response.end();

        });

    } else {
        console.log('Please enter Username and Password!');
        response.redirect('/login');
        //response.end();
    }
});

const route = express.Router();

app.use(express.static(path.join(__dirname + "/assets")));
app.use("/", route);;
//app.set('')
const mysql = require('mysql2');
const {
    connect
} = require("http2");
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

/* HERE NAJA */

function authUser(req, res, x, next) {
    console.log(x)

    if (x === 'admin') {
        console.log("hello admin");
        // return next()
    } else {
        console.log("yametae kudasai");
        // return res.send("No alow");
    }

}
/*to here */

/*app.use(cookieSession({
    name:'session',
    keys:['key1','key2']
}))*/
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("connected DB: " + process.env.MYSQL_DATABASE);
});

//userform, admin only
route.get('/users', cors(),function (req, res) {
    console.log("select all request")
    connection.query('SELECT * FROM user', function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'User list.'
        });
    });
});

route.post('/user',cors(), function (req, res) {
    console.log("Add page request")
    let user = req.body.user;
    console.log(user);
    if (!user) {
        return res.status(400).send({
            error: true,
            message: 'Please provide user information'
        });
    }
    connection.query("INSERT INTO user SET?", user, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'New user has been created successfully.'
        });
    });
});

route.put('/user',cors(), function (req, res) {
    
    let UID = req.body.user.UID;
    let user = req.body.user;
    if (!UID || !user) {
        return res.status(400).send({
            error: user,
            message: 'Please provide user information'
        });
    }
    connection.query("UPDATE user SET? WHERE UID=?", [user, UID], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'UID has been updated successfully.'
        })
    });
});

route.delete('/user',cors(), function (req, res) {
    console.log("delete user request")
    let UID = req.body.UID;
    console.log("User ID: "+UID+" has been deleted")
    if (!UID) {
        return res.status(400).send({
            error: true,
            message: 'Please provide UserID'
        });
    }
    connection.query('DELETE FROM user WHERE UID=?', [UID], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'User has been deleted successfully.'
        });
    });
});

route.get('/user/:id',cors(), function (req, res) {
    console.log("Search request")
    let UID = req.params.id;
    if (!UID) {
        return res.status(400).send({
            error: true,
            message: 'Please provide User Id.'
        });
    }
    connection.query('SELECT * FROM user where UID=?', UID, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results[0],
            message: 'User retrieved'
        });
    });
});

//productform admin onlly
route.get('/products',cors(), function (req, res) {
    connection.query('SELECT * FROM product', function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'product list.'
        });
    });
});

route.post('/product',cors(), function (req, res) {
    
    let product = req.body.product;
    console.log(product);
    if (!product) {
        return res.status(400).send({
            error: true,
            message: 'Please provide product information'
        });
    }
    connection.query("INSERT INTO product SET?", product, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'New product has been created successfully.'
        });
    });
});
route.put('/product',cors(), function (req, res) {
    let PID = req.body.product.PID;
    let product = req.body.product;
    if (!PID || !product) {
        return res.status(400).send({
            error: product,
            message: 'Please provide product information'
        });
    }
    connection.query("UPDATE product SET? WHERE PID=?", [product, PID], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'PID has been updated successfully.'
        })
    });
});
route.delete('/product',cors(), function (req, res) {
    let PID = req.body.PID;
    if (!PID) {
        return res.status(400).send({
            error: true,
            message: 'Please provide Product ID'
        });
    }
    connection.query('DELETE FROM product WHERE PID=?', [PID], function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'Product has been deleted successfully.'
        });
    });
});
route.use(cors());
route.get('/product/:id', cors(),function (req, res) {
    let PID = req.params.id;
    if (!PID) {
        return res.status(400).send({
            error: true,
            message: 'Please provide Product Id.'
        });
    }
    connection.query('SELECT * FROM product where PID=?', PID, function (error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results[0],
            message: 'Product retrieved'
        });
    });
});


/* Server listening */
app.listen(process.env.PORT, function () {
    console.log("Server listening at Port 3030");
});

route.get('/login', function (req, res) {
    console.log("login page request");
    res.status(200).sendFile(path.join(__dirname + '/assets/static/login.html'));
});
route.get('/aboutus', function (req, res) {
    console.log("about us page request");
    res.status(200).sendFile(path.join(__dirname + '/assets/static/aboutus.html'));
});
route.get('/homepage', function (req, res) {
    console.log("home page request");
    res.status(200).sendFile(path.join(__dirname + '/assets/static/homepage.html'));
    //req.use(express.static((__dirname+'/homepage.html')))
});
route.get('/auth-alert', function (req, res) {
    console.log("username or password error");
    res.status(200).sendFile(path.join(__dirname) + '/assets/static/auth-alert.html')
})

route.get('/search', function (req, res) {
    console.log("search page request");
    res.status(200).sendFile(path.join(__dirname + '/assets/static/search.html'));
});
route.get('/result', function (req, res) {
    res.status(200).sendFile(path.join(__dirname + '/assets/static/result.html'));

});


app.get('/admin', authUser, function (request, response, next) {

    if (request.session.loggedin) {
        console.log(`admin page request from ${request.session.username}`);
        response.status(200).sendFile(path.join(__dirname + '/assets/static/admin.html'));
    } else {
        // response.send("Please login");
        response.status(200).sendFile(path.join(__dirname + '/assets/static/noLogin.html'));
    }

    //response.end();
});
app.get('/userform', authUser, function (req, res, next) {
    if (req.session.loggedin) {
        console.log(`userform request from ${req.session.username}`);
        res.status(200).sendFile(path.join(__dirname + '/assets/static/userform.html'));
    } else {
        // res.send("Please login");
        res.status(200).sendFile(path.join(__dirname + '/assets/static/noLogin.html'));
    }
});
app.get('/productform', authUser, function (req, res, next) {
    if (req.session.loggedin) {
        console.log(`productform request from ${req.session.username}`);
        res.status(200).sendFile(path.join(__dirname + '/assets/static/productform.html'));
    } else {
        // res.send("Please login");
        res.status(200).sendFile(path.join(__dirname + '/assets/static/noLogin.html'));
    }
});
route.get('/allproducts',cors(),function(req,res)
{
    connection.query(`SELECT * FROM product`, function (error, results){
        console.log(results);
    })
});
route.get('/allproductsdetail/:key',cors(),function(req,res)
{
    console.log("detail request");
    var key = req.params.key;
    connection.query(`SELECT * FROM product WHERE PID=?`,[key], function (error, results){
        if (results.length > 0) {      
            return res.send({ error: false, data: results[0], message: 'product retrive' });     
           }
       else
       {
           return res.send({ error: true, data: results, message: 'No product' });
       }
    })
});
route.get("/logincheck/:username&:password", function (req, res) {
    var username=req.params.username;
    var password=req.params.password;
    console.log(username);
    connection.query("SELECT * FROM user where username=? AND pword=? ", [username, password], function (error, results) {
        if (results.length > 0) {      
             return res.send({ error: false, data: results, message: 'user retrive' });     
            }
        else
        {
            return res.send({ error: true, data: results, message: 'No user' });
        }

    });
  });
route.get('/allproducts/:keyword', cors(),function (req, res) {
    console.log("result page request");
    console.log("search for = " + req.params.keyword);
    let word = req.params.keyword;
    if (word != "") {
        connection.query(`SELECT * FROM product WHERE Pname like '%${word}%'`, function (error, results) {
            if (error) throw error;
            else {


                if (results.length > 0) {
                    return res.send({
                        error: false,
                        data: results,
                        message: 'Product list'
                    });
                } else {
                    connection.query(`SELECT * FROM product`, function (error, results) {
                        if (error) throw error;
                        else {
                            return res.send({
                                error: false,
                                data: results,
                                message: 'Product list'
                            });
                        }
                    })
                }
            }

        })
    }


});