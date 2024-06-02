// Handle submitting new comment form
document.getElementById('newCommentForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const content = document.getElementById('content').value;
    const userId = document.getElementById('userId').value;
    const postId = document.getElementById('postId').value;
    
    try {
        const response = await fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, userId, postId })
        });
        
        if (response.ok) {
            window.location.reload(); 
            const errorMessage = await response.text();
            console.error('Error creating comment:', errorMessage);
            
        }
    } catch (error) {
        console.error('Error creating comment:', error);
      
    }
});
