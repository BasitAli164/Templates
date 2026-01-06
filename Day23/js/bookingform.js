window.addEventListener("DOMContentLoaded", () => {
  // ====== booking table logic code start form here ====

  // get all elements

  const addBooking = document.getElementById("bookingTableForm");
  const clientName = document.querySelector("#yourName");
  const date = document.querySelector("#date");
  const time = document.querySelector("#time");
  const service = document.getElementById("service");
  const table = document.querySelector("#typeOfTable");
  const game = document.querySelector("#typeofgame");
  const floor = document.getElementById("floor");
  const duration = document.querySelector("#duration");
  const specialRequest = document.querySelector("#specialRequest");
  const players = document.querySelector("#players");

  const bookingData = JSON.parse(localStorage.getItem("bookingTable")) || [];

  function saveToLocalStorage() {
    localStorage.setItem("bookingTable", JSON.stringify(bookingData));
  }

  // add event on btn for adding
  addBooking.addEventListener("submit", (e) => {
    try {
      e.preventDefault();
      // get values from input fields
      const clientname = clientName.value.trim();
      const bookingDate = date.value.trim();
      const timing = time.value.trim();
      const serviceType = service.value.trim();
      const tableType = table.value.trim();
      const gameType = game.value.trim();
      const floorType = floor.value.trim();
      const Duration = Number(duration.value);
      const request = specialRequest.value.trim();
      const player = Number(players.value);

      if (!clientname || !isNaN(clientname)) {
        alert("Client name is required and must a string");
        return;
      }
      if (!bookingDate) {
        alert("Booking Date is required ");
        return;
      }
      if (!timing) {
        alert("Timing is required ");
        return;
      }
      if (!serviceType) {
        alert("Service type is required ");
        return;
      }
      if (!gameType) {
        alert("Game type is required ");
        return;
      }
      if (!floorType) {
        alert("Floor type is required ");
        return;
      }
      if (!Duration) {
        alert("Duration  is required ");
        return;
      }
      if (!player) {
        alert("Number of player is required ");
        return;
      }

      const newData = {
        id: Date.now(),
        createdAt: new Date(),
        clientname,
        bookingDate,
        timing,
        serviceType,
        tableType,
        gameType,
        floorType,
        Duration,
        request,
        player,
      };
      bookingData.push(newData);
      saveToLocalStorage();
      clientName.focus();
      addBooking.reset();
    } catch (error) {
      console.error("Facing error during booking a table", error);
    }
  });

  // ====== booking table logic code end form here ====

  // ====== auth logic start form here ====
  const logOutBtn = document.getElementById("logoutBtn");
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("user Data", userData);

  if (!userData) {
    window.location.replace("../index.html");
  }

  logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    window.location.replace("../index.html");
  });

  // ====== auth logic end form here ====
});
