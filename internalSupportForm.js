// Selector variables declared for record type selected, description content area, resource content area, and list elements.

var option = $("#recordType option:selected");
var description = $("#description")[0];
var checkResources = $("#checkResources")[0];
var resources = $("#resources");
var listItemsAll = $("li");
var rc = $("#rc")[0];

listItemsAll.hide();
checkResources.textContent = "";
$("#submit").prop("disabled", true);

// Record Type change selection event listener to alter links and description area based on selection.
$('#recordType').change(function() {
    option = $("#recordType option:selected")[0];

    // If Campaign Monitor is selected in recordType, change description and alter resource link 2.
    if(option.value === "012o00000016Bio"){
        listItemsAll.show();
        $("#submit").prop("disabled", false);
        $("#submit").css("background-color", "#7956FF");
        rc.setAttribute("href", "https://help.campaignmonitor.com/")
        description.value = "- Who should we follow up with (you or the customer)?: \n- Customer Name & Email Address: \n- Global ID or Hex Link:\n- Your Name & Email address: \n- Your Department: \n- Description of Issue:";
    // If Emma is selected in recordType, change description and alter resource link 2.
    }else if(option.value === "0121J000000yZ1A"){
        listItemsAll.show();
        $("#submit").prop("disabled", false);
        $("#submit").css("background-color", "#509DF5");
        rc.setAttribute("href", "https://support.e2ma.net/Resource_Center")
        description.value = "- Who should we follow up with (you or the customer)?: \n- Username or Followup Email Address: \n- Your Department: \n- Description of Issue: \n- Sub Account ID (where applicable):";
    // If nothing is selected or "--None--", hide resource list and empty description field.
    }else{
        $("#submit").prop("disabled", true);
        checkResources.textContent = "";
        description.value = "";
        listItemsAll.hide();
    }

});
