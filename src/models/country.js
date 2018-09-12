const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Country = function(){
  this.countries = null;
}

Country.prototype.getData = function() {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.countries = data;
    this.mapNames(data);
    PubSub.publish('Country:country-loaded', this.countries);

    PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      this.publishCountryDetail(selectedIndex);
    })
  });
}

Country.prototype.mapNames = function(data) {
  data.map(country => {
    country.name;
    // console.log(country.name);
  });
};

Country.prototype.publishCountryDetail = function(selectedIndex) {
  const selectedCountry = this.countries[selectedIndex];
  console.log(selectedCountry)
  PubSub.publish('Countries:selected-country-ready', selectedCountry);
}


module.exports = Country;


// PubSub.subscribe('SelectView:change', (event) => {
//   const selectedIndex = event.detail;
//   this.publishCountryDetail(selectedIndex);
// });
