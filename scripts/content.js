chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log("something happening from the extension");
    var data = request.data || {};

    // var linksList = document.querySelectorAll('table');
    // console.log("linkedList",linksList)
    // [].forEach.call(linksList, function(header) {
    //     header.innerHTML = request.data;
    // });
   var table = document.getElementsByTagName('table')[0];
   var table_data=[]
   console.log("table",table)
    for (var r = 0, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            console.log(table.rows[r].cells[c].innerHTML);
            table_data.push(table.rows[r].cells[c].innerHTML)
        }
    }
    sendResponse({table_data:table_data,data: data, success: true});
});

