const form = document.getElementById('regForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name:    form.name.value.trim(),
    email:   form.email.value.trim(),
    phone:   form.phone.value.trim(),
    company: form.company.value.trim(),
    topic:   form.topic.value,
    comment: form.comment.value.trim(),
    agree:   form.agree.checked
  };

  if (!data.name || !data.email || !data.topic || !data.agree) {
    msg.textContent = 'Пожалуйста, заполни все обязательные поля (*).';
    msg.className = 'form-msg error';
    return;
  }

  console.log('Данные анкеты:', data);

  msg.textContent = `Спасибо, ${data.name}! Анкета отправлена ✅`;
  msg.className = 'form-msg success';

  form.reset();
});