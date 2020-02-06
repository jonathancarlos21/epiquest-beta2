import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $("#startbtn").click(function() {
    $("#startscreen").hide();
    $("#characterscreen").fadeIn();
  });
  $("#characterscreen").on("click", "button", function() {
    $("#characterscreen").hide();
    $("#namescreen").fadeIn();
  });
  $("#nameform").submit(function(){
    event.preventDefault();
    $("#namescreen").hide();
    $("#nextscreen").fadeIn();
  });
  $("#nextscreen").on("click", "button", function(){
    $("#nextscreen").hide();
    $("#encounterscreen").fadeIn();
  });
});