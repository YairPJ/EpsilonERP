export function fechaHoy() {
    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
  
    return `${day}/${month}/${year}`;
  }
  
  