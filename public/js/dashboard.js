// Handle deleting blog post
document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', async (event) => {
        event.preventDefault();
        
        const postId = event.target.dataset.postId;
        
        try {
            const response = await fetch(`/blog/${postId}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                window.location.reload(); 
            } else {
                const errorMessage = await response.text();
                console.error('Error deleting blog post:', errorMessage);
              
            }
        } catch (error) {
            console.error('Error deleting blog post:', error);
          
        }
    });
});
