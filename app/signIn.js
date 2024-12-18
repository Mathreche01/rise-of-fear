import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, setPersistence, sendPasswordResetEmail , browserLocalPersistence , browserSessionPersistence , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import verificaCampo from "../app/valida-formulario.js"

const firebaseConfig = {
  apiKey: "AIzaSyAmtAFbQc1sWpPkZlcePsXQ-ebwJBEAEYo",
  authDomain: "riseoffear-4c68a.firebaseapp.com",
  databaseURL: "https://riseoffear-4c68a-default-rtdb.firebaseio.com",
  projectId: "riseoffear-4c68a",
  storageBucket: "riseoffear-4c68a.appspot.com",
  messagingSenderId: "739058772381",
  appId: "1:739058772381:web:36a6536109d65a36846774"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const camposDeRegistro = document.querySelectorAll('[data-registro]')
const camposDeLogin = document.querySelectorAll('[data-login]')
const campoRecuperar = document.querySelector('[data-recover]')
const alerta = document.querySelector('.msg')


signUp.addEventListener('click', (e) => {
    e.preventDefault()
    let validacoes = []
    camposDeRegistro.forEach((campo) => {
        validacoes.push(verificaCampo(campo))
    })

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    if(validacoes.indexOf(false) === -1){
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid),{
            username: username,
            email: email
        })
      alerta.innerHTML = "Cadastro concluído com sucesso!"
        $('.alert').addClass("show");
       $('.alert').removeClass("hide");
       $('.alert').addClass("showAlert");
       setTimeout(function(){
         $('.alert').removeClass("show");
         $('.alert').addClass("hide");
       },5000);
       $('.close-btn').click(function(){
       $('.alert').removeClass("show");
     });
    }) 
    .catch((error) => {
      const emailUsado = document.getElementById('email')
        emailUsado.setCustomValidity('Esse email já está em uso')
        verificaCampo(emailUsado)
    })
    }
});

recover.addEventListener('click', (e) => {
  e.preventDefault()
  verificaCampo(campoRecuperar)
  var email = document.getElementById('recoverEmail').value
  sendPasswordResetEmail(auth, email)
  .then(() => {
    alerta.innerHTML = "Verifique seu endereço de e-mail!"
        $('.alert').addClass("show");
       $('.alert').removeClass("hide");
       $('.alert').addClass("showAlert");
       setTimeout(function(){
         $('.alert').removeClass("show");
         $('.alert').addClass("hide");
       },5000);
       $('.close-btn').click(function(){
       $('.alert').removeClass("show");
       $('.alert').addClass("hide");
       })
  })
  .catch((error) => {
    if(error.code == "auth/user-not-found"){
      campoRecuperar.setCustomValidity('Email ainda não cadastrado')
      verificaCampo(campoRecuperar)
    }
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode)
  })
})

login.addEventListener('click', (e) => {
    e.preventDefault()
    camposDeLogin.forEach((campo) => verificaCampo(campo))
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    var staySigned = document.getElementById('remember-me');
    setPersistence(auth, staySigned.checked ? browserLocalPersistence : browserSessionPersistence)
  .then(() => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        alerta.innerHTML = "Usuário conectado com sucesso!"
        $('.alert').addClass("show");
       $('.alert').removeClass("hide");
       $('.alert').addClass("showAlert");
       setTimeout(function(){
         $('.alert').removeClass("show");
         $('.alert').addClass("hide");
       },1000);
       $('.close-btn').click(function(){
       $('.alert').removeClass("show");
       $('.alert').addClass("hide");
       })
    
        
    })
    .catch((error) => {
        const senhaErrada = document.getElementById('loginPassword')
        const emailErrado = document.getElementById('loginEmail')
        senhaErrada.setCustomValidity('Senha incorreta')
        emailErrado.setCustomValidity('Email incorreto')
        verificaCampo(senhaErrada)
        verificaCampo(emailErrado)
    })
  })
});

onAuthStateChanged(auth, (user) => {
if(user){
  setTimeout(() => {window.location.href="./pages/dashboard.html"}, 2000)
  sessionStorage.setItem('userId', user.uid)
}
})

