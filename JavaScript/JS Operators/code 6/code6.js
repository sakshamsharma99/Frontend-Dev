let count = 0;

function counterSystem() {

    function increment() {
        count++;
        console.log("Count:", count);
    }

    function decrement() {
        count--;
        console.log("Count:", count);
    }

    // Simulated clicks
    increment();
    increment();
    decrement();
}

counterSystem();
