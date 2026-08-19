// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Filter Records in Archive
function filterRecords() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const categoryValue = document.getElementById('categoryFilter').value;
    const yearValue = document.getElementById('yearFilter').value;

    const rows = document.querySelectorAll('#recordsTableBody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const category = row.children[2].textContent;
        const dateResolved = row.children[3].textContent;

        const matchesSearch = text.includes(searchValue);
        const matchesCategory = (categoryValue === 'ALL' || category === categoryValue);
        const matchesYear = (yearValue === 'ALL' || dateResolved.includes(yearValue));

        if (matchesSearch && matchesCategory && matchesYear) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Open Detailed View Modal (Populated with image format parameters)
function viewRecord(data) {
    document.getElementById('modalCaseTitle').textContent = `REPORT CASE NO. ${data.caseId}`;
    document.getElementById('modalFullName').textContent = data.fullName;
    document.getElementById('modalGradeSection').textContent = data.gradeSection;
    document.getElementById('modalUsername').textContent = data.username;
    document.getElementById('modalAdviser').textContent = data.adviser;
    document.getElementById('modalLrn').textContent = data.lrn;
    document.getElementById('modalEmail').textContent = data.email;

    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalDateTime').textContent = data.dateTime;
    document.getElementById('modalLocation').textContent = data.location;
    document.getElementById('modalDescription').textContent = data.description;

    document.getElementById('reportModal').classList.add('active');
}

// Close Modal
function closeModal() {
    document.getElementById('reportModal').classList.remove('active');
}

// Delete Record Function
function deleteRecord(rowId, caseId) {
    const confirmed = confirm(`Are you sure you want to delete record ${caseId}? This action cannot be undone.`);
    if (confirmed) {
        const targetRow = document.getElementById(rowId);
        if (targetRow) {
            targetRow.remove();
        }
    }
}