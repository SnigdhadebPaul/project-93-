const firebaseConfig = {
    apiKey: "AIzaSyCtGbKD2mHPj0ZgtsFRHDKBz6BluOwNAho",
    authDomain: "metabook-54401.firebaseapp.com",
    projectId: "metabook-54401",
    storageBucket: "metabook-54401.appspot.com",
    messagingSenderId: "69278440859",
    appId: "1:69278440859:web:f52e4710bc5012f435953e",
    measurementId: "G-PXX5JZQXL8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("Name");
var room_name = localStorage.getItem("RoomName");
function send() {
    var msg = doument.getElementById("tp").value;
    firebase.database().ref(room_name).push({
        Name: user_name,
        message: msg,
        Like: 0



    });
    document.getElementById("tp").value = "";



}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                console.log(firebase_message_id);
                console.log(message_data);
                var Name = message_data["Name"];
                var Like = message_data["Like"];
                var message = message_data["message"];
                //End code
                var v1 = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
                var v2 = "<h4 class='message_h4'>" + message + "</h4>";
                var v3 = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + Like + " onclick='update_like(this.id)'>";
                var v4 = "<span class='glyphicon glyphicon-thumbs-up'> like : " + Like + "</span></button><hr>";
                var v5 = v1 + v2 + v3 + v4;
                document.getElementById("output").innerHTML += v5;



            }
        });
    });
}
getData();
function update_like(message_id) { // console.log("clicked on like button - " + message_id);
    T1 = message_id;
    var likes = document.getElementById(T1).value;
    var updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({ like: updated_likes })
        ;
}