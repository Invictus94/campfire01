import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAS_9ixRIoN5EXdTAKEErAWW05Oe_3bZg",
  authDomain: "campfire01-6c933.firebaseapp.com",
  projectId: "campfire01-6c933",
  storageBucket: "campfire01-6c933.firebasestorage.app",
  messagingSenderId: "372811904557",
  appId: "1:372811904557:web:16067d3fd1a99388d26aa4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

async function writeDataToFirestore() {
  const name = document.getElementById('fullName').value;
  const contact = document.getElementById('contact').value;

  if (name && contact) {
    const guestData = {
      Ime: name,
      Kontakt: contact,
      timestamp: new Date().toISOString()
    };

    try {
      const guestCollection = collection(db, "guestList");

      await addDoc(guestCollection, guestData);

      document.getElementById('sendButton').disabled = true;
      document.getElementById('sendButton').innerHTML = "Poslano!";
    } catch (error) {
      console.error("Error writing document: ", error);
      alert("Greska, pokusajte ponovno!");
    }
  } else {
    alert("Molim popunite sva polja.");
  }
}

document.getElementById('sendButton').addEventListener('click', writeDataToFirestore);


function executeAfterDelay() {
    const map = document.getElementById('map');
    map.style.visibility = 'visible';
    map.style.opacity = 1;  
      }
  
  setTimeout(executeAfterDelay, 2626);
