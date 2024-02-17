let count = 0;
    const counterElement = document.getElementById('counter');

    function increment() {
        count++;
        counterElement.textContent = count;
    }

    function decrement() {
        count--;
        counterElement.textContent = count;
    }

    function reset() {
        count = 0;
        counterElement.textContent = count;
    }