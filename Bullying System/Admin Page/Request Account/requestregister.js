// Mock database of students requesting registration
const studentsData = {
    1: {
        fullName: "Kurt Vinz Culajara",
        username: "kurt_culajara",
        lrn: "123456789012",
        gradeSection: "Grade 11 - Bill Gates",
        adviser: "Mr. Cruz",
        email: "kurt.culajara@deped.gov.ph"
    },
    2: {
        fullName: "Juan Batumbakal",
        username: "juan_batumbakal",
        lrn: "987654321098",
        gradeSection: "Grade 11 - Alan Turing",
        adviser: "Mrs. Reyes",
        email: "juan.batumbakal@deped.gov.ph"
    },
    3: {
        fullName: "Kathy P. Peko",
        username: "kathy_peko",
        lrn: "456789123045",
        gradeSection: "Grade 10 - Rizal",
        adviser: "Mr. Santos",
        email: "kathy.peko@deped.gov.ph"
    }
};

let currentPendingCount = 3;

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Open Scan Modal
function scanStudent(id) {
    const student = studentsData[id];
    if (!student) return;

    document.getElementById('modalFullName').textContent = student.fullName;
    document.getElementById('modalUsername').textContent = student.username;
    document.getElementById('modalLRN').textContent = student.lrn;
    document.getElementById('modalGradeSec').textContent = student.gradeSection;
    document.getElementById('modalAdviser').textContent = student.adviser;
    document.getElementById('modalEmail').textContent = student.email;

    document.getElementById('studentModal').classList.add('active');
}

// Close Modal
function closeStudentModal() {
    document.getElementById('studentModal').classList.remove('active');
}

// Close Modal on Overlay Click
function closeModalOnOverlay(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeStudentModal();
    }
}

// Approve Student
function approveStudent(id, name) {
    const row = document.getElementById(`row-${id}`);
    if (!row) return;

    row.style.transition = 'all 0.3s ease';
    row.style.opacity = '0';
    setTimeout(() => {
        row.remove();
        updatePendingCount();
        alert(`Account request for ${name} has been approved.`);
    }, 300);
}

// Reject Student
function rejectStudent(id, name) {
    if (confirm(`Are you sure you want to reject registration for ${name}?`)) {
        const row = document.getElementById(`row-${id}`);
        if (!row) return;

        row.style.transition = 'all 0.3s ease';
        row.style.opacity = '0';
        setTimeout(() => {
            row.remove();
            updatePendingCount();
        }, 300);
    }
}

// Update Counter Badge
function updatePendingCount() {
    currentPendingCount--;
    document.getElementById('pendingCount').textContent = currentPendingCount;
}