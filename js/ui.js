class UI {
  static addOptionsToUI() {
    const selector = document.querySelector(".selectSelect");
    fetch("./js/codes.json")
      .then(response => response.json())
      .then(data => {
        for (var i in data) {
          selector.innerHTML += `<option value="${i}">${data[i]}</option>`;
        }
      })
      .catch(error => console.error(error));
  }
  static changeStatisticsInUI(data) {
    console.log(data);
    document.querySelector(".countryName").textContent = document.querySelector(
      ".selectSelect"
    ).value;
    document.querySelector(".totalDeaths").textContent =
      data.timeline[0].deaths;
    document.querySelector(".totalRecovered").textContent =
      data.timeline[0].recovered;
    document.querySelector(".totalConfirmed").textContent =
      data.timeline[0].confirmed;
    document.querySelector(".dailyDeaths").textContent =
      data.timeline[0].new_deaths;
    document.querySelector(".dailyRecovered").textContent =
      data.timeline[0].new_recovered;
    document.querySelector(".dailyConfirmed").textContent =
      data.timeline[0].new_confirmed;
    document.querySelector(".population").textContent = data.population;
  }
}
