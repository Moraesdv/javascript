const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')


btn_alert.addEventListener('click',(evt) =>{
    alert('Olá , como você está ?')
})

btn_confirm.addEventListener('click',(evt) =>{
    confirm('Olá , meu brother')
})

btn_prompt.addEventListener('click',(evt) =>{
    prompt('Olá , meu chapa')
})
