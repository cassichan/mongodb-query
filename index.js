//import mongo tools/library
const { MongoClient, ServerApiVersion,  } = require('mongodb');

//connect to Mongo/Atlas using a URL connection string

//Include file path when importing file.
// ->./ means here/current directory
// ->../ means one directory up
// ->../../ means two directories up
const {uri} = require('./dbsecrets.js')


//Create  client at uri
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true,serverApi: ServerApiVersion.v1});

//Connect to sample_mflix database
const db = client.db('sample_mflix');

//Query

// let's get a specific movie (doc) from the "movies" collection
//search by title for "Back to the Future"
//Find ONE not ALL

//will work with callbacks, promises, or async await
//Takes an object for the query parameter
db.collection('movies').findOne({title: "Back to the Future"}, (err, results) => {
    //log errors if any errors
    if(err) {
        console.error(err);
    }
    //output results
    console.log(results);
    //Close connection to Atlas
    client.close();
});

