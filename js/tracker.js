class Tracker {
  static getData(countryCode) {
    return new Promise(function (resolve, reject) {
      fetch(`https://corona-api.com/countries/${countryCode}`)
        .then(response => response.json())
        .then(data => resolve(data.data.timeline[0]))
        .catch(err => reject(new Error(err)));
    });
  }
}
