const data = {};
data.totalSeat = 40;
data.seatsbooked = 0;
data.totalTk = 0;
let seatBooked = 0;
const seatNumber = document.getElementsByClassName("seatNumber");
const totalSeat = document.getElementById("totalSeat");
const total = document.getElementById("total");
const maxTicket = document.getElementById("max-ticket");
const discountInput = document.getElementById("discountInput");
const discountBtn = document.getElementById("discountBtn");
const discountDiv = document.getElementById("discountDiv");
const discountTk = document.getElementById("discountTk");
const grandTotal = document.getElementById("grandTotal");
const phoneNumber = document.getElementById("phone");
const submitBtn = document.getElementById("submit");
const discountPrice = document.getElementById("discount");

for (const seat of seatNumber) {
  seat.addEventListener("click", function (e) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";

    const tbody = document.getElementById("table");
    const tableData = document.createElement("tableData");
    tableData.innerHTML = `
    <div class="flex justify-between p-4">
    <h1 class="font-semibold text-lg text-[#030712]">
    ${e.target.innerText}
    </h1>
    <h1 class="font-semibold text-lg text-[#030712]">Economoy</h1>
    <p class="font-semibold text-lg">550</p>
           
       `;
    tbody.appendChild(tableData);

    seatBooked++;
    data.totalTk = data.totalTk + 550;
    data.totalSeat--;
    phoneNumber.disabled = false;
    totalSeat.innerText = data.totalSeat;
    total.innerText = data.totalTk;
    grandTotal.innerText = data.totalTk;

    console.log(seatBooked);

    if (seatBooked >= 4) {
      for (const seat of seatNumber) {
        seat.disabled = true;
        discountInput.disabled = false;
        discountBtn.disabled = false;
      }
    }
  });
}

discountBtn.addEventListener("click", function () {
  const coupon = discountInput.value;
  if (coupon === "NEW15" || coupon === "Couple 20") {
    if (coupon === "NEW15") {
      const discount = data.totalTk * 0.15;
      discountTk.classList.remove("hidden");
      discountPrice.innerText = discount;
      discountDiv.classList.add("hidden");
      const totalPrice = data.totalTk - discount;
      grandTotal.innerText = totalPrice;
    }
    if (coupon === "Couple 20") {
      const discount = data.totalTk * 0.2;
      discountDiv.classList.add("hidden");
      discountPrice.innerText = discount;
      discountTk.classList.remove("hidden");
      const totalPrice = data.totalTk - discount;
      grandTotal.innerText = totalPrice;
    }
  } else {
    document.getElementById("invalid").classList.remove("hidden");
  }
});
phoneNumber.addEventListener("input", function () {
  const number = phoneNumber.value;
  if (seatBooked > 0 && number.length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = tableDataue;
  }
});


