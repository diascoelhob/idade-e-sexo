function verificar() {
    var nascimento = document.getElementById('idnascimento').value
    var agora_ano = (new Date).getFullYear()
    var idade = agora_ano - nascimento

    var img = document.querySelector('div#imagem')

    var sexo = document.getElementsByName('sexo')
    if (sexo[0].checked) {
        if (idade < 12) {
            img.getAttribute('src', 'imagens/garoto.jpg')
        } else if (idade < 50) {
            img.innerHTML = '<img src="imagens/homem.jpg" alt="homem">'
        } else if (idade < 110) {
            img.innerHTML = '<img src="imagens/idoso.jpg" alt="idoso">'
        }
    } else if (sexo[1].checked) {
        if (idade < 12) {
            img.innerHTML = '<img src="imagens/garota.jpg" alt="garota">'
        } else if (idade < 50) {
            img.innerHTML = '<img src="imagens/mulher.jpg" alt="mulher">'
        } else if (idade < 110) {
            img.innerHTML = '<img src="imagens/idosa.jpg" alt="idosa">'
        }
    }
}