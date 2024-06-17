import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Service {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NgFor], // Asegúrate de importar NgFor
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'], // Corrección aquí: styleUrl -> styleUrls
})
export class ServiceComponent {
  services: Service[] = [
    {
      title: 'Diseño Web',
      description:
        'Nuestro servicio de Desarrollo Web ofrece soluciones completas para tu presencia en línea, abarcando desde la creación de páginas web modernas y funcionales hasta la gestión de hosting seguro y confiable. Nos especializamos en el diseño y desarrollo de sitios web personalizados que reflejan la identidad de tu marca y optimizan la experiencia del usuario. Además, nos encargamos de todos los aspectos técnicos del hosting, asegurando que tu sitio esté siempre accesible y funcionando a la perfección. Con nuestro enfoque integral, te proporcionamos todo lo que necesitas para destacar en el mundo digital y atraer a tu audiencia de manera efectiva.',
      image: '../../../assets/images/pexels-designecologist-1779487.jpg',
    },
    {
      title: 'Pauta publicitaria en Facebook & Instagram',
      description:
        'Nuestro servicio de Pauta Publicitaria en Facebook & Instagram Ads se enfoca en la creación de estrategias personalizadas y la elaboración de contenido audiovisual de alta calidad, alineado con los objetivos de tu campaña. Te ayudamos a maximizar el alcance y la efectividad de tus anuncios, conectando de manera precisa con tu audiencia objetivo. Desde el desarrollo de creativos impactantes hasta la gestión y optimización continua de tus campañas, nos aseguramos de que cada inversión publicitaria genere los mejores resultados posibles en estas plataformas clave.',
      image: '../../../assets/images/pexels-magnus-mueller-1398178-2818118.jpg',
    },
    {
      title: 'Diseño Gráfico',
      description: 'Nuestro servicio de Diseño Gráfico abarca la creación integral de elementos visuales para tu marca. Nos especializamos en desarrollar Manuales de Marca, Logos, Brochures, Catálogos, Menús, Flyers y más. Cada pieza es diseñada meticulosamente para reflejar la identidad y valores de tu empresa, asegurando una comunicación visual coherente y atractiva. Con nuestro enfoque creativo y profesional, elevamos la presencia de tu marca y capturamos la atención de tu audiencia en cada punto de contacto.',
      image: '../../../assets/images/pexels-jonathanborba-3052727.jpg',
    },
    {
      title: 'Producción de fotografía y video',
      description:
        'Nuestro servicio de Producción de Fotografía y Video ofrece soluciones profesionales tanto en estudio como en locación. Nos especializamos en la cobertura de eventos, cócteles, presentaciones y más. Capturamos momentos únicos y creamos contenido visual de alta calidad que destaca la esencia de tu marca y eventos. Con nuestro equipo y experiencia, garantizamos resultados impactantes y memorables para todas tus necesidades audiovisuales.',
      image: '../../../assets/images/pexels-cottonbro-3206167.jpg',
    },
  ];

  isModalOpen = false;
  selectedService: Service | null = null;

  openModal(service: Service) {
    this.selectedService = service;
    this.isModalOpen = true;

  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedService = null;
  }
}
