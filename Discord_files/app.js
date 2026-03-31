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
const register = document.querySelector("#register");
const qrTitle = document.querySelector("#qrTitle");
const qrText = document.querySelector("#qrText");

const yaai = new Audio("Discord_files/audio1.mp3");
const susie = new Audio("Discord_files/audio2.mp3");
const mammamia = new Audio("Discord_files/audio3.mp3");
const flashbang = new Audio("Discord_files/audio4.mp3");

const userLang = navigator.language || navigator.userLanguage;

let clicks = 0;

if (userLang === "fr" || userLang === "fr-FR") {
	h1.textContent = "Ha, te revoilà !";
	subtitle.textContent = "Nous sommes si heureux de te revoir !";
	emailLabel.innerHTML = `E-mail ou numéro de téléphone<div class="text-md/normal_cf4812 required__5a838" aria-hidden="true" data-text-variant="text-md/normal" style="color: var(--text-feedback-critical);">*</div>`;
	passwordLabel.innerHTML = `Mot de passe<div class="text-md/normal_cf4812 required__5a838" aria-hidden="true" data-text-variant="text-md/normal" style="color: var(--text-feedback-critical);">*</div>`;
	forgot.textContent = "Tu as oublié ton mot de passe ?";
	needAccount.textContent = "Besoin d'un compte ?";
	loginBtn.textContent = "Connexion";
	register.textContent = "S'inscrire";
	qrTitle.textContent = "Se connecter avec un code QR";
	qrText.innerHTML =
		"Scanne-le avec <strong>l'application mobile Discord</strong> pour le connecter instantanèment.";
}

emailInput.addEventListener("focus", () => {
	emailDiv.classList.add("focused__0ed4f");
});

emailInput.addEventListener("blur", () => {
	emailDiv.classList.remove("focused__0ed4f");
});

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	setTimeout(() => {
		emailDiv.classList.add("error__0ed4f");
		passwordDiv.setAttribute("data-error", true);
		statusMessages.forEach((element) => {
			element.style.display = "block";
		});
	}, 1250);
	clicks++;

	const clickEffects = {
		3: () => {
			yaai.play();
			setTimeout(() => {
				alert("You've been Pwned! :3");
			}, 10);
		},
		4: () => {
			alert("Dude, stop trying to connect");
		},
		5: () => {
			alert("Dude, seriously, stop");
		},
		6: () => {
			alert("Your connection attempts are pissing me off");
		},
		7: () => {
			alert("I am the original Phishwalker");
		},
		8: () => {
			alert("...");
		},
		9: () => {
			alert("...");
		},
		10: () => {
			alert("...");
		},
		11: () => {
			susie.loop = true;
			susie.play();
			setTimeout(() => {
				alert("You still wanna continue, huh ?");
			}, 10);
		},
		12: () => {
			alert("Guess you could say you are..");
		},
		13: () => {
			alert("Filled with determination!");
		},
		14: () => {
			alert(
				"(that's what happens when Toby Fox takes TOO LONG to make an update)",
			);
		},
		15: () => {
			susie.pause();
			setTimeout(() => {
				alert(
					"ok, I'll stop the music, I like it, but hearing it so much is getting annoying",
				);
			}, 10);
		},
		16: () => {
			alert("Anyways, I'll go to sleep now, good night !");
			const div = document.createElement("div");
			mammamia.loop = true;
			mammamia.play();
			div.id = "slep";
			div.style.position = "fixed";
			div.style.top = "0";
			div.style.left = "0";
			div.style.width = "100%";
			div.style.height = "100%";
			div.style.backgroundColor = "#110c1aff";
			div.style.opacity = "0.7";
			div.style.zIndex = "9999";
			div.style.pointerEvents = "none";
			document.body.prepend(div);
		},
		17: () => {
			alert("Zzzzzzzzzzzzzzzzzz");
		},
		18: () => {
			alert("Zzzzzzzzzzzzzzzzzz");
		},
		19: () => {
			alert("Zzzzzzzzzzzzzzzzzz");
		},
		20: () => {
			alert("Zzzzzzzzzzzzzzzzzz");
		},
		21: () => {
			loginBtn.textContent = "Think Fast Chucklenuts";
			flashbang.play();

			setTimeout(() => {
				if (userLang == "fr" || userLang == "fr-FR") {
					loginBtn.textContent = "Connexion";
				} else {
					loginBtn.textContent = "Log In";
				}
				document.querySelector("#slep").remove();
				mammamia.pause();
				const flash = document.createElement("div");
				flash.style.position = "fixed";
				flash.style.top = "0";
				flash.style.left = "0";
				flash.style.width = "100%";
				flash.style.height = "100%";
				flash.style.backgroundColor = "white";
				flash.style.opacity = "1";
				flash.style.zIndex = "99999";
				flash.style.pointerEvents = "none";
				flash.style.transition = "opacity 5s ease-out";
				document.body.appendChild(flash);

				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						flash.style.opacity = "0";
					});
				});

				flash.addEventListener("transitionend", () => flash.remove());
			}, 250);
		},
		22: () => {
			alert("Don't wake me up next time");
		},
		23: () => {
			alert("Anyways, I'm bored, let's play Rock Paper Scissors now!");

			const choices = ["Rock", "Paper", "Scissors"];

			let discordPoints = 0;
			let userPoints = 0;

			const playRound = () => {
				let userChoice;
				while (true) {
					const input = prompt("Rock, Paper, or Scissors?");
					if (!input) {
						alert("oh, ok, fine :c");
						console.log("Discord will remember this.");
					}

					if (input === null) return;

					const normalized = input.trim().toLowerCase();
					if (["rock", "paper", "scissors"].includes(normalized)) {
						userChoice =
							normalized.charAt(0).toUpperCase() + normalized.slice(1);
						break;
					}

					alert("Choose an actual valid option");
				}

				const botChoice = choices[Math.floor(Math.random() * 3)];

				let result;
				if (userChoice === botChoice) {
					result = "It's a Tie!";
				} else if (
					(userChoice === "Rock" && botChoice === "Scissors") ||
					(userChoice === "Scissors" && botChoice === "Paper") ||
					(userChoice === "Paper" && botChoice === "Rock")
				) {
					result = "You Win!";
					userPoints++;
					console.log(`Discord: ${discordPoints}, You: ${userPoints}`);
				} else {
					result = "You Lose!";
					discordPoints++;
					console.log(`Discord: ${discordPoints}, You: ${userPoints}`);
				}

				alert(`I choose ${botChoice}, ${result}`);

				const playAgain = confirm("Wanna play again?");
				if (playAgain) playRound();
				else alert("yeah, same, I'm getting bored");
			};

			playRound();
		},
		24: () => {
			const overlay = document.createElement("div");
			overlay.style.position = "fixed";
			overlay.style.top = "0";
			overlay.style.left = "0";
			overlay.style.width = "100%";
			overlay.style.height = "100%";
			overlay.style.backgroundColor = "black";
			overlay.style.zIndex = "99999";
			overlay.style.display = "flex";
			overlay.style.alignItems = "center";
			overlay.style.justifyContent = "center";

			const video = document.createElement("video");
			video.src = "Discord_files/video1.mp4";
			video.style.width = "100%";
			video.style.height = "100%";
			video.style.objectFit = "contain";
			video.autoplay = true;

			const skipBtn = document.createElement("button");
			skipBtn.textContent = "Skip Ad >";
			skipBtn.style.position = "absolute";
			skipBtn.style.bottom = "40px";
			skipBtn.style.right = "40px";
			skipBtn.style.padding = "10px 20px";
			skipBtn.style.backgroundColor = "rgba(0,0,0,0.7)";
			skipBtn.style.color = "white";
			skipBtn.style.border = "1px solid white";
			skipBtn.style.fontSize = "16px";
			skipBtn.style.cursor = "pointer";

			skipBtn.addEventListener("click", () => {
				skipBtn.textContent = "Sike! You don't get to skip :3";
				setTimeout(() => {
					skipBtn.remove();
				}, 1000);
			});

			video.addEventListener("ended", () => {
				overlay.remove();
			});

			overlay.appendChild(video);
			overlay.appendChild(skipBtn);
			document.body.appendChild(overlay);
		},
	};

	/*if (clicks > clickEffects[clickEffects.length - 1]) {
		alert(
			"If you're seeing this, either it's the end of, uhh, this ig, or it's still in W.I.P. (I can't just add infinite effects & dialog anyways)",
		);
	}*/

	if (clickEffects[clicks]) {
		clickEffects[clicks]();
	}
});

function RandomInt(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
