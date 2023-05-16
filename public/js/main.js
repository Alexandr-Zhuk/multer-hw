const mainForm = document.querySelector('.test-form');

mainForm.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = await axios.post('/mult/personal', formData);
    const resForm = document.querySelector('.res-form');
    resForm.innerHTML = data.data;
});