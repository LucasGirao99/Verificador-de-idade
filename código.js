function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.getElementById('foto')

    if (fano.value.length == 0 || Number(fano.value)>ano) {
        window.alert('[ERRO]! Verifique os dados e tente novamente.')
    } else if (fsex[0].checked) {
        gênero = 'Homem'
        
        if (idade < 10) {
            img.src = 'criançaH.png'
        } else if (idade < 18) {
            img.src ='jovemH.png'
        } else if (idade < 50) {
            img.src ='adulto.png'
        } else {
            img.src ='idoso.png'
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        
        if (idade < 10) {
            img.src = 'criançaM.png'
        } else if (idade < 18) {
            img.src ='jovemM.png'
        } else if (idade < 50) {
            img.src ='adulta.png'
        } else {
            img.src ='idosa.png'
        }
    } 
    res.innerHTML =`Detectamos ${gênero} com ${idade} anos de idade.`
    res.appendChild(img)
}