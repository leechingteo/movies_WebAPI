/* (0) ####load required modules#### */
var restify = require('restify')
var movie = require('./Movie.js')
var db = require("./database.js")


/* (1) ####CONFIGURE THE REST SERVER#### */
/* (1-1) import the required plugins to parse the body and auth header. */
var server = restify.createServer()
server.use(restify.queryParser())		//parse querystring params to req.query
server.use(restify.fullResponse())	//handles disappeared CORS headers
server.use(restify.bodyParser())		//parse POST bodies to req.body
server.use(restify.authorizationParser()) //parse Authroization header to req.authorization

/* (1-2) setup port & default error handler */
var port = 8080;
server.listen(port, function (err) {
  if (err) {
      console.error(err);
  } else {
    console.log('App is ready at : ' + port);
  }
})

/* (2) ####DEFINE YOUR REST SERVICES#### */
server.get('/test', function(req, res){ res.send({'status':200, 'message':'Successful'});})

//server.get('/movies/etc', function (req,res)(.......define the function so that it could display the movies))
server.get('/movies/:year', function(req,res){processMovie(req,res)})
server.get('/movies/:title/:year', function(req,res){processMovie(req,res)})
var processMovie = function(req,res){
	stars = ''
	for(var i=0; i< parseInt(req.params.year); i++) {
		stars = stars + '*'
	}
	res.send({'status':'200', 'message':'Got it!', 'yourTitle':req.params.title, 'yourYear':stars})
}


server.get('/searchMovies', function(req, res) {
	const searchTerm = req.query.q;
  console.log('GET /searchMovies?q=' + searchTerm)
  if (typeof searchTerm == 'undefined') {
  	res.send({'status':404, 'message':'no keyword for search'})
  	return
  }


movie.searchMovies(searchTerm, function(data) {
    console.log('From MovieDB API ...' + JSON.stringify(data))
    if(req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
    //res.setHeader("Access-Control-Allow-Origin", "*")	//https://cde305-permacultureprogrammer.c9users.io:8081
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
    res.setHeader('Content-Type', 'application/json');
    res.send(data.code, data.response);
    console.log(JSON.stringify(data.response))
    res.end();
  })
})

//=================================================================================================================================
server.get('/movie/:id', function(req, res) {
	const bookid = req.params.id
  console.log('GET /books?q=' + bookid)
  if (typeof bookid == 'undefined') {
  	res.send({'status':404, 'message':'no book selected'})
  	return
  }
  // this is where you access MongoDb
  db.getByBookId(bookid, function(data) {
    if (data != null){  // Array.isArray(data) && data.length) {  //data is array && not []
      var jdata = {}
      //var jdata = JSON.parse(data);
      console.log('use persisted data');
      res.setHeader('content-type', 'application/json');
      jdata.data = data
      jdata.message = data.title + ' found'
      jdata.code = 200
      res.send(200, jdata);		  //1st arg eqv res.status(200)
      res.end();
    }
  })
})




server.get('/movies', function(req, res) {
	
  console.log('GET /books')
 
  // this is where you access MongoDb
  db.getAll(function(data) {
    if (data != null){  // Array.isArray(data) && data.length) {  //data is array && not []
      var jdata = {}
      //var jdata = JSON.parse(data);
      console.log('use persisted data');
      res.setHeader('content-type', 'application/json');
      jdata.data = data
      jdata.message = data.title + ' found'
      jdata.code = 200
      res.send(200, jdata);		  //1st arg eqv res.status(200)
      res.end();
    }
  })
})

server.del('/movie/:id', function(req, res) {
  const movieid = req.params.id
  console.log('DELETE /movie/:id' + movieid);
  if (typeof movieid == 'undefined') {
  	res.send({'status':404, 'message':'no movie selected'})
  	return
  }
 
  db.clear(movieid,dbResult => {
      console.log('mongo: '+ dbResult);
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
      res.setHeader('content-type', 'application/json');
      res.send(202, 'Code : 200, Movie '+ movieid+ ' successfully deleted');  //1st arg eqv res.status(200)
      res.end();
  })
});






server.post('/movie', function (req,res,next) {
    db.addBook(req.params, (feedback) => {
	    	console.log(feedback)
	    	res.send({code:200, message:'Successfully added a new movie'})
	    })
})





function wrapping(res, code, body, origin){
	res.header('Access-Control-Allow-Origin', origin);
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  res.setHeader('content-type', 'application/json');
  res.send(code, body);  //1st arg eqv res.status(200)
  res.end();
}
