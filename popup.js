// コマンドとURLのマッピング
const commandMap = {
  'ishii': 'https://timerex.net/s/yuya.ishii42_5b6a/a9c363fc',
  'oda': 'https://timerex.net/s/erika.oda.092_82b0/8b4ff60e/',
  'ichimura': 'https://timerex.net/s/624ichi_66e0/60ce5cbe',
  'script': 'https://docs.google.com/spreadsheets/d/1zLS88fdw5ejHw6SYymH4lib496ozy9NNsPlCZbMavdU/edit?gid=1315595831#gid=1315595831',
  // 必要に応じて他のコマンドを追加できます
};

document.addEventListener('DOMContentLoaded', function() {
  const commandInput = document.getElementById('commandInput');
  const executeButton = document.getElementById('executeCommand');

  // Enterキーでも実行できるようにする
  commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      executeCommand();
    }
  });

  // ボタンクリックで実行
  executeButton.addEventListener('click', executeCommand);

  function executeCommand() {
    const command = commandInput.value.toLowerCase().trim();
    
    if (command in commandMap) {
      // 新しいタブでURLを開く
      chrome.tabs.create({ url: commandMap[command] });
      // 入力をクリア
      commandInput.value = '';
      // ポップアップを閉じる
      window.close();
    } else {
      alert('無効なコマンドです。\n利用可能なコマンド: ' + Object.keys(commandMap).join(', '));
    }
  }
}); 