// enter trigger by leo bathekas (kentro koinotitas patras)

$(document).keyup(function(event){
    if(event.keyCode == 13){ 
        
        if($("button[value='SearchApplications']").length > 0) {
            $("button[value='SearchApplications']").click();
        }
        
        if($("input[value='Σύνδεση']").length > 0) {
            $("input[value='Σύνδεση']").click();
        }
    }
});
