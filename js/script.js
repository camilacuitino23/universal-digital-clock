
function actualizarReloj() {
    const zonaHorariaSelect = document.getElementById("zona-horaria");
    const zonaHoraria = parseFloat(zonaHorariaSelect.value);
    const ahora = new Date();
    const utc = ahora.getTime() + (ahora.getTimezoneOffset() * 60000); 
    const horaEnZona = new Date(utc + (3600000 * zonaHoraria));
    
    const horas = horaEnZona.getHours().toString().padStart(2, '0');
    const minutos = horaEnZona.getMinutes().toString().padStart(2, '0');
    const segundos = horaEnZona.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualizarReloj, 1000);
