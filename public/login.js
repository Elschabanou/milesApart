document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const name = document.getElementById('username').value;
        const password = document.getElementById('password').value;


        async function getuserdata() {
            try {
                const response = await fetch("/.netlify/functions/userCredentials");
                const test = await response.json();
                console.log(test)


            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        }
        getuserdata();
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    // Function to apply styles based on the selected option
    function applyStyles(option) {
        switch (option) {
            case 'option1':
                console.log("option1 selected", option);
                document.body.style.backgroundColor = "#F4FFCA";
                document.querySelectorAll('input').forEach(function (element) {
                    element.style.background = '#F4FFCA';
                });


                break;
            case 'option2':

                console.log("option1 selected", option);
                document.body.style.backgroundColor = '#CAEFFF';
                document.querySelectorAll('input').forEach(function (element) {
                    element.style.background = '#CAEFFF';
                });
                if (document.getElementById("login-form")) {
                    document.getElementById("login-form").style.background = "rgba(202, 239, 255, 0.4)";
                };
                break;
            case 'option3':
                console.log("option1 selected", option);

                document.body.style.backgroundColor = '#E4CAFF';
                document.querySelectorAll('input').forEach(function (element) {
                    element.style.background = '#E4CAFF';
                });
                if (document.getElementById("login-form")) {
                    document.getElementById("login-form").style.background = "rgba(228, 202, 255, 0.4)";
                };
                break;
            case 'option4':
                document.body.style.backgroundColor = '#FFC46C';
                document.querySelectorAll('input').forEach(function (element) {
                    element.style.background = '#FFC46C';
                });

                if (document.getElementById("login-form")) {
                    document.getElementById("login-form").style.background = "rgba(255, 196, 108, 0.4)";
                };
                break;
            default:
                document.body.style.backgroundColor = '#FFC46C';

        }
    }

    // Retrieve the selected option from localStorage and apply styles
    const savedOption = localStorage.getItem('selectedStyle');
    if (savedOption) {
        console.log("savedOption", savedOption);
        applyStyles(savedOption);
    }
});
