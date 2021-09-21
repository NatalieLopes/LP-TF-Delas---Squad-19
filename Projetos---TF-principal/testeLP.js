
    var_alturaDocumento = $(window).height();

    function alturaSecao() {
        $(".secao").height(_alturaDocumento);
        
    }

    $(alturaSecao);

    function scrollSecao(){
        if($(this).parent(".secao").is("#secao-01")) { 

        $("body").animate({scrollTop: _alturaJanela}, '500');
    } else if ($(this).parent(".secao").is("#secao-02")) {

        $("body").animate({scrollTop: _alturaJanela*2}, '500');
    } else if ($(this).parent(".secao").is("$secao-03")) {

        $("body").animate({scrollTop: _alturaJanela*3}, '500');
    } else {    
        
        $("body").animate({scrollTop: 0}, '80O');
    }
}

$(".icone-scrol1").click(ScrollSecao);   

