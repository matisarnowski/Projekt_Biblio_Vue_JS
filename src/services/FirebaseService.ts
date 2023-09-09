import { initializeApp } from 'firebase/app'
import { child, get, getDatabase, ref, set, update } from 'firebase/database'
import { useDatabaseObject } from 'vuefire'
// ... other firebase imports

export const firebaseApp = initializeApp({
  // Your web app's Firebase configuration
  apiKey: "AIzaSyABaQfIyiuZYjgBYdcDPdqtl0fu749eNDA",
  authDomain: "shop-80287.firebaseapp.com",
  databaseURL: "https://shop-80287-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-80287",
  storageBucket: "shop-80287.appspot.com",
  messagingSenderId: "118349435277",
  appId: "1:118349435277:web:81edfe4349f4da36832dc4"
})

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const shopRef = useDatabaseObject(ref(db, 'shop'))

class FirebaseService {
  getAll() {
    return shopRef
  }

  get(path: string) {
    return get(child(ref(db, 'shop/'), path))
  }

  create(path: string, el: string) {
    return set(ref(db, 'shop/' + path), el)
  }

  update(path: string, el: object) {
    return update(ref(db, 'shop/' + path), el)
  }

  delete(path: string) {
    return set(ref(db, 'shop/' + path), null)
  }
}

export default new FirebaseService()