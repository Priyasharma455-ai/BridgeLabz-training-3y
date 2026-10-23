// Q5: Movie Ticket Booking (Objects + RegExp)
document.getElementById("bookingForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seatsText = document.getElementById("seats").value.trim();
    const seats = Number(seatsText);
    const errors = [];
    if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) errors.push("Name must contain alphabets only.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email.");
    if (!/^\d+$/.test(seatsText) || seats < 1 || seats > 10) errors.push("Seats must be a whole number from 1 to 10.");
    const message = document.getElementById("message");
    if (errors.length) {
        message.style.color = "red";
        message.textContent = errors.join("\n");
        return;
    }
    const booking = { name, email, seats };
    message.style.color = "green";
    message.textContent = `Booking successful!\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
});
