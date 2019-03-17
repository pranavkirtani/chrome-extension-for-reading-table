document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('status').textContent = "Extension loaded";
    var button = document.getElementById('changelinks');
    button.addEventListener('click', function () {
        $('#status').html('Reading data from the webpage');
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: "start"}, function(response) {
                $('#status').html('data has been read from the page');
                console.log('success');
                alert(JSON.stringify(response))
                console.log("data read by our extension")
                console.log(response)
            });
        });
    });
});

