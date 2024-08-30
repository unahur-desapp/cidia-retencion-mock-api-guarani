const allCareers = [
	{
		"id": 18,
		"nombre": "Curso de Preparacion universitaria",
		"estado": "A",
	},
	{
		"id": 23,
		"nombre": "Licenciatura en Educación - Ciclo de complementación curricular (a distancia)",
		"estado": "A",
	},
	{
		"id": 22,
		"nombre": "CURSO 111 MIL",
		"estado": "A",
	},
	{
		"id": 27,
		"nombre": "Taller inicial de matemática",
		"estado": "A",
	},
	{
		"id": 19,
		"nombre": "CURSO PREPARATORIO DE INGLES",
		"estado": "A",
	},
	{
		"id": 28,
		"nombre": "Plan para estudiantes vocacionales",
		"estado": "A",
	},
	{
		"id": 29,
		"nombre": "Especialización en Educación Física para personas con discapacidad",
		"estado": "A",
	},
	{
		"id": 30,
		"nombre": "Tecnicatura en Gestión Ambiental (A DISTANCIA)",
		"estado": "A",
	},
	{
		"id": 31,
		"nombre": "Ingeniería Metalúrgica",
		"estado": "A",
	},
	{
		"id": 32,
		"nombre": "Ingeniería Eléctrica",
		"estado": "A",
	},
	{
		"id": 34,
		"nombre": "Licenciatura en Enfermería",
		"estado": "A",
	},
	{
		"id": 35,
		"nombre": "Tutorías para rendir materias del Secundario",
		"estado": "A",
	},
	{
		"id": 36,
		"nombre": "Jornada de Kinesiología",
		"estado": "A",
	},
	{
		"id": 37,
		"nombre": "Talleres deportivos, recreativos, culturales y de oficio",
		"estado": "A",
	},
	{
		"id": 41,
		"nombre": "Seminario de Educación Sexual Integral - Profesorados",
		"estado": "A",
	},
	{
		"id": 42,
		"nombre": "Especialización en Pedagogías de la Imagen",
		"estado": "A",
	},
	{
		"id": 43,
		"nombre": "Tecnicatura en Administración y Gestión Universitaria",
		"estado": "A",
	},
	{
		"id": 45,
		"nombre": "Refresher Lab Course",
		"estado": "A",
	},
	{
		"id": 46,
		"nombre": "Taller inicial de química",
		"estado": "A",
	},
	{
		"id": 47,
		"nombre": "Especialización en Política Educativa",
		"estado": "A",
	},
	{
		"id": 48,
		"nombre": "Maestría en Política Educativa",
		"estado": "A",
	},
	{
		"id": 49,
		"nombre": "CURSO DE MANIPULACIÓN DE LOS ALIMENTOS",
		"estado": "A",
	},
	{
		"id": 50,
		"nombre": "LABORATORIO DE POLÍTICA EDUCATIVA",
		"estado": "A",
	},
	{
		"id": 51,
		"nombre": "Tecnicatura Universitaria en Producción Agroecológica Periurbana",
		"estado": "A",
	},
	{
		"id": 54,
		"nombre": "Tecnicatura Universitaria en Mantenimiento Hospitalario",
		"estado": "A",
	},
	{
		"id": 55,
		"nombre": "Tecnicatura Universitaria en Mantenimiento Industrial",
		"estado": "A",
	},
	{
		"id": 56,
		"nombre": "Taller de programación",
		"estado": "A",
	},
	{
		"id": 57,
		"nombre": "Taller inicial de lectura y escritura",
		"estado": "A",
	},
	{
		"id": 44,
		"nombre": "Cursos de fortalecimiento - Prof. Univ. de Inglés",
		"estado": "A",
	},
	{
		"id": 59,
		"nombre": "Diplomatura en Deporte Social",
		"estado": "A",
	},
	{
		"id": 60,
		"nombre": "Curso de Programación Básica I",
		"estado": "A",
	},
	{
		"id": 61,
		"nombre": "Especialización en Alfabetización inicial",
		"estado": "A",
	},
	{
		"id": 58,
		"nombre": "CURSO DE ELECTRICIDAD BÁSICA",
		"estado": "A",
	},
	{
		"id": 33,
		"nombre": "Especialización en Docencia Universitaria",
		"estado": "A",
	},
	{
		"id": 62,
		"nombre": "Diplomatura Las primeras matemáticas en la universidad",
		"estado": "A",
	},
	{
		"id": 6,
		"nombre": "Enfermería Universitaria",
		"estado": "A",
	},
	{
		"id": 38,
		"nombre": "Licenciatura en Informática",
		"estado": "A",
	},
	{
		"id": 1,
		"nombre": "Profesorado Universitario en Educación Física",
		"estado": "A",
	},
	{
		"id": 2,
		"nombre": "Profesorado Universitario de Letras",
		"estado": "A",
	},
	{
		"id": 3,
		"nombre": "Licenciatura en Educación - Ciclo de complementación curricular",
		"estado": "A",
	},
	{
		"id": 4,
		"nombre": "Tecnicatura Universitaria en Energía Eléctrica",
		"estado": "A",
	},
	{
		"id": 5,
		"nombre": "Tecnicatura Universitaria en Metalurgia",
		"estado": "A",
	},
	{
		"id": 7,
		"nombre": "Tecnicatura en Laboratorio",
		"estado": "A",
	},
	{
		"id": 10,
		"nombre": "Profesorado Universitario de Inglés",
		"estado": "A",
	},
	{
		"id": 11,
		"nombre": "Profesorado Universitario de Matemática",
		"estado": "A",
	},
	{
		"id": 12,
		"nombre": "Profesorado Universitario de Biología",
		"estado": "A",
	},
	{
		"id": 13,
		"nombre": "Licenciatura en Biotecnología",
		"estado": "A",
	},
	{
		"id": 14,
		"nombre": "Licenciatura en Gestión Ambiental",
		"estado": "A",
	},
	{
		"id": 39,
		"nombre": "Licenciatura en Diseño Industrial",
		"estado": "A",
	},
	{
		"id": 40,
		"nombre": "Licenciatura en Tecnología de los Alimentos",
		"estado": "A",
	},
	{
		"id": 52,
		"nombre": "Tecnicatura Universitaria en Viverismo",
		"estado": "A",
	},
	{
		"id": 53,
		"nombre": "Licenciatura en Obstetricia",
		"estado": "A",
	},
	{
		"id": 16,
		"nombre": "Licenciatura en Kinesiología y Fisiatría",
		"estado": "A",
	},
	{
		"id": 63,
		"nombre": "Cátedras Abiertas UNAHUR",
		"estado": "A",
	},
	{
		"id": 65,
		"nombre": "Centro Tecnológico de Formación para el Trabajo y la Producción",
		"estado": "A",
	},
	{
		"id": 21,
		"nombre": "Tecnicatura Universitaria en Informática",
		"estado": "A",
	},
	{
		"id": 8,
		"nombre": "Tecnicatura Universitaria en Diseño Industrial",
		"estado": "A",
	},
	{
		"id": 66,
		"nombre": "Tecnicatura Universitaria en Programación",
		"estado": "A",
	},
	{
		"id": 67,
		"nombre": "Tecnicatura Universitaria en Redes y Operaciones Informáticas",
		"estado": "A",
	},
	{
		"id": 68,
		"nombre": "Escuela Universitaria de Inglés",
		"estado": "A",
	},
	{
		"id": 9,
		"nombre": "Tecnicatura en Gestión Ambiental",
		"estado": "A",
	},
	{
		"id": 20,
		"nombre": "Tecnicatura en Tecnología de los Alimentos",
		"estado": "A",
	},
	{
		"id": 70,
		"nombre": "Tecnicatura Universitaria en Programación de Videojuegos",
		"estado": "A",
	},
	{
		"id": 69,
		"nombre": "Tecnicatura Universitaria en Diseño Integral de Videojuegos",
		"estado": "B",
	},
	{
		"id": 71,
		"nombre": "Tecnicatura Universitaria en Electromovilidad",
		"estado": "A",
	},
	{
		"id": 72,
		"nombre": "Tecnicatura Universitaria en Inteligencia Artificial",
		"estado": "A",
	},
	{
		"id": 73,
		"nombre": "Doctorado en Educación",
		"estado": "A",
	}
];

module.exports = { allCareers };
