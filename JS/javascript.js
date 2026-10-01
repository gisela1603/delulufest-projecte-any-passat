//per a activar el botó per obrir el menú en pantalles petites
const boton = document.querySelector('.obrir-menu');
const nav = document.querySelector('nav');

boton.addEventListener('click', function() {
    nav.classList.toggle('active');
});


//Per a que es mostri el modal de benvinguda
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modalBenvinguda");
  const closeBtn = document.getElementById("tancarModal");
  const actionBtn = document.getElementById("boto");
  
  // Revisar si ja s'ha visitat
  const visitat = localStorage.getItem("modalBenvingudaVist");
  
  // Mostrar modal només si no s'ha entrat abans
  if (!visitat) {
    modal.style.display = "flex";
  }

  // Funció per a tancar i guardar al localStorage
  function TancarIGuardar() {
    modal.style.display = "none";
    localStorage.setItem("modalBenvingudaVist", "true");
  }

  closeBtn.addEventListener("click", TancarIGuardar);
  actionBtn.addEventListener("click", TancarIGuardar);

  // Per a que es tanqui també si fan clic fora del requadre
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      TancarIGuardar();
    }
  });
});


// Validar correu electrònic (Regex global)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//APARTAT DE REGISTRE

const botoRegistre = document.getElementById("boto-registre");
const missatge = document.getElementById("missatge");

if (botoRegistre) { // Només s'executa si estem a la pàgina de registre
    botoRegistre.addEventListener("click", (e) => {
        e.preventDefault();

        const inputNom = document.getElementById("nom");
        const inputCorreu = document.getElementById("correu");
        const inputContrasenya = document.getElementById("contrasenya");
        const inputConfirmar = document.getElementById("confirmar-contrasenya");

        const nom = inputNom.value.trim();
        const correu = inputCorreu.value.trim();
        const contrasenya = inputContrasenya.value;
        const confirmarContrasenya = inputConfirmar.value;

        inputCorreu.style.borderColor = "";
        inputConfirmar.style.borderColor = "";
        missatge.textContent = "";

        let hiHaErrors = false;
        let textError = "";

        if (!emailRegex.test(correu)) {
            inputCorreu.style.borderColor = "red";
            textError = "Introdueix un correu electrònic vàlid.";
            hiHaErrors = true;
        }

        if (contrasenya !== confirmarContrasenya) {
            inputConfirmar.style.borderColor = "red";
            if (hiHaErrors) {
                textError += " A més, les contrasenyes no coincideixen.";
            } else {
                textError = "Les contrasenyes no coincideixen.";
            }
            hiHaErrors = true;
        }

        if (hiHaErrors) {
            missatge.textContent = textError;
            missatge.style.color = "red";
            return;
        }

        missatge.textContent = `Registre completat correctament, ${nom}! Moltes gràcies per registrar-te al festival!`;
        missatge.style.color = "green";

        inputNom.value = "";
        inputCorreu.value = "";
        inputContrasenya.value = "";
        inputConfirmar.value = "";
    });
}


//APARTAT DE CONTACTE

const botoContacte = document.getElementById("boto-contacte");
const missatgeContacte = document.getElementById("missatge-contacte");

if (botoContacte) { // Només s'executa si estem a la pàgina de contacte
    botoContacte.addEventListener("click", (e) => {
        e.preventDefault();

        const inputNomContacte = document.getElementById("nom-contacte");
        const inputCorreuContacte = document.getElementById("correu-contacte");
        const inputAssumpte = document.getElementById("assumpte");

        const correuContacte = inputCorreuContacte.value.trim();

        inputCorreuContacte.style.borderColor = "";
        missatgeContacte.textContent = "";

        if (!emailRegex.test(correuContacte)) {
            inputCorreuContacte.style.borderColor = "red";
            missatgeContacte.textContent = "Introdueix un correu electrònic vàlid.";
            missatgeContacte.style.color = "red";
            return;
        }

        missatgeContacte.textContent = "Missatge enviat correctament. Ens posarem en contacte amb tu aviat!";
        missatgeContacte.style.color = "green";

        inputNomContacte.value = "";
        inputCorreuContacte.value = "";
        inputAssumpte.value = "";
    });
}
