// Handle submitting signup form
console.log('hello')
document.querySelector('.signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name-signup').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    
    try {
        const response = await fetch('/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password,email })
        });
        
        if (response.ok) {
            window.location.href = '/login'; 
        } else {
            const errorMessage = await response.text();
            console.error('Signup failed:', errorMessage);
           
        }
    } catch (error) {
        console.error('Signup failed:', error);
    
    }
});
