// Language translations
const translations = {
    en: {
        'Thailand Trip': 'Thailand Trip',
        'April 24 - 29, 2026': 'April 24 - 29, 2026',
        'Day 1 - April 24': 'Day 1 - April 24',
        'Day 2 - April 25': 'Day 2 - April 25',
        'Day 3 - April 26': 'Day 3 - April 26',
        'Day 4 - April 27': 'Day 4 - April 27',
        'Day 5 - April 28': 'Day 5 - April 28',
        'Day 6 - April 29': 'Day 6 - April 29',
        '💰 Payment Calculator': '💰 Payment Calculator',
        'Payment Calculator': 'Payment Calculator',
        'Payer Name:': 'Payer Name:',
        'Amount Paid:': 'Amount Paid:',
        'Total Users:': 'Total Users:',
        'Per Person:': 'Per Person:',
        'For 2 People:': 'For 2 People:'
    },
    vi: {
        'Thailand Trip': 'Chuyến Du Lịch Thái Lan',
        'April 24 - 29, 2026': '24 - 29 Tháng Tư, 2026',
        'Day 1 - April 24': 'Ngày 1 - 24 Tháng Tư',
        'Day 2 - April 25': 'Ngày 2 - 25 Tháng Tư',
        'Day 3 - April 26': 'Ngày 3 - 26 Tháng Tư',
        'Day 4 - April 27': 'Ngày 4 - 27 Tháng Tư',
        'Day 5 - April 28': 'Ngày 5 - 28 Tháng Tư',
        'Day 6 - April 29': 'Ngày 6 - 29 Tháng Tư',
        '💰 Payment Calculator': '💰 Tính Toán Chi Phí',
        'Payment Calculator': 'Tính Toán Chi Phí',
        'Payer Name:': 'Tên Người Chi Tiền:',
        'Amount Paid:': 'Số Tiền Đã Chi:',
        'Total Users:': 'Tổng Số Người:',
        'Per Person:': 'Trên Mỗi Người:',
        'For 2 People:': 'Cho 2 Người:'
    }
};

// Day activities data
const dayActivities = {
    1: [
        {
            time: '15:00 / 3PM',
            description: 'Meet up with everyone at Tan San Nhat Airport',
            link: null,
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '19:00 / 7PM',
            description: 'Welcome to BKK, Have quick dinner in Magic FoodCourt',
            link: 'https://share.google/3PNgyjdygDUJ7nall',
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '19:45',
            description: 'Start getting on train to get to Bangkok',
            link: null,
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '20:30',
            description: 'Check in at Blu 395',
            link: 'https://share.google/7RoxcqXVEhLCGZogo',
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '21:00',
            description: 'Going to Liabduan Danneramit Night Market',
            link: 'https://share.google/z7ujVzH2mBezwwrUA',
            hasAlternatives: true,
            alternatives: [
                {
                    description: 'Eating Thai local grilled restaurant Laab Ubon Kontrakran',
                    link: 'https://share.google/YZKTDD6Y7jlGpcYPK'
                },
                {
                    description: 'Eating seafood and grilled local restaurant Jaekoy',
                    link: 'https://share.google/ZlNy1PVntZTfc2TDV'
                }
            ]
        },
        {
            time: '22:30',
            description: 'Going back to hotel to rest for Day 2',
            link: null,
            hasAlternatives: false,
            alternatives: []
        }
    ],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
};

// Data storage
const appData = {
    currentLang: 'en',
    currentDay: 1,
    activityStatus: {},
    paymentData: {}
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadAppData();
    setupLanguageToggle();
    selectDay(1);
    updateActivityDisplay();
    setupPaymentCalculator();
    updatePageContent();
});

// Language Toggle
function setupLanguageToggle() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });
}

function changeLanguage(lang) {
    appData.currentLang = lang;
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    updatePageContent();
    saveAppData();
}

function updatePageContent() {
    const lang =  appData.currentLang;
    
    document.querySelectorAll('[data-en]').forEach(element => {
        const enText = element.dataset.en;
        const viText = element.dataset.vi;
        const text = lang === 'en' ? enText : viText;
        if (element.tagName === 'INPUT' && element.placeholder) {
            element.placeholder = text;
        } else if (element.tagName === 'LABEL') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
}

// Day Selection
function selectDay(day) {
    appData.currentDay = day;
    
    // Update active button
    document.querySelectorAll('.day-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-day="${day}"]`).classList.add('active');
    
    // Update title
    const dayDates = [
        'Day 1 - April 24',
        'Day 2 - April 25',
        'Day 3 - April 26',
        'Day 4 - April 27',
        'Day 5 - April 28',
        'Day 6 - April 29'
    ];
    document.getElementById('current-day-title').textContent = dayDates[day - 1];
    
    // Update activities
    updateActivityDisplay();
    saveAppData();
}

// Activity Display
function updateActivityDisplay() {
    const day = appData.currentDay;
    const activities = dayActivities[day] || [];
    const container = document.getElementById('activities-content');
    
    if (activities.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">No activities planned for this day yet</p>';
        return;
    }
    
    container.innerHTML = activities.map((activity, index) => createActivityCard(activity, day, index)).join('');
}

function createActivityCard(activity, day, index) {
    const keyId = `${day}-${index}`;
    const status = appData.activityStatus[keyId] || { going: true, selectedAlt: null };
    
    const activeGoing = status.going ? 'active' : '';
    const activeNotGoing = !status.going ? 'active' : '';
    
    let alternativesHTML = '';
    if (!status.going && activity.hasAlternatives) {
        alternativesHTML = `
            <div class="alternatives">
                ${activity.alternatives.map((alt, altIndex) => {
                    const selected = status.selectedAlt === altIndex ? 'selected' : '';
                    return `
                        <div class="alternative-option ${selected}" onclick="selectAlternative(${day}, ${index}, ${altIndex})">
                            ${alt.description}
                            ${alt.link ? `<br><a href="${alt.link}" target="_blank" class="alternative-link">🔗 View</a>` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
    
    return `
        <div class="activity-card">
            <div class="activity-info">
                <div class="activity-time">${activity.time}</div>
                <div class="activity-description">${activity.description}</div>
                ${activity.link ? `<a href="${activity.link}" target="_blank" class="activity-link">🔗 View Location</a>` : ''}
            </div>
            <div class="activity-status">
                <div class="status-button">
                    <button class="btn-status btn-going ${activeGoing}" onclick="setActivityStatus(${day}, ${index}, true)" title="Going">
                        ✓
                    </button>
                    ${activity.hasAlternatives ? `<button class="btn-status btn-not-going ${activeNotGoing}" onclick="setActivityStatus(${day}, ${index}, false)" title="Not Going">✕</button>` : ''}
                </div>
                ${alternativesHTML}
            </div>
        </div>
    `;
}

function setActivityStatus(day, index, going) {
    const keyId = `${day}-${index}`;
    if (!appData.activityStatus[keyId]) {
        appData.activityStatus[keyId] = {};
    }
    appData.activityStatus[keyId].going = going;
    updateActivityDisplay();
    saveAppData();
}

function selectAlternative(day, index, altIndex) {
    const keyId = `${day}-${index}`;
    if (!appData.activityStatus[keyId]) {
        appData.activityStatus[keyId] = {};
    }
    appData.activityStatus[keyId].selectedAlt = altIndex;
    updateActivityDisplay();
    saveAppData();
}

// Payment Calculator
function setupPaymentCalculator() {
    const payerInput = document.getElementById('payer-name');
    const amountInput = document.getElementById('amount-paid');
    const usersInput = document.getElementById('total-users');
    
    [payerInput, amountInput, usersInput].forEach(input => {
        if (input) {
            input.addEventListener('change', calculatePayment);
            input.addEventListener('input', calculatePayment);
        }
    });
}

function calculatePayment() {
    const amount = parseFloat(document.getElementById('amount-paid').value) || 0;
    const users = parseInt(document.getElementById('total-users').value) || 1;
    
    const perPerson = users > 0 ? (amount / users).toLocaleString('vi-VN') : 0;
    const forTwo = users > 0 ? ((amount / users) * 2).toLocaleString('vi-VN') : 0;
    
    document.getElementById('per-person').textContent = perPerson + ' ₫';
    document.getElementById('for-two').textContent = forTwo + ' ₫';
}

function openPaymentCalculator() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'flex';
}

function closePaymentCalculator() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'none';
    savePaymentData();
}

function savePaymentData() {
    const payer = document.getElementById('payer-name').value;
    const amount = document.getElementById('amount-paid').value;
    const day = appData.currentDay;
    
    if (payer && amount) {
        appData.paymentData[day] = { payer, amount, date: new Date().toLocaleString() };
        saveAppData();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('payment-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Data Persistence
function saveAppData() {
    try {
        localStorage.setItem('thailand-trip-app-data', JSON.stringify(appData));
    } catch (e) {
        console.warn('Could not save app data:', e);
    }
}

function loadAppData() {
    try {
        const saved = localStorage.getItem('thailand-trip-app-data');
        if (saved) {
            const loaded = JSON.parse(saved);
            Object.assign(appData, loaded);
        }
    } catch (e) {
        console.warn('Could not load app data:', e);
    }
}
