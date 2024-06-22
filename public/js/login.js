
document.addEventListener('DOMContentLoaded', () => {

document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    

    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    
    try {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        if (response.ok) {
            window.location.href = '/dashboard'; 
        } else {
            const errorMessage = await response.text();
            console.error('Login failed:', errorMessage);
           
        }
    } catch (error) {
        console.error('Login failed:', error);
        
    }
});
});