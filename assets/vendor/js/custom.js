$(document).ready(function () {
    $("#featuresClick").click(function () {
        $("#features").toggle();
        $("#info").hide();
        $("#popular").hide();
    });
    $("#infoClick").click(function () {
        $("#info").toggle();
        $("#features").hide();
        $("#popular").hide();
    });
    $("#popularClick").click(function () {
        $("#popular").toggle();
        $("#info").hide();
        $("#features").hide();
    });
    $("#priceClick").click(function () {
        $("#price").toggle();
    });
    $("#categoriesClick").click(function () {
        $("#categories").toggle();
    });
    $("#ratingsClick").click(function () {
        $("#ratings").toggle();
    });
    $("#sizeClick").click(function () {
        $("#size").toggle();
    });
    $("#accountBtn").click(function () {
        $("#myAccount").show();
        $("#myPassword").hide();
    });
    $("#passBtn").click(function () {
        $("#myPassword").show();
        $("#myAccount").hide();
    });
});
