// var option0 = document.querySelector("#recordType")[0];
// var option1 = document.querySelector("#recordType")[1];
// var option2 = document.querySelector("#recordType")[2];

// var description = document.querySelector("#description");
// description.value = "hi!";

// option1.addEventListener("selected", function(){

//     description.value = "\n- Who should we follow up with (you or the customer)?: \n- Customer Name & Email Address: \n- Global ID or Hex Link:\n- Your Name & Email address: \n- Your Department: \n- Description of Issue:";
    
// })

var option = $("#recordType option:selected");
var description = $("#description")[0];

$('#recordType').change(function() {
    option = $("#recordType option:selected")[0];
    if(option.value === "012o00000016Bio"){
        description.value = "- Who should we follow up with (you or the customer)?: \n- Customer Name & Email Address: \n- Global ID or Hex Link:\n- Your Name & Email address: \n- Your Department: \n- Description of Issue:";
    }else if(option.value === "0121J000000yZ1A"){
        description.value = "- Who should we follow up with (you or the customer)?: \n- Username or Followup Email Address: \n- Your Department: \n- Description of Issue: \n- Sub Account ID (where applicable):";
    }else{
        description.value = "";
    }

});
