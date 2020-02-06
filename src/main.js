import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Character } from './character';

$(document).ready(function() {
  let player;
  let type;
  let name;
  $("#startbtn").click(function() {
    $("#startscreen").hide();
    $("#characterscreen").fadeIn();
  });
  $(".charbtn").click(function() {
    type = $(this).prop("value");
    player = new Character();
    $("#characterscreen").hide();
    $("#namescreen").fadeIn();
  });
  $("#nameform").submit(function(){
    event.preventDefault();
    name = $("#nameform :input").val();
    player.setName(name, type);
    $("#namescreen").hide();
    $("#nextscreen").fadeIn();
    console.log(player);
  });
  $("#nextscreen").on("click", "button", function(){
    $("#nextscreen").hide();
    $("#encounterscreen").fadeIn();
  });
});