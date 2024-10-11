document.addEventListener('DOMContentLoaded', () => {
  const startAdventureButton = document.querySelector('.submit-button.pulse');
  const backToHomeButton = document.getElementById('back-to-home');

  if (startAdventureButton) {
    startAdventureButton.addEventListener('click', () => {
      window.location.href = 'adventure.html';
    });
  }

  if (backToHomeButton) {
    backToHomeButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // 既存のコードをここに追加
  // ...
});