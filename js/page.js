<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
    $(document).ready(function(){
        $("#feedback-form>button[type=submit]").click(function(e){
            e.preventDefault();

            var apiGatewayInvokeURL = 'https://zhq9zouv1a.execute-api.eu-west-1.amazonaws.com/v1/contact-us';
            var body = {email : $("#email").val(), name : $("#name").val(), message : $("#message").val()};

           /* $.ajax({
                type: 'POST',
                url : apiGatewayInvokeURL,
                dataType: 'json',
                crossDomain: 'true',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(body),*/
           $('#submitButton').on('click',function(){
               
           $.ajax({
            type:'POST',
            url:posturl,
            data:JSON.stringify({"email":$("#email").val(), "name":$("#name").val(), "message":$("#message").val()}), 
            contentType: "application/json"   

                success: function () {
                    $("#feedback-form").trigger('reset');
                    alert('Success');
                },
                error: function (response) {
                    alert('Failed: HTTP ' + response.status);
                }
            });
        });
    });
</script>
