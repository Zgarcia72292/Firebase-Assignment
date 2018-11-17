//Linking Firebase
var config = {
  apiKey: "AIzaSyCkFIrcXAJIIcuKFNjYlw1uPIP4ANt1lak",
  authDomain: "train-schedule-6e3f6.firebaseapp.com",
  databaseURL: "https://train-schedule-6e3f6.firebaseio.com",
  projectId: "train-schedule-6e3f6",
  storageBucket: "train-schedule-6e3f6.appspot.com",
  messagingSenderId: "137822201446"
};
firebase.initializeApp(config);

//Setting all global variables// 
var database = firebase.database();
var trainName;
var trainDest;
var trainFirst;
var trainFreq;
var firstTimeConverted;
var currentTime  = moment();
var diffTime;
var tRemainder;
var tMinutesTillTrain;
var nextTrain;

// database.ref().set({}) 
// clears firebase

function submitBtn() {
    $("#run-search").on("click", function (event) {
        event.preventDefault();

        //Here I'm storing the values from the html input fields into variables// 

        trainName = $("#train-search").val().trim();
        trainDest = $("#dest-search").val().trim();
        trainFirst = $("#first-search").val().trim();
        trainFreq = $("#freq-search").val().trim();
     



        database.ref().push({
        
            //Here im pushing the variables up to the firebase database under slightly different names// 

            Train_Name: trainName,
            Train_Destination: trainDest,
            Train_First: trainFirst,
            Train_Frequency: trainFreq,

        });


    })
}
database.ref().on("child_added",function(childSnapshot){
    event.preventDefault();

    //Here I am calling back the values from the firebase database and re-setting the respective variables with the new values
    //everytime a value is updated. This is what keeps the data current// 
    trainName = childSnapshot.val().Train_Name;
    trainDest= childSnapshot.val().Train_Destination;
    trainFirst=childSnapshot.val().Train_First;
    trainFreq=childSnapshot.val().Train_Frequency;

    //I used activity 21 from week 7 for the following code, mostly to see the moment.js syntax.
    //I made sure to console.log as i was going and to understand what the code is actually doing// 
    firstTimeConverted = moment(trainFirst, "HH:mm");
    //This code makes sure the time inputted is always formated to HH:mm//
    diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    //This takes the difference in time between the current time and the first train time in minutes//
    tRemainder = diffTime % trainFreq;
    //this pull the remainder from the difference in time and the train frequency, for example
    //if the difference was 30 minutes and the frequency was 7, we would get 2// 
    tMinutesTillTrain = trainFreq - tRemainder;
    //we get the minutes till the next tran by subtracting the remainder (2 from the last example) from the 
    //frequency (7) for a total of 5. So we would know that 5 minutes remain until the next train. //
    nextTrain = moment().add(tMinutesTillTrain, "minutes");
    //This will add the value of minutes till next train (5) to whatever the current time is//
   
    //Here I just append the values in a table// 
    $(".table").append("<thead> <tr> <td>"+trainName+"</td><td>"+trainDest+"</td><td>"+trainFreq+"</td><td>"+moment(nextTrain).format("hh:mm")+"</td><td>"+tMinutesTillTrain+"</td></tr></thead>");
  //the 'moment(nextTrain).format("hh:mm")' in the above code formats the nextTrain value from unix to standart time//
})

submitBtn();
