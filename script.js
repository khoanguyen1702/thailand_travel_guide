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
        'For 2 People:': 'For 2 People:',
        'Add Payment': 'Add Payment',
        'Clear': 'Clear',
        'Payment History': 'Payment History'
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
        'For 2 People:': 'Cho 2 Người:',
        'Add Payment': 'Thêm Chi Phí',
        'Clear': 'Xóa',
        'Payment History': 'Lịch Sử Chi Phí',
        'Meet up with everyone at Tan San Nhat Airport': 'Gặp mặt mọi người ở Sân Bay Tân Sơn Nhất',
        'Welcome to BKK, Have quick dinner in Magic FoodCourt': 'Chào mừng đến Bangkok, Ăn tối nhanh tại Khu Ẩm Thực Magic',
        'Start getting on train to get to Bangkok': 'Bắt đầu lên tàu để đến Bangkok',
        'Check in at Blu 395': 'Nhận phòng tại Blu 395',
        'Going to Liabduan Danneramit Night Market': 'Đi đến Chợ Đêm Liabduan Danneramit',
        'Eating Thai local grilled restaurant Laab Ubon Kontrakran': 'Ăn tại nhà hàng nướng địa phương Thái Lan Laab Ubon Kontrakran',
        'Eating seafood and grilled local restaurant Jaekoy': 'Ăn hải sản và nhà hàng nướng địa phương Jaekoy',
        'Going back to hotel to rest for Day 2': 'Quay lại khách sạn để nghỉ ngơi cho Ngày 2'
    }
};

// Day activities data
const dayActivities = {
    1: [
        {
            time: '15:00 / 3PM',
            en_description: 'Meet up with everyone at Tan San Nhat Airport',
            vi_description: 'Gặp mặt mọi người ở Sân Bay Tân Sơn Nhất',
            link: null,
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '19:00 / 7PM',
            en_description: 'Welcome to BKK, Have quick dinner in Magic FoodCourt',
            vi_description: 'Chào mừng đến Bangkok, Ăn tối nhanh tại Khu Ẩm Thực Magic',
            link: 'https://share.google/3PNgyjdygDUJ7nall',
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '19:45',
            en_description: 'Start getting on train to get to Bangkok',
            vi_description: 'Bắt đầu lên tàu để đến Bangkok',
            link: null,
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '20:30',
            en_description: 'Check in at Blu 395',
            vi_description: 'Nhận phòng tại Blu 395',
            link: 'https://www.google.com/maps/place/BLU+395/@13.7908157,100.5484516,17z/data=!3m1!4b1!4m9!3m8!1s0x30e29da1cfa7db83:0xd73d1d6fc229beb0!5m2!4m1!1i2!8m2!3d13.7908157!4d100.5484516!16s%2Fg%2F11fqxx0kcz?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D',
            hasAlternatives: false,
            alternatives: []
        },
        {
            time: '21:00',
            en_description: 'Going to Liabduan Danneramit Night Market',
            vi_description: 'Đi đến Chợ Đêm Liabduan Danneramit',
            link: 'https://www.google.com/maps/place/Liabduan+Danneramit+Night+Market/data=!4m2!3m1!1s0x0:0x131b52caa9da76f7?sa=X&ved=1t:2428&ictx=111',
            hasAlternatives: true,
            alternatives: [
                {
                    en_description: 'Eating Thai local grilled restaurant Laab Ubon Kontrakran',
                    vi_description: 'Ăn tại nhà hàng nướng địa phương Thái Lan Laab Ubon Kontrakran',
                    link: 'https://www.google.com/maps/place/Laab+Ubon+Kontrakran/@13.7184488,100.5200902,17z/data=!3m1!4b1!4m6!3m5!1s0x30e298cf373aabc5:0xba251c51515ca274!8m2!3d13.7184488!4d100.5200902!16s%2Fg%2F11bt_g_9qw?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D'
                },
                {
                    en_description: 'Eating seafood and grilled local restaurant Jaekoy',
                    vi_description: 'Ăn hải sản và nhà hàng nướng địa phương Jaekoy',
                    link: 'https://www.google.com/maps/place/jaekoy/data=!4m2!3m1!1s0x30e29ecb374dcc41:0x36ad339bdcdce2e0?sa=X&ved=1t:242&ictx=111'
                }
            ]
        },
        {
            time: '22:30',
            en_description: 'Going back to hotel to rest for Day 2',
            vi_description: 'Quay lại khách sạn để nghỉ ngơi cho Ngày 2',
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
    paymentData: {},
    paymentHistory: []
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
    const lang = appData.currentLang;
    
    const description = lang === 'en' ? activity.en_description : activity.vi_description;
    
    const activeGoing = status.going ? 'active' : '';
    const activeNotGoing = !status.going ? 'active' : '';
    
    let alternativesHTML = '';
    if (!status.going && activity.hasAlternatives) {
        alternativesHTML = `
            <div class="alternatives">
                ${activity.alternatives.map((alt, altIndex) => {
                    const selected = status.selectedAlt === altIndex ? 'selected' : '';
                    const altDesc = lang === 'en' ? alt.en_description : alt.vi_description;
                    return `
                        <div class="alternative-option ${selected}" onclick="selectAlternative(${day}, ${index}, ${altIndex})">
                            ${altDesc}
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
                <div class="activity-description">${description}</div>
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

function addPaymentEntry() {
    const payer = document.getElementById('payer-name').value.trim();
    const amount = parseFloat(document.getElementById('amount-paid').value) || 0;
    const users = parseInt(document.getElementById('total-users').value) || 1;
    
    if (!payer || amount === 0) {
        alert('Please fill in all fields');
        return;
    }
    
    const day = appData.currentDay;
    if (!appData.paymentHistory[day]) {
        appData.paymentHistory[day] = [];
    }
    
    appData.paymentHistory[day].push({
        payer: payer,
        amount: amount,
        users: users,
        perPerson: (amount / users).toFixed(2),
        timestamp: new Date().toLocaleString('vi-VN')
    });
    
    // Clear inputs
    document.getElementById('payer-name').value = '';
    document.getElementById('amount-paid').value = '';
    document.getElementById('total-users').value = '1';
    calculatePayment();
    
    updatePaymentHistory();
    saveAppData();
}

function updatePaymentHistory() {
    const day = appData.currentDay;
    const history = appData.paymentHistory[day] || [];
    const historyContainer = document.getElementById('payment-history');
    
    if (history.length === 0) {
        historyContainer.innerHTML = '';
        return;
    }
    
    let totalAmount = 0;
    let historyHTML = '<div style="margin-top: 20px;"><h3 style="color: var(--dark-green); margin-bottom: 15px;">Payment History:</h3>';
    
    history.forEach((entry, idx) => {
        totalAmount += entry.amount;
        historyHTML += `
            <div style="background: var(--light-cream); padding: 12px; border-radius: 6px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>${entry.payer}</strong> - ${entry.amount.toLocaleString('vi-VN')} ₫ (${entry.users} people)
                    <br><small style="color: var(--light-text);">Per person: ${parseFloat(entry.perPerson).toLocaleString('vi-VN')} ₫</small>
                </div>
                <button onclick="deletePaymentEntry(${idx})" style="background: var(--coral); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Delete</button>
            </div>
        `;
    });
    
    historyHTML += `
        <div style="background: var(--sage-green); color: white; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: center; font-weight: bold;">
            Total Amount: ${totalAmount.toLocaleString('vi-VN')} ₫
        </div>
    </div>`;
    
    historyContainer.innerHTML = historyHTML;
}

function deletePaymentEntry(idx) {
    const day = appData.currentDay;
    if (appData.paymentHistory[day]) {
        appData.paymentHistory[day].splice(idx, 1);
        updatePaymentHistory();
        saveAppData();
    }
}

function openPaymentCalculator() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'flex';
    updatePaymentHistory();
}

function closePaymentCalculator() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'none';
    saveAppData();
}

function clearAllPayments() {
    const day = appData.currentDay;
    if (confirm('Are you sure you want to clear all payments for this day?')) {
        appData.paymentHistory[day] = [];
        document.getElementById('payer-name').value = '';
        document.getElementById('amount-paid').value = '';
        document.getElementById('total-users').value = '1';
        calculatePayment();
        updatePaymentHistory();
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
