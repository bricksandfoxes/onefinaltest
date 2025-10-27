const contactBtn = document.getElementById('contactBtn');
const formContainer = document.getElementById('formContainer');
const cancelBtn = document.getElementById('cancelBtn');
const contactForm = document.getElementById('contactForm'); 
const submitBtn = document.getElementById('submitBtn');
//const comingSoon = document.getElementById('comingSoon');

//contactBtn.addEventListener('click', function() {
    //comingSoon.classList.add('active');
//});

function sendEmail(e) {
    e.preventDefault(); // Prevent form submission
    
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_mcusd0p", "template_4g4q0gk", templateParams)
        .then(() => {
            alert("Message sent successfully!");
            contactForm.reset();
            formContainer.classList.remove('active');
            contactBtn.style.display = 'inline-block';
        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send the message.");
        });

    return false; // Additional safety to prevent form submission
}

contactBtn.addEventListener('click', function() {
    contactBtn.style.display = 'none';
    formContainer.classList.add('active');
});

cancelBtn.addEventListener('click', function() {
    formContainer.classList.remove('active');
    contactBtn.style.display = 'inline-block';
    contactForm.reset();
});

contactForm.addEventListener('submit', sendEmail);