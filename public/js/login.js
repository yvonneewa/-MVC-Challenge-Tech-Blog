
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
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
