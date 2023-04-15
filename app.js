function talk() {
    var know = {
        "who are you": "Hello, mrcoder here ",
        "how are you": "Good :)",
        "what can i do for you": "Maybe you can follow me on instagram mrcoder_ig",
        "ok": "Thank You So Much ",
        "bye": "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value.toLowerCase();
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

