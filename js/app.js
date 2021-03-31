document.addEventListener("DOMContentLoaded", () => {
  Tracker.getData("TR").then(data => UI.changeStatisticsInUI(data));
  UI.addOptionsToUI();
});
