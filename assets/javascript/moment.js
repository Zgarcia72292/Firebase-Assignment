var config = {
  apiKey: "AIzaSyCkFIrcXAJIIcuKFNjYlw1uPIP4ANt1lak",
  authDomain: "train-schedule-6e3f6.firebaseapp.com",
  databaseURL: "https://train-schedule-6e3f6.firebaseio.com",
  projectId: "train-schedule-6e3f6",
  storageBucket: "train-schedule-6e3f6.appspot.com",
  messagingSenderId: "137822201446"
};
firebase.initializeApp(config);

var database = firebase.database();
var trainName;
var trainDest;
var trainFirst;
var trainFreq;


// database.ref().set({}) clears firebase// 
function submitBtn() {
    $("#run-search").on("click", function (event) {
        event.preventDefault();
        trainName = $("#train-search").val().trim();
        trainDest = $("#dest-search").val().trim();
        trainFirst = $("#first-search").val().trim();
        trainFreq = $("#freq-search").val().trim();
        // $(".table").append("<thead> <tr> <td>"+employeeName+"</td><td>"+employeeRole+"</td><td>"+employeeStart+"</td><td>"+""+"</td><td>"+monthlyRate+"</td>");

        // console.log(employeeName);
        // console.log(employeeRole);
        // console.log(employeeStart);
        // console.log(monthlyRate);

        database.ref().push({
            Train_Name: trainName,
            Train_Destination: trainDest,
            Train_First: trainFirst,
            Train_Frequency: trainFreq
        })
    })
}
database.ref().on("child_added",function(childSnapshot){
    event.preventDefault();
    trainName = childSnapshot.val().Train_Name;
    trainDest= childSnapshot.val().Train_Destination;
    trainFirst=childSnapshot.val().Train_First;
    trainFreq=childSnapshot.val().Train_Frequency;
    $(".table").append("<thead> <tr> <td>"+trainName+"</td><td>"+trainDest+"</td><td>"+trainFreq+"</td><td>"+""+"</td><td>"+""+"</td></tr></thead>");
})

submitBtn();
