import jsPDF from 'jspdf'; 
import 'jspdf-autotable'; // Importa jspdf-autotable
import logoProvi from '../../public/images/logoprovi.png'

export const asistenciaReport = (data, date) => {

    const arrayDatos = [];
    for (const empleado in data) {
      if (data.hasOwnProperty(empleado)) {
        const empleadoData = data[empleado];
        arrayDatos.push([empleadoData.uid, empleadoData.Entrada, empleadoData.SalidaComer, empleadoData.RegresoComer, empleadoData.Salida, empleadoData.TotalLaborado]);
      }
    }
    // Crear un nuevo objeto jsPDF
    const doc = new jsPDF();
    // Establecer la fuente y el tamaño de texto
    doc.setFont('helvetica');
    doc.setFontSize(10);

    doc.addImage(logoProvi, 'PNG', 10, 10, 16, 10);
    // Agregar un título al reporte
    doc.text('Reporte de Asistencias del dia '+date, 20, 30);

    // Agregar una tabla de ejemplo
    
    doc.autoTable({
      startY: 40,
      head: [['Nombre', 'Entrada', 'Salida a Comer', 'Regreso de Comida', 'Salida', 'Total Laborado']],
      body: arrayDatos,
    });

    // Agregar un pie de página con la fecha
    const fecha = new Date().toLocaleDateString();
    doc.text(`Generado el: ${fecha}`, 20, doc.internal.pageSize.height - 20);

    // Guardar el PDF con un nombre de archivo
    doc.save(`Reporte de Asistencias al ${date}.pdf`);
  };
