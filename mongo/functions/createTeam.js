// Write a mongodb atlas application services script.
// On invocation create a new database in the assigned cluser named org_+[supplied orgid].
// Create a new collection in the database called "config"
// Create a new collection in the database called "people"
// Insert a document into the "people" collection with a sample user containing first name, last name, email, phone number.

exports = async function hello(...args) {

const { MongoClient } = require("mongodb");
  const uri = "mongodb+srv://<user>:<password>@<cluster-url>/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  const database = client.db("org_" + args[0]);
  const configCollection = database.collection("config");
  const sampleConfig = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "XXXXXXXXXXXXXXXXXXXX",
    "phoneNumber": "000000000000"
  };
  const peopleCollection = database.collection("people");
  const sampleUser = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "XXXXXXXXXXXXXXXXXXXX",
    "phoneNumber": "000000000000"
  };
  await configCollection.insertOne(sampleConfig);
  await peopleCollection.insertOne(sampleUser);

  return "Successfully created database and collections.";
}


  
