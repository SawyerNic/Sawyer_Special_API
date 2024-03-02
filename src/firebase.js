const { initializeApp } = require('firebase-admin/app');

const firebaseConfig = {
    apiKey: "AIzaSyBnhG8Lcof53tFEXt08bom6dzIOtD5W-_E",
    authDomain: "awkwardanonymous-4089a.firebaseapp.com",
    projectId: "awkwardanonymous-4089a",
    storageBucket: "awkwardanonymous-4089a.appspot.com",
    messagingSenderId: "740244534853",
    appId: "1:740244534853:web:b6263340e6e972822d152c",
    databaseURL: "https://awkwardanonymous-4089a-default-rtdb.firebaseio.com/"
  };
  
// Initialize the default app
const defaultApp = initializeApp(firebaseConfig);

console.log(defaultApp.name);  // '[DEFAULT]'

// Retrieve services via the defaultApp variable...
let defaultAuth = getAuth(defaultApp);
let defaultDatabase = getDatabase(defaultApp);

// ... or use the equivalent shorthand notation
defaultAuth = getAuth();
defaultDatabase = getDatabase();
  
  const getPosts = async (db) => {
    console.log('/getPosts');
    const citiesCol = collection(db, 'Posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
};

const checkWorking = () => {
    console.log(defaultDatabase);
    console.log(db);
}

module.exports = {
    checkWorking
}
