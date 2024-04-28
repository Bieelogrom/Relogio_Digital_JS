window.addEventListener('load', atualizaTempo)


function atualizaTempo(){
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    let dia = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]
    
    let periodo = (horas >= 12) ? "PM" : "AM"
    
    
    document.getElementById("DIA").innerHTML = dia[agora.getDay()]
    document.getElementById("HORA").innerHTML = horas
    document.getElementById("MINUTO").innerHTML = minutos
    document.getElementById("PERIODO").innerHTML = periodo
    
    setTimeout(atualizaTempo,200)
}


