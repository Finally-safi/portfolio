function updateCountdown() {
    const birthday = new Date('2024-07-28'); // Safi's birthday
    const today = new Date();
    const timeDiff = birthday - today;

    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // If the birthday has already occurred this year, calculate for next year
    if (daysLeft < 0) {
        birthday.setFullYear(birthday.getFullYear() + 1);
        const nextTimeDiff = birthday - today;
        const nextDaysLeft = Math.ceil(nextTimeDiff / (1000 * 60 * 60 * 24));
        document.getElementById("birthday-countdown").innerText = `${nextDaysLeft} days left until next birthday!`;
    } else {
        document.getElementById("birthday-countdown").innerText = `${daysLeft} days left until birthday!`;
    }
}

/* Slider Container */
.slider-container {
    position: relative;
    max-width: 100%;
    width: 80%;
    margin: 0 auto;
}

.slider {
    display: flex;
    overflow: hidden;
}

.slide {
    display: none;
    width: 100%;
    height: auto;
}

button.prev, button.next {
    position: absolute;
    top: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
}

button.prev {
    left: 0;
}

button.next {
    right: 0;
}

// Update countdown on page load
updateCountdown();
// Update countdown every 24 hours
setInterval(updateCountdown, 1000 * 60 * 60 * 24);
