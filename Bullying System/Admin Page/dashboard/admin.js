// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// Render Analytical Charts on Load
window.addEventListener('DOMContentLoaded', () => {
    
    // CHART 1: MONTHLY TRENDS (LINE CHART)
    const ctxTrends = document.getElementById('trendsChart').getContext('2d');
    new Chart(ctxTrends, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            datasets: [{
                label: 'Submitted Reports',
                data: [3, 5, 8, 4, 2, 7, 9, 10],
                borderColor: '#1b5e20',
                backgroundColor: 'rgba(27, 94, 32, 0.1)',
                fill: true,
                tension: 0.3,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });

    // CHART 2: CATEGORY BREAKDOWN (DOUGHNUT CHART - INCLUDES 'OTHERS')
    const ctxCategory = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: ['Verbal Harassment', 'Physical Harm', 'Cyberbullying', 'Social Exclusion', 'Others'],
            datasets: [{
                data: [18, 12, 11, 7, 4],
                backgroundColor: [
                    '#1b5e20',
                    '#ff6b6b',
                    '#e59819',
                    '#2196f3',
                    '#9e9e9e'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right' }
            }
        }
    });

});