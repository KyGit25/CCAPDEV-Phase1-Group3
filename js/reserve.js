// reserve.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const lab = document.getElementById("labSelect").value;
    const seat = document.getElementById("seatNumber").value.trim().toUpperCase();
    const date = document.getElementById("date").value;
    const anonymous = document.getElementById("anonymous").checked;

    const selectedSlots = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
      .map(slot => slot.value);

    if (!lab || !seat || !date || selectedSlots.length === 0) {
      alert("Please fill in all fields and select at least one time slot.");
      return;
    }

    if (!/^S(0[1-9]|[12][0-9]|3[0-5])$/.test(seat)) {
      alert("Seat number must be between S01 and S35.");
      return;
    }

    const reservation = {
      lab,
      seat,
      date,
      slots: selectedSlots,
      anonymous
    };

    console.log("Reservation submitted:", reservation);
    alert("Reservation submitted successfully! (Simulated)");

    form.reset();
  });
});
