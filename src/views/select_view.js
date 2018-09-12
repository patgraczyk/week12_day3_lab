const PubSub = require('../helpers/pub_sub.js')

const SelectView= function(element){
  this.element = element;
}

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Country:country-loaded', (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  });


this.element.addEventListener('change', (event) => {
  const selectedIndex= event.target.value;
  PubSub.publish('SelectView', selectedIndex);
});


}

SelectView.prototype.populate = function(allCountries){
  allCountries.forEach((country, index ) => {
  const option = document.createElement('option')
  option.textContent = country.name;
  console.log(country)
  option.value = index;
  this.element.appendChild(option);
});
}





module.exports = SelectView;
