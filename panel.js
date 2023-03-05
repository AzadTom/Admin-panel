import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import {getFirestore , collection, addDoc,getDocs ,getDoc,doc} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyD4EbtpfdRukyNzf9bYbIGkAGpTT6AX4aI",
  authDomain: "restaurent-cd5da.firebaseapp.com",
  projectId: "restaurent-cd5da",
  storageBucket: "restaurent-cd5da.appspot.com",
  messagingSenderId: "158773476099",
  appId: "1:158773476099:web:6554b5b44f2309ab26c736",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const querySnapshot = await getDocs(collection(db, "dbs"));
querySnapshot.forEach((doc) => {
     
     
    let list = doc.data();
   buildList(list);


});




function buildList(list){

    const customerName = document.getElementById('CustomerName');
    const date = document.getElementById('Date');
    const time = document.getElementById('Time');
    const numberofpeople = document.getElementById('NumberOfPeople');
     const number = document.getElementById('PhoneNumber');
     const email = document.getElementById('E-mail');
  

     const div1 = document.createElement('div');
     div1.innerHTML = `<p>${list.username}</p>`;
     customerName.appendChild(div1);
 
     const div2 = document.createElement('div');
     div2.innerHTML = `<p>${list.usermail}</p>`;
     email.appendChild(div2);

     const div3 = document.createElement('div');
     div3.innerHTML = `<p>${list.date}</p>`;
     date.appendChild(div3);

     const div4 = document.createElement('div');
     div4.innerHTML = `<p>${list.time}</p>`;
     time.appendChild(div4);

     const div5 = document.createElement('div');
     div5.innerHTML = `<p>${list.nop}</p>`;
     numberofpeople.appendChild(div5);


     const div6 = document.createElement('div');
     div6.innerHTML = `<p>${list.phonenumber}</p>`;
     number.appendChild(div6);




}



