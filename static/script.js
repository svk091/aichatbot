document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Function to add a message to the chat
    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        // Format the message if it's from the bot
        if (!isUser) {
            // Convert <br> to actual line breaks
            message = message.replace(/<br>/g, '\n');
            
            // Format bold text
            message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            
            // Format code blocks
            message = message.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
            
            // Format lists
            message = message.replace(/\n\s*[-*]\s/g, '\n• ');
            
            // Convert remaining newlines to <br>
            message = message.replace(/\n/g, '<br>');
        }
        
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to send message to the backend
    async function sendMessage(message) {
        try {
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error:', error);
            return 'Sorry, there was an error processing your request.';
        }
    }

    // Handle send button click
    sendButton.addEventListener('click', async () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true);
            userInput.value = '';
            
            const response = await sendMessage(message);
            addMessage(response, false);
        }
    });

    // Handle Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
}); 