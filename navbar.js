$(document).ready(function()
{

$("#navId1Content").hide();
$("#navId2Content").hide();
$("#navId3Content").hide();

	$("#navId1").click(function()
	{
        $("#navId1Content").show();
        $("#navId2Content").hide();
        $("#navId3Content").hide();
    });

    $("#navId2").click(function()
    {
        $("#navId2Content").show();
        $("#navId1Content").hide();
        $("#navId3Content").hide();
    });

    $("#navId3").click(function()
    {
        $("#navId3Content").show();
        $("#navId1Content").hide();
        $("#navId2Content").hide();
    });
});