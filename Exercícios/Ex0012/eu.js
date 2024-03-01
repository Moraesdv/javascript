function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value)>ano || Number(fano.value)<1924){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade< 10){
                //Criança
                img.setAttribute('src','imagens/bebemasculino.png')
            } else if(idade>=10 && idade<21){
                //JOVEM
                img.setAttribute('src','imagens/jovemmasculino.png')
            } else if(idade>=21 && idade<50){
                //ADULTO
                img.setAttribute('src' , 'imagens/homem.png')
            } else{
                //IDOSO
                img.setAttribute('src' , 'imagens/velho.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade< 10){
                //Criança
                img.setAttribute('src' , 'imagens/bebefeminina.png')
            } else if(idade>=10 && idade<30){
                //JOVEM
                img.setAttribute('src' , 'imagens/jovemfeminina.png')
            } else if(idade>=21 && idade<50){
                //ADULTA
                img.setAttribute('src' , 'imagens/mulher.png')
            } else{
                //IDOSA
                img.setAttribute('src' , 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br> `
        
        res.appendChild(img)
        
    }
}