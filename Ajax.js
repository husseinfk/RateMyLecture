
    const like_button = document.getElementById('btn_like');
    const dislike_button = document.getElementById('btn_dislike');

    function like_clicked() {
        return new Promise((resolve, reject) => {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                if(response.complete) {
                    console.log(response);
                let entry = {
                    Lecturer: response.Lecturer,
                    Type: "Like",
                    TimeStamp: response.TimeStamp
                 }
                 resolve(entry);
                }
            });
          });
        });
    }


    
    
    if(like_button) {
        like_button.addEventListener('click', ()=> {
            //console.log("TEST");
        await like_clicked();    
            
        const url="http://127.0.0.1:3200/api/posts";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(entry)
        })
        .then((data) => {
        })
        .catch((err) => {
            alert(err);
        });        
        });
    }
  
    if(dislike_button) {

        dislike_button.addEventListener('click', ()=> {
            let entry = {
                lecture: "CIS 110",
                type: "Dislike",
                timestamp: "03:45"
            }
    
                const url="http://127.0.0.1:3200/api/posts";
              
                fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(entry),
            })
            .then((data) => {
            })
            .catch((err) => {
                alert(err);
            });
        });

    }
    


    
