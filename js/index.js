let nameInput = document.getElementById("name");
let dobInput = document.getElementById("dob");
let maleInput = document.getElementById("male");
let femaleInput = document.getElementById("female");
let messageInput = document.getElementById("message");
let submitButton = document.getElementById("submitButton");
let displayName = document.getElementById("displayName");
let displayDob = document.getElementById("displayDob");
let displayMale = document.getElementById("displayMale");
let displayFemale = document.getElementById("displayFemale");
let displayMessage = document.getElementById("displayMessage");


submitButton.addEventListener("click", function() {
    // Ambil nilai alas dan tinggi dari input field
    let nama = parseInt(nameInput.value);
    let dob = parseInt(dobInput.value);
    let male = parseInt(maleInput.value);
    let female = parseInt(femaleInput.value);
    let message = parseInt(messageInput.value);

    // Periksa apakah nilai yang dimasukkan valid


    // Tampilkan hasilnya

    displayName.textContent = nama;
    displayDob.textContent = dob;
    displayFemale.textContent = female;
    displayMale.textContent = male;
    displayMessage.textContent = message;
});
