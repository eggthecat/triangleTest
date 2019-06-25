import { template } from './template';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  console.log('Jquery is working!');
  $('#template-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = template(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
