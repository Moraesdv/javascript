const num_objetos = document.getElementById('num_objetos')
const txt_qtde = document.getElementById('txt-qtde')
const btn_add = document.getElementById('btn-add')
const btn_remover = document.getElementById('btn-remover')
const palco = document.getElementById('palco')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola{
    constructor(arrayBolas,Palco){
        this.tam = Math.floor(Math.random()*15)+10
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        this.px = Math.floor(Math.random()*(larguraPalco-this.tam))
        this.py = Math.floor(Math.random()*(alturaPalco-this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.random()*10)>5?1:-1
        this.diry = (Math.random()*10)>5?1:-1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id =  Date.now()+'_'+Math.floor(Math.random()*10000000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.eu =  document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola

}

//de forma mais direta, this.arrayBolas.indexOf(this) passa a posição da instância da bola para o array arrayBolas
minhaPos = () =>{
    return this.arrayBolas.indexOf(this)
}
removerBola = ()=>{
    clearInterval(this.controle)
    bolas = bolas.filter((b)=>{
        if(b.id != this.id){
            return b
        }
    })
    this.eu.remove()
    numBola--
    num_objetos.innerHTML = numBola
}
desenhar = ()=>{
    const div = document.createElement('div')
    div.setAttribute('id',this.id)
    div.setAttribute('class','bola')
    div.setAttribute('style',`left:${this.px}px; top:${this.py}px; width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b})`)
    this.palco.appendChild(div)
}

controle_Bordas = () =>{
    if(this.px+this.tam >= larguraPalco){
        this.dirx = -1
    }else if(this.px <= 0){
        this.dirx = 1
    }
    if(this.py+this.tam >= alturaPalco){
        this.diry = -1
    }else if(this.py <= 0){
        this.diry = 1
    }

}


controlar = () =>{
    this.controle_Bordas()
    this.px += this.dirx*this.velx
    this.py += this.diry*this.vely
    this.eu.setAttribute('style',`left:${this.px}px; top:${this.py}px; width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b})`)
    if((this.px > larguraPalco) || (this.py> alturaPalco)){
        this.removerBola()
     }
    }
}

window.addEventListener('resize',()=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener('click',(evt)=>{
    const qtd = txt_qtde.value
    for(let i = 0;i<qtd;i++){
        bolas.push(new Bola(bolas,palco))
    
    }
})
btn_remover.addEventListener('click',(evt)=>{
    bolas.map((b)=>{
        b.removerBola()
    })
})

