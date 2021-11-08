// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyCS1PqDMSi4sWy-tp9Aj_EBsW0uAmzgM3I',
  authDomain: 'csci225.firebaseapp.com',
  projectId: 'csci225',
  storageBucket: 'csci225.appspot.com',
  messagingSenderId: '590892041114',
  appId: '1:590892041114:web:89aa4fc9f239b8ea683023',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content

  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('test').add({
      item: value, //?
    });
  });
});
