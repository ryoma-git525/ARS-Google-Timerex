// URLのマッピング
const urlMap = {
  'ishii': 'https://timerex.net/s/yuya.ishii42_5b6a/a9c363fc',
  'oda': 'https://timerex.net/s/erika.oda.092_82b0/8b4ff60e/',
  'ichimura': 'https://timerex.net/s/624ichi_66e0/60ce5cbe',
  'script': 'https://docs.google.com/spreadsheets/d/1zLS88fdw5ejHw6SYymH4lib496ozy9NNsPlCZbMavdU/edit?gid=1315595831#gid=1315595831'
};

document.addEventListener('DOMContentLoaded', function() {
  // 各ボタンにクリックイベントを追加
  Object.keys(urlMap).forEach(id => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener('click', function() {
        // 新しいタブでURLを開く
        chrome.tabs.create({ url: urlMap[id] });
        // ポップアップを閉じる
        window.close();
      });
    }
  });
}); 