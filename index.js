
// corpo da pagina
$(document).ready(function () {
    $("#slider").slick({
        autoplay: true
    })
    // menu suspenso
    $(".menu_hamburguer").click(function () {

        $(".container_li ul").slideToggle();

    });
    // mascara telefone
    $("#telefone").mask("(00)00000-0000")

    // validação do formulario
    $("#form").validate({
        
        rules: {

            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },

            descricao: {
                required: true
            },
            veiculo: {
                required: false
            }

        },

        // mensagens de avisos
        messages: {
            nome: "insira seu nome ",
            email: "insira seu email",
            telefone: "insira seu contato",
            descricao: "insira um mensagem ao vendedor"
        },

        submitHandler: function (form) {
            console.log(form)
        },

        invalidHandler: function (e, validador) {

            let camposInvalidos = validador.numberOfInvalids()

            if (camposInvalidos) {
                alert(`existem ${camposInvalidos} campo obrigatório a serem preenchidos`)
            }

        }

    });

    // animações nos botões

    $(".container_destaque button").click(function () {
        let destino = $("#form");

        const nomeVeiculo = $(this).parent().find("p").text();

        $("#veiculo").val(nomeVeiculo);

        $("html").animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

});