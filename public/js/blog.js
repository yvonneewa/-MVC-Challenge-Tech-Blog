
document.getElementById('newBlogForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const userId = document.getElementById('userId').value;
    
    try {
        const response = await fetch('/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, content, userId })
        });
        
        if (response.ok) {
            window.location.href = '/dashboard';
        } else {
            const errorMessage = await response.text();
            console.error('Error creating blog post:', errorMessage);
          
        }
    } catch (error) {
        console.error('Error creating blog post:', error);
    
    }
});
