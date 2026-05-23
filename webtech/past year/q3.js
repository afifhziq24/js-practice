$(".content").text("Updated Content")
$("#updateButton").on("click", function() {
    alert("Buton Clicked!");
})
$("#navigateButton").click(function() {
    window.location.href = "https://www.example.com"
})
//It seems ajax and async is similar concept but one is for jQuery and other for javascript
$.ajax({
    url: "https://api.example.com/data",
    type: "GET",
    success: function(data) {
        console.log(data)
    },
    error: function() {
        console.log("Error occured")
    }
})