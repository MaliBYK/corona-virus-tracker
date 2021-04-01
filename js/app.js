document.addEventListener("DOMContentLoaded", () => {
  Tracker.getData("TR").then(data => UI.changeStatisticsInUI(data));
  UI.addOptionsToUI();
});

document.querySelector(".selectButton").addEventListener("click", () => {
  const selectElement = document.querySelector(".selectSelect");
  Tracker.getData(selectElement.value).then(data =>
    UI.changeStatisticsInUI(data)
  );
});
