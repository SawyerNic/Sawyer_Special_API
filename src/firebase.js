// Import the functions you need from the SDKs you need
const { getDatabase} = require('firebase-admin/database');

var admin = require("firebase-admin");

var serviceAccount = require("./awkwardanonymous-4089a-firebase-adminsdk-yuu8x-53b653260e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://awkwardanonymous-4089a-default-rtdb.firebaseio.com"
});

const db = getDatabase();



const readValue = async () => {
  const ref = db.ref('Posts');
  const snapshot = await ref.once('value');
  return snapshot.val();
};

const getPosts = async () => {
  const posts = await readValue();
  return posts;
  //console.log(posts);
};

readValue().then((posts) => {
  console.log(posts);
});

const writePost = async (location, post) => {
  const ref = db.ref(location);
  ref.set(post);
}



module.exports = {
    readValue,
    writePost,
    getPosts
}
