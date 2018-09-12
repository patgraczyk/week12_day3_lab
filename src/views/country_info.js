const PubSub = require('../helpers/pub_sub.js')

const CountryInfo = function(selectedElement){
  this.selectedElement = selectedElement;
}

CountryInfo.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:selected-country-ready', (event) =>{
    const country = event.detail;
    this.render(country);
  });
};

CountryInfo.prototype.render = function(){
    const infoParagraph = document.createElement('h2');
    infoParagraph.textContent = `${country.name}`
    this.selectedElement.appendChild(infoParagraph);
}


module.exports = CountryInfo;
