// IMPORTAR FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// CONFIG DE TU PROYECTO
const firebaseConfig = {
  apiKey: "AIzaSyB7s2KHfkkWfoJTfhxaiOm7_TfFutbD3Rc",
  authDomain: "inkumanga-5a6a7.firebaseapp.com",
  projectId: "inkumanga-5a6a7",
  storageBucket: "inkumanga-5a6a7.firebasestorage.app",
  messagingSenderId: "459752466286",
  appId: "1:459752466286:web:ea095633db581dbf77837f",
  measurementId: "G-B56WMZ2NP9"
};

// INICIAR FIREBASE
const app = initializeApp(firebaseConfig);

// EXPORTAR FIRESTORE (ESTA ES LA PARTE QUE TE FALTABA)
export const db = getFirestore(app);
