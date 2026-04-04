// Day data storage
const daysData = {
    1: { date: 'April 24', activities: [], going: true },
    2: { date: 'April 25', activities: [], going: true },
    3: { date: 'April 26', activities: [], going: true },
    4: { date: 'April 27', activities: [], going: true },
    5: { date: 'April 28', activities: [], going: true },
    6: { date: 'April 29', activities: [], going: true }
};

let currentDay = 1;

// Replacement suggestions for Thailand travel
const suggestionOptions = [
    'Spa Day at Local Resort',
    'Beach Relaxation at Sunset',
    'Local Market Exploration',
    'Thai Cooking Class',
    'Ancient Temple Visit',
    'Muay Thai Training Session',
    'Island Hopping Adventure',
    'Night Bazaar Shopping Tour',
    'Elephant Sanctuary Visit',
    'Scuba Diving Expedition',
    'Tuk-Tuk City Tour',
    'Thai Massage & Wellness Day',
    'Ziplining Through Jungle',
    'Floating Market Tour',
    'Street Food Tasting Tour'
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadDayData(1);
    
    // Event listener for activity input
    document.getElementById('activity-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addActivity();
        }
    });

    // Load saved data from localStorage if available
    loadFromLocalStorage();
    
    // Update stats on load
    updateStats();
});

// Select a day
function selectDay(day) {
    // Save current day data
    saveDayData();
    
    // Update active state
    document.querySelectorAll('.day-box').forEach(box => {
        box.classList.remove('active');
    });
    document.querySelector(`[data-day="${day}"]`).classList.add('active');
    
    // Load new day
    currentDay = day;
    loadDayData(day);
    
    // Scroll to details section
    document.querySelector('.day-details').scrollIntoView({ behavior: 'smooth' });
}

// Load day data into the UI
function loadDayData(day) {
    const dayData = daysData[day];
    const dates = ['April 24', 'April 25', 'April 26', 'April 27', 'April 28', 'April 29'];
    
    // Update title
    document.getElementById('day-title').textContent = `Day ${day} Activities`;
    
    // Update activities list
    updateActivitiesList();
    
    // Update going status
    document.getElementById('going-checkbox').checked = dayData.going;
    updateSuggestionsVisibility();
    updateStatusBadge();
    
    // Set active day box
    document.querySelectorAll('.day-box').forEach(box => {
        box.classList.remove('active');
    });
    document.querySelector(`[data-day="${day}"]`).classList.add('active');
}

// Update the activities list display
function updateActivitiesList() {
    const dayData = daysData[currentDay];
    const list = document.getElementById('activities-list');
    
    if (dayData.activities.length === 0) {
        list.innerHTML = `
            <li class="empty-message">
                <i class="fas fa-inbox"></i>
                <p>No activities yet</p>
            </li>
        `;
        return;
    }
    
    list.innerHTML = dayData.activities.map((activity, index) => `
        <li class="activity-item">
            <span>
                <i class="fas fa-check-circle" style="color: var(--secondary); margin-right: 10px;"></i>
                ${activity}
            </span>
            <button class="delete-btn" onclick="deleteActivity(${index})" title="Delete activity">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `).join('');
}

// Add activity
function addActivity() {
    const input = document.getElementById('activity-input');
    const activity = input.value.trim();
    
    if (activity === '') {
        alert('❌ Please enter an activity or place to visit!');
        return;
    }
    
    if (activity.length > 100) {
        alert('⚠️ Activity description is too long (max 100 characters)');
        return;
    }
    
    daysData[currentDay].activities.push(activity);
    input.value = '';
    input.focus();
    updateActivitiesList();
    updateStats();
    saveToLocalStorage();
}

// Delete activity
function deleteActivity(index) {
    if (confirm('Are you sure you want to delete this activity?')) {
        daysData[currentDay].activities.splice(index, 1);
        updateActivitiesList();
        updateStats();
        saveToLocalStorage();
    }
}

// Toggle going status
function toggleGoingStatus() {
    const isChecked = document.getElementById('going-checkbox').checked;
    daysData[currentDay].going = isChecked;
    updateSuggestionsVisibility();
    updateStatusBadge();
    updateStats();
    saveToLocalStorage();
}

// Update suggestions visibility based on going status
function updateSuggestionsVisibility() {
    const suggestionsContainer = document.getElementById('suggestions-container');
    const goingCheckbox = document.getElementById('going-checkbox');
    
    if (goingCheckbox.checked) {
        suggestionsContainer.style.display = 'none';
    } else {
        suggestionsContainer.style.display = 'block';
        generateSuggestions();
    }
}

// Generate random suggestions
function generateSuggestions() {
    // Shuffle and get 3 random suggestions
    const shuffled = [...suggestionOptions].sort(() => 0.5 - Math.random()).slice(0, 3);
    const suggestionsList = document.getElementById('suggestions-list');
    
    suggestionsList.innerHTML = shuffled.map((suggestion, index) => `
        <label class="suggestion">
            <input type="radio" name="suggestion" value="${index + 1}">
            <span>${suggestion}</span>
        </label>
    `).join('');
}

// Update status badge
function updateStatusBadge() {
    const badge = document.getElementById('status-badge');
    const statusSpan = document.getElementById('toggle-status');
    const isGoing = document.getElementById('going-checkbox').checked;
    
    if (isGoing) {
        badge.classList.remove('not-going');
        badge.classList.add('going');
        badge.innerHTML = '<i class="fas fa-circle"></i> <span>Ready to Go!</span>';
        statusSpan.textContent = 'Going on this day';
    } else {
        badge.classList.remove('going');
        badge.classList.add('not-going');
        badge.innerHTML = '<i class="fas fa-times-circle"></i> <span>Looking for Alternatives</span>';
        statusSpan.textContent = 'Skipping this day';
    }
}

// Update quick stats
function updateStats() {
    // Total activities
    let totalActivities = 0;
    let daysGoing = 0;
    let daysSkipping = 0;
    
    Object.keys(daysData).forEach(day => {
        totalActivities += daysData[day].activities.length;
        if (daysData[day].going) {
            daysGoing++;
        } else {
            daysSkipping++;
        }
    });
    
    document.getElementById('total-activities').textContent = totalActivities;
    document.getElementById('days-going').textContent = daysGoing;
    document.getElementById('days-skipping').textContent = daysSkipping;
}

// Save day data to localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('thailand-trip-data', JSON.stringify(daysData));
        console.log('Data saved to localStorage');
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

// Load day data from localStorage
function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('thailand-trip-data');
        if (saved) {
            const loaded = JSON.parse(saved);
            Object.assign(daysData, loaded);
            console.log('Data loaded from localStorage');
        }
    } catch (e) {
        console.warn('Could not load from localStorage:', e);
    }
}