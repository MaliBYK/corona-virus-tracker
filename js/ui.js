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
  }
}
