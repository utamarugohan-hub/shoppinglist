// 季節と週のマッピング
const seasonWeeks = {
    spring: [
        { value: 'spring-week1.html', text: '1週目' },
        { value: 'spring-week2.html', text: '2週目' },
        { value: 'spring-week3.html', text: '3週目' }
    ],
    summer: [
        { value: 'summer-week1.html', text: '1週目' },
        { value: 'summer-week2.html', text: '2週目' },
        { value: 'summer-week3.html', text: '3週目' }
    ],
    autumn: [
        { value: 'autumn-week1.html', text: '1週目' },
        { value: 'autumn-week2.html', text: '2週目' },
        { value: 'autumn-week3.html', text: '3週目' }
    ],
    winter: [
        { value: 'winter-week1.html', text: '1週目' },
        { value: 'winter-week2.html', text: '2週目' },
        { value: 'winter-week3.html', text: '3週目' }
    ]
};

// 季節選択時の処理
function updateWeeks() {
    const seasonSelect = document.getElementById('season-select');
    const weekSelector = document.getElementById('week-selector');
    const weekSelect = document.getElementById('week-select');
    
    const selectedSeason = seasonSelect.value;
    
    if (selectedSeason) {
        // 週選択を表示
        weekSelector.style.display = 'block';
        
        // 週のオプションをクリア
        weekSelect.innerHTML = '<option value="">週を選んでください</option>';
        
        // 選択された季節の週を追加
        seasonWeeks[selectedSeason].forEach(week => {
            const option = document.createElement('option');
            option.value = week.value;
            option.textContent = week.text;
            weekSelect.appendChild(option);
        });
    } else {
        // 週選択を非表示
        weekSelector.style.display = 'none';
    }
}

// 週選択時の処理
function goToWeek() {
    const weekSelect = document.getElementById('week-select');
    const selectedWeek = weekSelect.value;
    
    if (selectedWeek) {
        window.location.href = selectedWeek;
    }
}