const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const resultEl = document.getElementById('result');
const rollingGif = document.getElementById('rollingGif');
const fallback = document.getElementById('fallback');

// Debug: Check if elements are found
console.log('Roll button:', rollBtn);
console.log('Rolling GIF:', rollingGif);
console.log('Fallback:', fallback);

async function rollDice() {
    try {
        console.log('Rolling dice...');
        
        // Clear previous result
        resultEl.textContent = '';
        
        // Show rolling animation immediately
        if (rollingGif) {
            console.log('Showing rolling GIF');
            rollingGif.hidden = false;
            rollingGif.style.display = 'block';
        } else if (fallback) {
            console.log('Showing fallback spinner');
            fallback.hidden = false;
            fallback.style.display = 'block';
        }

        rollBtn.disabled = true;
        resetBtn.disabled = true;

        console.log('Fetching roll result...');
        const res = await fetch('/roll');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Roll result:', data.value);

        resultEl.textContent = String(data.value);
    } catch (err) {
        console.error('Roll error:', err);
        resultEl.textContent = 'Error';
    } finally {
        // Hide rolling animation
        if (rollingGif) {
            rollingGif.hidden = true;
            rollingGif.style.display = 'none';
        }
        if (fallback) {
            fallback.hidden = true;
            fallback.style.display = 'none';
        }

        rollBtn.disabled = false;
        resetBtn.disabled = false;
    }
}

function resetResult() {
    resultEl.textContent = '';
}

rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetResult);



