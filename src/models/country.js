const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

const Country = function(){
  this.text = null;
}

Country.prototype.getData = function() {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    console.log(this.text);
    PubSub.publish('Country:country-loaded', this.text);
  });

}

module.exports = Country;
