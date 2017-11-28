
var restify = require('restify');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/* the database name is stored in a private variable instead of being 'hard-coded' so it can be replaced using the 'rewire' module. This avoids the need for the unit tests to run against the 'live' database. */
var database = 'api'
/* the server connections string includes both the database server IP address and the name of the database. */
const server = 'mongodb://'+process.env.IP+':27017/'+database
console.log(server)
/* the mongoose drivers connect to the server and return a connection object. */
mongoose.connect(server)
const db = mongoose.connection
/* END OF MONGOOSE SETUP */





/* all documents in a 'collection' must adhere to a defined 'schema'.
Here we define a new schema that includes a mandatory string and an array of strings. */
const QuerySchema = new mongoose.Schema({
    query: { type: String, required: true },
    count: {type: Number, required: true },
    results: [ {type: String} ]
})
const BookSchema = new mongoose.Schema({
		id: {  type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    authors: [ {type: String, required: true } ],
    rating: {type: Number},
    cover: { type: String },
    isbn: {  type: Number },
    like: {type: Number},
    dislike: {type: Number}
})
/* the schema is associated with the 'Query' collection which means it will be
applied to all documents added to the collection. */
const Query = mongoose.model('Query', QuerySchema)
const Book = mongoose.model('Book', BookSchema)
/* END OF DEFINING SCHEMA */




/* notice we are using the 'arrow function' syntax. In this example there are
more than one parameter so they need to be enclosed in brackets. */
exports.addQuery = (bkdata, callback) => {
  console.log('addQuery()...');
  /* now we have extracted the data we can use it to create a new 'Query' object that adopts the correct schema. */
  const newQuery = new Query({ query: bkdata.query, count: bkdata.data.length, results:JSON.stringify(bkdata.data)  });
  newQuery.save( (err, data) => {
    if (err)
      callback('Error: '+err);
    else
      callback('Query results saved');
  })
}

exports.addBook = (bkData, callback) => {
  console.log('Adding new movie ...');
  bkData.like = 0;
  bkData.dislike = 0;
  var newBook = new Book({ id: bkData.id, title: bkData.title, description: bkData.description
  });
  newBook.save( (err, data) => {
    if (err)
      callback('Error: '+err);
    else
      callback('Book info saved');
  })
}

exports.setLikes = (vote, callback) => {
	Book.findOne({id: vote.id}, (err, book) => {
			if (vote.like===1) {
				var count = book._doc.like
				if (typeof(count) == "undefined") book.set( {like: 1} )
				else {count++; book.set( {like: count} )}
			}
			else if (vote.like===-1) {
				if (typeof(book._doc.dislike) == "undefined") book.set( {dislike: 1} )
				else book.set( {dislike: (book._doc.dislike++)} )	//set() not updating
			}
			else	callback('no votes')

			book.save((err,updatedBook) => {
						if (err)	return callback(err)
						else	callback(updatedBook)
			})
	})
}



exports.getByQuery = (findkeys, callback) => {
  /* the 'find' property function can take a second 'filter' parameter. */
  Query.findOne({query: findkeys}, (err, data) => {
    if (err)
      callback('error: ' + err)
      /*3 types of No data error from mongoDb
      err = null, results = []
      err = null, results = null
      err = error document, results = null
      */
    else if(data==[] || data==null)
      callback(null)
    else
      callback(data._doc);	//_doc is the actual data saved
  })
}
exports.getByBookId = (findkeys, callback) => {
  Book.findOne({id: findkeys}, (err, data) => {
    if (err)
      callback('error: ' + err)
    else if(data==[] || data==null)
      callback(null)
    else
      callback(data._doc)	//_doc is the actual data saved
  })
}



//Unused methods
exports.getAll = callback => {
  /* the Query object contains several useful properties. The 'find' property contains a function to search the MongoDB document collection. */
  Book.find( (err, data) => {
   if (err) {
      callback('error: '+err)
    }
    const query = data.map( item => {
      return {id: item.id, description: item.description}
    })
    callback(query)
  })
}



exports.getById = (id, callback) => {
  /* the 'find' property function can take a second 'filter' parameter. */
  Query.find({_id: id}, (err, data) => {
    if (err) {
      callback('error: '+err)
    }
    callback(data)
  })
}

exports.clear = (id,callback) => {
  /* the 'remove()' function removes any document matching the supplied criteria. */
  Book.remove({id:id}, err => {
    if (err) {
      callback('error: '+err)
    }
    callback('Queries deleted')
  })
}


