const firebaseConfig = {
    apiKey: "AIzaSyBnGaWPD2kqpp1iUHI8GR72e9sKwFC-8XI",
    authDomain: "pop-a-balloon-a0182.firebaseapp.com",
    projectId: "pop-a-balloon-a0182",
    storageBucket: "pop-a-balloon-a0182.appspot.com",
    messagingSenderId: "268304322838",
    appId: "1:268304322838:web:643048eacee2b10ca78037"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
    let email = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    console.log(email, password);
}