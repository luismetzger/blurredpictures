/**
 * Created by PERVEJ on 3/29/2015.
 */
(function($) {
    function resetForm($form){
        if($form.length > 0){
            $form[0].reset();
        }
    }

    var homeForm = $("#hablame"),
        hinit_vals = [];

    resetForm(homeForm);

    /*Form inputs*/
    var h_inputs = homeForm.find('input[type="text"], textarea');
    h_inputs.each(function(index){
        hinit_vals[hinit_vals.length] = $(this).val();
    });

    homeForm.on('submit', function(e){
        e.preventDefault();
        var canSubmit = true;
        h_inputs.each(function(index){
            var $this = $(this);
            if($this.val() == hinit_vals[h_inputs.index($(this)[0])]){
                $this.parent('p').next().text('Please provide correct value');
                canSubmit = false;
            } else {
                $this.parent('p').next("p.error").text('');
            }
        });
        if(canSubmit = true){


            $.post("inc/form_validate.php", $("form#hablame").serialize(), function(response){
                var messageBox = $(".elresultado");
                if(response.type == 'error'){ //load json data from server and output message
                    messageBox.removeClass('success');
                }else{
                    messageBox.addClass('success');
                }
                messageBox.text(response.text).show().animate({
                    opacity: 1
                }, 5000, function() {
                    // Animation complete.
                    messageBox.text('');
                    resetForm(homeForm);
                });
            }, 'json');
        }
        return false

    })


})(jQuery);