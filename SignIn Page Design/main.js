// (function () {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function () {
//       var forms = document.getElementsByClassName("needs-validation");
//       var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();
// let password = document.getElementById("password");
// if (password.type == "text") {
//   password.type = "password";
// } else {
//   password.type = "text";
// }

const formCheckLabel = document.querySelector('.form-check-label');
formCheckLabel.addEventListener('click', () => {
  const formCheckInput = document.querySelector('.form-check-input');
  formCheckInput.checked = !formCheckInput.checked;
})