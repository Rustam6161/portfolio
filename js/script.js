// Мобилдик меню, аватар резерви жана байланыш формасы
document.addEventListener('DOMContentLoaded', function () {

  // 1. Мобилдик менюну ачуу/жабуу
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  }

  // 2. Сүрөт жүктөлбөсө, демейки аватарды (инициалдар) көрсөтүү
  var avatar = document.querySelector('.avatar');
  var img = avatar && avatar.querySelector('img');
  if (img) {
    var fallback = function () { avatar.classList.add('no-img'); };
    img.addEventListener('error', fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  }

  // 3. Форма: серверге жөнөтүлбөйт, ырастоо гана көрсөтүлөт
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.className = '';
      if (!form.checkValidity()) {
        status.className = 'err';
        status.textContent = 'Бардык талааларды туура толтуруңуз.';
        return;
      }
      status.textContent = 'Рахмат! Форма текшерилди. Бул — үлгү, ошондуктан маалымат серверге жөнөтүлгөн жок.';
      form.reset();
    });
  }
});
