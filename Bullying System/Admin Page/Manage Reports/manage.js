// Toggle Sidebar Collapsed State
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Toggle Action Dropdown Menu
function toggleDropdown(btn) {
    // Close other open dropdowns first
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== btn.nextElementSibling) {
            menu.classList.remove('show');
        }
    });
    const dropdownMenu = btn.nextElementSibling;
    dropdownMenu.classList.toggle('show');
}

// Close dropdowns if user clicks anywhere outside
window.onclick = function(event) {
    if (!event.target.matches('.btn-more')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
}

// Approve submitted report
function approveReport(btn) {
    const row = btn.closest('tr');
    row.style.transition = 'all 0.3s ease';
    row.style.opacity = '0';
    setTimeout(() => {
        row.remove();
        alert('Report Approved! Moved to Active Tracking.');
    }, 300);
}

// Reject submitted report
function rejectReport(btn) {
    const row = btn.closest('tr');
    if (confirm('Are you sure you want to reject this report?')) {
        row.style.transition = 'all 0.3s ease';
        row.style.opacity = '0';
        setTimeout(() => row.remove(), 300);
    }
}

// Update Active Investigation Status
function updateStatus(btn, targetStatus) {
    const row = btn.closest('tr');
    const badge = row.querySelector('.badge');
    
    if (targetStatus === 'Investigation') {
        badge.className = 'badge badge-orange';
        badge.textContent = 'IN INVESTIGATION';
        alert('Case updated to In Investigation.');
    } else if (targetStatus === 'Resolved') {
        row.style.transition = 'all 0.3s ease';
        row.style.opacity = '0';
        setTimeout(() => {
            row.remove();
            alert('Case marked as Resolved. Moved to Report Records page.');
        }, 300);
    }
}

// SOS Alert Dispatch
function dispatchSOS(btn) {
    const row = btn.closest('tr');
    const badge = row.querySelector('.badge');
    badge.className = 'badge badge-danger';
    badge.textContent = 'DISPATCHED';
    alert('Security dispatched to the reported location!');
}

// SOS Alert Respond
function respondSOS(btn) {
    const row = btn.closest('tr');
    const badge = row.querySelector('.badge');
    badge.className = 'badge badge-success';
    badge.textContent = 'RESPONDED';
    const actionCell = btn.closest('td');
    actionCell.innerHTML = '<span class="text-muted">Completed</span>';
}

// Open Modal with specific data mode ('known' vs 'anon')
function openReportModal(type) {
    const modal = document.getElementById('reportModal');
    const accountSection = document.getElementById('accountInfoSection');
    const divider = document.getElementById('modalDivider');
    const caseHeader = document.getElementById('modalCaseNo');

    if (type === 'known') {
        caseHeader.textContent = "REPORT CASE NO. #REP-1042";
        accountSection.style.display = "block";
        divider.style.display = "block";

        document.getElementById('accFullName').textContent = "LeBronny Mouse";
        document.getElementById('accGradeSec').textContent = "Grade 10 - Acacia";
        document.getElementById('accUsername').textContent = "lebronny_mous";
        document.getElementById('accAdviser').textContent = "Mrs. Santos";
        document.getElementById('accLRN').textContent = "123456789012";
        document.getElementById('accEmail').textContent = "lebronny@lagroschool.edu.ph";

        document.getElementById('repCategory').textContent = "Verbal Harassment";
        document.getElementById('repDateTime').textContent = "August 18, 2026 - 10:30 AM";
        document.getElementById('repLocation').textContent = "2nd Floor Building B Corridor";
        document.getElementById('repDescription').textContent = "Student was repeatedly mocked and threatened by a group of classmates during recess near the stairwell.";

    } else if (type === 'anon') {
        caseHeader.textContent = "REPORT CASE NO. #REP-1038 (ANONYMOUS)";
        accountSection.style.display = "none";
        divider.style.display = "none";

        document.getElementById('repCategory').textContent = "Social Exclusion";
        document.getElementById('repDateTime').textContent = "August 17, 2026 - 2:15 PM";
        document.getElementById('repLocation').textContent = "Cafeteria";
        document.getElementById('repDescription').textContent = "Group of students preventing victim from joining lunch table and spreading false rumours.";
    }

    modal.classList.add('active');
}

// Close Modal
function closeReportModal() {
    const modal = document.getElementById('reportModal');
    modal.classList.remove('active');
}

// Close Modal when clicking background overlay
function closeModalOnOverlay(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeReportModal();
    }
}

// Suspend Student Account Action
function suspendStudent(reportId) {
    const duration = prompt(`Enter suspension duration (days) for reporter of ${reportId}:`, "7");
    if (duration) {
        alert(`Account associated with ${reportId} has been suspended for ${duration} days.`);
    }
}

// Ban Student Account Action
function banStudent(reportId) {
    if (confirm(`Are you sure you want to PERMANENTLY BAN the student who submitted ${reportId}? This will revoke their platform access.`)) {
        alert(`Account associated with ${reportId} has been permanently banned.`);
    }
}