function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 16) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 25) {
                // Adolescente
                img.setAttribute('src', 'foto-adolescente-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else if (idade < 60) {
                // Adulto Meia Idade
                img.setAttribute('src', 'foto-adulto-meiaidade-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'feminino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-f.png')
            } else if (idade < 16) {
                // Jovem 
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 25) {
                // Adolescente
                img.setAttribute('src', 'foto-adolescente-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else if (idade < 60) {
                // Adulto Meia Idade
                img.setAttribute('src', 'foto-adulto-meiaidade-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Gênero ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}