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

// Update countdown on page load
updateCountdown();
// Update countdown every 24 hours
setInterval(updateCountdown, 1000 * 60 * 60 * 24);
