fetch("./js/codes.json")
  .then(response => response.json())
  .then(data => {
    for (var i in data) {
      console.log(data[i]);
    }
  });

console.log(document.querySelector(".selectSelect").value);
