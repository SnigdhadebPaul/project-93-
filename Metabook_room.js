
//ADD YOUR FIREBASE LINKS HERE
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
  user_name = localStorage.getItem("Name");
  document.getElementById("WELCOME").innerHTML = "Welcome " + user_name + "!";
  function addroom() {
        var room_name = document.getElementById("RoomName").value;
        firebase.database().ref("/").child(room_name).update({
              key: "Value"
  
        });
        localStorage.setItem("RoomName", room_name);
        window.location = "Metabook_page.html";
  
  }
  function getData() {
        firebase.database().ref("/").on('value', function (snapshot) {
              document.getElementById("div").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    //Start code
                    console.log("roomname", Room_names);
                    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                    document.getElementById("div").innerHTML += row;
  
                    //End code
              });
        });
  
  }
  getData();
  
  
  
  function redirectToRoomName(name) {
        console.log(name);
        localStorage.setItem("RoomName", name);
        window.location = "Metabook_page.html";
  
  
  }
  function logout() {
        localStorage.removeItem("Name");
        localStorage.removeItem("RoomName");
  
        window.location = "index.html";
  
  }