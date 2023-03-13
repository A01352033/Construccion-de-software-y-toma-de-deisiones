const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const message = document.getElementById('password-message');

function validatePassword() {
	if (password.value !== confirmPassword.value) {
		message.textContent = 'Las contraseñas no coinciden';
		message.style.color = 'red';
	} else if (password.value.length < 8) {
		message.textContent = 'La contraseña debe tener al menos 8 caracteres';
		message.style.color = 'red';
	} else if (!/[A-Z]/.test(password.value)) {
		message.textContent = 'La contraseña debe tener al menos una letra mayúscula';
		message.style.color = 'red';
	} else if (!/[a-z]/.test(password.value)) {
		message.textContent = 'La contraseña debe tener al menos una letra minúscula';
		message.style.color = 'red';
	} else if (!/[0-9]/.test(password.value)) {
		message.textContent = 'La contraseña debe tener al menos un número';
		message.style.color = 'red';
	} else {
		message.textContent = 'La contraseña es válida';
		message.style.color = 'green';
	}
}

confirmPassword.addEventListener('input', validatePassword);
password.addEventListener('input', validatePassword);

function cambiarColor() {
	var colores = ["red", "green", "blue", "orange", "purple", "pink"];
	var color = colores[Math.floor(Math.random() * colores.length)];
	document.getElementById("color").style.color = color;
}