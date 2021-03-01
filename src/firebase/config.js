import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCYixtfLYH_79ikTyLeL7KeOe24mvHemQQ',
    authDomain: 'inmpayolard.firebaseapp.com',
    databaseURL: 'https://inmpayolard-default-rtdb.firebaseio.com',
    projectId: 'inmpayolard',
    storageBucket: 'inmpayolard.appspot.com',
    messagingSenderId: '196652331065',
    appId: '1:196652331065:web:4273eefd10d1db41ec5de8',
};

if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  
}

export { firebase  };
