const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const resultEl = document.getElementById('result');
const rollingGif = document.getElementById('rollingGif');
const fallback = document.getElementById('fallback');

async function rollDice() {
    try {
        // Show rolling animation
        if (rollingGif) rollingGif.hidden = false;
        if (fallback && rollingGif.hidden) fallback.hidden = false;

        rollBtn.disabled = true;
        resetBtn.disabled = true;

        const res = await fetch('/roll');
        const data = await res.json();

        resultEl.textContent = String(data.value);
    } catch (err) {
        console.error(err);
        resultEl.textContent = 'Error';
    } finally {
        // Hide rolling animation
        if (rollingGif) rollingGif.hidden = true;
        if (fallback) fallback.hidden = true;

        rollBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function resetResult() {
    resultEl.textContent = '';
}

rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetResult);



