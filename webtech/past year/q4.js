$.ajax({
    url: "https://api.ecocampus.edu/air/feedback",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(payload),
    success: function(res, textStatus, xhr) {
        if (xhr.status === 201)
            $('#msg').text('Your feedback has been received');
    },
    error: function() {
        $('#msg').text('Could not send feedback');
    }
});