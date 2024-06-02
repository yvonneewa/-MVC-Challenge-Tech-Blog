// Handle submitting signup form
document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
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
