// =====================================
// CALCULATE BOOKING
// =====================================

function calculateBooking() {

    let destination = document.getElementById("destination").value;
    let seat = document.getElementById("seat").value;
    let quantity = parseInt(document.getElementById("ticket").value);

    let price = 0;

    // Destination Price
    if(destination == "Kuala Lumpur")
    {
        price = 120;
    }
    else if(destination == "Johor")
    {
        price = 180;
    }
    else if(destination == "Kedah")
    {
        price = 220;
    }
    else if(destination == "Kelantan")
    {
        price = 200;
    }
    else if(destination == "Melaka")
    {
        price = 160;
    }
    else if(destination == "Pahang")
    {
        price = 190;
    }
    else if(destination == "Perak")
    {
        price = 170;
    }
    else if(destination == "Pulau Pinang")
    {
        price = 240;
    }
    else if(destination == "Sabah")
    {
        price = 450;
    }
    else if(destination == "Sarawak")
    {
        price = 430;
    }
    else if(destination == "Terengganu")
    {
        price = 210;
    }
    else if(destination == "Labuan")
    {
        price = 400;
    }

    // Seat Price
    if(seat == "Business")
    {
        price += 150;
    }
    else if(seat == "First Class")
    {
        price += 200;
    }

    let subtotal = price * quantity;
    let tax = subtotal * 0.08;
    let total = subtotal + tax;

    document.getElementById("ticketPrice").innerHTML = "RM " + price.toFixed(2);
    document.getElementById("subtotal").innerHTML = "RM " + subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "RM " + tax.toFixed(2);
    document.getElementById("grandTotal").innerHTML = "RM " + total.toFixed(2);

}


// =====================================
// RESET BOOKING
// =====================================

function resetBooking(){

    document.getElementById("bookingForm").reset();

    document.getElementById("ticketPrice").innerHTML = "RM0.00";
    document.getElementById("subtotal").innerHTML = "RM0.00";
    document.getElementById("tax").innerHTML = "RM0.00";
    document.getElementById("grandTotal").innerHTML = "RM0.00";

}


// =====================================
// CONFIRM BOOKING
// =====================================

function confirmBooking(){

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    let booking = {

        bookingID: "BK" + String(bookings.length + 1).padStart(4,"0"),

        passenger: document.getElementById("name").value,

        ic: document.getElementById("ic").value,

        phone: document.getElementById("phone").value,

        gender: document.getElementById("gender").value,

        destination: document.getElementById("destination").value,

        seat: document.getElementById("seat").value,

        date: document.getElementById("date").value,

        ticket: document.getElementById("ticket").value,

        total: document.getElementById("grandTotal").innerText

    };

    // Validation

    if(
        booking.passenger == "" ||
        booking.ic == "" ||
        booking.phone == "" ||
        booking.date == ""
    )
    {
        alert("Please complete all required fields.");
        return;
    }

    if(
        booking.total == "RM0.00" ||
        booking.total == "RM 0.00"
    )
    {
        alert("Please click Calculate before confirming your booking.");
        return;
    }

    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert("Booking Confirmed Successfully!");

    window.location.href = "view.html";

}


// =====================================
// CANCEL BOOKING
// =====================================

function cancelBooking(index){

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if(confirm("Are you sure you want to cancel this booking?"))
    {
        bookings.splice(index,1);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Booking has been cancelled.");

        location.reload();
    }

}