const allCareers = [
	{
		"id": 31,
		"nombre": "Ingeniería Metalúrgica",
		"estado": "A",
		"planes": [
			{ "id": 33, "nombre": "Ingeniería Metalúrgica", "fecha_entrada_vigencia": "2016-06-28" }
		]
	},
	{
		"id": 32,
		"nombre": "Ingeniería Eléctrica",
		"estado": "A",
		"planes": [
			{ "id": 34, "nombre": "Ingeniería Eléctrica", "fecha_entrada_vigencia": "2018-12-18" }
		]

	},
	{
		"id": 34,
		"nombre": "Licenciatura en Enfermería",
		"estado": "A",
		"planes": [
			{ "id": 37, "nombre": "Licenciatura en Enfermería", "fecha_entrada_vigencia": "2018-12-18" }
		]
	},
	{
		"id": 42,
		"nombre": "Especialización en Pedagogías de la Imagen",
		"estado": "A",
		"planes": [
			{ "id": 46, "nombre": "Especialización en Pedagogías de la Imagen", "fecha_entrada_vigencia": "2020-05-04" }
		]
	},
	{
		"id": 43,
		"nombre": "Tecnicatura en Administración y Gestión Universitaria",
		"estado": "A",
		"planes": [
			{ "id": 47, "nombre": "Tecnicatura en Administración y Gestión Universitaria", "fecha_entrada_vigencia": "2020-07-23" }
		]
	},
	{
		"id": 47,
		"nombre": "Especialización en Política Educativa",
		"estado": "A",
		"planes": [
			{ "id": 51, "nombre": "Especialización en Política Educativa", "fecha_entrada_vigencia": "2020-08-12" }
		]
	},
	{
		"id": 48,
		"nombre": "Maestría en Política Educativa",
		"estado": "A",
		"planes": [
			{ "id": 52, "nombre": "Maestría en Política Educativa", "fecha_entrada_vigencia": "2020-08-12" }
		]
	},
	{
		"id": 51,
		"nombre": "Tecnicatura Universitaria en Producción Agroecológica Periurbana",
		"estado": "A",
		"planes": [
			{ "id": 55, "nombre": "Tecnicatura Universitaria en Producción Agroecológica Periurbana", "fecha_entrada_vigencia": "2020-10-28" },
			{ "id": 97, "nombre": "Tecnicatura Universitaria en Producción Agroecológica Periurbana - 2023", "fecha_entrada_vigencia": "2024-03-01" },
		]
	},
	{
		"id": 54,
		"nombre": "Tecnicatura Universitaria en Mantenimiento Hospitalario",
		"estado": "A",
		"planes": [
			{ "id": 58, "nombre": "Tecnicatura Universitaria en Mantenimiento Hospitalario", "fecha_entrada_vigencia": "2020-10-28" },
		]
	},
	{
		"id": 55,
		"nombre": "Tecnicatura Universitaria en Mantenimiento Industrial",
		"estado": "A",
		"planes": [
			{ "id": 59, "nombre": "Tecnicatura Universitaria en Mantenimiento Industrial", "fecha_entrada_vigencia": "2020-10-28" },
		]
	},
	{
		"id": 61,
		"nombre": "Especialización en Alfabetización inicial",
		"estado": "A",
		"planes": [
			{ "id": 66, "nombre": "Especialización en Alfabetización inicial", "fecha_entrada_vigencia": "2021-05-17" },
		]
	},
	{
		"id": 33,
		"nombre": "Especialización en Docencia Universitaria",
		"estado": "A",
		"planes": [
			{ "id": 35, "nombre": "Especialización en Docencia Universitaria", "fecha_entrada_vigencia": "2018-02-19" },
		]
	},
	{
		"id": 6,
		"nombre": "Enfermería Universitaria",
		"estado": "A",
		"planes": [
			{ "id": 7, "nombre": "Enfermería Universitaria", "fecha_entrada_vigencia": "2015-11-22" },
			{ "id": 69, "nombre": "Enfermería Universitaria", "fecha_entrada_vigencia": "2021-07-19" },
		]
	},
	{
		"id": 38,
		"nombre": "Licenciatura en Informática",
		"estado": "A",
		"planes": [
			{ "id": 42, "nombre": "Licenciatura en Informática", "fecha_entrada_vigencia": "2020-03-12" }
		]
	},
	{
		"id": 1,
		"nombre": "Profesorado Universitario en Educación Física",
		"estado": "A",
		"planes": [
			{ "id": 3, "nombre": "Profesorado Universitario en Educación Física", "fecha_entrada_vigencia": "2015-11-22" },
		]
	},
	{
		"id": 2,
		"nombre": "Profesorado Universitario de Letras",
		"estado": "A",
		"planes": [
			{ "id": 5, "nombre": "Profesorado Universitario de Letras", "fecha_entrada_vigencia": "2015-11-22" },
		]
	},
	{
		"id": 4,
		"nombre": "Tecnicatura Universitaria en Energía Eléctrica",
		"estado": "A",
		"planes": [
			{ "id": 10, "nombre": "Tecnicatura Universitaria en Energía Eléctrica", "fecha_entrada_vigencia": "2015-11-22" },
			{ "id": 86, "nombre": "Tecnicatura Universitaria en Energía Eléctrica - 2023", "fecha_entrada_vigencia": "2023-03-10" },
		]
	},
	{
		"id": 5,
		"nombre": "Tecnicatura Universitaria en Metalurgia",
		"estado": "A",
		"planes": [
			{ "id": 9, "nombre": "Tecnicatura Universitaria en Metalurgia", "fecha_entrada_vigencia": "2015-11-22" },
			{ "id": 85, "nombre": "Tecnicatura Universitaria en Metalurgia - 2023", "fecha_entrada_vigencia": "2023-03-10" },
		]
	},
	{
		"id": 7,
		"nombre": "Tecnicatura en Laboratorio",
		"estado": "A",
		"planes": [
			{ "id": 11, "nombre": "Tecnicatura en Laboratorio", "fecha_entrada_vigencia": "2015-11-22" },
			{ "id": 83, "nombre": "Tecnicatura Universitaria en Laboratorios - 2023", "fecha_entrada_vigencia": "2023-02-26" },
		]
	},
	{
		"id": 10,
		"nombre": "Profesorado Universitario de Inglés",
		"estado": "A",
		"planes": [
			{ "id": 14, "nombre": "Profesorado Universitario de Inglés", "fecha_entrada_vigencia": "2016-06-28" },
		]
	},
	{
		"id": 11,
		"nombre": "Profesorado Universitario de Matemática",
		"estado": "A",
		"planes": [
			{ "id": 15, "nombre": "Profesorado Universitario de Matemática", "fecha_entrada_vigencia": "2016-06-28" },
		]
	},
	{
		"id": 12,
		"nombre": "Profesorado Universitario de Biología",
		"estado": "A",
		"planes": [
			{ "id": 24, "nombre": "Profesorado Universitario de Biología", "fecha_entrada_vigencia": "2016-06-28" },
		]
	},
	{
		"id": 13,
		"nombre": "Licenciatura en Biotecnología",
		"estado": "A",
		"planes": [
			{ "id": 17, "nombre": "Licenciatura en Biotecnología", "fecha_entrada_vigencia": "2016-06-28" },
		]
	},
	{
		"id": 14,
		"nombre": "Licenciatura en Gestión Ambiental",
		"estado": "A",
		"planes": [
			{ "id": 18, "nombre": "Licenciatura en Gestión Ambiental", "fecha_entrada_vigencia": "2019-06-12" },
		]
	},
	{
		"id": 39,
		"nombre": "Licenciatura en Diseño Industrial",
		"estado": "A",
		"planes": [
			{ "id": 43, "nombre": "Licenciatura en Diseño Industrial", "fecha_entrada_vigencia": "2020-03-13" },
		]
	},
	{
		"id": 40,
		"nombre": "Licenciatura en Tecnología de los Alimentos",
		"estado": "A",
		"planes": [
			{ "id": 44, "nombre": "Licenciatura en Tecnología de los Alimentos", "fecha_entrada_vigencia": "2020-03-13" },
		]
	},
	{
		"id": 52,
		"nombre": "Tecnicatura Universitaria en Viverismo",
		"estado": "A",
		"planes": [
			{ "id": 44, "nombre": "Licenciatura en Tecnología de los Alimentos", "fecha_entrada_vigencia": "2020-03-13" },
		]
	},
	{
		"id": 53,
		"nombre": "Licenciatura en Obstetricia",
		"estado": "A",
		"planes": [
			{ "id": 57, "nombre": "Licenciatura en Obstetricia", "fecha_entrada_vigencia": "2020-10-28" },
		]
	},
	{
		"id": 16,
		"nombre": "Licenciatura en Kinesiología y Fisiatría",
		"estado": "A",
		"planes": [
			{ "id": 20, "nombre": "Licenciatura en Kinesiología y Fisiatría", "fecha_entrada_vigencia": "2016-09-09" },
		]
	},
	{
		"id": 21,
		"nombre": "Tecnicatura Universitaria en Informática",
		"estado": "A",
		"planes": [
			{ "id": 23, "nombre": "Tecnicatura Universitaria en Informática", "fecha_entrada_vigencia": "2016-12-28" },
		]
	},
	{
		"id": 8,
		"nombre": "Tecnicatura Universitaria en Diseño Industrial",
		"estado": "A",
		"planes": [
			{ "id": 12, "nombre": "Tecnicatura Universitaria en Diseño Industrial", "fecha_entrada_vigencia": "2016-06-28" },
			{ "id": 87, "nombre": "Tecnicatura Universitaria en Diseño Industrial - 2023", "fecha_entrada_vigencia": "2023-03-10" },
		]
	},
	{
		"id": 66,
		"nombre": "Tecnicatura Universitaria en Programación",
		"estado": "A",
		"planes": [
			{ "id": 74, "nombre": "Tecnicatura Universitaria en Programación", "fecha_entrada_vigencia": "2022-02-15" },
		]
	},
	{
		"id": 67,
		"nombre": "Tecnicatura Universitaria en Redes y Operaciones Informáticas",
		"estado": "A",
		"planes": [
			{ "id": 75, "nombre": "Tecnicatura Universitaria en Redes y Operaciones Informáticas", "fecha_entrada_vigencia": "2022-02-15" },
		]
	},
	{
		"id": 9,
		"nombre": "Tecnicatura en Gestión Ambiental",
		"estado": "A",
		"planes": [
			{ "id": 13, "nombre": "Tecnicatura universitaria en gestión ambiental", "fecha_entrada_vigencia": "2016-06-28" },
			{ "id": 82, "nombre": "Tecnicatura Universitaria en Ciencias del Ambiente", "fecha_entrada_vigencia": "2023-02-26" },
		]
	},
	{
		"id": 20,
		"nombre": "Tecnicatura en Tecnología de los Alimentos",
		"estado": "A",
		"planes": [
			{ "id": 22, "nombre": "Tecnicatura en Tecnología de los Alimentos", "fecha_entrada_vigencia": "2016-06-28" },
			{ "id": 84, "nombre": "Tecnicatura en Tecnología de los Alimentos - 2023", "fecha_entrada_vigencia": "2023-02-26" },
		]
	},
	{
		"id": 70,
		"nombre": "Tecnicatura Universitaria en Programación de Videojuegos",
		"estado": "A",
		"planes": [
			{ "id": 78, "nombre": "Tecnicatura Universitaria en Programación de Videojuegos", "fecha_entrada_vigencia": "2022-07-15" },
		]
	},
	{
		"id": 69,
		"nombre": "Tecnicatura Universitaria en Diseño Integral de Videojuegos",
		"estado": "B",
		"planes": [
			{ "id": 77, "nombre": "Tecnicatura Universitaria en Diseño Integral de Videojuegos", "fecha_entrada_vigencia": "2022-04-18" },
		]
	},
	{
		"id": 71,
		"nombre": "Tecnicatura Universitaria en Electromovilidad",
		"estado": "A",
		"planes": [
			{ "id": 79, "nombre": "Tecnicatura Universitaria en Electromovilidad", "fecha_entrada_vigencia": "2022-10-01" },
		]
	},
	{
		"id": 72,
		"nombre": "Tecnicatura Universitaria en Inteligencia Artificial",
		"estado": "A",
		"planes": [
			{ "id": 80, "nombre": "Tecnicatura Universitaria en Inteligencia Artificial", "fecha_entrada_vigencia": "2022-10-01" },
		]
	},
	{
		"id": 73,
		"nombre": "Doctorado en Educación",
		"estado": "A",
		"planes": [
			{ "id": 81, "nombre": "Doctorado en Educación", "fecha_entrada_vigencia": "2022-11-14" },
		]
	}
];

module.exports = { allCareers };
