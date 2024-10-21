const allSubjects = [
    {
        "id": 445,
        "name": "Ingeniería ambiental, seguridad e higiene"
    },
    {
        "id": 462,
        "name": "CAMPO DE FORMACION COMPLEMENTARIO"
    },
    {
        "id": 167,
        "name": "ESIC I - Práctica Profesional Supervisada"
    },
    {
        "id": 168,
        "name": "ESIC II - Proyecto Integrador"
    },
    {
        "id": 463,
        "name": "CAMPO DE INTEGRACION CURRICULAR"
    },
    {
        "id": 186,
        "name": "Instalaciones eléctricas y luminotecnia"
    },
    {
        "id": 189,
        "name": "Mediciones eléctricas"
    },
    {
        "id": 31,
        "name": "Inglés I"
    },
    {
        "id": 44,
        "name": "Inglés II"
    },
    {
        "id": 155,
        "name": "Probabilidad y estadística"
    },
    {
        "id": 443,
        "name": "Organización Industrial"
    },
    {
        "id": 448,
        "name": "CAMPO DE FORMACIÓN BASICA"
    },
    {
        "id": 449,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 450,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 451,
        "name": "CAMPO DE FORMACIÓN COMPLEMENTARIO"
    },
    {
        "id": 452,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 459,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 460,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 461,
        "name": "CAMPO DE FORMACION ESPECIFICA"
    },
    {
        "id": 41,
        "name": "Programación"
    },
    {
        "id": 464,
        "name": "Métodos participativos de transformación de conflictos"
    },
    {
        "id": 465,
        "name": "Malvinas: una Causa de nuestra América Latina"
    },
    {
        "id": 466,
        "name": "Pensar Hurlingham"
    },
    {
        "id": 468,
        "name": "Astro: Relación de la Humanidad con el Cosmos"
    },
    {
        "id": 467,
        "name": "Modos de ver el Mundo contemporáneo a través del lenguaje audiovisual"
    },
    {
        "id": 508,
        "name": "ASIGNATURA UNAHUR_1"
    },
    {
        "id": 509,
        "name": "ASIGNATURA UNAHUR_2"
    },
    {
        "id": 184,
        "name": "Electrónica"
    },
    {
        "id": 181,
        "name": "Introducción a la Energía Eléctrica I"
    },
    {
        "id": 188,
        "name": "Introducción a la Energía Eléctrica II"
    },
    {
        "id": 510,
        "name": "ASIGNATURA UNAHUR_3"
    },
    {
        "id": 428,
        "name": "Abordaje de situaciones sociales complejas"
    },
    {
        "id": 144,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 437,
        "name": "Software libre y sociedad"
    },
    {
        "id": 438,
        "name": "Taller de escritura creativa"
    },
    {
        "id": 145,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 146,
        "name": "Raíz del plan"
    },
    {
        "id": 429,
        "name": "Análisis y diseño de políticas públicas"
    },
    {
        "id": 430,
        "name": "Ciencia Tecnología y sociedad"
    },
    {
        "id": 431,
        "name": "Culturas Juveniles"
    },
    {
        "id": 433,
        "name": "Pensamiento Nacional"
    },
    {
        "id": 434,
        "name": "Robótica"
    },
    {
        "id": 435,
        "name": "Universidad, territorio e intervenciones sociales"
    },
    {
        "id": 427,
        "name": "Literatura Argentina. Ficciones de la patria"
    },
    {
        "id": 147,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 436,
        "name": "Investigación cualitativa"
    },
    {
        "id": 4,
        "name": "Nuevos entornos y lenguajes: la producción de conocimiento en la cultura digital"
    },
    {
        "id": 148,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 123,
        "name": "Introducción a la salud comunitaria"
    },
    {
        "id": 124,
        "name": "Anátomo-Fisiología I"
    },
    {
        "id": 125,
        "name": "Psicología"
    },
    {
        "id": 128,
        "name": "Bioética y aspectos legales del ejercicio profesional"
    },
    {
        "id": 130,
        "name": "Nutrición y dietoterapia"
    },
    {
        "id": 135,
        "name": "Gestión en Salud comunitaria"
    },
    {
        "id": 129,
        "name": "Fundamentos de enfermería I"
    },
    {
        "id": 137,
        "name": "Metodología de la investigación en enfermería"
    },
    {
        "id": 151,
        "name": "Química General"
    },
    {
        "id": 444,
        "name": "Metalurgia I"
    },
    {
        "id": 447,
        "name": "Metalurgia II"
    },
    {
        "id": 160,
        "name": "Introducción a la Metalurgia"
    },
    {
        "id": 161,
        "name": "Técnicas de Análisis"
    },
    {
        "id": 162,
        "name": "Ensayos de materiales"
    },
    {
        "id": 163,
        "name": "Mineralogía y Tratamiento de los minerales"
    },
    {
        "id": 164,
        "name": "Metalurgia física"
    },
    {
        "id": 432,
        "name": "Filosofía"
    },
    {
        "id": 180,
        "name": "Raíz del plan"
    },
    {
        "id": 153,
        "name": "Sistemas de representación gráfica"
    },
    {
        "id": 154,
        "name": "Física I"
    },
    {
        "id": 156,
        "name": "Física II"
    },
    {
        "id": 158,
        "name": "Electrotecnia"
    },
    {
        "id": 194,
        "name": "Raíz del plan"
    },
    {
        "id": 149,
        "name": "Introducción al análisis matemático"
    },
    {
        "id": 152,
        "name": "Análisis Matemático I"
    },
    {
        "id": 150,
        "name": "Algebra y Geometría Analítica"
    },
    {
        "id": 183,
        "name": "Máquinas eléctricas"
    },
    {
        "id": 187,
        "name": "Materiales eléctricos"
    },
    {
        "id": 584,
        "name": "Raíz del plan"
    },
    {
        "id": 222,
        "name": "Anátomo-Fisiología II"
    },
    {
        "id": 223,
        "name": "Antropología"
    },
    {
        "id": 224,
        "name": "Epistemología de la salud"
    },
    {
        "id": 126,
        "name": "Farmacología"
    },
    {
        "id": 1167,
        "name": "Tango"
    },
    {
        "id": 1162,
        "name": "Teatro"
    },
    {
        "id": 221,
        "name": "Microbiología"
    },
    {
        "id": 140,
        "name": "Epidemiología"
    },
    {
        "id": 225,
        "name": "Fundamentos de enfermería II"
    },
    {
        "id": 226,
        "name": "Fundamentos de enfermería III"
    },
    {
        "id": 133,
        "name": "Enfermería del Adulto y los Adultos mayores I"
    },
    {
        "id": 134,
        "name": "Enfermería del Adulto y los Adultos mayores II"
    },
    {
        "id": 141,
        "name": "Enfermería en Salud comunitaria"
    },
    {
        "id": 446,
        "name": "Química General II"
    },
    {
        "id": 142,
        "name": "Enfermería del niño y el adolescente"
    },
    {
        "id": 139,
        "name": "Enfermería en Salud Mental"
    },
    {
        "id": 131,
        "name": "Enfermería en salud Materno-Infantil I"
    },
    {
        "id": 132,
        "name": "Enfermería en salud Materno-Infantil II"
    },
    {
        "id": 227,
        "name": "Práctica profesional supervisada"
    },
    {
        "id": 1473,
        "name": "3ER AÑO"
    },
    {
        "id": 516,
        "name": "Innovacion y creatividad"
    },
    {
        "id": 517,
        "name": "Ciudadania activa y compromiso social"
    },
    {
        "id": 515,
        "name": "Infancias, derechos y politicas"
    },
    {
        "id": 518,
        "name": "Tecnicas de investigacion en opinion publica"
    },
    {
        "id": 519,
        "name": "Cuentos norteamericanos"
    },
    {
        "id": 593,
        "name": "Raíz del plan"
    },
    {
        "id": 592,
        "name": "Taller inicial de matemática"
    },
    {
        "id": 595,
        "name": "Arte y Tecnología"
    },
    {
        "id": 594,
        "name": "La vida secreta de las rocas"
    },
    {
        "id": 596,
        "name": "Literatura y Política"
    },
    {
        "id": 600,
        "name": "AU_Manipulacion genetica en humanos. Historia, mitos y realidades"
    },
    {
        "id": 601,
        "name": "Raíz del plan"
    },
    {
        "id": 513,
        "name": "Curso de preparacion universitaria_Lectura y escritura"
    },
    {
        "id": 512,
        "name": "Curso de preparacion universitaria_Pensamiento Matemático"
    },
    {
        "id": 514,
        "name": "Curso de preparacion universitaria_Vida Universitaria"
    },
    {
        "id": 511,
        "name": "Raíz del plan"
    },
    {
        "id": 1614,
        "name": "Raíz del plan"
    },
    {
        "id": 628,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 629,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 630,
        "name": "CAMPO DE FORMACION ESPECIFICA"
    },
    {
        "id": 631,
        "name": "CAMPO DE INTEGRACION CURRICULAR"
    },
    {
        "id": 632,
        "name": "Raíz del plan"
    },
    {
        "id": 195,
        "name": "Química General I"
    },
    {
        "id": 197,
        "name": "Técnicas analíticas e instrumentales"
    },
    {
        "id": 208,
        "name": "Higiene y Seguridad"
    },
    {
        "id": 210,
        "name": "Ética y Responsabilidad profesional"
    },
    {
        "id": 261,
        "name": "Ecología"
    },
    {
        "id": 262,
        "name": "Química ambiental"
    },
    {
        "id": 264,
        "name": "Geología e hidrogeología ambiental"
    },
    {
        "id": 265,
        "name": "Gestión integral de recursos hídricos"
    },
    {
        "id": 266,
        "name": "Gestión integral de aire y emisiones gaseosas"
    },
    {
        "id": 267,
        "name": "Cartografía y Sistemas de información geográfica (SIG)"
    },
    {
        "id": 268,
        "name": "Sistemas de gestión de residuos"
    },
    {
        "id": 269,
        "name": "Educación ambiental"
    },
    {
        "id": 270,
        "name": "Sistemas de gestión ambiental y auditorías ambientales"
    },
    {
        "id": 271,
        "name": "Tecnologías de muestreo, medición y control ambiental"
    },
    {
        "id": 272,
        "name": "Metodología de evaluación de sitios"
    },
    {
        "id": 273,
        "name": "Política ambiental I"
    },
    {
        "id": 426,
        "name": "Legislación ambiental"
    },
    {
        "id": 274,
        "name": "Introducción a la problemática ambiental"
    },
    {
        "id": 275,
        "name": "Taller de relevamiento de problemáticas ambientales"
    },
    {
        "id": 276,
        "name": "Introducción a la problemática urbana"
    },
    {
        "id": 278,
        "name": "Taller de análisis de problemáticas ambientales"
    },
    {
        "id": 280,
        "name": "Procesos de evaluación de impacto ambiental"
    },
    {
        "id": 279,
        "name": "Taller de gestión de problemáticas ambientales"
    },
    {
        "id": 348,
        "name": "Matemática"
    },
    {
        "id": 655,
        "name": "Raíz del plan"
    },
    {
        "id": 1650,
        "name": "Raíz del plan"
    },
    {
        "id": 662,
        "name": "PRIMER AÑO"
    },
    {
        "id": 663,
        "name": "SEGUNDO AÑO"
    },
    {
        "id": 664,
        "name": "TERCER AÑO"
    },
    {
        "id": 665,
        "name": "CUARTO AÑO"
    },
    {
        "id": 666,
        "name": "QUINTO AÑO"
    },
    {
        "id": 157,
        "name": "Matemática avanzada"
    },
    {
        "id": 661,
        "name": "Análisis Matemático II"
    },
    {
        "id": 645,
        "name": "Circuitos eléctricos"
    },
    {
        "id": 159,
        "name": "Física III"
    },
    {
        "id": 646,
        "name": "Estabilidad y resistencia de los materiales"
    },
    {
        "id": 647,
        "name": "Mecanismos"
    },
    {
        "id": 635,
        "name": "Legislación"
    },
    {
        "id": 648,
        "name": "Sistemas de control"
    },
    {
        "id": 649,
        "name": "Electrónica industrial"
    },
    {
        "id": 202,
        "name": "Economía"
    },
    {
        "id": 699,
        "name": "Raíz del plan"
    },
    {
        "id": 650,
        "name": "Uso eficiente de la energía eléctrica"
    },
    {
        "id": 651,
        "name": "Generación y transformación"
    },
    {
        "id": 652,
        "name": "Construcciones electromecánicas"
    },
    {
        "id": 653,
        "name": "Protección eléctrica"
    },
    {
        "id": 654,
        "name": "Transmisión y distribución"
    },
    {
        "id": 169,
        "name": "Espacio de integración curricular III"
    },
    {
        "id": 170,
        "name": "Espacio de integración curricular IV"
    },
    {
        "id": 676,
        "name": "AU_Literatura y Memoria"
    },
    {
        "id": 677,
        "name": "AU_Invitación a un clásico de la Literatura"
    },
    {
        "id": 165,
        "name": "Termodinámica"
    },
    {
        "id": 166,
        "name": "Fisicoquímica metalúrgica"
    },
    {
        "id": 660,
        "name": "QUINTO AÑO"
    },
    {
        "id": 659,
        "name": "CUARTO AÑO"
    },
    {
        "id": 658,
        "name": "TERCER AÑO"
    },
    {
        "id": 657,
        "name": "SEGUNDO AÑO"
    },
    {
        "id": 314,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 313,
        "name": "Francés lecto-comprensión II"
    },
    {
        "id": 304,
        "name": "Francés lecto-comprensión I"
    },
    {
        "id": 281,
        "name": "Raíz del plan"
    },
    {
        "id": 29,
        "name": "Didáctica y Curriculum"
    },
    {
        "id": 656,
        "name": "PRIMER AÑO"
    },
    {
        "id": 633,
        "name": "Raíz del plan"
    },
    {
        "id": 341,
        "name": "Matemática avanzada"
    },
    {
        "id": 634,
        "name": "Mecánica de los fluídos"
    },
    {
        "id": 636,
        "name": "Instalaciones térmicas"
    },
    {
        "id": 638,
        "name": "Refractarios y Cerámicos"
    },
    {
        "id": 639,
        "name": "Soldadura"
    },
    {
        "id": 640,
        "name": "Metalografía y Tratamientos térmicos de ferrosos"
    },
    {
        "id": 641,
        "name": "Procesos de Reducción y aceración"
    },
    {
        "id": 642,
        "name": "Conformación plástica"
    },
    {
        "id": 643,
        "name": "Fundición de metales ferrosos y no ferrosos"
    },
    {
        "id": 637,
        "name": "Metalurgia extractiva de metales no ferrosos"
    },
    {
        "id": 698,
        "name": "Tutoría de Física_T01"
    },
    {
        "id": 707,
        "name": "Tutoría de Otras materias_T01"
    },
    {
        "id": 701,
        "name": "Tutoría de Química_T01"
    },
    {
        "id": 702,
        "name": "Tutoría de Biología_T01"
    },
    {
        "id": 706,
        "name": "Tutoría de Geografía_T01"
    },
    {
        "id": 705,
        "name": "Tutoría de Historia_T01"
    },
    {
        "id": 703,
        "name": "Tutoría de Inglés_T01"
    },
    {
        "id": 704,
        "name": "Tutoría de Lengua_T01"
    },
    {
        "id": 700,
        "name": "Tutoría de Matemática_T01"
    },
    {
        "id": 708,
        "name": "TUTORIAS"
    },
    {
        "id": 710,
        "name": "AU_Arte contemporáneo: un recorrido por la historia del siglo XX a través de las vanguardias artísticas"
    },
    {
        "id": 709,
        "name": "AU_Educación Sexual Integral. Cuando lo esencial es (in)Visible a los ojos"
    },
    {
        "id": 713,
        "name": "AU_Educación Sexual Integral. Cuando lo esencial es visible a los ojos"
    },
    {
        "id": 712,
        "name": "AU_Una Historia del Rock Nacional"
    },
    {
        "id": 714,
        "name": "AU_Género y Sociedad: una nueva mirada para una era mas justa"
    },
    {
        "id": 49,
        "name": "Filosofía de la educación"
    },
    {
        "id": 317,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 311,
        "name": "Didáctica del inglés como LE"
    },
    {
        "id": 310,
        "name": "Didáctica de la Fonología"
    },
    {
        "id": 303,
        "name": "Ayudantías y Prácticas docentes"
    },
    {
        "id": 302,
        "name": "Taller de observación"
    },
    {
        "id": 309,
        "name": "Residencia"
    },
    {
        "id": 308,
        "name": "Práctica de la enseñanza del inglés"
    },
    {
        "id": 316,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 288,
        "name": "Taller de lectoescritura (en español)"
    },
    {
        "id": 312,
        "name": "Taller de investigación en lengua extranjera"
    },
    {
        "id": 292,
        "name": "Práctica de Laboratorio II"
    },
    {
        "id": 285,
        "name": "Práctica de Laboratorio I"
    },
    {
        "id": 301,
        "name": "Literatura de EE.UU"
    },
    {
        "id": 307,
        "name": "Literatura contemporánea"
    },
    {
        "id": 300,
        "name": "Literatura Inglesa II"
    },
    {
        "id": 295,
        "name": "Literatura Inglesa I"
    },
    {
        "id": 297,
        "name": "Lingüística I"
    },
    {
        "id": 305,
        "name": "Lengua Inglesa IV"
    },
    {
        "id": 296,
        "name": "Lengua Inglesa III"
    },
    {
        "id": 289,
        "name": "Lengua Inglesa II"
    },
    {
        "id": 282,
        "name": "Lengua Inglesa I"
    },
    {
        "id": 293,
        "name": "Historia medieval"
    },
    {
        "id": 294,
        "name": "Historia de la Europa moderna y contemporánea"
    },
    {
        "id": 299,
        "name": "Historia de América"
    },
    {
        "id": 290,
        "name": "Gramática II"
    },
    {
        "id": 283,
        "name": "Gramática I"
    },
    {
        "id": 286,
        "name": "Geografía y cultura de Europa"
    },
    {
        "id": 287,
        "name": "Geografía y cultura de América"
    },
    {
        "id": 291,
        "name": "Fonética II"
    },
    {
        "id": 284,
        "name": "Fonética I"
    },
    {
        "id": 306,
        "name": "Análisis contrastivo del Inglés y el Español"
    },
    {
        "id": 298,
        "name": "Adquisición de la lengua materna y extranjera"
    },
    {
        "id": 315,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 7,
        "name": "Seminario de Culturas Juveniles"
    },
    {
        "id": 22,
        "name": "Pensamiento pedagógico latinoamericano"
    },
    {
        "id": 15,
        "name": "Pedagogía II"
    },
    {
        "id": 52,
        "name": "Pedagogía I: Los sentidos de educar"
    },
    {
        "id": 10,
        "name": "Sujetos e instituciones"
    },
    {
        "id": 39,
        "name": "Educación y proyecto nacional"
    },
    {
        "id": 717,
        "name": "AU_Introducción a la Imagen. (De la imagen fija a la imagen en movimiento)"
    },
    {
        "id": 718,
        "name": "Cuando los Pasados No Pasan: lugares de memoria"
    },
    {
        "id": 719,
        "name": "AU_Pensamiento Ambiental Latinoamericano"
    },
    {
        "id": 741,
        "name": "AU_Pensamiento Pedagógico Latinoamericano"
    },
    {
        "id": 720,
        "name": "Talleres Culturales"
    },
    {
        "id": 721,
        "name": "Talleres Deportivos"
    },
    {
        "id": 722,
        "name": "Talleres de Oficio"
    },
    {
        "id": 755,
        "name": "Raíz del plan"
    },
    {
        "id": 2,
        "name": "Educación física en la niñez"
    },
    {
        "id": 455,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 456,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 457,
        "name": "CAMPO DE FORMACION ESPECIFICA"
    },
    {
        "id": 458,
        "name": "CAMPO DE INTEGRACION CURRICULAR"
    },
    {
        "id": 1,
        "name": "Deporte social y comunitario"
    },
    {
        "id": 12,
        "name": "Prácticas deportivas individuales y su didáctica I"
    },
    {
        "id": 9,
        "name": "Prácticas deportivas de conjunto y su didáctica I"
    },
    {
        "id": 8,
        "name": "Historia de la educación y de la educación física"
    },
    {
        "id": 14,
        "name": "Prácticas deportivas individuales y su didáctica II"
    },
    {
        "id": 13,
        "name": "Prácticas deportivas de conjunto y su didáctica II"
    },
    {
        "id": 23,
        "name": "Educación física en el joven y adulto"
    },
    {
        "id": 20,
        "name": "Prácticas deportivas individuales y su didáctica III"
    },
    {
        "id": 19,
        "name": "Prácticas deportivas de conjunto y su didáctica III"
    },
    {
        "id": 27,
        "name": "Teoría de la educación física"
    },
    {
        "id": 32,
        "name": "Fisiología aplicada a la educación física"
    },
    {
        "id": 47,
        "name": "Biomecánica"
    },
    {
        "id": 48,
        "name": "Deporte optativo II"
    },
    {
        "id": 46,
        "name": "Deporte optativo I"
    },
    {
        "id": 40,
        "name": "Prácticas deportivas de conjunto y su didáctica VI"
    },
    {
        "id": 38,
        "name": "Investigación y desarrollo curricular en educación física"
    },
    {
        "id": 37,
        "name": "Teoría del entrenamiento"
    },
    {
        "id": 35,
        "name": "Diseño y desarrollo de proyectos en intervención socio comunitaria"
    },
    {
        "id": 33,
        "name": "Prácticas deportivas individuales y su didáctica V"
    },
    {
        "id": 811,
        "name": "Caminos y decisiones para integrar la Educación Sexual Integral en las prácticas educativas y garantizar su derecho"
    },
    {
        "id": 812,
        "name": "Raíz del plan"
    },
    {
        "id": 847,
        "name": "Raíz del plan"
    },
    {
        "id": 849,
        "name": "Raíz del plan"
    },
    {
        "id": 848,
        "name": "Refresher Lab Course"
    },
    {
        "id": 851,
        "name": "Raíz del plan"
    },
    {
        "id": 850,
        "name": "Taller inicial de química"
    },
    {
        "id": 627,
        "name": "Raíz del plan"
    },
    {
        "id": 618,
        "name": "Introductorio al campo específico. Derechos de las personas con discapacidad"
    },
    {
        "id": 619,
        "name": "Formación del docente de educación física en el área de la discapacidad"
    },
    {
        "id": 620,
        "name": "Perspectivas teóricas y metodológicas de las prácticas corporales lúdicas y deportivas adaptadas"
    },
    {
        "id": 621,
        "name": "Pedagogía de la Educación Física para personas con discapacidad motora"
    },
    {
        "id": 622,
        "name": "Pedagogía de la Educación Física para personas con trastornos emocionales severos"
    },
    {
        "id": 623,
        "name": "Pedagogía de la Educación Física para personas con discapacidad sensorial"
    },
    {
        "id": 624,
        "name": "Pedagogía de la Educación Física para personas con discapacidad intelectual"
    },
    {
        "id": 625,
        "name": "Diseño y desarrollo de proyectos de intervención y TICs"
    },
    {
        "id": 626,
        "name": "Taller de elaboración de trabajo final"
    },
    {
        "id": 858,
        "name": "Raíz del plan"
    },
    {
        "id": 852,
        "name": "Teorías de la sociedad, política, estado y educación"
    },
    {
        "id": 853,
        "name": "Bases normativas de la política educativa argentina"
    },
    {
        "id": 854,
        "name": "Contexto histórico de la política educativa argentina"
    },
    {
        "id": 855,
        "name": "Política educativa argentina: Economía y financiamiento"
    },
    {
        "id": 857,
        "name": "Análisis y evaluación de políticas publicas en educación"
    },
    {
        "id": 856,
        "name": "Diseño de políticas educativas"
    },
    {
        "id": 867,
        "name": "Asignaturas Obligatorias"
    },
    {
        "id": 859,
        "name": "Seminario educación y trabajo"
    },
    {
        "id": 860,
        "name": "Políticas educativas: Una mirada internacional"
    },
    {
        "id": 861,
        "name": "Política y gestión del curriculum"
    },
    {
        "id": 862,
        "name": "Pensamiento Pedagógico Latinoamericano"
    },
    {
        "id": 865,
        "name": "MAESTRÍA_ASIGNATURA OPTATIVA 1"
    },
    {
        "id": 866,
        "name": "MAESTRÍA_ASIGNATURA OPTATIVA 2"
    },
    {
        "id": 868,
        "name": "Asignaturas Optativas"
    },
    {
        "id": 863,
        "name": "Metodología de la Investigación"
    },
    {
        "id": 864,
        "name": "Taller de Tesis"
    },
    {
        "id": 869,
        "name": "Espacio de Integracion curricular"
    },
    {
        "id": 870,
        "name": "Raíz del plan"
    },
    {
        "id": 114,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 115,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 118,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 119,
        "name": "Raíz del plan"
    },
    {
        "id": 122,
        "name": "ESIC II"
    },
    {
        "id": 112,
        "name": "Conducción de instituciones educativas"
    },
    {
        "id": 111,
        "name": "Legislación y normativa educativa"
    },
    {
        "id": 113,
        "name": "Política educativa comparada"
    },
    {
        "id": 109,
        "name": "Análisis y diseño de políticas públicas"
    },
    {
        "id": 108,
        "name": "Estado, educación y sociedad"
    },
    {
        "id": 106,
        "name": "Acompañamiento y asesoramiento en procesos de formación situada"
    },
    {
        "id": 101,
        "name": "Formación inicial y permanente"
    },
    {
        "id": 581,
        "name": "CICLO DE FORMACION COMUN"
    },
    {
        "id": 582,
        "name": "CICLO DE FORMACION BASICA"
    },
    {
        "id": 583,
        "name": "CICLO DE FORMACION ESPECIFICA"
    },
    {
        "id": 107,
        "name": "ESIC I"
    },
    {
        "id": 120,
        "name": "Evaluación de los sistemas educativos, instituciones y programas"
    },
    {
        "id": 104,
        "name": "Formación docente en entornos virtuales"
    },
    {
        "id": 103,
        "name": "Trabajo docente"
    },
    {
        "id": 102,
        "name": "Sujetos de la formación docente"
    },
    {
        "id": 100,
        "name": "Políticas de formación docente"
    },
    {
        "id": 789,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 85,
        "name": "Raíz del plan"
    },
    {
        "id": 6,
        "name": "Taller de Práctica Lúdica"
    },
    {
        "id": 17,
        "name": "Taller de prácticas corporales expresivas"
    },
    {
        "id": 16,
        "name": "Anatomía aplicada a la educación física"
    },
    {
        "id": 18,
        "name": "Taller de práctica de la enseñanza en el ámbito no formal I"
    },
    {
        "id": 219,
        "name": "Didáctica de la Educación superior"
    },
    {
        "id": 25,
        "name": "Taller de educación ambiental y en la naturaleza"
    },
    {
        "id": 21,
        "name": "Taller de práctica de la enseñanza en el ámbito no formal II"
    },
    {
        "id": 34,
        "name": "Taller de Primeros auxilios"
    },
    {
        "id": 28,
        "name": "Educación física inclusiva"
    },
    {
        "id": 26,
        "name": "Prácticas deportivas individuales y su didáctica IV"
    },
    {
        "id": 51,
        "name": "Taller de práctica de la enseñanza en el ámbito formal II"
    },
    {
        "id": 30,
        "name": "Prácticas deportivas de conjunto y su didáctica V"
    },
    {
        "id": 24,
        "name": "Prácticas deportivas de conjunto y su didáctica IV"
    },
    {
        "id": 50,
        "name": "Taller de práctica de la enseñanza en el ámbito formal I"
    },
    {
        "id": 790,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 332,
        "name": "Observación de clases (CIC IV)"
    },
    {
        "id": 343,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 344,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 345,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 346,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 347,
        "name": "Raíz del plan"
    },
    {
        "id": 324,
        "name": "Química general"
    },
    {
        "id": 322,
        "name": "Geometría general y analítica"
    },
    {
        "id": 320,
        "name": "Introducción a la matemática"
    },
    {
        "id": 325,
        "name": "Análisis matemático I"
    },
    {
        "id": 340,
        "name": "Pensamiento matemático"
    },
    {
        "id": 339,
        "name": "Matemática aplicada a las ciencias naturales"
    },
    {
        "id": 338,
        "name": "Matemática discreta"
    },
    {
        "id": 337,
        "name": "Informática para la enseñanza de la matemática"
    },
    {
        "id": 336,
        "name": "Didáctica de las ciencias exactas y naturales II"
    },
    {
        "id": 335,
        "name": "Computación científica"
    },
    {
        "id": 333,
        "name": "Física general"
    },
    {
        "id": 329,
        "name": "Didáctica de las ciencias exactas y naturales"
    },
    {
        "id": 342,
        "name": "Práctica de la enseñanza de la matemática II (CIC VI)"
    },
    {
        "id": 328,
        "name": "Tutorías en el primer año universitario II (CIC III)"
    },
    {
        "id": 327,
        "name": "Análisis matemático II"
    },
    {
        "id": 331,
        "name": "Probabilidad y estadística"
    },
    {
        "id": 330,
        "name": "Álgebra II"
    },
    {
        "id": 334,
        "name": "Práctica de la enseñanza de la matemática I (CIC V)"
    },
    {
        "id": 321,
        "name": "Introducción al análsis matemático"
    },
    {
        "id": 326,
        "name": "Tutorías en el primer año universitario I (CIC II)"
    },
    {
        "id": 323,
        "name": "Taller de apoyo escolar (CIC)"
    },
    {
        "id": 319,
        "name": "Álgebra I"
    },
    {
        "id": 61,
        "name": "Taller de proyecto cultural"
    },
    {
        "id": 54,
        "name": "Introducción al estudio de la literatura"
    },
    {
        "id": 56,
        "name": "Gramática I"
    },
    {
        "id": 57,
        "name": "Historia de Latinoamérica"
    },
    {
        "id": 58,
        "name": "Taller de Escritura Académica y Escolar"
    },
    {
        "id": 59,
        "name": "Gramática II"
    },
    {
        "id": 60,
        "name": "Lingüística I"
    },
    {
        "id": 62,
        "name": "Teoría y Análisis Literario"
    },
    {
        "id": 63,
        "name": "Cultura y literatura de la antigüedad clásica"
    },
    {
        "id": 64,
        "name": "Literatura Europea del Renacimiento y el Barroco"
    },
    {
        "id": 65,
        "name": "Literatura Española"
    },
    {
        "id": 66,
        "name": "Cultura y literatura de los pueblos originarios de América"
    },
    {
        "id": 68,
        "name": "Literatura del Siglo XIX"
    },
    {
        "id": 69,
        "name": "Literatura Latinoamericana I"
    },
    {
        "id": 70,
        "name": "Didáctica de la Lengua"
    },
    {
        "id": 71,
        "name": "Lingüística II"
    },
    {
        "id": 72,
        "name": "Literatura del Siglo XX"
    },
    {
        "id": 80,
        "name": "Alfabetización"
    },
    {
        "id": 95,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 96,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 97,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 98,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 99,
        "name": "Raíz del plan"
    },
    {
        "id": 82,
        "name": "Análisis de los discursos de los medios"
    },
    {
        "id": 73,
        "name": "Literatura Argentina I"
    },
    {
        "id": 74,
        "name": "Didáctica de la Literatura"
    },
    {
        "id": 77,
        "name": "Literatura Argentina II"
    },
    {
        "id": 754,
        "name": "TRABAJO FINAL"
    },
    {
        "id": 78,
        "name": "Literatura Latinoamericana II"
    },
    {
        "id": 67,
        "name": "Taller de investigación en lengua, literatura y su enseñanza"
    },
    {
        "id": 75,
        "name": "Práctica de la enseñanza de la lengua y la literatura en contexto formal (CIC)"
    },
    {
        "id": 76,
        "name": "Práctica de la enseñanza de la lengua y la literatura en contexto no formal (CIC)"
    },
    {
        "id": 884,
        "name": "Raíz del plan"
    },
    {
        "id": 916,
        "name": "Raíz del plan"
    },
    {
        "id": 944,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 945,
        "name": "CAMPO DE FORMACIÓN BASICA"
    },
    {
        "id": 946,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 947,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 885,
        "name": "Biología"
    },
    {
        "id": 886,
        "name": "Taller de matemática aplicada"
    },
    {
        "id": 887,
        "name": "Introducción a la Agroecología"
    },
    {
        "id": 888,
        "name": "Introducción a la Botánica"
    },
    {
        "id": 889,
        "name": "Edafología y manejo agroecológico de suelos"
    },
    {
        "id": 922,
        "name": "Obstetricia I"
    },
    {
        "id": 893,
        "name": "Producción vegetal agroecológica"
    },
    {
        "id": 890,
        "name": "Taller de Prácticas Agroecológicas I"
    },
    {
        "id": 892,
        "name": "Climatología y fenología agrícola"
    },
    {
        "id": 894,
        "name": "Economía Social y Ecológica"
    },
    {
        "id": 895,
        "name": "Bases ecológicas para el diseño y manejo de agroecosistemas"
    },
    {
        "id": 896,
        "name": "Producción animal agroecológica"
    },
    {
        "id": 897,
        "name": "Taller de Prácticas Agroecológicas II"
    },
    {
        "id": 898,
        "name": "Sociología y prácticas comunitarias"
    },
    {
        "id": 899,
        "name": "Agroindustria y agregado de valor"
    },
    {
        "id": 900,
        "name": "Políticas para la agroecología"
    },
    {
        "id": 901,
        "name": "Tecnologías para la agricultura familiar y la agroecología"
    },
    {
        "id": 902,
        "name": "Taller de Prácticas Agroecológicas III"
    },
    {
        "id": 797,
        "name": "Raíz del plan"
    },
    {
        "id": 891,
        "name": "Ecofisiología vegetal"
    },
    {
        "id": 802,
        "name": "PRIMER AÑO"
    },
    {
        "id": 942,
        "name": "CRÉDITOS  EN ACTIVIDADES FORMATIVAS, ACADÉMICAS Y PROFESIONALES"
    },
    {
        "id": 951,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 952,
        "name": "CAMPO DE FORMACIÓN BASICA"
    },
    {
        "id": 953,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 954,
        "name": "CAMPO DE FORMACIÓN CURRICULAR"
    },
    {
        "id": 905,
        "name": "Suelos y sustratos"
    },
    {
        "id": 906,
        "name": "Inmersión a la realidad agropecuaria nacional"
    },
    {
        "id": 920,
        "name": "Evaluación de Salud Fetal I"
    },
    {
        "id": 908,
        "name": "Técnicas de propagación y multiplicación vegetal"
    },
    {
        "id": 909,
        "name": "Administración y gestión de Viveros"
    },
    {
        "id": 910,
        "name": "Sistemas de riego, fertilización y agua"
    },
    {
        "id": 912,
        "name": "Diseño e infraestructura para las producciones vegetales"
    },
    {
        "id": 955,
        "name": "Ética y responsabilidad profesional"
    },
    {
        "id": 903,
        "name": "Introducción al Viverismo"
    },
    {
        "id": 904,
        "name": "Taller de Viverismo I"
    },
    {
        "id": 907,
        "name": "Taller de Viverismo II"
    },
    {
        "id": 911,
        "name": "Taller de Viverismo III"
    },
    {
        "id": 913,
        "name": "Manejo de las adversidades de la producción vegetal"
    },
    {
        "id": 914,
        "name": "Taller de prácticas de Vivero"
    },
    {
        "id": 915,
        "name": "Inserción laboral"
    },
    {
        "id": 803,
        "name": "SEGUNDO AÑO"
    },
    {
        "id": 950,
        "name": "CRÉDITOS  EN ACTIVIDADES SOCIALES, CULTURALES Y DEPORTIVAS"
    },
    {
        "id": 948,
        "name": "CRÉDITOS  EN ACTIVIDADES DE DOCENCIA E INVESTIGACIÓN"
    },
    {
        "id": 956,
        "name": "Raíz del plan"
    },
    {
        "id": 958,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 960,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 961,
        "name": "CAMPO DE LA FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 962,
        "name": "CAMPO DE LA INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 957,
        "name": "Programación"
    },
    {
        "id": 136,
        "name": "Metodología de la investigación en salud"
    },
    {
        "id": 474,
        "name": "Metodología de la investigación aplicada"
    },
    {
        "id": 937,
        "name": "Práctica obstétrica Integrada II"
    },
    {
        "id": 938,
        "name": "Taller de investigación I"
    },
    {
        "id": 939,
        "name": "Práctica obstétrica Integrada III"
    },
    {
        "id": 940,
        "name": "Taller de investigación II"
    },
    {
        "id": 921,
        "name": "Educación y promoción de la salud de la mujer y el niño"
    },
    {
        "id": 928,
        "name": "Obstetricia IV"
    },
    {
        "id": 934,
        "name": "Obstetricia VI"
    },
    {
        "id": 473,
        "name": "Seminario de Historia social y sanitaria latinoamericana"
    },
    {
        "id": 917,
        "name": "Genética humana"
    },
    {
        "id": 918,
        "name": "Bioquímica"
    },
    {
        "id": 919,
        "name": "Salud sexual"
    },
    {
        "id": 923,
        "name": "Obstetricia II"
    },
    {
        "id": 924,
        "name": "Obstetricia III"
    },
    {
        "id": 925,
        "name": "Evaluación de Salud Fetal II"
    },
    {
        "id": 926,
        "name": "Farmacología obstétrica"
    },
    {
        "id": 927,
        "name": "Obstetricia patológica"
    },
    {
        "id": 929,
        "name": "Preparación para la maternidad"
    },
    {
        "id": 930,
        "name": "Psicología en Obstetricia"
    },
    {
        "id": 931,
        "name": "Obstetricia V"
    },
    {
        "id": 932,
        "name": "Bioética y aspectos legales del ejercicio profesional"
    },
    {
        "id": 933,
        "name": "Salud sexual y reproductiva"
    },
    {
        "id": 935,
        "name": "Puericultura"
    },
    {
        "id": 936,
        "name": "Práctica obstétrica Integrada I"
    },
    {
        "id": 472,
        "name": "Deontología y Derecho a la Salud"
    },
    {
        "id": 804,
        "name": "TERCER AÑO"
    },
    {
        "id": 757,
        "name": "PRIMER AÑO"
    },
    {
        "id": 758,
        "name": "SEGUNDO AÑO"
    },
    {
        "id": 759,
        "name": "TERCER AÑO"
    },
    {
        "id": 760,
        "name": "CUARTO AÑO"
    },
    {
        "id": 761,
        "name": "QUINTO AÑO"
    },
    {
        "id": 805,
        "name": "CUARTO AÑO"
    },
    {
        "id": 750,
        "name": "Fenómenos de Transporte"
    },
    {
        "id": 751,
        "name": "Gestión de Costos"
    },
    {
        "id": 752,
        "name": "Taller de alimentos IV: Alimentos Libres de Gluten y Alérgenos"
    },
    {
        "id": 753,
        "name": "Tecnología de los Alimentos"
    },
    {
        "id": 749,
        "name": "Servicios de Planta"
    },
    {
        "id": 1014,
        "name": "AU_Introducción al psicoanálisis"
    },
    {
        "id": 806,
        "name": "QUINTO AÑO"
    },
    {
        "id": 1015,
        "name": "AU_No sos vos, es Freud: una introducción al psicoanálisis"
    },
    {
        "id": 973,
        "name": "Electrotecnia"
    },
    {
        "id": 1016,
        "name": "CAMPO DE FORMACION COMUN - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1018,
        "name": "CAMPO DE LA FORMACIÓN BÁSICA - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1019,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1025,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 963,
        "name": "Matemática"
    },
    {
        "id": 965,
        "name": "Física"
    },
    {
        "id": 1017,
        "name": "Química"
    },
    {
        "id": 969,
        "name": "Materiales y elementos de máquinas"
    },
    {
        "id": 1020,
        "name": "Gestión del mantenimiento"
    },
    {
        "id": 1021,
        "name": "Gestión de la calidad"
    },
    {
        "id": 974,
        "name": "Hidráulica y neumática"
    },
    {
        "id": 979,
        "name": "Instalaciones hospitalarias"
    },
    {
        "id": 981,
        "name": "Instalaciones eléctricas"
    },
    {
        "id": 1022,
        "name": "Gases medicinales y acondicionamiento de aire"
    },
    {
        "id": 1023,
        "name": "Redes de datos y comunicaciones"
    },
    {
        "id": 972,
        "name": "Organización de sistemas de salud"
    },
    {
        "id": 983,
        "name": "Control de gestión"
    },
    {
        "id": 984,
        "name": "Planificación del mantenimiento"
    },
    {
        "id": 986,
        "name": "Taller de mantenimiento hospitalario (Práctica profesional)"
    },
    {
        "id": 1024,
        "name": "Seguridad, higiene y medio ambiente"
    },
    {
        "id": 1026,
        "name": "Proyecto de integración"
    },
    {
        "id": 1003,
        "name": "Raíz del plan"
    },
    {
        "id": 988,
        "name": "ACTIVIDADES CULTURALES, SOCIALES Y DEPORTIVAS"
    },
    {
        "id": 1040,
        "name": "CAMPO DE LA FORMACIÓN BÁSICA - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1008,
        "name": "Raíz del plan"
    },
    {
        "id": 1039,
        "name": "CAMPO DE FORMACION COMUN - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1041,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1043,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR - Tec. Univ. Mantenimiento Industrial"
    },
    {
        "id": 996,
        "name": "Instalaciones Industriales"
    },
    {
        "id": 1029,
        "name": "Gestión del mantenimiento"
    },
    {
        "id": 1030,
        "name": "Gestión de la Calidad"
    },
    {
        "id": 1035,
        "name": "Técnicas Predictivas"
    },
    {
        "id": 999,
        "name": "Organización Industrial"
    },
    {
        "id": 1031,
        "name": "Seguridad, Higiene y Medioambiente"
    },
    {
        "id": 1034,
        "name": "Taller de Mantenimiento Industrial (Práctica Profesional)"
    },
    {
        "id": 1033,
        "name": "Proyecto de Integración"
    },
    {
        "id": 1044,
        "name": "Raíz del plan"
    },
    {
        "id": 1045,
        "name": "Taller Inicial de Introducción a la Programación"
    },
    {
        "id": 1047,
        "name": "Raíz del plan"
    },
    {
        "id": 1046,
        "name": "Taller inicial de lectura y escritura"
    },
    {
        "id": 1048,
        "name": "AU_Introducción al Latín"
    },
    {
        "id": 1050,
        "name": "Curso de Consolidación Pre Intermedio"
    },
    {
        "id": 1049,
        "name": "Curso de Consolidación inicial"
    },
    {
        "id": 1051,
        "name": "Writing Lab"
    },
    {
        "id": 1052,
        "name": "AU_Hacia una Práctica Profesional Inclusiva"
    },
    {
        "id": 563,
        "name": "COMP_Base de datos II"
    },
    {
        "id": 565,
        "name": "COMP_Introducción a la Bioinformática"
    },
    {
        "id": 564,
        "name": "COMP_Participacion y gestion en proyectos de software"
    },
    {
        "id": 566,
        "name": "COMP_Políticas Públicas en la Sociedad de la información y la Era digital"
    },
    {
        "id": 745,
        "name": "COMP_Fundamentos de Aprendizaje Automático"
    },
    {
        "id": 746,
        "name": "COMP_Administración de las Organizaciones"
    },
    {
        "id": 545,
        "name": "Matemática I"
    },
    {
        "id": 562,
        "name": "Práctica Profesional Supervisada"
    },
    {
        "id": 554,
        "name": "Sistemas operativos"
    },
    {
        "id": 555,
        "name": "Construcción de Interfaces de Usuario"
    },
    {
        "id": 557,
        "name": "Estrategias de Persistencia"
    },
    {
        "id": 558,
        "name": "Elementos de ingenieria de software"
    },
    {
        "id": 559,
        "name": "Programación funcional"
    },
    {
        "id": 577,
        "name": "INFORMATICA_MATERIA COMPLEMENTARIA 1"
    },
    {
        "id": 576,
        "name": "INFORMATICA_MATERIA COMPLEMENTARIA 2"
    },
    {
        "id": 551,
        "name": "Matemática II"
    },
    {
        "id": 553,
        "name": "Redes de computadoras"
    },
    {
        "id": 560,
        "name": "Laboratorio de sistemas operativos y redes"
    },
    {
        "id": 561,
        "name": "Desarrollo de Aplicaciones"
    },
    {
        "id": 578,
        "name": "Programacion de Objetos II"
    },
    {
        "id": 572,
        "name": "COMP_Análisis Estático de Programas y Herramientas Asociadas"
    },
    {
        "id": 571,
        "name": "COMP_Derechos de Autor y Derecho de copia en la Era Digital"
    },
    {
        "id": 568,
        "name": "COMP_Herramientas Declarativas en Programacion"
    },
    {
        "id": 569,
        "name": "COMP_Introduccion al desarrollo de videojuegos"
    },
    {
        "id": 574,
        "name": "COMP_Semantica de Lenguajes de Programacion"
    },
    {
        "id": 573,
        "name": "COMP_Seminarios"
    },
    {
        "id": 575,
        "name": "COMP_Seminarios sobre Herramientas o Técnicas Puntuales"
    },
    {
        "id": 567,
        "name": "COMP_Sistemas de información geográfica"
    },
    {
        "id": 756,
        "name": "Raíz del plan"
    },
    {
        "id": 546,
        "name": "Organización de computadoras"
    },
    {
        "id": 547,
        "name": "Estructura de datos"
    },
    {
        "id": 549,
        "name": "Programación de objetos I"
    },
    {
        "id": 550,
        "name": "Bases de datos"
    },
    {
        "id": 580,
        "name": "Introduccion a la Programacion"
    },
    {
        "id": 724,
        "name": "Algoritmos"
    },
    {
        "id": 579,
        "name": "Programacion Concurrente"
    },
    {
        "id": 725,
        "name": "Análisis Matemático"
    },
    {
        "id": 726,
        "name": "Lógica y Programación"
    },
    {
        "id": 727,
        "name": "Seguridad de la Información"
    },
    {
        "id": 728,
        "name": "Matemática III"
    },
    {
        "id": 729,
        "name": "Ingeniería de Requerimientos"
    },
    {
        "id": 730,
        "name": "Probabilidad y Estadística"
    },
    {
        "id": 731,
        "name": "Lenguajes Formales y Autómatas"
    },
    {
        "id": 732,
        "name": "Programación con Objetos III"
    },
    {
        "id": 733,
        "name": "Teoría de la Computación"
    },
    {
        "id": 734,
        "name": "Arquitectura de Software I"
    },
    {
        "id": 735,
        "name": "Sistemas Distribuidos y Tiempo Real"
    },
    {
        "id": 742,
        "name": "Gestión de Proyectos de Desarrollo de Software"
    },
    {
        "id": 736,
        "name": "Características de Lenguajes de Programación"
    },
    {
        "id": 737,
        "name": "Arquitectura de Software II"
    },
    {
        "id": 738,
        "name": "Arquitectura de Computadoras"
    },
    {
        "id": 739,
        "name": "Parseo y generación de código"
    },
    {
        "id": 740,
        "name": "Ejercicio Profesional"
    },
    {
        "id": 743,
        "name": "Tecnología y Sociedad"
    },
    {
        "id": 744,
        "name": "Tesina de Licenciatura"
    },
    {
        "id": 196,
        "name": "Biología General"
    },
    {
        "id": 198,
        "name": "Microbiología general"
    },
    {
        "id": 809,
        "name": "Formulación y evaluación de proyectos"
    },
    {
        "id": 357,
        "name": "Estadística y diseño experimental"
    },
    {
        "id": 808,
        "name": "Fisicoquímica"
    },
    {
        "id": 747,
        "name": "Bioquímica de los Alimentos"
    },
    {
        "id": 748,
        "name": "Termodinámica Básica"
    },
    {
        "id": 762,
        "name": "Análisis Matemático II"
    },
    {
        "id": 763,
        "name": "Economía"
    },
    {
        "id": 764,
        "name": "Organización Industrial"
    },
    {
        "id": 765,
        "name": "Algebra y Geometría Analítica"
    },
    {
        "id": 521,
        "name": "Introducción a la tecnología de los alimentos"
    },
    {
        "id": 522,
        "name": "Taller de alimentos I: Manipulacion y conservación"
    },
    {
        "id": 523,
        "name": "Microbiología y toxicología de los Alimentos"
    },
    {
        "id": 524,
        "name": "Química de los alimentos"
    },
    {
        "id": 782,
        "name": "Marketing"
    },
    {
        "id": 525,
        "name": "Química orgánica y biológica"
    },
    {
        "id": 526,
        "name": "Taller de Alimentos II: Bromatología y Análisis de Calidad"
    },
    {
        "id": 527,
        "name": "Operaciones Unitarias"
    },
    {
        "id": 528,
        "name": "Procesos Productivos I"
    },
    {
        "id": 529,
        "name": "Gestión de la Calidad e inocuidad de los alimentos"
    },
    {
        "id": 530,
        "name": "Procesos Productivos II"
    },
    {
        "id": 531,
        "name": "Taller de Alimentos III: Análisis sensorial"
    },
    {
        "id": 532,
        "name": "Empaque y embalaje"
    },
    {
        "id": 533,
        "name": "Legislación y normas de la industria alimenticia"
    },
    {
        "id": 534,
        "name": "Raíz del plan"
    },
    {
        "id": 783,
        "name": "Historia del diseño industrial"
    },
    {
        "id": 788,
        "name": "CICLO DE FORMACIÓN DE FUNDAMENTO"
    },
    {
        "id": 234,
        "name": "Gestión del conocimiento"
    },
    {
        "id": 237,
        "name": "Estructuras I"
    },
    {
        "id": 235,
        "name": "Morfología II"
    },
    {
        "id": 236,
        "name": "Tecnología II"
    },
    {
        "id": 243,
        "name": "Diseño e industria"
    },
    {
        "id": 246,
        "name": "Estructuras II"
    },
    {
        "id": 255,
        "name": "Tecnologías de fabricación digital II"
    },
    {
        "id": 245,
        "name": "Taller de producción"
    },
    {
        "id": 768,
        "name": "Economía"
    },
    {
        "id": 769,
        "name": "Diseño centrado en las personas"
    },
    {
        "id": 249,
        "name": "Taller de Diseño III"
    },
    {
        "id": 766,
        "name": "Taller de diseño IV"
    },
    {
        "id": 767,
        "name": "Taller de producción II"
    },
    {
        "id": 772,
        "name": "Diseño y sociedad"
    },
    {
        "id": 773,
        "name": "Introducción a la investigación"
    },
    {
        "id": 780,
        "name": "Comunicación de proyecto"
    },
    {
        "id": 775,
        "name": "Gestión de proyectos II"
    },
    {
        "id": 776,
        "name": "Plan de negocios"
    },
    {
        "id": 779,
        "name": "Sustentabilidad"
    },
    {
        "id": 770,
        "name": "Taller de diseño V"
    },
    {
        "id": 771,
        "name": "Taller de producción III"
    },
    {
        "id": 777,
        "name": "Ética y responsabilidad profesional"
    },
    {
        "id": 781,
        "name": "Innovación"
    },
    {
        "id": 784,
        "name": "Teoría y crítica del diseño"
    },
    {
        "id": 785,
        "name": "Normativa para envases y embalajes"
    },
    {
        "id": 786,
        "name": "Raíz del plan"
    },
    {
        "id": 787,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 241,
        "name": "Tecnologías III"
    },
    {
        "id": 792,
        "name": "Diseño Industrial_Materia Optativa I"
    },
    {
        "id": 774,
        "name": "Proyecto final integrador I"
    },
    {
        "id": 778,
        "name": "Proyecto final integrador II"
    },
    {
        "id": 791,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA - OPTATIVAS"
    },
    {
        "id": 795,
        "name": "Sistemas de representación gráfica"
    },
    {
        "id": 807,
        "name": "Introducción al análisis matemático"
    },
    {
        "id": 244,
        "name": "Introducción al diseño"
    },
    {
        "id": 228,
        "name": "Tecnología y sociedad"
    },
    {
        "id": 230,
        "name": "Introducción a la programación"
    },
    {
        "id": 232,
        "name": "Morfología I"
    },
    {
        "id": 233,
        "name": "Tecnología I"
    },
    {
        "id": 238,
        "name": "Tecnologías de fabricación digital I"
    },
    {
        "id": 239,
        "name": "Modelado y matricería"
    },
    {
        "id": 240,
        "name": "Programación II"
    },
    {
        "id": 247,
        "name": "Taller de Diseño I"
    },
    {
        "id": 242,
        "name": "Gestión de proyectos"
    },
    {
        "id": 248,
        "name": "Taller de Diseño II"
    },
    {
        "id": 793,
        "name": "Diseño Industrial_Materia Optativa III"
    },
    {
        "id": 794,
        "name": "Diseño Industrial_Materia Optativa IV"
    },
    {
        "id": 1066,
        "name": "Raíz del plan"
    },
    {
        "id": 1056,
        "name": "Prácticas Corporales 1 - Deporte, Actividad Física"
    },
    {
        "id": 1057,
        "name": "Dispositivos para la intervención comunitaria en actividad física y prácticas corporales"
    },
    {
        "id": 1058,
        "name": "Derechos y Ciudadanía"
    },
    {
        "id": 1059,
        "name": "Coordinación de grupos"
    },
    {
        "id": 1060,
        "name": "Género y Diversidad"
    },
    {
        "id": 1061,
        "name": "Prácticas Corporales 2 - Deporte y prácticas saludables"
    },
    {
        "id": 1062,
        "name": "Juego, Recreación y Actividades en el Tiempo Libre y su Didáctica"
    },
    {
        "id": 1063,
        "name": "El estado, el barrio y las organizaciones de la comunidad. Políticas Sociales de Inclusión/Participación"
    },
    {
        "id": 1064,
        "name": "Proyecto Final: Formulación de Proyectos Comunitarios. La Intervención comunitaria en Deporte, actividad física y prácticas corporales de carácter comunitario"
    },
    {
        "id": 1065,
        "name": "Jornadas de Integración"
    },
    {
        "id": 1080,
        "name": "Raíz del plan"
    },
    {
        "id": 1081,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 1082,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 679,
        "name": "Raíz del plan"
    },
    {
        "id": 681,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 683,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 686,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 694,
        "name": "CAMPO DE INTEGRACÓN CURRICULAR"
    },
    {
        "id": 689,
        "name": "Enfermería en Emergentología y Área Crítica II"
    },
    {
        "id": 693,
        "name": "Educación en Enfermería"
    },
    {
        "id": 695,
        "name": "Práctica Integrada Supervisada II"
    },
    {
        "id": 1087,
        "name": "Programación"
    },
    {
        "id": 688,
        "name": "Enfermería en Emergentología y Área Crítica I"
    },
    {
        "id": 691,
        "name": "Taller de Investigación en Enfermería"
    },
    {
        "id": 696,
        "name": "Gestión en Salud Comunitaria II"
    },
    {
        "id": 690,
        "name": "Enfermería en Salud Comunitaria II"
    },
    {
        "id": 687,
        "name": "Epistemología aplicada a la enfermería"
    },
    {
        "id": 692,
        "name": "Gestión en Servicios de Enfermería"
    },
    {
        "id": 250,
        "name": "Raíz del plan"
    },
    {
        "id": 251,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 252,
        "name": "CICLO DE FORMACIÓN DE FUNDAMENTO"
    },
    {
        "id": 253,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 254,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 1088,
        "name": "Raíz del plan"
    },
    {
        "id": 1089,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 1090,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 1091,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 1092,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 1093,
        "name": "AU_Ciencias en la cocina"
    },
    {
        "id": 1094,
        "name": "AU_Cine documental: miradas desde el Sur"
    },
    {
        "id": 1095,
        "name": "AU_Repensar la discapacidad"
    },
    {
        "id": 1096,
        "name": "AU_Introducción al griego"
    },
    {
        "id": 1097,
        "name": "AU_Mal de tango. La historia argentina a través del tango"
    },
    {
        "id": 1107,
        "name": "Raíz del plan"
    },
    {
        "id": 538,
        "name": "CAMPO DE INTEGRACION CURRICULAR"
    },
    {
        "id": 1098,
        "name": "Las primeras matemáticas en la universidad"
    },
    {
        "id": 1099,
        "name": "Raíz del plan"
    },
    {
        "id": 520,
        "name": "Raíz del plan"
    },
    {
        "id": 535,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 536,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 537,
        "name": "CAMPO DE FORMACION ESPECIFICA"
    },
    {
        "id": 1108,
        "name": "Raíz del plan"
    },
    {
        "id": 1106,
        "name": "Historia de Hurlingham"
    },
    {
        "id": 1110,
        "name": "Curso de Informática Audiovisual"
    },
    {
        "id": 1054,
        "name": "Curso de Electricidad Básica"
    },
    {
        "id": 1067,
        "name": "Curso de Programación Básica I"
    },
    {
        "id": 1109,
        "name": "Curso de Python"
    },
    {
        "id": 1111,
        "name": "Curso de Energía Fotovoltaica"
    },
    {
        "id": 1114,
        "name": "Curso de Manipulación de los Alimentos"
    },
    {
        "id": 1127,
        "name": "ESI en el campo de la salud: un abordaje integral sobre la sexualidad"
    },
    {
        "id": 1178,
        "name": "Entrenamiento Funcional"
    },
    {
        "id": 1128,
        "name": "Debates políticos actuales. Ideas para pensar el mundo de hoy"
    },
    {
        "id": 1129,
        "name": "Educación y memoria: la transmisión del pasado reciente en las aulas"
    },
    {
        "id": 1135,
        "name": "Raíz del plan"
    },
    {
        "id": 1138,
        "name": "PRIMER AÑO - TUP"
    },
    {
        "id": 1179,
        "name": "Fútbol 11"
    },
    {
        "id": 1131,
        "name": "Organización de computadoras I"
    },
    {
        "id": 1140,
        "name": "SEGUNDO AÑO - TUP"
    },
    {
        "id": 1141,
        "name": "TERCER AÑO - TUP"
    },
    {
        "id": 1130,
        "name": "Matemática para informática I"
    },
    {
        "id": 1132,
        "name": "Taller de lenguajes de marcado y tecnologías web"
    },
    {
        "id": 1133,
        "name": "Programación estructurada"
    },
    {
        "id": 1134,
        "name": "Matemática para Informática II"
    },
    {
        "id": 1139,
        "name": "Introducción a lógica y problemas computacionales"
    },
    {
        "id": 1142,
        "name": "Raíz del plan"
    },
    {
        "id": 1143,
        "name": "CRÉDITOS - TUP"
    },
    {
        "id": 1210,
        "name": "Talleres Deportivos"
    },
    {
        "id": 1146,
        "name": "Organización de computadoras II"
    },
    {
        "id": 1150,
        "name": "Electiva I"
    },
    {
        "id": 1151,
        "name": "Electiva II"
    },
    {
        "id": 1154,
        "name": "Primer año Tecnicatura Universitaria en Redes y Operaciones Informáticas"
    },
    {
        "id": 1147,
        "name": "Operaciones I"
    },
    {
        "id": 1152,
        "name": "Electiva I"
    },
    {
        "id": 1153,
        "name": "Electiva II"
    },
    {
        "id": 1180,
        "name": "Futsal"
    },
    {
        "id": 1155,
        "name": "Segundo año Tecnicatura Universitaria en Redes y Operaciones Informáticas"
    },
    {
        "id": 1156,
        "name": "Tercer año Tecnicatura Universitaria en Redes y Operaciones Informáticas"
    },
    {
        "id": 1144,
        "name": "Taller de intérpretes de comandos"
    },
    {
        "id": 1145,
        "name": "Sistemas de comunicación"
    },
    {
        "id": 1148,
        "name": "Redes avanzadas"
    },
    {
        "id": 1149,
        "name": "Operaciones II"
    },
    {
        "id": 1197,
        "name": "Raíz del plan"
    },
    {
        "id": 1198,
        "name": "Competencia inicial (Basic Proficiency)"
    },
    {
        "id": 1199,
        "name": "Competencia intermedia (Intermediate Proficiency)"
    },
    {
        "id": 1200,
        "name": "Competencia avanzada (Advanced Poficiency)"
    },
    {
        "id": 1166,
        "name": "Danza"
    },
    {
        "id": 1163,
        "name": "Expresión Vocal"
    },
    {
        "id": 1164,
        "name": "Folklore"
    },
    {
        "id": 1169,
        "name": "Lengua de Señas Argentina"
    },
    {
        "id": 1168,
        "name": "Muralismo"
    },
    {
        "id": 1165,
        "name": "Narrativa"
    },
    {
        "id": 1161,
        "name": "Radio"
    },
    {
        "id": 1173,
        "name": "Coro Adultos"
    },
    {
        "id": 1174,
        "name": "Coro Infanto Juvenil"
    },
    {
        "id": 1172,
        "name": "Orquesta Adultos"
    },
    {
        "id": 1171,
        "name": "Orquesta Infanto-juvenil"
    },
    {
        "id": 1209,
        "name": "Talleres Culturales"
    },
    {
        "id": 1175,
        "name": "Aikido"
    },
    {
        "id": 1176,
        "name": "Ajedrez"
    },
    {
        "id": 1177,
        "name": "Basquet"
    },
    {
        "id": 1181,
        "name": "Handball"
    },
    {
        "id": 1182,
        "name": "Hockey"
    },
    {
        "id": 1183,
        "name": "Judo"
    },
    {
        "id": 1184,
        "name": "Karate"
    },
    {
        "id": 1185,
        "name": "Natación"
    },
    {
        "id": 1186,
        "name": "Rugby"
    },
    {
        "id": 1187,
        "name": "Tenis"
    },
    {
        "id": 1188,
        "name": "Tenis de mesa"
    },
    {
        "id": 1189,
        "name": "Tiro con arco"
    },
    {
        "id": 1190,
        "name": "Voley"
    },
    {
        "id": 1157,
        "name": "Créditos por Espacio de Integración Curricular / Proyecto de softwere"
    },
    {
        "id": 1158,
        "name": "Créditos por actividades de tipo formativas académicas y profesionales"
    },
    {
        "id": 1160,
        "name": "Créditos por actividades de tipo formativas en docencia e investigación"
    },
    {
        "id": 1159,
        "name": "Créditos por actividades de tipo sociales, culturales y deportivas en la Universidad"
    },
    {
        "id": 1212,
        "name": "Créditos por participar como Estudiante Asistente (5 créditos)"
    },
    {
        "id": 1191,
        "name": "Inicial 1"
    },
    {
        "id": 1213,
        "name": "CRÉDITOS - TURyO"
    },
    {
        "id": 1211,
        "name": "Créditos por Espacio de Integración Curricular / Proyecto de softwere"
    },
    {
        "id": 1214,
        "name": "Taller de fotografía básica"
    },
    {
        "id": 1215,
        "name": "Automatización para la industria 4.0"
    },
    {
        "id": 1216,
        "name": "El gobierno de las escuelas y el sistema educativo"
    },
    {
        "id": 1217,
        "name": "Curso de armado de muebles"
    },
    {
        "id": 1220,
        "name": "Taller de Arbitraje"
    },
    {
        "id": 1221,
        "name": "Taller de gestión deportiva de clubes"
    },
    {
        "id": 1222,
        "name": "Universidad en los barrios"
    },
    {
        "id": 1218,
        "name": "Taller de Huerta"
    },
    {
        "id": 1126,
        "name": "Raíz del plan"
    },
    {
        "id": 1121,
        "name": "Taller de Lectura y Escritura"
    },
    {
        "id": 1123,
        "name": "Taller de Vida Universitaria"
    },
    {
        "id": 1254,
        "name": "Lectura narración social"
    },
    {
        "id": 1122,
        "name": "Taller de Pensamiento Matemático"
    },
    {
        "id": 1083,
        "name": "Raíz del plan"
    },
    {
        "id": 1084,
        "name": "CICLO DE FORMACION COMUN"
    },
    {
        "id": 1086,
        "name": "CICLO DE FORMACION ESPECIFICA"
    },
    {
        "id": 1264,
        "name": "Raíz del plan"
    },
    {
        "id": 1273,
        "name": "CAMPO DE FORMACIÓN COMÚN (TEC. UNIV EN PROGR. DE VIDEOJUEGOS)"
    },
    {
        "id": 1274,
        "name": "CAMPO DE FORMACIÓN BÁSICA (TEC. UNIV EN PROGR. DE VIDEOJUEGOS)"
    },
    {
        "id": 1275,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA (TEC. UNIV EN PROGR. DE VIDEOJUEGOS)"
    },
    {
        "id": 1276,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR (TEC. UNIV EN PROGR. DE VIDEOJUEGOS)"
    },
    {
        "id": 1269,
        "name": "Diseño de Niveles"
    },
    {
        "id": 1270,
        "name": "Diseño Lúdico"
    },
    {
        "id": 1271,
        "name": "Inteligencia Artificial"
    },
    {
        "id": 1272,
        "name": "Planificación de Negocios"
    },
    {
        "id": 1256,
        "name": "Introducción a los Videojuegos"
    },
    {
        "id": 1257,
        "name": "Taller de Diseño Conceptual de Juegos"
    },
    {
        "id": 1258,
        "name": "Arte Digital para Videojuegos"
    },
    {
        "id": 1267,
        "name": "Electiva I - TU en Progr. de Videojuegos"
    },
    {
        "id": 1268,
        "name": "Electiva II - TU en Progr. de Videojuegos"
    },
    {
        "id": 1259,
        "name": "Introducción a Motores de Videojuegos"
    },
    {
        "id": 1260,
        "name": "Programación de Videojuegos I"
    },
    {
        "id": 1261,
        "name": "Programación de Videojuegos II"
    },
    {
        "id": 1277,
        "name": "Créditos por Espacio de Integración Curricular / Proyecto de softwere"
    },
    {
        "id": 1278,
        "name": "CRÉDITOS TEC. UNIV. EN PROGRAMACIÓN DE VIDEOJUEGOS"
    },
    {
        "id": 1279,
        "name": "Taller de Herrería"
    },
    {
        "id": 1280,
        "name": "CINE.AR La Argentina contemporánea a través del cine"
    },
    {
        "id": 1281,
        "name": "Programación Python"
    },
    {
        "id": 1283,
        "name": "Procesamiento y exploración de datos"
    },
    {
        "id": 1284,
        "name": "Testing"
    },
    {
        "id": 1285,
        "name": "Soldadura"
    },
    {
        "id": 1287,
        "name": "Carpintería"
    },
    {
        "id": 1289,
        "name": "Cuidado de Alimentos"
    },
    {
        "id": 1282,
        "name": "Redes de Computadoras Básico"
    },
    {
        "id": 1286,
        "name": "Logística empresarial"
    },
    {
        "id": 1288,
        "name": "Jardinería en Parques y Jardines"
    },
    {
        "id": 1290,
        "name": "JAVA 1"
    },
    {
        "id": 1291,
        "name": "Front End"
    },
    {
        "id": 1301,
        "name": "Desarrollo de Aplicaciones, en UNAHUR"
    },
    {
        "id": 1302,
        "name": "Desarrollo de Práctica Profesional Supervisada (PPS)"
    },
    {
        "id": 1292,
        "name": "Participación como asistente en Jornadas / Workshops / Congresos"
    },
    {
        "id": 1294,
        "name": "Talleres Especiales (más de 32hs)"
    },
    {
        "id": 1293,
        "name": "Talleres especiales - Taller de Github"
    },
    {
        "id": 1297,
        "name": "Talleres culturales"
    },
    {
        "id": 1296,
        "name": "Talleres deportivos"
    },
    {
        "id": 1295,
        "name": "Voluntariados"
    },
    {
        "id": 1300,
        "name": "Colaboración en materias"
    },
    {
        "id": 1299,
        "name": "Participación como Estudiante Asistente"
    },
    {
        "id": 1298,
        "name": "Participación en el programa Un estudiantes/Un compañero/a"
    },
    {
        "id": 1304,
        "name": "Desarrollo de Aplicaciones, en UNAHUR"
    },
    {
        "id": 1303,
        "name": "Desarrollo de Práctica Profesional Supervisada (PPS)"
    },
    {
        "id": 1308,
        "name": "Asistencia Técnica a grupos de Investigación de la Universidad"
    },
    {
        "id": 1307,
        "name": "Participación en Competencias Estudiantiles  - Rally Innovación 2023"
    },
    {
        "id": 1306,
        "name": "Talleres Especiales - Gestión de Firewall"
    },
    {
        "id": 1305,
        "name": "Talleres especiales - Taller de Gestión de la seguridad informática"
    },
    {
        "id": 1309,
        "name": "Participación como asistente en Jornadas / Workshops / Congresos - (Evento de 1 día presencial)"
    },
    {
        "id": 199,
        "name": "Química inorgánica"
    },
    {
        "id": 205,
        "name": "Bioquímica I"
    },
    {
        "id": 211,
        "name": "Gestión de la calidad"
    },
    {
        "id": 416,
        "name": "Taller de Laboratorio I"
    },
    {
        "id": 200,
        "name": "Química Orgánica"
    },
    {
        "id": 204,
        "name": "Introducción a la biología celular y molecular"
    },
    {
        "id": 418,
        "name": "Taller de Laboratorio III"
    },
    {
        "id": 201,
        "name": "Fisicoquímica"
    },
    {
        "id": 263,
        "name": "Legislación y normas de laboratorio"
    },
    {
        "id": 214,
        "name": "Raíz del plan"
    },
    {
        "id": 420,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 421,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 470,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 471,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 203,
        "name": "Introducción a la biotecnología"
    },
    {
        "id": 417,
        "name": "Taller de Laboratorio II"
    },
    {
        "id": 415,
        "name": "Física aplicada"
    },
    {
        "id": 256,
        "name": "Raíz del plan"
    },
    {
        "id": 257,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 258,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 259,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 260,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 1310,
        "name": "Aprendizaje automático"
    },
    {
        "id": 1347,
        "name": "Tesis"
    },
    {
        "id": 1356,
        "name": "OTRO REQUISITO"
    },
    {
        "id": 1313,
        "name": "Alimentación saludable"
    },
    {
        "id": 1314,
        "name": "Mundo laboral"
    },
    {
        "id": 1316,
        "name": "Gestión de PYME´S"
    },
    {
        "id": 1315,
        "name": "Sistemas de calidad"
    },
    {
        "id": 1317,
        "name": "Talleres Especiales - Curso de Iniciación al Mundo Laboral"
    },
    {
        "id": 1318,
        "name": "JAVA 2"
    },
    {
        "id": 1319,
        "name": "Front End 2"
    },
    {
        "id": 1320,
        "name": "Raíz del plan"
    },
    {
        "id": 1321,
        "name": "UNAHUR@TIC #1 - Encuentro de Informática"
    },
    {
        "id": 1322,
        "name": "Problemáticas de la Desigualdades Educativas en América Latina"
    },
    {
        "id": 1323,
        "name": "Políticas educativas y gobierno de la educación"
    },
    {
        "id": 1324,
        "name": "Curriculum, conocimiento y saberes escolares"
    },
    {
        "id": 1325,
        "name": "Metodología de la Investigación Educativa"
    },
    {
        "id": 1350,
        "name": "SEMINARIOS DE FORMACIÓN BÁSICA"
    },
    {
        "id": 1329,
        "name": "Taller de Proyecto de Tesis"
    },
    {
        "id": 1330,
        "name": "Taller de Desarrollo de Tesis"
    },
    {
        "id": 1331,
        "name": "Taller de Escritura de Tesis"
    },
    {
        "id": 1351,
        "name": "TALLERES DE TESIS"
    },
    {
        "id": 1332,
        "name": "Producción, sujetos e instituciones científicas y tecnológicas"
    },
    {
        "id": 1333,
        "name": "Pensamiento Latinoamericano en Ciencia, Tecnología y Desarrollo"
    },
    {
        "id": 1338,
        "name": "Fundamentos y debates éticos/bioéticos de la investigación científica"
    },
    {
        "id": 1339,
        "name": "Ciencia y Género en América Latina"
    },
    {
        "id": 1352,
        "name": "SEMINARIOS DE OFICIO DE INVESTIGACIÓN"
    },
    {
        "id": 1341,
        "name": "Formación y trabajo docente"
    },
    {
        "id": 1342,
        "name": "Educación, escuela y la cultura desde la etnografía en América Latina"
    },
    {
        "id": 1343,
        "name": "Educación y Trabajo"
    },
    {
        "id": 1344,
        "name": "Pensamiento Pedagógico Latinoamericano"
    },
    {
        "id": 1345,
        "name": "Políticas educativas. Una mirada internacional"
    },
    {
        "id": 1348,
        "name": "DOC.EDUCACIÓN_ASIGNATURA OPTATIVA 1"
    },
    {
        "id": 1353,
        "name": "SEMINARIOS DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 1349,
        "name": "DOC.EDUCACIÓN_ASIGNATURA OPTATIVA 2"
    },
    {
        "id": 1354,
        "name": "OTROS SEMINARIOS DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 1346,
        "name": "Otras actividades académicas"
    },
    {
        "id": 1355,
        "name": "OTRAS ACTIVIDADES ACADÉMICAS"
    },
    {
        "id": 1357,
        "name": "UNAHUR@TIC #1 - Encuentro de Informática (medio día)"
    },
    {
        "id": 1358,
        "name": "Argentina Programa - Python"
    },
    {
        "id": 1359,
        "name": "Argentina Programa - Procesamiento y exploración de datos"
    },
    {
        "id": 1312,
        "name": "Raíz del plan"
    },
    {
        "id": 1376,
        "name": "CAMPO DE FORMACIÓN BÁSICA - TU EN INTELIGENCIA ARTIFICIAL"
    },
    {
        "id": 1375,
        "name": "CAMPO DE FORMACIÓN COMÚN - TU EN INTELIGENCIA ARTIFICIAL"
    },
    {
        "id": 1377,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA - TU EN INTELIGENCIA ARTIFICIAL"
    },
    {
        "id": 1378,
        "name": "CAMPO DE LA INTEGRACIÓN CURRICULAR - INTELIGENCIA ARTIFICIAL"
    },
    {
        "id": 1360,
        "name": "Introducción a la inteligencia artificial"
    },
    {
        "id": 1361,
        "name": "Álgebra lineal"
    },
    {
        "id": 1362,
        "name": "Cálculo"
    },
    {
        "id": 1363,
        "name": "Taller de programación I"
    },
    {
        "id": 1364,
        "name": "Taller de programación II"
    },
    {
        "id": 1365,
        "name": "Fundamentos de redes neuronales"
    },
    {
        "id": 1366,
        "name": "Fundamentos de ciencias de datos"
    },
    {
        "id": 1367,
        "name": "Aprendizaje automático"
    },
    {
        "id": 1369,
        "name": "Taller de programación III"
    },
    {
        "id": 1370,
        "name": "Aprendizaje automático avanzado"
    },
    {
        "id": 1371,
        "name": "Procesamiento de imágenes y visión por computadora"
    },
    {
        "id": 1372,
        "name": "Proyecto integrador"
    },
    {
        "id": 1368,
        "name": "Electiva - TU en Inteligencia Artificial"
    },
    {
        "id": 1380,
        "name": "CRÉDITOS - TU EN INTELIGENCIA ARTIFICIAL"
    },
    {
        "id": 1379,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; actividades sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1373,
        "name": "Electiva: Minería de datos"
    },
    {
        "id": 1374,
        "name": "Electiva: Procesamientos del lenguaje natural"
    },
    {
        "id": 1388,
        "name": "Química general e inorgánica"
    },
    {
        "id": 1399,
        "name": "Microbiología de los alimentos I"
    },
    {
        "id": 1402,
        "name": "Raíz del plan"
    },
    {
        "id": 1393,
        "name": "Raíz del plan"
    },
    {
        "id": 1394,
        "name": "Campo de Formación Común (CFC) - TU en Laboratorios"
    },
    {
        "id": 1395,
        "name": "Campo de formación básica (CFB) - TU en Laboratorios"
    },
    {
        "id": 1396,
        "name": "Campo de integración curricular (CIC) - TU en Laboratorios"
    },
    {
        "id": 1397,
        "name": "Campo de formación específica (CFE) - TU en Laboratorio"
    },
    {
        "id": 1386,
        "name": "Matemática I"
    },
    {
        "id": 1387,
        "name": "Introducción a la química"
    },
    {
        "id": 1389,
        "name": "Matemática II"
    },
    {
        "id": 1403,
        "name": "Campo de formación común (CFC) - TU en Tecnología de los Alimentos"
    },
    {
        "id": 1404,
        "name": "Campo de formación básica (CFB) - TU en Tecnología de los Alimentos"
    },
    {
        "id": 1405,
        "name": "Campo de formación específica (CFE) - TU en Tecnología de los Alimentos"
    },
    {
        "id": 1406,
        "name": "Campo de integración curricular (CIC) - TU en Tecnología de los Alimentos"
    },
    {
        "id": 1409,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1408,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1412,
        "name": "Créditos - TU Tecnología de los Alimentos"
    },
    {
        "id": 1411,
        "name": "Créditos  - TU en Laboratorios"
    },
    {
        "id": 1391,
        "name": "Laboratorio de técnicas inmunológicas y de biología molecular"
    },
    {
        "id": 1392,
        "name": "Laboratorio de producción vegetal"
    },
    {
        "id": 1398,
        "name": "Introducción al laboratorio de análisis de alimentos"
    },
    {
        "id": 1401,
        "name": "Seminario general de procesos productivos de los alimentos I"
    },
    {
        "id": 1416,
        "name": "Campo de formación común (CFC) - TU en Metalurgia"
    },
    {
        "id": 1417,
        "name": "Campo de formación básica (CFB) - TU en Metalurgia"
    },
    {
        "id": 1418,
        "name": "Campo de formación específica (CFE) - TU en Metalurgia"
    },
    {
        "id": 1419,
        "name": "Campo de integración curricular (CIC) - TU en Metalurgia"
    },
    {
        "id": 1420,
        "name": "Raíz del plan"
    },
    {
        "id": 1421,
        "name": "Campo de formación común (CFC) - TU en Energía Eléctrica"
    },
    {
        "id": 1422,
        "name": "Campo de formación básica (CFB) - TU en Energía Eléctrica"
    },
    {
        "id": 1423,
        "name": "Campo de formación específica (CFE) - TU en Energía Eléctrica"
    },
    {
        "id": 1424,
        "name": "Campo de integración curricular (CIC) - TU en Energía Eléctrica"
    },
    {
        "id": 1425,
        "name": "Raíz del plan"
    },
    {
        "id": 1426,
        "name": "Campo de formación común (CFC) - TU en Diseño Industrial"
    },
    {
        "id": 1427,
        "name": "Campo de formación básica (CFB) - TU en Diseño Industrial"
    },
    {
        "id": 1428,
        "name": "Campo de formación específica (CFE) - TU en Diseño Industrial"
    },
    {
        "id": 1429,
        "name": "Campo de integración curricular (CIC) - TU en Diseño Industrial"
    },
    {
        "id": 1430,
        "name": "Raíz del plan"
    },
    {
        "id": 829,
        "name": "Estructuras, Organización y control Interno"
    },
    {
        "id": 1486,
        "name": "4TO AÑO"
    },
    {
        "id": 830,
        "name": "Elementos de Contabilidad y Costos Universitarios"
    },
    {
        "id": 1474,
        "name": "Taller de Gestión Universitaria I"
    },
    {
        "id": 1476,
        "name": "Contabilidad Universitaria"
    },
    {
        "id": 1475,
        "name": "Informática Aplicada a la Gestión Universitaria"
    },
    {
        "id": 1454,
        "name": "Raíz del plan"
    },
    {
        "id": 835,
        "name": "La producción de conocimiento en la cultura digital: lenguajes de programación"
    },
    {
        "id": 832,
        "name": "Organizaciones Universitarias"
    },
    {
        "id": 833,
        "name": "Legislación Universitaria II"
    },
    {
        "id": 834,
        "name": "Administración Universitaria"
    },
    {
        "id": 836,
        "name": "Sistemas de Información"
    },
    {
        "id": 838,
        "name": "Gestión de Recursos Humanos"
    },
    {
        "id": 1455,
        "name": "Fundamentos históricos y epistemológicos de la salud comunitaria"
    },
    {
        "id": 1456,
        "name": "Estado, gobierno y administración pública"
    },
    {
        "id": 1457,
        "name": "Gestión y evaluación de intervenciones sanitarias"
    },
    {
        "id": 1459,
        "name": "Niveles de atención y redes de salud"
    },
    {
        "id": 1461,
        "name": "Organizaciones comunitarias, participación y comunicación"
    },
    {
        "id": 1462,
        "name": "Nuevos desafios en Salud Comunitaria"
    },
    {
        "id": 1464,
        "name": "Innovación, vinculación y transferencia tecnológica"
    },
    {
        "id": 1468,
        "name": "Troncal"
    },
    {
        "id": 1469,
        "name": "Integración curricular"
    },
    {
        "id": 1470,
        "name": "Raíz del plan"
    },
    {
        "id": 1311,
        "name": "Raíz del plan"
    },
    {
        "id": 1431,
        "name": "Campo de formación común (CFC)  TU en Electromovilidad"
    },
    {
        "id": 1432,
        "name": "Campo de formación básica (CFB)  TU en Electromovilidad"
    },
    {
        "id": 1433,
        "name": "Campo de formación específica (CFE)  TU en Electromovilidad"
    },
    {
        "id": 1434,
        "name": "Campo de integración curricular (CIC)  TU en Electromovilidad"
    },
    {
        "id": 1435,
        "name": "Créditos  TU en Electromovilidad"
    },
    {
        "id": 1436,
        "name": "Taller de Diseño I"
    },
    {
        "id": 1437,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; Actividades sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1449,
        "name": "Créditos - TU en Diseño Indutrial"
    },
    {
        "id": 1471,
        "name": "1ER AÑO"
    },
    {
        "id": 1472,
        "name": "2DO AÑO"
    },
    {
        "id": 1446,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; Actividades sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1441,
        "name": "Física I"
    },
    {
        "id": 1442,
        "name": "Electromovilidad I"
    },
    {
        "id": 1443,
        "name": "Electromovilidad II"
    },
    {
        "id": 1438,
        "name": "Espacio de integración curricular I (Práctica profesional supervisada)"
    },
    {
        "id": 1439,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; Actividades sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1450,
        "name": "Créditos - TU en Metalurgia"
    },
    {
        "id": 1445,
        "name": "ESIC (espacio integración curricular)"
    },
    {
        "id": 1444,
        "name": "Electromovilidad III"
    },
    {
        "id": 1452,
        "name": "COMP_Procesamiento de Imágenes y Visión Por Computadora"
    },
    {
        "id": 827,
        "name": "Estadística Aplicada"
    },
    {
        "id": 1463,
        "name": "Pensamiento nacional"
    },
    {
        "id": 1448,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; Actividades sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1453,
        "name": "Créditos - TU en Energía Eléctrica"
    },
    {
        "id": 507,
        "name": "Terapéutica kinefisiátrica deportiva"
    },
    {
        "id": 502,
        "name": "Terapéutica kinefisiátrica en geriatría"
    },
    {
        "id": 500,
        "name": "Terapéutica kinefisiátrica en oncología"
    },
    {
        "id": 499,
        "name": "Terapéutica kinefisiátrica en traumatología"
    },
    {
        "id": 498,
        "name": "Terapéutica kinefisiátrica cardio-respiratoria"
    },
    {
        "id": 497,
        "name": "Terapéutica kinefisiátrcica en el paciente neurológico"
    },
    {
        "id": 495,
        "name": "Kinesiología y Fisiatría Laboral y ergonomía"
    },
    {
        "id": 494,
        "name": "Terapéutica kinefisiátrica en pediatría"
    },
    {
        "id": 493,
        "name": "Ortesis y prótesis"
    },
    {
        "id": 491,
        "name": "Bioética y aspectos del ejercicio profesional"
    },
    {
        "id": 485,
        "name": "Evaluaciones kinefisiátricas"
    },
    {
        "id": 484,
        "name": "Organización asistencial y epidemiología para Kinesiología y Fisiatría"
    },
    {
        "id": 483,
        "name": "Patología"
    },
    {
        "id": 482,
        "name": "Semiología"
    },
    {
        "id": 481,
        "name": "Agentes físicos II"
    },
    {
        "id": 480,
        "name": "Agentes físicos I"
    },
    {
        "id": 479,
        "name": "Kinefilaxia"
    },
    {
        "id": 478,
        "name": "Historia de la Kinesiología y Fisiatría"
    },
    {
        "id": 477,
        "name": "Neurología"
    },
    {
        "id": 476,
        "name": "Biofisica"
    },
    {
        "id": 475,
        "name": "Fisiología del Aparato Locomotor"
    },
    {
        "id": 501,
        "name": "Práctica comunitaria en Kinesiología"
    },
    {
        "id": 490,
        "name": "Práctica kinésica III"
    },
    {
        "id": 492,
        "name": "Biomecánica y Análisis de los gestos motores"
    },
    {
        "id": 489,
        "name": "Práctica kinésica II"
    },
    {
        "id": 488,
        "name": "Práctica kinésica I"
    },
    {
        "id": 487,
        "name": "Técnicas kinefisiátricas II"
    },
    {
        "id": 486,
        "name": "Técnicas kinefisiátricas I"
    },
    {
        "id": 353,
        "name": "Raíz del plan"
    },
    {
        "id": 503,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 504,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 505,
        "name": "CAMPO DE FORMACION ESPECIFICA"
    },
    {
        "id": 506,
        "name": "CAMPO DE INTEGRACION CURRICULAR"
    },
    {
        "id": 822,
        "name": "Introducción al Estudio de las Organizaciones"
    },
    {
        "id": 823,
        "name": "Elementos de Derecho"
    },
    {
        "id": 824,
        "name": "Técnicas cuantitativas"
    },
    {
        "id": 826,
        "name": "Introducción a la Economía Argentina"
    },
    {
        "id": 828,
        "name": "Problemática Universitaria II"
    },
    {
        "id": 831,
        "name": "Legislación Universitaria"
    },
    {
        "id": 1466,
        "name": "Taller de diseño de Tesis"
    },
    {
        "id": 1467,
        "name": "Metodología de la investigación"
    },
    {
        "id": 825,
        "name": "Problemática Universitaria I"
    },
    {
        "id": 837,
        "name": "Pasantía"
    },
    {
        "id": 1479,
        "name": "Planeamiento Estratégico"
    },
    {
        "id": 1480,
        "name": "Taller de Gestión Universitaria II"
    },
    {
        "id": 1481,
        "name": "Preparación y Evaluación de Proyectos"
    },
    {
        "id": 1482,
        "name": "Gestión del Personal Universitario"
    },
    {
        "id": 1483,
        "name": "Presupuesto Universitario"
    },
    {
        "id": 1484,
        "name": "Políticas Universitarias comparadas"
    },
    {
        "id": 1485,
        "name": "Espacio de integración curricular II"
    },
    {
        "id": 1487,
        "name": "Espacio de Integración curricular I"
    },
    {
        "id": 1490,
        "name": "Cosmetología"
    },
    {
        "id": 1489,
        "name": "Cuidado de personas mayores"
    },
    {
        "id": 1491,
        "name": "Primeros Auxilios + RCP"
    },
    {
        "id": 1478,
        "name": "Metodología de la investigación"
    },
    {
        "id": 1458,
        "name": "Economía y financiamiento de la salud"
    },
    {
        "id": 1170,
        "name": "Aerografía y Arte Urbano"
    },
    {
        "id": 1219,
        "name": "Taller de entrenamiento deportivo"
    },
    {
        "id": 1492,
        "name": "Taller de mural, aerografía y grafitti itinerante"
    },
    {
        "id": 1493,
        "name": "Técnico de fútbol infanto juvenil"
    },
    {
        "id": 1494,
        "name": "Introducción a la huerta urbana"
    },
    {
        "id": 1495,
        "name": "Talleres de Oficio"
    },
    {
        "id": 1496,
        "name": "TESIS"
    },
    {
        "id": 1460,
        "name": "Situación de salud, epidemiología y territorio"
    },
    {
        "id": 839,
        "name": "Raíz del plan"
    },
    {
        "id": 840,
        "name": "1º Cuatrimestre"
    },
    {
        "id": 841,
        "name": "2º Cuatrimestre"
    },
    {
        "id": 842,
        "name": "3º Cuatrimestre"
    },
    {
        "id": 843,
        "name": "4º Cuatrimestre"
    },
    {
        "id": 844,
        "name": "5º Cuatrimestre"
    },
    {
        "id": 845,
        "name": "6º Cuatrimestre"
    },
    {
        "id": 1521,
        "name": "Raíz del plan"
    },
    {
        "id": 1499,
        "name": "Participación en Proyectos Abiertos"
    },
    {
        "id": 1500,
        "name": "Taller de eSport"
    },
    {
        "id": 1501,
        "name": "Taller de Esports"
    },
    {
        "id": 55,
        "name": "Taller de Escritura creativa"
    },
    {
        "id": 79,
        "name": "Seminario de literatura argentina y latinoamericana contemporánea"
    },
    {
        "id": 1502,
        "name": "Diplomatura en deporte social"
    },
    {
        "id": 1505,
        "name": "Intercambios estudiantiles presenciales y/o virtuales"
    },
    {
        "id": 1193,
        "name": "Inicial 3"
    },
    {
        "id": 1194,
        "name": "Pre-intermedio 1"
    },
    {
        "id": 1195,
        "name": "Pre-intermedio 2"
    },
    {
        "id": 1196,
        "name": "Pre-intermedio 3"
    },
    {
        "id": 1201,
        "name": "Intermedio 1"
    },
    {
        "id": 1202,
        "name": "Intermedio 2"
    },
    {
        "id": 1203,
        "name": "Intermedio 3"
    },
    {
        "id": 1204,
        "name": "Intermedio-alto 1"
    },
    {
        "id": 1205,
        "name": "Intermedio-alto 2"
    },
    {
        "id": 1206,
        "name": "Intermedio-alto 3"
    },
    {
        "id": 1207,
        "name": "Avanzado 1"
    },
    {
        "id": 1208,
        "name": "Avanzado 2"
    },
    {
        "id": 1192,
        "name": "Inicial 2"
    },
    {
        "id": 1515,
        "name": "AU_Derechos: los tuyos, los míos, los nuestros"
    },
    {
        "id": 1514,
        "name": "AU_Modos de ver el mundo contemporáneo a través del lenguaje audiovisual. Cine, jóvenes y trabajo"
    },
    {
        "id": 1522,
        "name": "CAMPO DE FORMACION COMUN - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1523,
        "name": "CAMPO DE LA FORMACIÓN BÁSICA - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1524,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA - Tec. Univ. Mantenimiento Hospitalario"
    },
    {
        "id": 1525,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR - Tec. Univ. Mantenimiento Industrial"
    },
    {
        "id": 1516,
        "name": "Tecnologías para el desarrollo profesional"
    },
    {
        "id": 1534,
        "name": "Economía y Costo del Ciclo de Vida de los Activos"
    },
    {
        "id": 1536,
        "name": "Proyecto Final"
    },
    {
        "id": 1517,
        "name": "Mantenimiento y Riesgo Industrial"
    },
    {
        "id": 1519,
        "name": "Contratos y Gestión de Proveedores"
    },
    {
        "id": 1520,
        "name": "Políticas de Mantenimiento I"
    },
    {
        "id": 1528,
        "name": "Eficiencia Energética"
    },
    {
        "id": 1529,
        "name": "Políticas de Mantenimiento II"
    },
    {
        "id": 1530,
        "name": "Gestión Humana del Mantenimiento"
    },
    {
        "id": 1531,
        "name": "Planificación y Sistemas de Gestión de Activos"
    },
    {
        "id": 1533,
        "name": "Sistemas Informáticos de Mantenimiento (SIM)"
    },
    {
        "id": 1527,
        "name": "Administración de Paradas de Planta"
    },
    {
        "id": 1532,
        "name": "Planeamiento Estratégico del Mantenimiento"
    },
    {
        "id": 1535,
        "name": "Auditorías de Mantenimiento"
    },
    {
        "id": 1526,
        "name": "Análisis de Confiabilidad"
    },
    {
        "id": 1538,
        "name": "Créditos de Actividades Culturales, Sociales y Deportivas"
    },
    {
        "id": 1537,
        "name": "Organización del Mantenimiento"
    },
    {
        "id": 1539,
        "name": "CRÉDITOS - Lic. en Gestión del Mantenimiento"
    },
    {
        "id": 1540,
        "name": "Formación Profesional"
    },
    {
        "id": 1541,
        "name": "Tapicería"
    },
    {
        "id": 1542,
        "name": "Comunicación en redes"
    },
    {
        "id": 1543,
        "name": "Dibujo técnico en computadora"
    },
    {
        "id": 599,
        "name": "CPI_Intermedio nivel 6"
    },
    {
        "id": 598,
        "name": "CPI_Pre Intermedio nivel 4"
    },
    {
        "id": 597,
        "name": "CPI_Inicial nivel 2"
    },
    {
        "id": 410,
        "name": "Biotecnología de alimentos y medicamentos"
    },
    {
        "id": 409,
        "name": "Biotecnología ambiental"
    },
    {
        "id": 403,
        "name": "Bioinformática"
    },
    {
        "id": 402,
        "name": "Biotecnología médica e inmunología"
    },
    {
        "id": 399,
        "name": "Formulación y evaluación de proyectos"
    },
    {
        "id": 398,
        "name": "Economía de la innovación"
    },
    {
        "id": 397,
        "name": "Bioquímica II"
    },
    {
        "id": 396,
        "name": "Genética Molecular"
    },
    {
        "id": 395,
        "name": "Física I"
    },
    {
        "id": 390,
        "name": "Historia de la ciencia"
    },
    {
        "id": 373,
        "name": "Introducción a la botánica"
    },
    {
        "id": 372,
        "name": "Química general e inorgánica"
    },
    {
        "id": 371,
        "name": "Introducción a la biología molecular y celular"
    },
    {
        "id": 370,
        "name": "Gestión integral de proyectos II"
    },
    {
        "id": 369,
        "name": "Cambio climático"
    },
    {
        "id": 368,
        "name": "Tratamiento de riesgo"
    },
    {
        "id": 364,
        "name": "Gestión integral de proyectos I"
    },
    {
        "id": 361,
        "name": "Manejo integrado de cuencas"
    },
    {
        "id": 209,
        "name": "Sociología de la ciencia"
    },
    {
        "id": 389,
        "name": "Educación ambiental"
    },
    {
        "id": 388,
        "name": "Educación para la salud"
    },
    {
        "id": 387,
        "name": "Astronomía y Ciencias de la Tierra"
    },
    {
        "id": 386,
        "name": "Epistemología de las ciencias exactas y naturales"
    },
    {
        "id": 385,
        "name": "Práctica de la enseñanza de la Biología en la escuela media II (CIC VI)"
    },
    {
        "id": 384,
        "name": "Evolución"
    },
    {
        "id": 383,
        "name": "Ecología general"
    },
    {
        "id": 382,
        "name": "Microbiología"
    },
    {
        "id": 381,
        "name": "Genética"
    },
    {
        "id": 380,
        "name": "Práctica de la enseñanza de la Biología en la escuela media I(CIC V)"
    },
    {
        "id": 379,
        "name": "Estadística y diseño experimental"
    },
    {
        "id": 378,
        "name": "Bioquímica"
    },
    {
        "id": 377,
        "name": "Física II"
    },
    {
        "id": 682,
        "name": "Programación de Nuevos Entornos Digitales"
    },
    {
        "id": 985,
        "name": "Acondicionamiento de aire en centros de salud"
    },
    {
        "id": 441,
        "name": "ASIGNATURA UNAHUR"
    },
    {
        "id": 376,
        "name": "Anatomía y Fisiología Humana"
    },
    {
        "id": 375,
        "name": "Introducción a la zoología"
    },
    {
        "id": 374,
        "name": "Química orgánica"
    },
    {
        "id": 1545,
        "name": "Trabajo Final"
    },
    {
        "id": 602,
        "name": "Raíz del plan"
    },
    {
        "id": 603,
        "name": "ACTIVIDADES INSTITUTO BIOTECNOLOGIA"
    },
    {
        "id": 604,
        "name": "ACTIVIDADES INSTITUTO TECNOLOGIA"
    },
    {
        "id": 605,
        "name": "ACTIVIDADES INSTITUTO EDUCACION"
    },
    {
        "id": 606,
        "name": "ACTIVIDADES INSTITUTO SALUD"
    },
    {
        "id": 607,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 1544,
        "name": "Asignaturas de Movilidad Universitaria"
    },
    {
        "id": 363,
        "name": "Taller de Trabajo Final I"
    },
    {
        "id": 356,
        "name": "Metodologías de saneamiento combinadas"
    },
    {
        "id": 366,
        "name": "Gestión ambiental en gobiernos locales"
    },
    {
        "id": 365,
        "name": "Energía y ambiente"
    },
    {
        "id": 362,
        "name": "Salud comunitaria y ambiente"
    },
    {
        "id": 360,
        "name": "Política ambiental II"
    },
    {
        "id": 359,
        "name": "Economía ambiental II"
    },
    {
        "id": 358,
        "name": "Sociología ambiental"
    },
    {
        "id": 355,
        "name": "Economía ambiental I"
    },
    {
        "id": 351,
        "name": "Raíz del plan"
    },
    {
        "id": 422,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 423,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 424,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 425,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 1546,
        "name": "Taller de Trabajo Final II"
    },
    {
        "id": 1078,
        "name": "Taller de escritura académica"
    },
    {
        "id": 1077,
        "name": "Dificultades en la adquisición del lenguaje y en el aprendizaje de la lectura, la escritura y el cálculo"
    },
    {
        "id": 1076,
        "name": "Alfabetización en contextos de diversidad sociocultural"
    },
    {
        "id": 1075,
        "name": "Alfabetización y TIC"
    },
    {
        "id": 1074,
        "name": "Formación de lectores. Didáctica II"
    },
    {
        "id": 1073,
        "name": "Alfabetización en el aula. Didáctica I"
    },
    {
        "id": 1072,
        "name": "Procesos de lectura y escritura"
    },
    {
        "id": 543,
        "name": "CAMPO DE INTEGRACION CURRICULAR"
    },
    {
        "id": 1071,
        "name": "Neurociencias del aprendizaje"
    },
    {
        "id": 1070,
        "name": "Marco político pedagógico de la alfabetización inicial"
    },
    {
        "id": 1069,
        "name": "Fundamentos de lingüística y psicolingüística para alfabetización inicial"
    },
    {
        "id": 1079,
        "name": "Raíz del plan"
    },
    {
        "id": 1573,
        "name": "Cursadas Voluntarias en otras Universidades"
    },
    {
        "id": 1572,
        "name": "Participación en actividades de difusión académica"
    },
    {
        "id": 1574,
        "name": "Actividades extracurriculares en el marco de asignaturas de la carrera"
    },
    {
        "id": 1585,
        "name": "Curso de Buenas Prácticas de Gestión Documental"
    },
    {
        "id": 1575,
        "name": "Cursos y talleres externos (1 crédito)"
    },
    {
        "id": 1576,
        "name": "Cursos y talleres externos (2 créditos)"
    },
    {
        "id": 1577,
        "name": "Cursos y talleres externos (3 créditos)"
    },
    {
        "id": 1578,
        "name": "Cursos y talleres internos (1 crédito)"
    },
    {
        "id": 1579,
        "name": "Cursos y talleres internos (2 créditos)"
    },
    {
        "id": 1580,
        "name": "Cursos y talleres internos (3 créditos)"
    },
    {
        "id": 1581,
        "name": "Cursos y talleres internos (4 créditos)"
    },
    {
        "id": 1582,
        "name": "Seminarios y jornadas"
    },
    {
        "id": 1587,
        "name": "Taller de Cromatografía y espectrometría de masas"
    },
    {
        "id": 1584,
        "name": "Taller de Microscopía y uso de Lupa Estereoscópica"
    },
    {
        "id": 1583,
        "name": "Taller de Volumetría y preparación de soluciones"
    },
    {
        "id": 1586,
        "name": "Taller teórico-práctico: Acondicionamiento de materiales implicados en los ensayos microbiológicos"
    },
    {
        "id": 1603,
        "name": "Asistencia Técnica a grupos de Investigación de la Universidad"
    },
    {
        "id": 1598,
        "name": "Asistencia a proyecciones de documentales organizados por la carrera"
    },
    {
        "id": 1596,
        "name": "Asistencia en la Semana de la Biotecnología- 1"
    },
    {
        "id": 1595,
        "name": "Asistencia en la Semana de la Biotecnología- 2"
    },
    {
        "id": 1594,
        "name": "Asistencia en la Semana de la Biotecnología- 3"
    },
    {
        "id": 1593,
        "name": "Asistencia en la Semana de la Biotecnología- 4"
    },
    {
        "id": 1592,
        "name": "Asistencia en la Semana de la Biotecnología- 5"
    },
    {
        "id": 1599,
        "name": "Concursos de fotografía organizados por la carrera"
    },
    {
        "id": 1588,
        "name": "Curso Teórico práctico de PCR"
    },
    {
        "id": 1589,
        "name": "Curso Teórico práctico de PCR en tiempo Real"
    },
    {
        "id": 1605,
        "name": "Estadía de capacitación y entrenamiento en los Laboratorios de Docencia UNAHUR"
    },
    {
        "id": 1604,
        "name": "Participación activa como becario/a o pasante en grupos de investigación y/o empresas"
    },
    {
        "id": 1597,
        "name": "Participación activa en voluntariados y proyectos de extensión universitaria"
    },
    {
        "id": 1601,
        "name": "Participación como Estudiante Asistente (1 año)"
    },
    {
        "id": 1602,
        "name": "Participación como Estudiante Asistente (2 años)"
    },
    {
        "id": 1600,
        "name": "Participación en el programa Un estudiante/Un compañero/a o similares"
    },
    {
        "id": 1606,
        "name": "Práctica Profesional Supervisada de Tecnicatura/Pasantías en empresas, organismos públicos y o privados"
    },
    {
        "id": 1590,
        "name": "Taller teórico-práctico: Análisis Microbiológico de Aguas"
    },
    {
        "id": 1591,
        "name": "Taller teórico-práctico: Ensayo de aptitud de medios de cultivo utilizados en microbiología"
    },
    {
        "id": 1613,
        "name": "Asistencia Técnica a grupos de Investigación de la Universidad"
    },
    {
        "id": 1565,
        "name": "Asistente/a en Jornadas / Workshops / Congresos (1 créd.)"
    },
    {
        "id": 1566,
        "name": "Asistente/a en Jornadas / Workshops / Congresos (2 créd.)"
    },
    {
        "id": 1608,
        "name": "Experiencias y/o actividades vivenciales"
    },
    {
        "id": 1607,
        "name": "Experiencias y/o actividades vivenciales"
    },
    {
        "id": 1563,
        "name": "Expositor/a en Jornadas / Workshops / Congresos (2 créd.)"
    },
    {
        "id": 1564,
        "name": "Expositor/a en Jornadas / Workshops / Congresos (3 créd.)"
    },
    {
        "id": 1569,
        "name": "Intercambios estudiantiles presenciales y/o virtuales (2 créd.)"
    },
    {
        "id": 1570,
        "name": "Intercambios estudiantiles presenciales y/o virtuales (4 créd.)"
    },
    {
        "id": 1612,
        "name": "Participación como Estudiante Asistente"
    },
    {
        "id": 1611,
        "name": "Participación en el programa Un estudiante/Un compañero/a o similares"
    },
    {
        "id": 1567,
        "name": "Participación en la organización de Jornadas / Workshops / Congresos (1 créd.)"
    },
    {
        "id": 1568,
        "name": "Participación en la organización de Jornadas / Workshops / Congresos (2 créd.)"
    },
    {
        "id": 1560,
        "name": "Seminarios / Talleres (1 créd.)"
    },
    {
        "id": 1561,
        "name": "Seminarios / Talleres (2 créd.)"
    },
    {
        "id": 1562,
        "name": "Seminarios / Talleres (3 créd.)"
    },
    {
        "id": 1610,
        "name": "Talleres Culturales específicamente vinculados al campo del conocimiento de la carrera"
    },
    {
        "id": 1571,
        "name": "Visitas/ salidas/ actividades/ relevamientos de campo"
    },
    {
        "id": 1609,
        "name": "Voluntariados y proyectos de extensión universitaria"
    },
    {
        "id": 1615,
        "name": "Campo de formación común (CFC) - TU en Ciencias del Ambiente"
    },
    {
        "id": 1616,
        "name": "Campo de formación básica (CFB) - TU en Ciencias del Ambiente"
    },
    {
        "id": 1617,
        "name": "Campo de formación específica (CFE) - TU en Ciencias del Ambiente"
    },
    {
        "id": 1618,
        "name": "Campo de integración curricular (CIC) - TU en Ciencias del Ambiente"
    },
    {
        "id": 1506,
        "name": "Visita CEAMSE"
    },
    {
        "id": 1507,
        "name": "Visita Cooperativa BellaFlor"
    },
    {
        "id": 1508,
        "name": "Visita Reserva Natural"
    },
    {
        "id": 1509,
        "name": "Semana del ambiente - 1"
    },
    {
        "id": 1510,
        "name": "Semana del ambiente - 2"
    },
    {
        "id": 1511,
        "name": "Semana del ambiente - 3"
    },
    {
        "id": 1512,
        "name": "Semana del ambiente - 4"
    },
    {
        "id": 1547,
        "name": "Cursos externos - 1"
    },
    {
        "id": 1548,
        "name": "Cursos externos - 2"
    },
    {
        "id": 1549,
        "name": "Cursos / Seminarios UNAHUR - 1"
    },
    {
        "id": 1550,
        "name": "Cursos / Seminarios UNAHUR - 2"
    },
    {
        "id": 1551,
        "name": "Voluntariado Universitario \"Promotores ambientales\""
    },
    {
        "id": 1552,
        "name": "Proyectos de investigación - equipo externo"
    },
    {
        "id": 1553,
        "name": "Participación como Estudiante asistente"
    },
    {
        "id": 1554,
        "name": "Censo de Arbolado Urbano (PDTS) - Censista activo"
    },
    {
        "id": 1555,
        "name": "Proyectos de investigación - equipo interno"
    },
    {
        "id": 1556,
        "name": "Semana de la Biotecnología - 1"
    },
    {
        "id": 1557,
        "name": "Semana de la Biotecnología - 2"
    },
    {
        "id": 1558,
        "name": "Participación en actividades de difusión de la carrera"
    },
    {
        "id": 1559,
        "name": "Viaje vivencial - Encuentro anual del Programa de Becas de Fundación YPF"
    },
    {
        "id": 1619,
        "name": "Créditos - TU en Ciencias del Ambiente"
    },
    {
        "id": 1415,
        "name": "Biología"
    },
    {
        "id": 1407,
        "name": "Climatología"
    },
    {
        "id": 1414,
        "name": "Química analítica aplicada"
    },
    {
        "id": 1513,
        "name": "Curso \"Promotores ambientales\" - UNAHUR"
    },
    {
        "id": 1410,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 876,
        "name": "Taller de apoyo escolar (CIC I)"
    },
    {
        "id": 878,
        "name": "Tutorías en asignaturas del primer año de la Universidad II (CIC III)"
    },
    {
        "id": 879,
        "name": "Didáctica de las ciencias exactas y naturales I"
    },
    {
        "id": 880,
        "name": "Observación de clases (CIC IV)"
    },
    {
        "id": 881,
        "name": "Didáctica de las ciencias exactas y naturales II"
    },
    {
        "id": 877,
        "name": "Tutorías en asignaturas del primer año de la Universidad (CIC II)"
    },
    {
        "id": 539,
        "name": "Raíz del plan"
    },
    {
        "id": 540,
        "name": "CAMPO DE FORMACION BASICA"
    },
    {
        "id": 541,
        "name": "CAMPO DE FORMACION COMUN"
    },
    {
        "id": 542,
        "name": "CAMPO DE FORMACION ESPECIFICA"
    },
    {
        "id": 1620,
        "name": "Formación de cuidadores gerontológicos"
    },
    {
        "id": 1631,
        "name": "Censo de Arbolado Urbano (PDTS) - Participación única vez"
    },
    {
        "id": 1628,
        "name": "Congresos organizados por la carrera - Asistencia al congreso"
    },
    {
        "id": 1630,
        "name": "Congresos organizados por la carrera - Organización del congreso (participación en Comité Científico y/o Comité Organizador"
    },
    {
        "id": 1629,
        "name": "Congresos organizados por la carrera - Participación como expositor"
    },
    {
        "id": 1625,
        "name": "Cursos / Seminarios / Jornadas UNAHUR - 1 B"
    },
    {
        "id": 1626,
        "name": "Cursos / Seminarios / Jornadas UNAHUR - 1 C"
    },
    {
        "id": 1627,
        "name": "Cursos / Seminarios / Jornadas UNAHUR - 1 D"
    },
    {
        "id": 1622,
        "name": "Cursos externos - 3"
    },
    {
        "id": 1623,
        "name": "Cursos externos - 4"
    },
    {
        "id": 1624,
        "name": "Cursos externos - 5"
    },
    {
        "id": 1621,
        "name": "Jornadas de Educación Ambiental Expositor - CIRN INTA"
    },
    {
        "id": 1637,
        "name": "Idiomas"
    },
    {
        "id": 1638,
        "name": "Materia electiva 1"
    },
    {
        "id": 1639,
        "name": "Materia electiva 2"
    },
    {
        "id": 1640,
        "name": "Materia electiva 3"
    },
    {
        "id": 1641,
        "name": "Materia electiva 4"
    },
    {
        "id": 1642,
        "name": "Materia electiva 5"
    },
    {
        "id": 1643,
        "name": "Materia electiva 6"
    },
    {
        "id": 1632,
        "name": "Participación como expositor en la Semana de la Biotecnología"
    },
    {
        "id": 1636,
        "name": "Participación como parte del equipo organizador de actividades de la carrera-1"
    },
    {
        "id": 1635,
        "name": "Participación como parte del equipo organizador de actividades de la carrera-2"
    },
    {
        "id": 1634,
        "name": "Participación como parte del equipo organizador de actividades de la carrera-3"
    },
    {
        "id": 1633,
        "name": "Participación como parte del equipo organizador de actividades de la carrera-4"
    },
    {
        "id": 1645,
        "name": "Jornadas de Estudiantes de Biotecnología"
    },
    {
        "id": 1644,
        "name": "Proyectos de investigación - Participación única vez"
    },
    {
        "id": 1646,
        "name": "Habilidades Digitales"
    },
    {
        "id": 1647,
        "name": "Pensamiento computacional"
    },
    {
        "id": 1648,
        "name": "Python Ameghino"
    },
    {
        "id": 1649,
        "name": "Testing Ameghino"
    },
    {
        "id": 1651,
        "name": "Campo de Formación Común (CFC) - TU en Laboratorios"
    },
    {
        "id": 1652,
        "name": "Campo de formación básica (CFB) - TU en Laboratorios"
    },
    {
        "id": 1653,
        "name": "Campo de integración curricular (CIC) - TU en Laboratorios"
    },
    {
        "id": 1654,
        "name": "Campo de formación específica (CFE) - TU en Laboratorio"
    },
    {
        "id": 1655,
        "name": "Créditos  - TU en Laboratorios"
    },
    {
        "id": 1656,
        "name": "Taller de Procesamiento digital de imágenes"
    },
    {
        "id": 1659,
        "name": "Jornada de METALURGIA - Asistente"
    },
    {
        "id": 1660,
        "name": "Jornada de METALURGIA - Expositor"
    },
    {
        "id": 1658,
        "name": "Jornada de METALURGIA - Oyente"
    },
    {
        "id": 1657,
        "name": "Visita a Planta ACERBRAG"
    },
    {
        "id": 1669,
        "name": "Ciclo de charlas técnicas EDENOR"
    },
    {
        "id": 1673,
        "name": "Participación como Estudiante asistente"
    },
    {
        "id": 1672,
        "name": "Participación en grupos de investigación UNAHUR"
    },
    {
        "id": 1671,
        "name": "Pasantías en empresas"
    },
    {
        "id": 1663,
        "name": "Pre Rally LATAM UNAHUR"
    },
    {
        "id": 1662,
        "name": "Rally Latinoamericano de Innovación"
    },
    {
        "id": 1661,
        "name": "Seminario Energía Eléctrica"
    },
    {
        "id": 1670,
        "name": "Seminario de Estudios para la Integración Latinoamericana"
    },
    {
        "id": 1667,
        "name": "Visita a central nuclear ATUCHA"
    },
    {
        "id": 1665,
        "name": "Visita a central térmica Ensenada de Barragán"
    },
    {
        "id": 1666,
        "name": "Visita a central térmica Genelba"
    },
    {
        "id": 1668,
        "name": "Visita a complejo hidroeléctrico Salto Grande"
    },
    {
        "id": 1664,
        "name": "Visita a fábrica de transformadores MIRON"
    },
    {
        "id": 1674,
        "name": "Congresos organizados por la carrera - Asistencia a charlas específicas"
    },
    {
        "id": 1675,
        "name": "Feria agroecológica UNAHUR - Participación en stand"
    },
    {
        "id": 1679,
        "name": "Intercambio académico presencial"
    },
    {
        "id": 1678,
        "name": "Intercambio académico virtual"
    },
    {
        "id": 1676,
        "name": "Semana de la conciencia ambiental - 1"
    },
    {
        "id": 1677,
        "name": "Semana de la conciencia ambiental - 2"
    },
    {
        "id": 949,
        "name": "CRÉDITOS  EN ACTIVIDADES FORMATIVAS, ACADÉMICAS Y PROFESIONALES"
    },
    {
        "id": 941,
        "name": "CRÉDITOS  EN ACTIVIDADES DE DOCENCIA E INVESTIGACIÓN"
    },
    {
        "id": 943,
        "name": "CRÉDITOS  EN ACTIVIDADES SOCIALES, CULTURALES Y DEPORTIVAS"
    },
    {
        "id": 1002,
        "name": "CRÉDITOS DE ACTIVIDADES CULTURALES, SOCIALES Y DEPORTIVAS"
    },
    {
        "id": 815,
        "name": "Didáctica de las Artes Audiovisuales"
    },
    {
        "id": 814,
        "name": "Didáctica de las Artes Visuales"
    },
    {
        "id": 817,
        "name": "El Cine en la Escuela"
    },
    {
        "id": 820,
        "name": "Laboratorio de Proyectos"
    },
    {
        "id": 813,
        "name": "Pedagogías de la Mirada"
    },
    {
        "id": 819,
        "name": "Política, Estética e Imágenes"
    },
    {
        "id": 818,
        "name": "Subjetividades Mediáticas y Educación"
    },
    {
        "id": 821,
        "name": "Raíz del plan"
    },
    {
        "id": 1681,
        "name": "Trabajo Final Integrador"
    },
    {
        "id": 816,
        "name": "Taller de Pensamiento Audiovisual"
    },
    {
        "id": 1682,
        "name": "Diseño y decoración con globos"
    },
    {
        "id": 1683,
        "name": "UNAHUR@TIC - Encuentro de Informática (segunda participación)"
    },
    {
        "id": 1689,
        "name": "Participación como asistente en Jornadas Diseñamos UNAHUR"
    },
    {
        "id": 1686,
        "name": "Participación como asistente en Jornadas Tecnológicas de fabricación digital para la transformación de PYMES"
    },
    {
        "id": 1693,
        "name": "Participación como estudiante asistente"
    },
    {
        "id": 1688,
        "name": "Participación como expositor/a en Jornadas Diseñamos UNAHUR"
    },
    {
        "id": 1685,
        "name": "Participación como expositor/a en Jornadas Tecnológicas de fabricación digital para la transformación de PYMES"
    },
    {
        "id": 1687,
        "name": "Participación como organizador/a en Jornadas Diseñamos UNAHUR"
    },
    {
        "id": 1684,
        "name": "Participación como organizador/a en Jornadas Tecnológicas de fabricación digital para la transformación de PYMES"
    },
    {
        "id": 1692,
        "name": "Pasantía en empresa"
    },
    {
        "id": 1690,
        "name": "Pre Rally LATAM UNAHUR"
    },
    {
        "id": 1691,
        "name": "Visita a escuela Técnica El plumerillo"
    },
    {
        "id": 400,
        "name": "Ingeniería genética"
    },
    {
        "id": 401,
        "name": "Bioprocesos I"
    },
    {
        "id": 350,
        "name": "Raíz del plan"
    },
    {
        "id": 411,
        "name": "CAMPO DE FORMACIÓN COMÚN"
    },
    {
        "id": 412,
        "name": "CAMPO DE FORMACIÓN BÁSICA"
    },
    {
        "id": 413,
        "name": "CAMPO DE FORMACIÓN ESPECÍFICA"
    },
    {
        "id": 414,
        "name": "CAMPO DE INTEGRACIÓN CURRICULAR"
    },
    {
        "id": 405,
        "name": "Biología molecular y celular"
    },
    {
        "id": 406,
        "name": "Agrobiotecnología"
    },
    {
        "id": 408,
        "name": "Biotecnología animal"
    },
    {
        "id": 680,
        "name": "Procesos Biotecnológicos Industriales"
    },
    {
        "id": 407,
        "name": "Taller de Trabajo Final I"
    },
    {
        "id": 1694,
        "name": "Introducción al Chino Mandarín"
    },
    {
        "id": 1719,
        "name": "Seminarios / Talleres (3 créd.)"
    },
    {
        "id": 1754,
        "name": "Taller de Trabajo Final"
    },
    {
        "id": 1723,
        "name": "Participación en competencias estudiantiles"
    },
    {
        "id": 367,
        "name": "Taller de Trabajo Final II"
    },
    {
        "id": 1728,
        "name": "Voluntariados y proyectos de extensión universitaria"
    },
    {
        "id": 1733,
        "name": "Elaboración / presentación de clases especiales"
    },
    {
        "id": 1729,
        "name": "Semana de la conciencia ambiental - 3"
    },
    {
        "id": 1732,
        "name": "Visita Laboratorios CNEA"
    },
    {
        "id": 1731,
        "name": "Visita a CEAMSE Villa Domínico"
    },
    {
        "id": 1730,
        "name": "Visita al Museo de Cs Naturales La Plata"
    },
    {
        "id": 1734,
        "name": "AU_Ciencias del fin del mundo"
    },
    {
        "id": 1755,
        "name": "Trabajo Final Integrador"
    },
    {
        "id": 1735,
        "name": "AU_Ciencia, tecnología e innovación para el desarrollo"
    },
    {
        "id": 1736,
        "name": "AU_Habilidades blandas: un acercamiento al mundo del trabajo"
    },
    {
        "id": 1740,
        "name": "Cursada de materia del Instituto Tecnología e Ingeniería"
    },
    {
        "id": 1741,
        "name": "Participación como expositor/a en Jornadas Diseñamos UNAHUR 1ra participación"
    },
    {
        "id": 846,
        "name": "Curso de Consolidación Intermedio"
    },
    {
        "id": 1742,
        "name": "Participación como asistente en Jornadas Diseñamos UNAHUR 1ra participación"
    },
    {
        "id": 1743,
        "name": "Taller extracurricular de diseño 1"
    },
    {
        "id": 1747,
        "name": "Asistencia a congresos"
    },
    {
        "id": 1750,
        "name": "Asistencia técnica a grupos de investigación externos"
    },
    {
        "id": 1748,
        "name": "Cursos y talleres externos (4 créditos)"
    },
    {
        "id": 1749,
        "name": "Cursos y talleres externos (5 créditos)"
    },
    {
        "id": 1746,
        "name": "Participación como expositor en congresos"
    },
    {
        "id": 1744,
        "name": "Participación como expositor en la Jornada Estudiantil del Instituto de Biotecnología-1"
    },
    {
        "id": 1745,
        "name": "Participación como expositor en la Jornada Estudiantil del Instituto de Biotecnología-2"
    },
    {
        "id": 1751,
        "name": "Raíz del plan"
    },
    {
        "id": 1752,
        "name": "Seminario optativo 1 - Especialización en Salud Comunitaria"
    },
    {
        "id": 1753,
        "name": "Seminario optativo 2 - Especialización en Salud Comunitaria"
    },
    {
        "id": 667,
        "name": "Raíz del plan"
    },
    {
        "id": 668,
        "name": "Proyecto político pedagógico nacional de la universidad"
    },
    {
        "id": 669,
        "name": "Los sujetos de las relaciones pedagógicas en la universidad contemporánea"
    },
    {
        "id": 670,
        "name": "La normativa institucional: autonomía y reforma"
    },
    {
        "id": 671,
        "name": "Cuestiones del campo curricular en el nivel superior"
    },
    {
        "id": 672,
        "name": "Una didáctica para la universidad actual"
    },
    {
        "id": 673,
        "name": "Integración de tencologías digitales en la enseñanza universitaria"
    },
    {
        "id": 674,
        "name": "La investigación y producción de conocimiento en la docencia e investigación en el nivel universitario"
    },
    {
        "id": 675,
        "name": "Seminario de integración final"
    },
    {
        "id": 1756,
        "name": "Teatro Iniciales"
    },
    {
        "id": 1757,
        "name": "Teatro Intermedios"
    },
    {
        "id": 1758,
        "name": "Teatro Avanzados"
    },
    {
        "id": 1761,
        "name": "Alumnos de intercambio internacional"
    },
    {
        "id": 1762,
        "name": "Jornadas de Metalurgia"
    },
    {
        "id": 1759,
        "name": "Visita al Ministerio de Educación"
    },
    {
        "id": 1760,
        "name": "Voluntariado un estudiante un compañero"
    },
    {
        "id": 644,
        "name": "Aleaciones de metales no ferrosos"
    },
    {
        "id": 1763,
        "name": "Protocolo de Nagoya"
    },
    {
        "id": 1765,
        "name": "Voluntariado Universitario \"Biodiversidad forestal\""
    },
    {
        "id": 1764,
        "name": "Voluntariado Universitario \"Guardianes de la reserva\""
    },
    {
        "id": 1766,
        "name": "Raíz del plan"
    },
    {
        "id": 1767,
        "name": "1er año - Tec. Univ. en Viverismo"
    },
    {
        "id": 1768,
        "name": "2do año - Tec. Univ. en Viverismo"
    },
    {
        "id": 1769,
        "name": "3er año - Tec. Univ. en Viverismo"
    },
    {
        "id": 1706,
        "name": "Química general"
    },
    {
        "id": 1698,
        "name": "Ateneo de estudio de casos"
    },
    {
        "id": 1715,
        "name": "Seguridad en prácticas agrícolas"
    },
    {
        "id": 1771,
        "name": "Fundamentos de sanidad vegetal"
    },
    {
        "id": 1773,
        "name": "Raíz del plan"
    },
    {
        "id": 1774,
        "name": "1er año - Tecnicatura Universitaria en Producción Agroecológica Periurbana"
    },
    {
        "id": 1775,
        "name": "2do año - Tecnicatura Universitaria en Producción Agroecológica Periurbana"
    },
    {
        "id": 1776,
        "name": "3er año - Tecnicatura Universitaria en Producción Agroecológica Periurbana"
    },
    {
        "id": 1779,
        "name": "Créditos - Tec. Univ. en Viverismo"
    },
    {
        "id": 1726,
        "name": "Manejo agroecológico de adversidades"
    },
    {
        "id": 1772,
        "name": "TU Viverismo: Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1777,
        "name": "Créditos - Tecnicatura Universitaria en Producción Agroecológica Periurbana"
    },
    {
        "id": 1778,
        "name": "TU en Producción Agroecológica Periurbana: Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1697,
        "name": "Introducción al desarrollo agrario"
    },
    {
        "id": 1703,
        "name": "Discusiones sobre desarrollo"
    },
    {
        "id": 1705,
        "name": "Nutrición y soberanía alimentaria"
    },
    {
        "id": 1708,
        "name": "Taller de bioensayos"
    },
    {
        "id": 1709,
        "name": "Desarrollo rural y extensión agraria"
    },
    {
        "id": 1713,
        "name": "Trayecto electivo"
    },
    {
        "id": 1711,
        "name": "Antropología para la agricultura familiar"
    },
    {
        "id": 1712,
        "name": "Bioinsumos agropecuarios"
    },
    {
        "id": 1714,
        "name": "Turismo rural y periurbano"
    },
    {
        "id": 1716,
        "name": "Modelos de producción de conocimiento"
    },
    {
        "id": 1717,
        "name": "Historia del acceso a la tierra"
    },
    {
        "id": 1718,
        "name": "Análisis de territorios"
    },
    {
        "id": 1707,
        "name": "Manipulación de alimentos"
    },
    {
        "id": 1710,
        "name": "Biodiversidad agrícola"
    },
    {
        "id": 1722,
        "name": "Taller de integración final"
    },
    {
        "id": 1704,
        "name": "Geografía agraria nacional"
    },
    {
        "id": 1724,
        "name": "Créditos de actividades formativas, académica y profesionales; formativas de docencia e investigación; sociales y culturales vinculadas al campo profesional; otras actividades"
    },
    {
        "id": 1727,
        "name": "Políticas para el desarrollo territorial"
    },
    {
        "id": 1696,
        "name": "Raíz del plan"
    },
    {
        "id": 1701,
        "name": "Campo de formación específica (CFE) - Lic. en Desarrollo Agrario"
    },
    {
        "id": 1702,
        "name": "Campo de integración curricular (CIC) - Lic. en Desarrollo Agrario"
    },
    {
        "id": 1720,
        "name": "3er año - Lic. en Desarrollo Agrario"
    },
    {
        "id": 1721,
        "name": "4to año - Lic. en Desarrollo Agrario"
    },
    {
        "id": 1725,
        "name": "Créditos - Lic. en Desarrollo Agrario"
    },
    {
        "id": 1780,
        "name": "Curso \"Biodiversidad forestal\""
    },
    {
        "id": 1781,
        "name": "Curso \"Biodiversidad forestal\""
    },
    {
        "id": 1782,
        "name": "Trabajo final integrador"
    },
    {
        "id": 1783,
        "name": "Proyecto Integrador"
    },
    {
        "id": 1784,
        "name": "Proyecto Integrador"
    },
    {
        "id": 1786,
        "name": "Programa de Capacitación en RCP Básica -\"UNAHUR LATE\""
    },
    {
        "id": 1787,
        "name": "Desarrollo de Práctica Profesional Supervisada (PPS)"
    },
    {
        "id": 1788,
        "name": "Pasantías en empresas/organismos públicos y o privados"
    },
    {
        "id": 1737,
        "name": "Materias electivas - 3 créditos"
    },
    {
        "id": 1738,
        "name": "Materias electivas - 4 créditos"
    },
    {
        "id": 1739,
        "name": "Materias electivas - 5 créditos"
    },
    {
        "id": 1789,
        "name": "Cursos externos (3 créditos)"
    },
    {
        "id": 1790,
        "name": "Cursos externos (4 créditos)"
    },
    {
        "id": 1791,
        "name": "Cursos externos (5 créditos)"
    },
    {
        "id": 1792,
        "name": "Introducción a Inteligencia Artificial"
    },
    {
        "id": 1793,
        "name": "Herrería"
    },
    {
        "id": 1794,
        "name": "Pasantías"
    },
    {
        "id": 1101,
        "name": "Prácticas corporales Inclusivas: construyendo puentes entre discapacidad y dignidad"
    },
    {
        "id": 1102,
        "name": "El Siglo XIX en el Arte: Impresionismo, Post Impresionismo y Realismo a través de las obras de arte del Museo Nacional de Bellas Artes"
    },
    {
        "id": 1103,
        "name": "Mujeres que defendieron mujeres, desde la antigüedad a la actualidad"
    },
    {
        "id": 1105,
        "name": "Rodolfo Kusch. Una filosofía a la intemperie"
    },
    {
        "id": 1100,
        "name": "Curso de Formación para Nuevos Vacunadores - PAI UNAHUR"
    },
    {
        "id": 1795,
        "name": "Seminarios y jornadas-2"
    },
    {
        "id": 1796,
        "name": "Seminarios y jornadas-3"
    },
    {
        "id": 1797,
        "name": "Seminarios y jornadas-4"
    },
    {
        "id": 1798,
        "name": "Seminarios y jornadas-5"
    },
    {
        "id": 1799,
        "name": "Visita a Tandanor"
    },
    {
        "id": 1800,
        "name": "CPI_Inicial nivel 1"
    },
    {
        "id": 1802,
        "name": "CPI_Intermedio nivel 5"
    },
    {
        "id": 1801,
        "name": "CPI_Pre Intermedio nivel 3"
    }
];

module.exports = { allSubjects };
