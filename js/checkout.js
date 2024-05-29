
// Exercise 6

function validateSololetras(name) {
	const soloLetras = /^[a-zA-Z]+$/  // Expresion regular para verificar que el parametro introducido sean solo letras
	return soloLetras.test(name)	
}

function ValidatesoloNumeros(phone) {
	const soloNumeros = /^[0-9]+$/	 // Expresion regular para verificar que el parametro introducido sean solo numeros
	return soloNumeros.test(phone)
}

function ValidateFormatoEmail(email) {
	const formatoEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Expresión regular para verificar que el marametro tenga formato email
	return formatoEmailRegex.test(email);
}

function ValidateLetraNumero(Password) {
	const letraNumeroRegex = /^(?=\w*\d)(?=\w*[a-zA-Z])\S{4,8}$/;  // Expresión regular para verificar que el password contenga almenos un letras y un numeros y tenga entre 4 y 8 caracteres
	return letraNumeroRegex.test(Password);
}


function validate(event) {
	event.preventDefault()

	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress")  
	var errorLastN = document.getElementById("errorLastN")  
	var errorPassword = document.getElementById("errorPassword")  
	var errorPhone = document.getElementById("errorPhone")  	


	// Validacion fName - Debe contener mas de 3 digitos y solo letras
	if (fName.value.length < 3 || (!validateSololetras(fName.value))) {
		error++
		fName.classList.add("is-invalid")
		errorName.style.display = "block"
		errorName.textContent = "This field is required, only accept letters and must have at least 3 characters."
	}else {	
		fName.classList.remove("is-invalid")
		errorName.style.display = ""		
	}

	// Validacion fLastN - Debe contener mas de 3 digitos y solo letras
	if (fLastN.value.length < 3 || (!validateSololetras(fLastN.value))) {
		error++
		fLastN.classList.add("is-invalid")
		errorLastN.style.display = "block"
		errorLastN.textContent = "This field is required, only accept letters and must have at least 3 characters."
	}else {	
		fLastN.classList.remove("is-invalid")
		errorLastN.style.display = ""		
	}

	// Validacion fPhone - Debe contener 9 digitos (solo numeros)
	if (fPhone.value.length != 9 || (!ValidatesoloNumeros(fPhone.value))) {
		error++
		fPhone.classList.add("is-invalid")
		errorPhone.style.display = "block"
		errorPhone.textContent = "This field is required. Invalid phone number!! Must be 9 digits with no letter (only numbers)"
	}else {	
		fPhone.classList.remove("is-invalid")
		errorPhone.style.display = ""		
	}

	// Validacion fEmail - debe tener forato email
	if (fEmail.value.length < 3 || (!ValidateFormatoEmail(fEmail.value))) {
		error++
		fEmail.classList.add("is-invalid")
		errorEmail.style.display = "block"
		errorEmail.textContent = "This field is required, it must be in email format, contain an '@' and be at least 3 characters"
	}else {	
		fEmail.classList.remove("is-invalid")
		errorEmail.style.display = ""		
	}

	// Validacion fPassword - debe tener entre 4 y 8 caracteres e incluir letras y numeros
	if ((!ValidateLetraNumero(fPassword.value))) {
		error++
		fPassword.classList.add("is-invalid")
		errorPassword.style.display = "block"
		errorPassword.textContent = "This field is required. The password must be between 4 and 8 characters and contain at least one letter and one number."
	}else {	
		fPassword.classList.remove("is-invalid")
		errorPassword.style.display = ""		
	}

	// Validacion fAddress - debe tener como minimo 3 caracteres
	if (fAddress.value.length < 3) {
		error++
		fAddress.classList.add("is-invalid")
		errorAddress.style.display = "block"	
		errorAddress.textContent = "This field is required and must have, at least, 3 characters"
	}else {	
		fAddress.classList.remove("is-invalid")
		errorAddress.style.display = ""		
	}
	

	if (error > 0) {
		alert("Error")
	}else {
		alert("OK")
	}

}


