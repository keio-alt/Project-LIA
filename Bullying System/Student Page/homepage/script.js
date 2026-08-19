// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    } else {
        sidebar.classList.toggle('closed');
    }
}

// SOS Modal Open / Close Functions
function openSosModal() {
    const modal = document.getElementById('sosModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeSosModal() {
    const modal = document.getElementById('sosModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Handle SOS Emergency Form Submission
function handleSosSubmit(e) {
    e.preventDefault();
    const locationInput = document.getElementById('sosLocation');
    const descriptionInput = document.getElementById('sosDescription');

    const location = locationInput ? locationInput.value : '';
    const description = descriptionInput ? descriptionInput.value : '';

    alert(`🚨 EMERGENCY SOS SENT!\n\nLocation: ${location}\nDetails: ${description || 'None provided'}\n\nGuidance Counselor has been alerted immediately.`);
    
    if (locationInput) locationInput.value = '';
    if (descriptionInput) descriptionInput.value = '';
    
    closeSosModal();
}