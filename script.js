document.querySelector(".form").addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    if (email && password) {
       document.querySelector(".upload").style.display="block";
       document.querySelector(".home").style.display="none";
    }
});

document.getElementById('surveyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelector(".testimonial-container").style.display="block";
    document.querySelector(".upload").style.display="none";
    document.querySelector(".home").style.display="none";
});


document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".last-page").style.display = "block";
    document.querySelector(".testimonial-container").style.display = "none";
    document.querySelector(".upload").style.display = "none";
    document.querySelector(".home").style.display = "none";
});

