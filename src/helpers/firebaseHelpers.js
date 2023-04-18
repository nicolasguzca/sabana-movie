import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

const addToFirebase = async ({ objectToSave }, collectionName) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), objectToSave);
    console.log(
      "Document written to table " + collectionName + " with ID: ",
      docRef.id
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//TODO: Implement this function
const getFromFirebase = async () => {};
const updateFromFirebase = async () => {};
const deleteFromFirebase = async () => {};

export { addToFirebase, getFromFirebase, updateFromFirebase, deleteFromFirebase };
