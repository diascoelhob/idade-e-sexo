function verificar() {
    var nascimento = document.getElementById('idnascimento').value
    var agora_ano = (new Date).getFullYear()
    var idade = agora_ano - nascimento

    var sexo = document.getElementsByName('sexo')
    if (sexo[0].checked) {
        sexo = 'M'
    } else if (sexo[1].checked) {
        sexo = 'F'
    }
}