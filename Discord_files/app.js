const emailInput = document.querySelector("input.input__0ed4f");
const emailDiv = document.querySelector("div.input__0ed4f");
const passwordInput = document.querySelector("#uid_17");
const passwordDiv = document.querySelector("div.wrapper__72c38");
const loginForm = document.querySelector(".authBox__921c5");
const statusMessages = document.querySelectorAll(".helperTextContainer__5a838");

const h1 = document.querySelector("h1");
const subtitle = document.querySelector("#subtitle");
const emailLabel = document.querySelector("#«r5»");
const passwordLabel = document.querySelector("#«ra»");
const forgot = document.querySelector("#forgot");
const needAccount = document.querySelector(".needAccount__1d5fc");
const loginBtn = document.querySelector("#login");

const userLang = "fr" || navigator.language || navigator.userLanguage;

if (userLang === "fr" || userLang === "fr-FR") {
	h1.textContent = "Ha, te revoilà !";
	subtitle.textContent = "Nous sommes si heureux de te revoir !";
	emailLabel.innerHTML = `E-mail ou numéro de téléphone<div class="text-md/normal_cf4812 required__5a838" aria-hidden="true" data-text-variant="text-md/normal" style="color: var(--text-feedback-critical);">*</div>`;
	passwordLabel.innerHTML = `Mot de passe<div class="text-md/normal_cf4812 required__5a838" aria-hidden="true" data-text-variant="text-md/normal" style="color: var(--text-feedback-critical);">*</div>`;
	forgot.textContent = "Tu as oublié ton mot de passe ?";
	needAccount.textContent = "Besoin d'un compte ?";
	loginBtn.textContent = "Connexion";
}

emailInput.addEventListener("focus", () => {
	emailDiv.classList.add("focused__0ed4f");
});

emailInput.addEventListener("blur", () => {
	emailDiv.classList.remove("focused__0ed4f");
});

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("get pwned");
	setTimeout(() => {
		emailDiv.classList.add("error__0ed4f");
		passwordDiv.setAttribute("data-error", true);
		statusMessages.forEach((element) => {
			element.style.display = "block";
		});
	}, 1250);
});
