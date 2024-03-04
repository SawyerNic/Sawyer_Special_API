// Import the functions you need from the SDKs you need
const { getDatabase } = require('firebase-admin/database');

// Require the firebase-admin module
var admin = require("firebase-admin");

// Load the service account key JSON file
var serviceAccount = require("./awkwardanonymous-4089a-firebase-adminsdk-yuu8x-53b653260e.json");

// Initialize the Firebase Admin SDK with the service account credentials and database URL
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://awkwardanonymous-4089a-default-rtdb.firebaseio.com"
});

// Get a reference to the Firebase Realtime Database
const db = getDatabase();

// Asynchronously read the value of 'Posts' from the database
const readValue = async () => {
  const ref = db.ref('Posts');
  const snapshot = await ref.once('value');
  return snapshot.val();
};

// Asynchronously retrieve posts by calling readValue function
const getPosts = async () => {
  const posts = await readValue();
  return posts;
};

// Call readValue function and log the retrieved posts
readValue().then((posts) => {
  console.log(posts);
});

// Asynchronously write a post to a specific location in the database
const writePost = async (location, post) => {
  const ref = db.ref(location);
  ref.set(post);
}

// Export the functions for use in other modules
module.exports = {
    readValue,
    writePost,
    getPosts
}
