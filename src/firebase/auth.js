import firebaseApp from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

const provider = new GoogleAuthProvider();

export async function signUp(username, email, password) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);

    if (result.user) {
      const userId = result.user.uid;
      const userRef = ref(db, `users/${userId}`);
      await set(userRef, {
        username: username,
        email: email,
      });
    }
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signIn(email, password) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signOutUser() {
  let error = null;
  try {
    await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { error };
}

export async function getUsernameFromUserId(userId) {
  let username = null,
    error = null;

  try {
    const userRef = ref(db, `users/${userId}`);
    const userSnapshot = await get(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.val();
      username = userData.username;
    } else {
      error = "User not found";
    }
  } catch (e) {
    error = e;
  }

  return { username, error };
}
