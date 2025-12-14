// ページ読み込み時にローカルストレージから状態を復元
window.addEventListener('DOMContentLoaded', function() {
    const pageName = getPageName();
    const savedState = localStorage.getItem(pageName);
    
    if (savedState) {
        const checkedItems = JSON.parse(savedState);
        checkedItems.forEach(itemId => {
            const checkbox = document.getElementById(itemId);
            if (checkbox) {
                checkbox.checked = true;
                checkbox.parentElement.classList.add('checked');
            }
        });
    }
});

// 現在のページ名を取得
function getPageName() {
    const path = window.location.pathname;
    const page = path.split('/').pop();
    return page || 'index.html';
}

// チェックボックスの状態が変更された時
function toggleItem(checkbox) {
    const item = checkbox.parentElement;
    
    if (checkbox.checked) {
        item.classList.add('checked');
        // チェック時の軽い振動（対応デバイスのみ）
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    } else {
        item.classList.remove('checked');
    }
    
    saveState();
}

// 状態をローカルストレージに保存
function saveState() {
    const pageName = getPageName();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedItems = [];
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedItems.push(checkbox.id);
        }
    });
    
    localStorage.setItem(pageName, JSON.stringify(checkedItems));
}

// リセットボタン
function resetList() {
    if (confirm('すべてのチェックをリセットしますか？')) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.parentElement.classList.remove('checked');
        });
        
        const pageName = getPageName();
        localStorage.removeItem(pageName);
        
        // リセット時の軽い振動（対応デバイスのみ）
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    }
}