import firebase from 'firebase';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCYks1I9N7xTxslbkF3-JiP_nypFhO3D7w",
  authDomain: "e-commerce-44c28.firebaseapp.com",
  projectId: "e-commerce-44c28",
  storageBucket: "e-commerce-44c28.appspot.com",
  messagingSenderId: "895374857002",
  appId: "1:895374857002:web:7699dc31519318a93dc453"
};

const app = firebase.initializeApp(firebaseConfig);

export const authStorage = async (email, password) => {
	try {
		const user = await app.auth().signInWithEmailAndPassword(email, password);
		return true;
	} catch(error) {
		return false;
	}
}
export const uploadImage = async (file, email) => {
	try {
		const storageRef = app.storage().ref();
	    const fileRef = storageRef.child('users/'+ email);
	    await fileRef.put(file);
	    const storage = app.storage();
	    const pathReference = storage.ref('users/'+ email);
	    const url = await pathReference.getDownloadURL();
	  	return url;
	} catch(error) {
		return error;
	}
}

export const signOut = async () => {
	await firebase.auth().signOut()
}
