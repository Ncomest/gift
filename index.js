const loginUsers = {
 username: "user",
 password: "123",
};

// Проверяем какие данные введены при авторизации, if else
function login() {
 const userInput = document.getElementById("username").value;
 const passInput = document.getElementById("password").value;

 if (userInput === loginUsers.username && passInput === loginUsers.password) {
  alert("success");
  sessionStorage.setItem("authorization", "true");
  window.location.href = "home.html";
 } else {
  alert("wrong login or password");
 }
}

// Добавляем кнопку Enter
function handlePressEnter(e) {
 if (e.keyCode === 13) {
  login();
 }
}

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
usernameInput.addEventListener("keypress", handlePressEnter);
passwordInput.addEventListener("keypress", handlePressEnter);

// document.addEventListener("DOMContentLoaded", function () {
//  const loggedIn = sessionStorage.getItem("loggedIn");

//  // Если уже вошли, перенаправляем на home.html
//  if (loggedIn === "true") {
//   window.location.href = "home.html";
//  }

//  const loginForm = document.getElementById("loginForm");

//  loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const usernameInput = document.getElementById("username").value;
//   const passwordInput = document.getElementById("password").value;

//   if (
//    usernameInput === validCredentials.username &&
//    passwordInput === validCredentials.password
//   ) {
//    // В случае успешного входа, устанавливаем значение "loggedIn" в sessionStorage
//    sessionStorage.setItem("loggedIn", "true");
//    // Перенаправляем на home.html
//    window.location.href = "home.html";
//   } else {
//    alert("Invalid username or password. Please try again.");
//   }
//  });
// });
