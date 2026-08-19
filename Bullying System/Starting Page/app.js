// Function to switch between Student Login, Student Signup, and Admin Login
function showForm(sectionId) {
    document.getElementById('studentLoginSection').classList.add('hidden');
    document.getElementById('studentSignupSection').classList.add('hidden');
    document.getElementById('adminLoginSection').classList.add('hidden');

    document.getElementById(sectionId).classList.remove('hidden');
}