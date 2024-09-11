import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  categorySelected: keyof typeof this.defaultConfig.categories = "salud_general"; // Valor inicial
  categories: [string, string][] = [];
  showServices=false;
  defaultConfig = {
    appTitle: 'Red de Veterinarios',
    apiEndpoint: 'https://api.redveterinarios.com/v1/',
    defaultLanguage: 'es',
    itemsPerPage: 10,
    theme: 'light',

    // Mapa de categorías con claves conocidas
    categories: {
      salud_general: 'Salud',
      urgencias: 'Urgencias',
      cirugias: 'Cirugías',
      rehabilitacion: 'Rehabilitación',
      odontologia: 'Odontología',
      dermatologia: 'Dermatología',
      nutricion: 'Nutrición',
      comportamiento_animal: 'Conducta',
      especialidades_medicas: 'Especialidades',
      estetica: 'Estética',
      prevencion_salud: 'Prevención',
      hospedaje_guarderia: 'Hospedaje',
      otros_servicios: 'Otros'
    },

    // Mapa de servicios con claves conocidas
    services: {
      consulta_general: { name: 'Consulta', categoryKey: 'salud_general' },
      examenes_laboratorio: { name: 'Laboratorio', categoryKey: 'salud_general' },
      vacunacion: { name: 'Vacunación', categoryKey: 'salud_general' },
      desparasitacion: { name: 'Desparasitación', categoryKey: 'salud_general' },
      diagnostico_imagenes: { name: 'Imágenes', categoryKey: 'salud_general' },
      control_peso: { name: 'Control Peso', categoryKey: 'salud_general' },

      atencion_emergencia: { name: 'Emergencia', categoryKey: 'urgencias' },
      cirugia_emergencia: { name: 'Cirugía Emergencia', categoryKey: 'urgencias' },
      hospitalizacion: { name: 'Hospitalización', categoryKey: 'urgencias' },

      esterilizacion: { name: 'Esterilización', categoryKey: 'cirugias' },
      cirugia_ortopedica: { name: 'Ortopedia', categoryKey: 'cirugias' },
      cirugia_dental: { name: 'Dental', categoryKey: 'cirugias' },
      tejidos_blandos: { name: 'Tejidos Blandos', categoryKey: 'cirugias' },

      fisioterapia: { name: 'Fisioterapia', categoryKey: 'rehabilitacion' },
      rehabilitacion_postoperatoria: { name: 'Post-Operatoria', categoryKey: 'rehabilitacion' },
      hidroterapia: { name: 'Hidroterapia', categoryKey: 'rehabilitacion' },
      terapia_laser: { name: 'Terapia Láser', categoryKey: 'rehabilitacion' },

      limpieza_dental: { name: 'Limpieza', categoryKey: 'odontologia' },
      extraccion_dental: { name: 'Extracción', categoryKey: 'odontologia' },
      tratamiento_periodontal: { name: 'Periodontal', categoryKey: 'odontologia' },

      tratamiento_alergias: { name: 'Alergias', categoryKey: 'dermatologia' },
      tratamiento_infecciones: { name: 'Infecciones Piel', categoryKey: 'dermatologia' },
      tratamiento_ectoparasitos: { name: 'Ectoparásitos', categoryKey: 'dermatologia' },

      planes_alimentacion: { name: 'Planes Alimentación', categoryKey: 'nutricion' },
      suplementacion: { name: 'Suplementos', categoryKey: 'nutricion' },

      consulta_conducta: { name: 'Consulta Conducta', categoryKey: 'comportamiento_animal' },
      entrenamiento_conducta: { name: 'Entrenamiento', categoryKey: 'comportamiento_animal' },
      evaluacion_agresividad: { name: 'Evaluación Agresividad', categoryKey: 'comportamiento_animal' },

      cardiologia: { name: 'Cardiología', categoryKey: 'especialidades_medicas' },
      neurologia: { name: 'Neurología', categoryKey: 'especialidades_medicas' },
      oncologia: { name: 'Oncología', categoryKey: 'especialidades_medicas' },
      oftalmologia: { name: 'Oftalmología', categoryKey: 'especialidades_medicas' },

      corte_unas: { name: 'Corte Uñas', categoryKey: 'estetica' },
      banos: { name: 'Baños', categoryKey: 'estetica' },
      corte_pelo: { name: 'Corte Pelo', categoryKey: 'estetica' },
      tratamiento_antipulgas: { name: 'Antipulgas', categoryKey: 'estetica' },

      chequeos_anuales: { name: 'Chequeos Anuales', categoryKey: 'prevencion_salud' },
      planes_vacunacion: { name: 'Planes Vacunación', categoryKey: 'prevencion_salud' },
      programas_bienestar: { name: 'Programas Bienestar', categoryKey: 'prevencion_salud' },

      guarderia_diurna: { name: 'Guardería', categoryKey: 'hospedaje_guarderia' },
      hospedaje_perros: { name: 'Hospedaje', categoryKey: 'hospedaje_guarderia' },
      paseo_perros: { name: 'Paseo Perros', categoryKey: 'hospedaje_guarderia' },

      consulta_online: { name: 'Consulta Online', categoryKey: 'otros_servicios' },
      microchip_registro: { name: 'Microchip', categoryKey: 'otros_servicios' },
      venta_productos: { name: 'Venta Productos', categoryKey: 'otros_servicios' },
      asesoria_adopcion: { name: 'Asesoría Adopción', categoryKey: 'otros_servicios' }
    }
  };

  constructor() {}
  selectCategory(categoryKey: keyof typeof this.defaultConfig.categories) {
    this.categorySelected = categoryKey;
    console.log('Categoría seleccionada:', this.categorySelected);
  }
  // Método para obtener servicios por categoría con tipado adecuado usando `keyof`
  getServicesByCategory(categoryKey: keyof typeof this.defaultConfig.categories) {
    // Filtrar los servicios que pertenecen a la categoría proporcionada
    return Object.values(this.defaultConfig.services).filter(service => service.categoryKey === categoryKey);
  }

  // Método para obtener la información de una categoría por su clave con tipado adecuado
  getCategoryInfo(categoryKey: keyof typeof this.defaultConfig.categories) {
    return this.defaultConfig.categories[categoryKey] || null;
  }

  getSelectedCategoryLabel(): string {
    return this.defaultConfig.categories[this.categorySelected] || '';
  }
}
