import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCVFgy0AXD1s8KE3XGRVv6hhIYyC3UYN5w',
  authDomain: 'barra-sensora-la-salle.firebaseapp.com',
  databaseURL: 'https://barra-sensora-la-salle-default-rtdb.firebaseio.com',
  projectId: 'barra-sensora-la-salle',
  storageBucket: 'barra-sensora-la-salle.appspot.com',
  messagingSenderId: '462022463677',
  appId: '1:462022463677:web:aa61516e815454243827d4',
  measurementId: 'G-BWMVX78JDS'
}

// const firebaseConfig = {
//   apiKey: 'AIzaSyCAiIbTZtkV4MHsqeoMcqpfGnrr4t-KSrE',
//   authDomain: 'ladrillera-dev.firebaseapp.com',
//   databaseURL: 'https://ladrillera-dev-default-rtdb.firebaseio.com',
//   projectId: 'ladrillera-dev',
//   storageBucket: 'ladrillera-dev.appspot.com',
//   messagingSenderId: '46134608117',
//   appId: '1:46134608117:web:442c4a947bc561022805bc'
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
