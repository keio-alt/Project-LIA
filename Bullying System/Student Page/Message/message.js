// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// SOS Modal Handlers
function openSosModal() {
    const modal = document.getElementById('sosModal');
    if (modal) modal.classList.remove('hidden');
}

function closeSosModal() {
    const modal = document.getElementById('sosModal');
    if (modal) modal.classList.add('hidden');
}

function handleSosSubmit(e) {
    e.preventDefault();
    const location = document.getElementById('sosLocation').value;
    alert(`🚨 SOS ALERT DISPATCHED!\nLocation: ${location}\n\nGuidance Office has been notified immediately.`);
    closeSosModal();
}

// Chat Functionality
function handleSendMessage(event) {
    event.preventDefault();

    const input = document.getElementById('messageInput');
    const chatBody = document.getElementById('chatBody');
    const text = input.value.trim();

    if (!text) return;

    // Current time format
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append student message
    const msgContainer = document.createElement('div');
    msgContainer.className = 'message student-message';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = timeString;

    msgContainer.appendChild(bubble);
    msgContainer.appendChild(timeSpan);

    chatBody.appendChild(msgContainer);

    // Reset input & scroll to bottom
    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Auto scroll on load
window.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chatBody');
    if (chatBody) {
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});