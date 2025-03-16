//efeito de esconder formulário de cadastro
$(document).ready(function(){
    //possibilidade de diminuir com o jquery - usando $("botao-cadastrar").click()
    // seria o mesmo que o codigo abaixo
    //document.getElementById("botao-cadastrar").click();
    $("botao-cadastrar").click(function(){
        $("form-cadastrar").slide.Toggle("slow");
        $("section-login").slide.Toggle("slow");
        $("botao-cadastrar").hide();
    })
             
});