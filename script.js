document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('form-contact').addEventListener('submit', (e)=> {
    e.preventDefault();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("ge").value = "";
    document.getElementById("sucesso").innerText = 'Formulário enviado';
  });
});
