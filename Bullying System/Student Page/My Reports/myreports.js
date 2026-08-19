// Toggle Sidebar Collapse
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// SOS Modal Functions
function openSosModal() {
    document.getElementById('sosModal').classList.remove('hidden');
}

function closeSosModal() {
    document.getElementById('sosModal').classList.add('hidden');
}

function handleSosSubmit(e) {
    e.preventDefault();
    alert('SOS Emergency Alert Sent!');
    closeSosModal();
}

// Filter Table Reports
function filterReports(status, buttonElement) {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    const rows = document.querySelectorAll('#reportsTableBody tr');
    rows.forEach(row => {
        const rowStatus = row.getAttribute('data-status');
        if (status === 'all' || rowStatus === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Edit Profile Modal Functions
function openEditProfileModal() {
    document.getElementById('editFullName').value = document.getElementById('displayFullName').textContent;
    document.getElementById('editUsername').value = document.getElementById('displayUsername').textContent.replace('@', '');
    document.getElementById('editLrn').value = document.getElementById('displayLrn').textContent;
    document.getElementById('editGradeSection').value = document.getElementById('displayGradeSection').textContent;
    document.getElementById('editAdviser').value = document.getElementById('displayAdviser').textContent;
    document.getElementById('editGmail').value = document.getElementById('displayGmail').textContent;

    document.getElementById('editProfileModal').classList.remove('hidden');
}

function closeEditProfileModal() {
    document.getElementById('editProfileModal').classList.add('hidden');
}

function handleProfileUpdate(e) {
    e.preventDefault();

    const newFullName = document.getElementById('editFullName').value.trim();
    const newUsername = document.getElementById('editUsername').value.trim();
    const newLrn = document.getElementById('editLrn').value.trim();
    const newGradeSection = document.getElementById('editGradeSection').value.trim();
    const newAdviser = document.getElementById('editAdviser').value.trim();
    const newGmail = document.getElementById('editGmail').value.trim();

    document.getElementById('displayFullName').textContent = newFullName;
    document.getElementById('displayUsername').textContent = `@${newUsername}`;
    document.getElementById('displayLrn').textContent = newLrn;
    document.getElementById('displayGradeSection').textContent = newGradeSection;
    document.getElementById('displayAdviser').textContent = newAdviser;
    document.getElementById('displayGmail').textContent = newGmail;

    const topbarUser = document.getElementById('topbarUsername');
    if (topbarUser) {
        topbarUser.textContent = newUsername;
    }

    alert('Profile information updated successfully!');
    closeEditProfileModal();
}

function handleLogout() {
    if (confirm('Are you sure you want to log out?')) {
        alert('Logging out...');
    }
}