// Run JS after HTML is loaded
window.addEventListener("DOMContentLoaded", () => {

  /* ============================
     GET FORM & INPUT ELEMENTS
  ============================ */

  const form = document.getElementById("myForm");

  // Text input
  const usernameInput = document.getElementById("username");

  // Email input
  const emailInput = document.getElementById("email");

  // Password input
  const passwordInput = document.getElementById("password");

  // Textarea
  const messageInput = document.getElementById("message");

  // Number input
  const ageInput = document.getElementById("age");

  // Date input
  const dobInput = document.getElementById("dob");

  // Select (dropdown)
  const countrySelect = document.getElementById("country");

  // Checkbox
  const termsCheckbox = document.getElementById("terms");

  // File input
  const fileInput = document.getElementById("profilePic");

  /* ============================
     FORM SUBMIT EVENT
  ============================ */

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh

    /* ============================
       GET VALUES FROM INPUTS
    ============================ */

    // Text, Email, Password, Textarea → .value
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const message = messageInput.value.trim();

    // Number input → .value (string, convert if needed)
    const age = Number(ageInput.value);

    // Date input → .value (YYYY-MM-DD)
    const dob = dobInput.value;

    // Select dropdown → .value
    const country = countrySelect.value;

    // Checkbox → .checked (true / false)
    const termsAccepted = termsCheckbox.checked;

    // Radio buttons → querySelector with :checked
    const genderElement = document.querySelector(
      'input[name="gender"]:checked'
    );
    const gender = genderElement ? genderElement.value : "";

    // File input → files[0]
    const file = fileInput.files[0]; // undefined if no file selected

    /* ============================
       BASIC VALIDATION EXAMPLES
    ============================ */

    if (!username) {
      alert("Username is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept terms & conditions");
      return;
    }

    if (!gender) {
      alert("Please select gender");
      return;
    }

    if (!file) {
      alert("Please upload a file");
      return;
    }

    /* ============================
       FINAL DATA OBJECT
    ============================ */

    const formData = {
      username,
      email,
      password,
      message,
      age,
      dob,
      country,
      termsAccepted,
      gender,
      fileName: file.name,
    };

    console.log("Form Data:", formData);

    // Reset form after successful submit
    form.reset();
  });
});
