function getVid() {
    var vidElement = document.getElementById('secondaryVideo').currentTime;
    return vidElement;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting == "hello") {
        var time = document.getElementById('primaryVideo').currentTime;
        var user = JSON.stringify(document.querySelector("div#detailsTab div.owner").innerText);
        user = user.slice(15, -1);
        //user1.substr()

        sendResponse({TimeStamp: JSON.stringify(time), Lecturer: user});
        //sendResponse({Timestamp: JSON.stringify(a)});
      }      
    }
  );
