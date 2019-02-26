// Selector variables declared for record type selected, description content area, resource content area, and list elements.

var option = $("#recordType option:selected");
var description = $("#description")[0];
var resources = $("#resources");
var listItems = $("li");
listItems.hide();

$('#recordType').change(function() {
    option = $("#recordType option:selected")[0];

    // If Campaign Monitor is selected in recordType
    if(option.value === "012o00000016Bio"){
        listItems.show();
        listItems[1].innerHTML(
            "<a href=\"https://help.campaignmonitor.com/\">Resource Center</a>"
        );
        description.value = "- Who should we follow up with (you or the customer)?: \n- Customer Name & Email Address: \n- Global ID or Hex Link:\n- Your Name & Email address: \n- Your Department: \n- Description of Issue:";
    // If Emma is selected in recordType
    }else if(option.value === "0121J000000yZ1A"){
        listItems.show();
        listItems[1].innerHTML(
            "<a href=\"https://support.e2ma.net/Resource_Center\">Resource Center</a>"
        );
        description.value = "- Who should we follow up with (you or the customer)?: \n- Username or Followup Email Address: \n- Your Department: \n- Description of Issue: \n- Sub Account ID (where applicable):";
    }else{
        description.value = "";
        listItems.hide();
    }

});
