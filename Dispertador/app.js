function defAlarme() {
    
    const horadef = document.getElementById("hora-def").value
    const minutodef = document.getElementById("minuto-def").value

    const hour = new Date();
    const hora = hour.getHours()

    const min = new Date();
    const minuto = min.getMinutes();

    if (horadef == hora && minutodef == minuto ) {
        alert("HORA DE ACORDAR")
    }

    
}


function relogio() {

    // display de data 
    let d = new Date()
    let diaMes = d.getUTCDate()
    let day = d.getDay()

    let m = new Date()
    let month = m.getMonth()

    let y = new Date()
    let year = y.getFullYear()

    let diaDisplay = document.getElementById("dia")
    let mesDisplay = document.getElementById("mes")

    // switch que printa o dia da semana no display
    switch (day) {
        case day = 6:
            diaDisplay.innerHTML = `Sáb, ${diaMes} de`
            break;
        case day = 0:
            diaDisplay.innerHTML = `Dom, ${diaMes} de`
            break;
        case day = 1:
            diaDisplay.innerHTML = `Seg, ${diaMes} de`
            break;
        case day = 2:
            diaDisplay.innerHTML = `Ter, ${diaMes} de`
            break;
        case day = 3:
            diaDisplay.innerHTML = `Qua, ${diaMes} de`
            break;
        case day = 4:
            diaDisplay.innerHTML = `Qui, ${diaMes} de`
            break;
        case day = 5:
            diaDisplay.innerHTML = `Sex, ${diaMes} de`
            break;
    
        default:
            break;
    }

    // switch que printa o mês 

    switch (month) {
        case month = 0:
            mesDisplay.innerHTML = `Jan, ${year}`
            break;
        case month = 1:
            mesDisplay.innerHTML = `Fev, ${year}`
            break;
        case month = 2:
            mesDisplay.innerHTML = `Março, ${year}`
            break;
        case month = 3:
            mesDisplay.innerHTML = `Abril, ${year}`
            break;
        case month = 4:
            mesDisplay.innerHTML = `Maio, ${year}`
            break;
        case month = 5:
            mesDisplay.innerHTML = `Jun, ${year}`
            break;
        case month = 6:
            mesDisplay.innerHTML = `Jul, ${year}`
            break;
        case month = 7:
            mesDisplay.innerHTML = `Ago, ${year}`
            break;
        case month = 8:
            mesDisplay.innerHTML = `Set, ${year}`
            break;
        case month = 9:
            mesDisplay.innerHTML = `Out, ${year}`
            break;
        case month = 10:
            mesDisplay.innerHTML = `Nov, ${year}`
            break;
        case month = 11:
            mesDisplay.innerHTML = `Dez, ${year}`
            break;
    
        default:
            break;
    }


    const hour = new Date();
    const hora = hour.getHours()

    const min = new Date();
    const minuto = min.getMinutes();

    const sec = new Date();
    const seconds = sec.getSeconds();

    
    const segundoDisplay = document.getElementById("segundos");
    const minutoDisplay = document.getElementById("minutos");
    const horaDisplay = document.getElementById("horas");

    // segundos
    if (seconds <10) {
        segundoDisplay.innerHTML = `${0}${seconds}`
    } else {
        segundoDisplay.innerHTML = `${seconds}`
    }


    // minutos
    if (minuto <10) {
        minutoDisplay.innerHTML = `${0}${minuto}`
    } else {
        minutoDisplay.innerHTML = `${minuto}`
    }


    // horas
    if (hora <10) {
        horaDisplay.innerHTML = `${0}${hora}`
    } else {
        horaDisplay.innerHTML = `${hora}`
    } 

}

function day() {
    const colorClock = document.getElementById("clockb");
    const segundoDisplay = document.getElementById("segundos");
    const minutoDisplay = document.getElementById("minutos");
    const horaDisplay = document.getElementById("horas");
    const ps = document.getElementById("point1");
    const ps2 = document.getElementById("point2");
    let diaDisplay = document.getElementById("dia")
    let mesDisplay = document.getElementById("mes")
    let anoDisplay = document.getElementById("ano")
    colorClock.style.backgroundColor = "#d3d3d3"
    segundoDisplay.style.color = "#1a1a1a"
    minutoDisplay.style.color = "#1a1a1a"
    horaDisplay.style.color = "#1a1a1a"
    ps.style.color = "#1a1a1a"
    ps2.style.color = "#1a1a1a"
    diaDisplay.style.color = "#1a1a1a"
    mesDisplay.style.color = "#1a1a1a"
    anoDisplay.style.color = "#1a1a1a"

}

function night() {

    const colorClock = document.getElementById("clockb");
    const segundoDisplay = document.getElementById("segundos");
    const minutoDisplay = document.getElementById("minutos");
    const horaDisplay = document.getElementById("horas");
    const ps = document.getElementById("point1");
    const ps2 = document.getElementById("point2");
    let diaDisplay = document.getElementById("dia")
    let mesDisplay = document.getElementById("mes")
    let anoDisplay = document.getElementById("ano")
    colorClock.style.backgroundColor = "rgba(15, 15, 15, 0.966)"
    segundoDisplay.style.color = "rgba(94, 187, 133, 0.589)"
    minutoDisplay.style.color = "rgba(94, 187, 133, 0.589)"
    horaDisplay.style.color = "rgba(94, 187, 133, 0.589)"
    ps.style.color = "rgba(94, 187, 133, 0.589)"
    ps2.style.color = "rgba(94, 187, 133, 0.589)"
    diaDisplay.style.color = "rgba(94, 187, 133, 0.589)"
    mesDisplay.style.color = "rgba(94, 187, 133, 0.589)"
    anoDisplay.style.color = "rgba(94, 187, 133, 0.589)"
}
