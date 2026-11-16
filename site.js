'use strict';
const featured = document.querySelector('#featured-screen');
const openScreen = document.querySelector('.screen-open');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-image]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    featured.src = button.dataset.image;
    featured.alt = button.dataset.description;
    openScreen.dataset.screen = button.dataset.image;
    openScreen.dataset.caption = button.dataset.description;
    openScreen.setAttribute('aria-label', '放大实机画面：' + button.dataset.description);
  });
});
const dialog = document.querySelector('#screen-dialog');
openScreen.addEventListener('click', () => {
  const photo = document.querySelector('#dialog-image');
  photo.src = openScreen.dataset.screen;
  photo.alt = openScreen.dataset.caption;
  document.querySelector('#dialog-caption').textContent = openScreen.dataset.caption;
  dialog.showModal();
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
const transformImage = document.querySelector('#transform-image');
document.querySelectorAll('[data-form]').forEach(button => {
  button.addEventListener('click', () => {
    const restored = button.dataset.form === 'restored';
    transformImage.src = restored ? 'assets/brindle.webp' : 'assets/mist-dog.webp';
    transformImage.alt = restored ? '黑雾散去，大门牙恢复成抬爪微笑的小法斗' : '受黑雾控制的大门牙';
    document.querySelectorAll('[data-form]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  });
});
