import axios from 'axios'

const inputLogin = document.getElementById('email');
const inputPass = document.getElementById('password');
const registerBtn = document.getElementById('loginbutton');


registerBtn.addEventListener('click', async () => {
    const email = inputLogin.value;
    const password = inputPass.value;

    try {
        const response = await axios.post('http://localhost:3000/login', {
            email: email,
            password: password
        })

        console.log(response);
    } catch(err) {
        console.log(err)
    }
    
});
