import { Component } from '@angular/core';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.css']
})
export class TrabajoComponent {

  
  items = [
    {
      title: 'Consulta inicial',
      description: 'El cliente se acerca al tapicero con su mueble en busca de asesoramiento y una estimación de costos para la reparación o tapizado.'
    },
    {
      title: 'Evaluación y presupuesto',
      description: 'El tapicero examina cuidadosamente el mueble, evalúa su estado y discute las opciones de reparación o tapizado con el cliente. Se proporciona un presupuesto detallado que incluye materiales y mano de obra.'
    },
    {
      title: 'Selección de telas y materiales',
      description: 'Si el cliente decide proceder, se le guía en la selección de telas, colores y materiales adecuados para el tapizado, asegurándose de que se ajusten a sus preferencias y estilo.'
    },
    {
      title: 'Desmontaje y preparación',
      description: 'El mueble se desmonta según sea necesario para acceder a las áreas a reparar o tapizar. Se retiran los tejidos antiguos y se realiza una limpieza adecuada del marco y las partes internas.'
    },
    {
      title: 'Reparación y relleno',
      description: 'Se llevan a cabo las reparaciones necesarias en el marco del mueble, como refuerzos, reemplazo de piezas dañadas o ajustes estructurales. Además, se realiza el relleno adecuado de cojines, asientos y respaldos para lograr el nivel de comodidad deseado.'
    },
    {
      title: 'Tapizado',
      description: 'El tapicero experto procede a tapizar el mueble utilizando las telas y materiales seleccionados. Se emplean técnicas profesionales para lograr un acabado impecable, asegurando que la tela esté tensa y sin arrugas.'
    },
    {
      title: 'Detalles finales',
      description: 'Se agregan los detalles finales, como ribetes, botones o adornos, según sea necesario o según las preferencias del cliente.'
    },
    {
      title: 'Inspección de calidad',
      description: 'El tapicero realiza una exhaustiva inspección de calidad para garantizar que el mueble esté en excelentes condiciones y cumpla con los estándares requeridos.'
    },
    {
      title: 'Entrega y satisfacción del cliente',
      description: 'Una vez finalizado el proceso, se contacta al cliente para coordinar la entrega del mueble reparado o tapizado. El tapicero se asegura de que el cliente esté satisfecho con el resultado final y ofrece cualquier asistencia adicional que pueda requerir.'
    }
  ];
}
