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

// Replacement suggestions
const suggestionOptions = [
    'Spa Day at Local Resort',
    'Beach Relaxation',
    'Local Market Exploration',
    'Thai Cooking Class',
    'Temple Visit',
    'Muay Thai Training',
    'Island Hopping Tour',
    'Night Market Adventure'
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadDayData(1);
    document.getElementById('activity-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addActivity();
        }
    });
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
}

// Load day data into the UI
function loadDayData(day) {
    const dayData = daysData[day];
    const dayNumber = day;
    const dayDate = dayData.date;
    
    // Update title
    document.getElementById('day-title').textContent = `Day ${dayNumber} - ${dayDate}`;
    
    // Update activities list
    updateActivitiesList();
    
    // Update going status
    document.getElementById('going-checkbox').checked = dayData.going;
    updateSuggestionsVisibility();
    
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
        list.innerHTML = '<li class="empty-message">No activities yet. Add one below!</li>';
        return;
    }
    
    list.innerHTML = dayData.activities.map((activity, index) => `
        <li class="activity-item">
            <span>${activity}</span>
            <button class="delete-btn" onclick="deleteActivity(${index})">✕</button>
        </li>
    `).join('');
}

// Add activity
function addActivity() {
    const input = document.getElementById('activity-input');
    const activity = input.value.trim();
    
    if (activity === '') {
        alert('Please enter an activity');
        return;
    }
    
    daysData[currentDay].activities.push(activity);
    input.value = '';
    updateActivitiesList();
}

// Delete activity
function deleteActivity(index) {
    daysData[currentDay].activities.splice(index, 1);
    updateActivitiesList();
}

// Toggle going status
function toggleGoingStatus() {
    const isChecked = document.getElementById('going-checkbox').checked;
    daysData[currentDay].going = isChecked;
    updateSuggestionsVisibility();
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
    // Get 3 random suggestions
    const shuffled = suggestionOptions.sort(() => 0.5 - Math.random()).slice(0, 3);
    const suggestionsList = document.getElementById('suggestions-list');
    
    suggestionsList.innerHTML = shuffled.map((suggestion, index) => `
        <div class="suggestion" onclick="selectSuggestion('${suggestion}')">
            <input type="radio" name="suggestion" value="${index + 1}">
            <span>${suggestion}</span>
        </div>
    `).join('');
}

// Select a suggestion (placeholder for future functionality)
function selectSuggestion(suggestion) {
    // This will be extended with more functionality later
    console.log(`Selected suggestion: ${suggestion}`);
    alert(`You selected: ${suggestion}\n\nThis will be replaced with "${document.getElementById('day-title').textContent}"`);
}

// Save day data (for future persistence)
function saveDayData() {
    // This can be extended to save to localStorage or backend
    console.log(`Saved data for Day ${currentDay}:`, daysData[currentDay]);
}