var config = {
    apiKey: "AIzaSyCkFIrcXAJIIcuKFNjYlw1uPIP4ANt1lak",
    authDomain: "train-schedule-6e3f6.firebaseapp.com",
    databaseURL: "https://train-schedule-6e3f6.firebaseio.com",
    projectId: "train-schedule-6e3f6",
    storageBucket: "train-schedule-6e3f6.appspot.com",
    messagingSenderId: "137822201446"
  };
  firebase.initializeApp(config);


  function newTrain(){
      $("#train-btn").on("click",function(){
alert("clicked");

var val1= $("<td class='new1'>");
var val2= $("<td class='new2'>");
var val3= $("<td class='new3'>");
var val4= $("<td class='new4'>");

val1.append($("#train-input").val());
$("#row-1").append(val1);


        // $("#row-1").append("<td>" + ($("#train-input").val()));
        // $("#row-2").append("<td>" + ($("#dest-input").val()));
        // $("#row-4").append("<td>" + ($("#time-input").val()));
        // $("#row-3").append("<td>" + ($("#freq-input").val()));
        // $("#row-5").append("<td>" + ($("#train-input").val()));
      })
  }

  newTrain();