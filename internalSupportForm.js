// Z.S. 3/13/19
// Selector variables declared for record type selected, description content area, resource content area, and list elements.

var option = $("#recordType option:selected");
var description = $("#description")[0];
var checkResources = $("#checkResources")[0];
var resources = $("#resources");
var listItemsAll = $("li");
var redirect = $("#redirect")[0];
var submitButton = $("#submit")[0];
var requester = $("#00N1J00000FHR5G")[0];
var accountId = $("#00N1J00000GD7wX")[0];

listItemsAll.hide();
checkResources.textContent = "";
$("#submit").prop("disabled", true);

function appendSubmitter(){
    description.value = "\n" + description.value + "\n- Submitter: " + requester.value;
}

function productReset(){
    option.value = "--None--";
}

function checkAccountId(){

    if(accountId.value === ""){
        accountId.value = "NO ACCOUNT ID LISTED";
    }
}

// Record Type change selection event listener to alter links and description area based on selection.
$('#recordType').change(function() {
    option = $("#recordType option:selected")[0];

    // If Campaign Monitor is selected in recordType, change description and alter resource link 2.
    if(option.value === "012o00000016Bio"){
        checkResources.textContent = "Please be sure to check the following resources before submitting your issue:";
        // Show resource link list
        listItemsAll.show();

        // Change redirect to https://campaignmonitor.com
        redirect.setAttribute("value","https://campaignmonitor.com")

        // Enable submit button, change background color of submit button to reflect Campaign Monitor coloring
        $("#submit").prop("disabled", false);

        // Update href of "resource center" link to Campaign Monitor resources.
        document.querySelector("#rc").innerText = "Help Center";
        rc.setAttribute("href", "https://help.campaignmonitor.com/")

        // Update description field with CM relevant questions
        description.value = "- Who should we follow up with (you or the customer): \n- Customer Name\n- Customer Email Address:\n- Your Department: \n- Description of Issue:";

    // If Emma is selected in recordType, change description and alter resource link 2.
    }else if(option.value === "0121J000000yZ1A"){
        // TO DO: Enable after rollout of Guru for CM teams
        checkResources.textContent = "Please be sure to check the following resources before submitting your issue:";

        // Show resource link list
        listItemsAll.show();

        // Change redirect to myemma.com
        redirect.setAttribute("value","https://myemma.com")

        // Enable submit button, change background color of submit button to reflect Campaign Monitor coloring
        $("#submit").prop("disabled", false);

        // Update href of "resource center" link to Emma resources.
        document.querySelector("#rc").innerText = "Support Hub";
        rc.setAttribute("href", "https://support.e2ma.net/")
        
        // Update description field with Emma relevant questions
        description.value = "- Who should we follow up with (you or the customer): \n- Your Department:\n- Customer email address: \n- Sub Account ID (where applicable): \n- Description of Issue:";
        description.prepend("\n");
        
    // If nothing is selected or "--None--", hide resource list and empty description field.
    }else{
        $("#submit").prop("disabled", true);
        checkResources.textContent = "";
        description.value = "";
        listItemsAll.hide();
    }

});
