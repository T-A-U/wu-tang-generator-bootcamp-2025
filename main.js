 function generateWuTang() {
    const q = document.forms.wuQuestionaire;
    const parts = [q.q1.value, q.q3.value, q.q4.value];
    const name = parts.join('');
    document.getElementById('result').textContent = `Your generated name: ${name}`;
}

const wuBtn = document.getElementById('wuBtn');
    wuBtn.addEventListener('click', () => {
      generateWuTang();
})