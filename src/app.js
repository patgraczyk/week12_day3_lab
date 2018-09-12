const Country = require('./models/country.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // const element = document.querySelector('select#countries');
  // const selectedView = new SelectView(element);
  // selectedView.bindEvents();

  const country = new Country();
  country.getData();

});
