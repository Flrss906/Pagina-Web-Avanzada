
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


const form = document.getElementById("contactoForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  alert(`Gracias ${nombre}, tu mensaje ha sido enviado correctamente a ${correo}.`);
  form.reset();
});
