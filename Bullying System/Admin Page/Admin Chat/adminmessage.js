// Dummy Database for Conversations
const chatThreads = {
    1: {
        name: "LeBronny Mouse",
        sub: "LRN: 123456789012 • Grade 10 - Acacia • <span class='status-tag'>Active Investigation</span>",
        messages: [
            { type: "incoming", text: "Good morning po. Gusto ko lang po itanong kung na-review niyo na po yung incident report na pinasa ko kahapon tungkol sa ginawa sa corridor?", time: "10:30 AM" },
            { type: "outgoing", text: "Hello LeBronny. Yes, na-review na namin ang report mo (#REP-1042). Kasalukuyan na naming itinatawag ang inyong Section Adviser para sa follow-up meeting.", time: "10:38 AM" },
            { type: "incoming", text: "Thank you po, Guidance Admin. Makakaasa po ba ako na mananatiling confidential ito?", time: "10:45 AM" }
        ]
    },
    2: {
        name: "Kurt Vinz Culajara",
        sub: "LRN: 123456789011 • Grade 11 - Bill Gates • <span class='status-tag'>Pending Review</span>",
        messages: [
            { type: "incoming", text: "May update na po ba sa report ko?", time: "Yesterday" },
            { type: "outgoing", text: "Hi Kurt, nareceive na namin. Standby ka muna habang vina-validate ang details.", time: "Yesterday" }
        ]
    },
    3: {
        name: "Juan Batumbakal",
        sub: "LRN: 987654321098 • Grade 11 - Alan Turing • <span class='status-tag' style='color:#2f855a'>Resolved Case</span>",
        messages: [
            { type: "incoming", text: "Nakausap ko na po si Adviser.", time: "Aug 17" },
            { type: "outgoing", text: "Mabuti naman Juan. Closed na ang case entry mo. Contact us again if needed.", time: "Aug 17" }
        ]
    }
};

let currentStudentId = 1;

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Select Student Chat
function selectStudent(id, name, lrn, section, status, event) {
    currentStudentId = id;

    // Highlight active student item in sidebar
    document.querySelectorAll('.student-item').forEach(item => item.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Update Header
    document.getElementById('activeStudentName').textContent = name;
    document.getElementById('activeStudentSub').innerHTML = chatThreads[id].sub;

    // Load Messages
    renderMessages();
}

// Render Messages
function renderMessages() {
    const chatContainer = document.getElementById('chatMessages');
    chatContainer.innerHTML = '<div class="system-date">Today, August 19, 2026</div>';

    const thread = chatThreads[currentStudentId].messages;
    thread.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message msg-${msg.type}`;
        msgDiv.innerHTML = `
            <div class="msg-bubble">
                ${msg.text}
                <span class="msg-time">${msg.time}</span>
            </div>
        `;
        chatContainer.appendChild(msgDiv);
    });

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Send Message
function sendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('messageInput');
    const text = input.value.trim();

    if (!text) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Push message to dummy database
    chatThreads[currentStudentId].messages.push({
        type: "outgoing",
        text: text,
        time: currentTime
    });

    renderMessages();
    input.value = "";
}

// Filter Student List in Search Input
function filterStudents() {
    const filter = document.getElementById('studentSearch').value.toLowerCase();
    const items = document.querySelectorAll('.student-item');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "flex" : "none";
    });
}

// View Linked Case Button Action
function viewCaseDetails() {
    alert(`Redirecting to Linked Case Report for ${chatThreads[currentStudentId].name}...`);
    window.location.href = "../Manage Reports/manage.html";
}