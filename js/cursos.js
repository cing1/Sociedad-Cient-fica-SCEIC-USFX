const CURSOS = [
  {
    id: 324,
    nombre:
      "Diseño, elaboración de planos y cómputos métricos de polideportivos",
    organizador: "TARIFA",
    categoria: "Estructuras",
    portada: "./img/portada-cursos/tarifa-polideportivos.jpg",
    link: "https://drive.google.com/drive/folders/1TfldryavAGMebaS6e5ew1blINn4P-khe",
    etiquetas: ["Estructuras metálicas", "Revit", "Cype 3D", "ptc Mathcad"],
  },
  {
    id: 325,
    nombre: "Cálculo y diseño de instalaciones hidrosanitarias",
    organizador: "TARIFA",
    categoria: "Hidrosanitarias",
    portada: "./img/portada-cursos/tarifa-curso_hidrosanitario.jpg",
    link: "https://drive.google.com/drive/folders/1KtYCv02p0snjy9y1MaVWi8rY00HHKpH-",
    etiquetas: [
      "Cálculo manual",
      "Revit MEP",
      "ptc Mathcad",
      "Norma boliviana",
    ],
  },

  {
    id: 1,
    nombre: "CURSOS CON CERTIFICACIÓN (-APARTADO-)",
    organizador: "CERSA",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff0eadb51-0008-40ba-9327-85c5bf803db9%2FIMG-20220417-WA0071.jpg?id=18507171-cba6-485d-a6a6-8981a6aa3a3e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://cersa.org.pe/cursosgratis/",
    etiquetas: [
      "Certificación",
      "Cursos gratuitos",
      "Formación profesional",
      "Ingeniería civil",
    ],
  },
  {
    id: 2,
    nombre: "MECÁNICA DE SUELOS EN OBRAS VIALES",
    organizador: "INGEOCONTROL",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2ba6684d-4846-4ad6-85f7-47974c68595c%2FIMG_20220408_103417_372.jpg?id=4bd840eb-4f20-4327-b19e-13a5fb80efbd&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/N6CzBe4PBUUxYjc5",
    etiquetas: [
      "Mecánica de suelos",
      "Obras viales",
      "Geotecnia",
      "Carreteras",
    ],
  },
  {
    id: 3,
    nombre: "DIPLOMADO INGENIERÍA VIAL (2019-1)",
    organizador: "CACP",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F16cc2915-5a09-4c36-9106-a840c1df9f33%2FIMG_20220408_180611_840.jpg?id=240f2067-fb6a-4af9-880c-967b37b606f2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/5OPshUZtLOs3M2Zh",
    etiquetas: [
      "Infraestructura vial",
      "Carreteras",
      "Diplomado",
      "Ingeniería civil",
    ],
  },
  {
    id: 4,
    nombre: "TALLER DISEÑO GEOMÉTRICO DE CARRETERAS",
    organizador: "GORE",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b21d2ad-e456-4a13-bfb3-8bcc81c777c0%2FIMG_20220408_180635_231.jpg?id=cfb3d829-0bfd-4ea7-9574-7390adc41f56&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/_q8DSlrUQko2MTYx",
    etiquetas: ["Diseño geométrico", "Carreteras", "Civil 3D", "Trazado vial"],
  },
  {
    id: 5,
    nombre: "DIPLOMADO INFRAESTRUCTURA VIAL",
    organizador: "CD LAMBAYEQUE",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0a918f35-52eb-4337-ae92-7ef391a7ca29%2FIMG_20220408_180659_312.jpg?id=6029d3bf-e60e-4985-9f5a-b7d74d1ddf3d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/jDB8uL0E35M5MDY5",
    etiquetas: [
      "Infraestructura vial",
      "Carreteras",
      "Diplomado",
      "Ingeniería civil",
    ],
  },
  {
    id: 6,
    nombre: "DISEÑO DE PAVIMENTOS RÍGIDOS Y FLEXIBLES - MÉTODO AASHTO",
    organizador: "IBCH",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdbf45bba-8a33-45fe-b1fb-3f3d72c6f8c2%2FIMG_20220408_180722_220.jpg?id=208322b1-f875-4b94-80c6-10d1f6644815&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/lzyU76iVxTUxMjIx",
    etiquetas: ["Pavimentos", "AASHTO", "Diseño vial", "Método empírico"],
  },
  {
    id: 7,
    nombre: "INFRAESTRUCTURA VIAL (7 SESIONES)",
    organizador: "AF",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf5c4f2f-cb09-4263-8b2d-0aa3ca819428%2FIMG_20220408_180748_790.jpg?id=41665ceb-ed24-4e81-a9c2-36a59be056e7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/qCGTiquPNONiOGE5",
    etiquetas: [
      "Infraestructura vial",
      "Carreteras",
      "Diplomado",
      "Ingeniería civil",
    ],
  },
  {
    id: 8,
    nombre:
      "SOLUCIONES BÁSICAS EN CARRETERAS NO PAVIMENTADAS DE BAJO VOLUMEN DE TRÁFICO Y SUPERFICIES ASFÁLTICAS DELGADAS",
    organizador: "",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc1be58c-98d3-4874-b231-23dc111d14e0%2FIMG_20220408_180807_282.jpg?id=02e5c0a8-c097-4a58-8aab-b43ab9d89c92&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/DLXCYF0OMfs0OWYx",
    etiquetas: [
      "Caminos rurales",
      "Carreteras",
      "Bajo tráfico",
      "Superficie asfáltica",
    ],
  },
  {
    id: 9,
    nombre: "DISEÑO DE PISTAS Y VEREDAS CON CIVIL 3D",
    organizador: "T.C.P.",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb04ebcce-83f0-446b-ad46-cae394401871%2FIMG_20220408_180826_955.jpg?id=4f38005d-2451-4494-803c-982545c7d7e6&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/5-EWOmkuF_01MmIx",
    etiquetas: ["Pistas", "Veredas", "Civil 3D", "Diseño urbano"],
  },
  {
    id: 10,
    nombre: "DISEÑO DE PAVIMENTOS Y MEZCLAS ASFÁLTICAS",
    organizador: "INGEOCONTROL",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F369e009b-35cb-44e1-9d64-8a4b454722eb%2FIMG_20220408_180853_033.jpg?id=e57fd799-d404-4bca-8e45-1a62fc8bb08f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/uyALHyUM2_U4NTMx",
    etiquetas: ["Pavimentos", "Asfalto", "Mezclas bituminosas", "Diseño vial"],
  },
  {
    id: 11,
    nombre: "MOVIMIENTO DE TIERRAS Y DISEÑO AVANZADO DE PLATAFORMAS",
    organizador: "ACADGIS",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe135f413-6aa0-4ea6-96f0-2b564fa63125%2FIMG_20220408_180916_885.jpg?id=906a011e-5789-4db1-b837-c95c4a966fc3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/O8peEofqPt40OGVh",
    etiquetas: [
      "Movimiento de tierras",
      "Plataformas",
      "Corte y relleno",
      "Civil 3D",
    ],
  },
  {
    id: 12,
    nombre: "ESPECIALISTA EN AUTODESK CIVIL 3D",
    organizador: "LSGI",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F28c2832d-c8d1-4408-9eb6-90e43ec486cd%2FIMG_20220408_180941_467.jpg?id=166ea332-3fc3-429e-80e0-1ef1abad5736&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/y1ve-8eflT1iNmUx",
    etiquetas: ["Civil 3D", "Autodesk", "Diseño vial", "Software BIM"],
  },
  {
    id: 13,
    nombre: "DISEÑO Y ELABORACIÓN DE PLANOS TOPOGRÁFICOS CON CIVIL 3D",
    organizador: "C INGENIERIA",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F00b2b289-1e5b-4524-bbb4-4cc164232456%2FIMG_20220408_181004_888.jpg?id=1ec2bb40-050b-4635-8490-adece612b9e7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/g4erjXyIHG41MzIx",
    etiquetas: [
      "Topografía",
      "Civil 3D",
      "Planos topográficos",
      "Levantamiento",
    ],
  },
  {
    id: 14,
    nombre: "ESPECIALISTA EN INFRAESTRUCTURAS CIVIL 3D",
    organizador: "ITCAD",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1e3a20cd-a2ae-4315-8c81-1f4a5957ba5a%2FIMG_20220408_181027_456.jpg?id=eade5501-7fc3-4f88-a057-7c50215f7e3b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/69oGc4RloGRjNTMx",
    etiquetas: ["Civil 3D", "Infraestructura", "Autodesk", "Especialización"],
  },
  {
    id: 15,
    nombre: "DISEÑO COMPUTARIZADO DE PRESAS Y EMBALSES",
    organizador: "BIMCAD",
    categoria: "Carreteras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbd9e89f1-1fb9-4fac-a662-d69919791870%2FIMG_20220408_181050_844.jpg?id=d6e086dc-9e45-467b-9aa2-9d5daac4be80&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/8OWpmICBwWo3N2Ux",
    etiquetas: ["Presas", "Embalses", "Diseño computarizado", "Hidráulica"],
  },
  {
    id: 16,
    nombre: "CURSOS CON CERTIFICACIÓN (-APARTADO-)",
    organizador: "CERSA",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe1e924fa-7f26-442a-ab57-4cbed358d06e%2FIMG-20220417-WA0071.jpg?id=397d7d14-a368-4f52-98ae-2532d6d26e7c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://cersa.org.pe/cursosgratis/",
    etiquetas: [
      "Diseño estructural",
      "Ingeniería civil",
      "Edificaciones",
      "Análisis",
    ],
  },
  {
    id: 17,
    nombre: "CONCRETO ARMADO",
    organizador: "CERSA",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b676cdc-9848-4c3f-b199-851606ec3a11%2Fdeformaciones-concreto-3.jpg?id=f90c322a-cc5e-42b9-98a5-b9ff19b5d1be&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://drive.google.com/drive/folders/1w_0hYbaUpgAPALez7_FaKJjea4M7lQFx?usp=sharing",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Resistencia materiales",
    ],
  },
  {
    id: 18,
    nombre:
      "PATOLOGÍA Y REHABILITACIÓN ESTRUCTURAL EN EDIFICACIONES DE CONCRETO",
    organizador: "CORE",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F367829b9-f5c0-4c43-85af-24a7a9547cbb%2FIMG_20220407_232937_105.jpg?id=dd354e56-7769-4917-81bf-434922d3dc0e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/bUXcxLSc_NExNGYx",
    etiquetas: [
      "Patología estructural",
      "Concreto",
      "Rehabilitación",
      "Durabilidad",
    ],
  },
  {
    id: 19,
    nombre: "ANÁLISIS Y DISEÑO SÍSMICO VIVIENDA MULTIFAMILIAR",
    organizador: "DGA CALCULISTAS",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F84018ec3-b00e-4a62-b7b6-6ae96776e429%2FIMG_20220407_233042_253.jpg?id=0b4e8209-ba4a-43bf-9d62-edea819850c9&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/X5QOidThf2I5NjUx",
    etiquetas: [
      "Análisis sísmico",
      "Diseño sismoresistente",
      "Norma E.030",
      "Edificaciones",
    ],
  },
  {
    id: 20,
    nombre: "SAP 2000",
    organizador: "TEDI",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc932ee16-2ffa-4938-9052-45e38ddbdd87%2FIMG_20220407_233019_449.jpg?id=7c90e12f-e27d-4b82-ac3e-98881ef001c5&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/QHWESVTzLpxhMzRh",
    etiquetas: [
      "SAP 2000",
      "Análisis estructural",
      "Software",
      "Edificaciones",
    ],
  },
  {
    id: 21,
    nombre:
      "DISEÑO SISMORRESISTENTE DE MUROS ESTRUCTURALES EN CONCRETO REFORZADO",
    organizador: "",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F167316f4-6e7c-4268-8682-a2cdd0ed397e%2FIMG_20220407_233059_470.jpg?id=87091e72-89fd-4577-a555-5a66e1092013&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/Nc59M-RC5vNlM2Vh",
    etiquetas: [
      "Análisis sísmico",
      "Diseño sismoresistente",
      "Norma E.030",
      "Edificaciones",
    ],
  },
  {
    id: 22,
    nombre: "PATOLOGÍA Y REPARACIONES DE ESTRUCTURAS DE HORMIGÓN ARMADO",
    organizador: "CYBOT",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdeaae28d-49b7-4dad-bd58-4351d3bd92ce%2FIMG_20220408_125229_214.jpg?id=e9d013cf-e259-4c6b-94b3-3957144637e4&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/JL-6vPTVFxA5NWYx",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Resistencia materiales",
    ],
  },
  {
    id: 23,
    nombre: "ROBOT STRUCTURAL 2020",
    organizador: "UNIENSEÃ‘A",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc294cb4f-e5f9-4bca-a016-a5f87f672841%2FIMG_20220408_125249_192.jpg?id=c8216d46-d280-47c6-9a8e-ebe7f9cbde68&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/uBm0wDA8kOE5YmEx",
    etiquetas: [
      "Robot Structural",
      "Análisis estructural",
      "Software Autodesk",
      "Edificaciones",
    ],
  },
  {
    id: 24,
    nombre:
      "CURSO ANÁLISIS Y DISEÑO DE EDIFICIOS DE HORMIGÓN ARMADO APLICANDO SAP 2000",
    organizador: "MAUDEZ",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3375cadd-3fe9-46c9-999e-49b69ab94e1b%2FIMG_20220408_125308_903.jpg?id=ebaf9192-9e9f-412a-80d4-952a60cc3edd&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/x-izRm1gwwdmY2Fh",
    etiquetas: [
      "Concreto armado",
      "SAP 2000",
      "Análisis estructural",
      "Edificaciones",
    ],
  },
  {
    id: 25,
    nombre: "CURSO DE DISEÑO DE ALBAÑILERÍA CONFINADA CON ETABS V19",
    organizador: "SMART ENGINEERS",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcfc19437-df64-410e-b0f8-c44187b9dffd%2FIMG_20220408_125328_056.jpg?id=eda3a371-a78d-4413-b94a-fde2535b910c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/kkyWwSQpYuplYzZh",
    etiquetas: [
      "ETABS",
      "Análisis sísmico",
      "Software estructural",
      "Edificaciones",
    ],
  },
  {
    id: 26,
    nombre: "ANÁLISIS SÍSMICO DE EDIFICIOS CON DISIPADORES DE ENERGÍA",
    organizador: "DIESCON",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc9cb41cb-7042-4899-9520-acc1a2329c71%2FIMG_20220408_125346_787.jpg?id=f955bbac-00c3-4536-af03-23cd17629b5c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/4y3pDDTolwYzYWYx",
    etiquetas: [
      "Análisis sísmico",
      "Disipadores de energía",
      "Dinámica estructural",
      "Edificaciones",
    ],
  },
  {
    id: 27,
    nombre: "PATOLOGÍA DE ESTRUCTURAS DE HORMIGÓN DE CONCRETO ARMADO",
    organizador: "BIMCAT",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd63c462a-d4d1-4e9b-a917-5b52a388d31d%2FIMG_20220408_125409_710.jpg?id=a1bc562f-8a92-42bb-895c-314caac909f7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/vu3cAtloVMA0NzVh",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Resistencia materiales",
    ],
  },
  {
    id: 28,
    nombre:
      "CURSO DE ESPECIALIZACIÓN EN ANÁLISIS SISMORESISTENTE DE EDIFICACIÓN Y DISEÑO CONCRETO ARMADO",
    organizador: "WSISMICA",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcd04794e-30e2-4581-87ee-4f2be5072f6e%2FIMG_20220408_125430_531.jpg?id=462576aa-8e62-44f1-842d-792e06c1aa15&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/52f--NbHGeA2Y2I5",
    etiquetas: [
      "Concreto armado",
      "Diseño sísmico",
      "Resistencia sísmica",
      "Estructuras",
    ],
  },
  {
    id: 29,
    nombre: "CURSO INGENIERÍA DE CIMENTACIONES",
    organizador: "CD LAMBAYEQUE",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed474632-92a4-467d-870c-fd9f42d8f5c1%2FIMG_20220408_125446_884.jpg?id=6be7dedc-1aa9-4346-8f2f-b331d4daf4ce&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/SPrCVo0es4VmZGMx",
    etiquetas: [
      "Cimentaciones",
      "Fundaciones",
      "Geotecnia",
      "Ingeniería civil",
    ],
  },
  {
    id: 30,
    nombre: "ANÁLISIS Y DISEÑO EN ALBAÑILERÍA CONFINADA 2019",
    organizador: "CCIP",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F61115c0b-2308-40df-b03f-a68acf3c5d2d%2FIMG_20220408_125508_662.jpg?id=4c0724ee-db46-46cd-9f75-257e6bd4c550&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/UNmRvgsi2wgzYjJh",
    etiquetas: [
      "Albañilería confinada",
      "Diseño estructural",
      "ETABS",
      "Muros",
    ],
  },
  {
    id: 31,
    nombre:
      "ESTRUCTURACIÓN, ANÁLISIS Y DISEÑO DE EDIFICACIONES EN CONCRETO ARMADO",
    organizador: "CCIP",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa8e0046-626c-42fc-b0b0-45458071d640%2FIMG_20220408_125551_870.jpg?id=1139d53c-f9c3-49b5-bad6-113ada8f6ebe&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/kJ5XNyk51SQ0YTMx",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Resistencia materiales",
    ],
  },
  {
    id: 32,
    nombre:
      "ANÁLISIS Y DISEÑO DE EDIFICACIONES DE ALBAÑILERÍA CONFINADA CON ETABS, SAP 2000 Y SAFE",
    organizador: "PROYECT ING",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa2e4cb19-b309-4198-90a0-3d7f4db096fb%2FIMG_20220407_233413_330.jpg?id=bb3a4688-2634-4384-8a75-6ddeb6df6cf3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/3eqRATeoN2RjZmMx",
    etiquetas: [
      "SAP 2000",
      "Análisis estructural",
      "Software",
      "Edificaciones",
    ],
  },
  {
    id: 33,
    nombre:
      "DISEÑO PRÁCTICO DE CIMENTACIONES SUPERFICIALES EN EDIFICACIONES USANDO CSI SAFE",
    organizador: "MHIA",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e73b311-4bcb-4d49-acb4-6ab7307bc258%2FIMG_20220407_233428_816.jpg?id=bbae40f7-bc70-4a6f-a7f8-d19a44792e5a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/KSKE3rYq9Sc4M2Zh",
    etiquetas: ["CSI SAFE", "Cimentaciones", "Losas", "Software estructural"],
  },
  {
    id: 34,
    nombre: "DISEÑO DE EDIFICIOS DE CONCRETO ARMADO",
    organizador: "OPTIMO OPH",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff63eb6ee-bc0f-4dd2-92bd-2c27587e8548%2FIMG_20220407_233439_381.jpg?id=0bf069d1-95f2-4d49-8709-de01690e810f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ZnKTHJHjeEhkMDNh",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Resistencia materiales",
    ],
  },
  {
    id: 35,
    nombre:
      "REFORZAMIENTO ESTRUCTURAL DE EDIFICACIONES EMPLEANDO ANÁLISIS NO LINEAL",
    organizador: "CE",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F999e9367-8784-4686-a148-9e1921d2b392%2FIMG_20220407_233620_537.jpg?id=d894370f-625c-4135-adb8-25bc0723aab9&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/0NOkSKYrSGhkZmY5",
    etiquetas: [
      "Reforzamiento estructural",
      "Análisis no lineal",
      "Rehabilitación",
      "Concreto",
    ],
  },
  {
    id: 36,
    nombre: "CURSO DISEÑO DE EDIFICIOS DE CONCRETO ARMADO CON CYPECAD",
    organizador: "PORTACIVIL",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20a2a967-d377-4c9e-94bd-8f601daf0dd5%2FIMG_20220408_125646_004.jpg?id=31601f76-d180-4f20-91ab-7925413c1f02&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/zx3lCX_vVes1MWIx",
    etiquetas: ["Concreto armado", "CYPECAD", "Diseño estructural", "Software"],
  },
  {
    id: 37,
    nombre:
      "MASTER INTERNACIONAL EN PROYECTOS SISMORESISTENTE DE ESTRUCTURAS DE CONCRETO ARMADO Y PRECOMPRIMIDO",
    organizador: "ZIGURAT",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5239e28e-34a1-4c34-942b-181e9321c6eb%2FIMG_20220408_125715_461.jpg?id=50d2b2c4-a727-47ea-8e9f-8919eb901bd3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/dgDukEZahGcxYzFh",
    etiquetas: [
      "Concreto armado",
      "Diseño sísmico",
      "Resistencia sísmica",
      "Estructuras",
    ],
  },
  {
    id: 38,
    nombre:
      "CURSO ESPECIALIZADO MÉTODOS DE DISIPACIÓN DE ENERGÍA EN ESTRUCTURAS",
    organizador: "FUNDEXTENSUS",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb437f26-b5a0-4f93-9e5f-cf4e56f1dc13%2FIMG_20220408_125829_338.jpg?id=2272ec7f-0d94-479f-b923-3fc191fd0123&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/qCfh7NTb-dYyNTYx",
    etiquetas: [
      "Disipación de energía",
      "Estructuras",
      "Sismo",
      "Sistemas de control",
    ],
  },
  {
    id: 39,
    nombre: "PTC MATHCAD PRIME APLICADA A LA INGENIERÍA CIVIL",
    organizador: "MAUDEZ",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F047eaa3e-e086-4ed4-acb3-0f89ecbed4ac%2FIMG_20220408_125853_496.jpg?id=1917b4a6-e815-4e15-8c5c-dcb6a19f0a08&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/mB6HOqPBED02Njlh",
    etiquetas: [
      "MathCAD",
      "Cálculo estructural",
      "Software",
      "Ingeniería civil",
    ],
  },
  {
    id: 40,
    nombre: "TALLER DISEÑO SÍSMICO DE PUENTES",
    organizador: "IFIC UNI",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c681e36-b3a4-4884-878c-ca7848f2e341%2FIMG_20220408_125916_534.jpg?id=954daf55-e37c-44bf-a74d-402a9bb7975b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/zgMsbHXTGlkyOTM5",
    etiquetas: [
      "Análisis sísmico",
      "Diseño sismoresistente",
      "Norma E.030",
      "Edificaciones",
    ],
  },
  {
    id: 41,
    nombre: "SOLID WORKS APLICADO A DISEÑO DE ESTRUCTURAS METÁLICAS",
    organizador: "AYALA CONSULT",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7d7eb451-ec91-48e8-a2aa-591ca9fdfa57%2FIMG_20220408_130020_827.jpg?id=7a5a22cf-368a-48df-9cfa-788b8c7d0b8f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/OqN8TA2FsjQ1ZDMx",
    etiquetas: ["SolidWorks", "Estructuras metálicas", "Diseño 3D", "Software"],
  },
  {
    id: 42,
    nombre: "DINÁMICA ESTRUCTURAL Y ANALISIS SÍSMICO DE EDIFICIOS",
    organizador: "SA",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff5c9a715-5087-4316-b98d-acc8236c3918%2FIMG_20220408_130049_211.jpg?id=7bdb891f-9e47-455c-998d-bf4a173cd900&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/_tVUWIOf0nQ1NzEx",
    etiquetas: [
      "Análisis sísmico",
      "Diseño sismoresistente",
      "Norma E.030",
      "Edificaciones",
    ],
  },
  {
    id: 43,
    nombre:
      "INGENIERÍA DE ESTRUCTURAS DE CONCRETO ARMADO Y ESTRUCTURAS METÁLICAS 2020",
    organizador: "CACP",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d281c23-ece6-4e7b-9bac-0d1851872bc7%2FIMG_20220408_130124_068.jpg?id=e83021e4-0360-43d5-b4d5-88e77e0583e6&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/e9VlL5J3Wa4yYzUx",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Resistencia materiales",
    ],
  },
  {
    id: 44,
    nombre:
      "ESTRUCTURACIÓN, PREDIMENSIONAMIENTO Y PRESENTACIÓN DE PLANOS ESTRUCTURALES 2020",
    organizador: "LV ACADEMY",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe035a09d-30e1-4785-93d9-af0831cd91ad%2FIMG_20220408_130152_765.jpg?id=0d038cc0-f40f-4827-a18f-928490963463&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/BAOveJN_HxZhYWUx",
    etiquetas: [
      "Predimensionamiento",
      "Diseño estructural",
      "Planos estructurales",
      "Concreto armado",
    ],
  },
  {
    id: 45,
    nombre: "DISEÑO AVANZADO DE HORMIGON ARMADO",
    organizador: "INFINITY",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F61d6f8e6-c830-4a71-ba08-5d34d406c715%2FIMG_20220408_130219_471.jpg?id=28ae588f-e61a-46b4-ac90-7015483559e4&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/DtTZE29xfH4zYWUx",
    etiquetas: [
      "Diseño estructural",
      "Ingeniería civil",
      "Edificaciones",
      "Análisis",
    ],
  },
  {
    id: 46,
    nombre:
      "ESTRUCTURACIÓN ANÁLISIS Y DISEÑO DE VIVIENDAS UNIFAMILIARES Y MULTIFAMILIARES",
    organizador: "EMEQ",
    categoria: "Estructuras",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd8b46d47-a049-441c-b017-a7152912f9cf%2FIMG_20220408_130305_145.jpg?id=60373a51-e865-430d-90e5-0ab83fa688ef&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/nDIUasJD9NNjZjJh",
    etiquetas: [
      "Diseño estructural",
      "Análisis sísmico",
      "Edificaciones",
      "Concreto armado",
    ],
  },
  {
    id: 47,
    nombre: "CURSOS CON CERTIFICACIÓN (-APARTADO-)",
    organizador: "CERSA",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53ab643d-5ed8-475b-875f-4aed3c0fdf1a%2FIMG-20220417-WA0071.jpg?id=010db505-365f-4d75-9809-b9c254b6400a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://cersa.org.pe/cursosgratis/",
    etiquetas: ["Geotecnia", "Suelos", "Ingeniería civil", "Cimentaciones"],
  },
  {
    id: 48,
    nombre: "ESTABILIDAD DE TALUDES",
    organizador: "CECFIC",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F949ba5a2-656f-4411-9d54-42242dc09137%2FIMG_20220408_100810_566.jpg?id=938f19e9-f8d1-4c93-b3fb-a47e5067d9a2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/YlAf3DZ-30FlOWVh",
    etiquetas: [
      "Estabilidad de taludes",
      "Geotecnia",
      "Suelos",
      "Deslizamientos",
    ],
  },
  {
    id: 49,
    nombre: "TALLER ESTUDIO GEOTÉCNICO PARA EDIFICACIONES",
    organizador: "CECFIC",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F261edc81-6428-4568-97ef-dc1c4dc8db5a%2FIMG_20220408_100835_360.jpg?id=6ad39f44-519e-4437-ae4e-d059ed358a5c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/pgZe1w_LEJYxOGIx",
    etiquetas: ["Geotecnia", "Suelos", "Ingeniería civil", "Cimentaciones"],
  },
  {
    id: 50,
    nombre: "INGENIERÍA GEOTÉCNICA",
    organizador: "CACP",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25a21e77-9a10-4fbe-bfd8-177136530c8b%2FIMG_20220408_100855_393.jpg?id=77ecd0cd-ac46-44fc-ae58-74ab7e4c03b0&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/jxUKO5F8lhcyZTRh",
    etiquetas: [
      "Geotecnia",
      "Mecánica de suelos",
      "Obras civiles",
      "Cimentaciones",
    ],
  },
  {
    id: 51,
    nombre: "GEOTECNIA APLICADA A OBRAS CIVILES",
    organizador: "LARAMA",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F779a76bc-1c65-40b6-9fd2-53719c80a39f%2FIMG_20220408_100913_482.jpg?id=f92b3e6a-326b-4e92-a583-5b667e89a7a2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/CifraJRDfyMyNjBh",
    etiquetas: [
      "Geotecnia",
      "Mecánica de suelos",
      "Obras civiles",
      "Cimentaciones",
    ],
  },
  {
    id: 52,
    nombre: "ESTUDIO DE MECÁNICA DE SUELOS Y GEOTÉCNICO EN EDIFICACIONES",
    organizador: "EDPA",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F776e90fe-1892-413c-a5d1-39ca71c2af35%2FIMG_20220408_100931_002.jpg?id=1313b37f-33be-416e-947a-db37cbd1cd03&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/95lTOIH7PLkxMjUx",
    etiquetas: [
      "Mecánica de suelos",
      "Geotecnia",
      "Ensayos de suelo",
      "Cimentaciones",
    ],
  },
  {
    id: 53,
    nombre: "TELEDETECCIÓN AMBIENTAL APLICADO A LA INVESTIGACIÓN",
    organizador: "ASULGIS",
    categoria: "Geotecnia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcbd18a1f-510d-42d2-8a28-0e6ca7a0aa54%2FIMG_20220408_100957_352.jpg?id=93ed7a7f-c4f0-40ba-82d2-fc53439a9928&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/WRhaCtg7TFNlOGIx",
    etiquetas: ["Teledetección", "SIG", "Medio ambiente", "Investigación"],
  },
  {
    id: 54,
    nombre: "CURSOS CON CERTIFICACIÓN (-APARTADO-)",
    organizador: "CERSA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F388f98f9-2f40-4ee3-8226-150354caa152%2FIMG-20220417-WA0071.jpg?id=4bd3dca8-e2cd-447b-83ef-5d35599a6f5f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://cersa.org.pe/cursosgratis/",
    etiquetas: [
      "Gestión de proyectos",
      "Construcción",
      "Administración",
      "Ingeniería civil",
    ],
  },
  {
    id: 55,
    nombre: "SEGURIDAD Y SALUD EN EL TRABAJO",
    organizador: "CCH",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F39b6671e-0e04-49d8-ac7c-632b6f59396e%2FIMG_20220408_195501_215.jpg?id=19d99539-2d3a-4beb-a53b-855d6be59a16&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/-5XQubIPwkU4MDAx",
    etiquetas: ["Seguridad en obra", "Salud ocupacional", "SST", "OHSAS"],
  },
  {
    id: 56,
    nombre: "GESTIÓN DE SUBCONTRATOS",
    organizador: "K+K GROUP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F33b29a02-c43c-4226-9d3f-0633c2da4934%2FIMG_20220408_195529_970.jpg?id=99dbeca3-a080-4b7d-ae17-491d3768c6ed&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/4z6Si3k3LfVlYzMx",
    etiquetas: [
      "Subcontratos",
      "Gestión contractual",
      "Proveedores",
      "Construcción",
    ],
  },
  {
    id: 57,
    nombre: "PULL PLANNING (JORGE MIRANDA)",
    organizador: "IDEAS CAMPUS",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53c504bf-c2d6-4ef6-b842-a54b727e4734%2FIMG_20220408_195610_252.jpg?id=c04457ba-c9f3-45e8-9d17-46902fa1cad5&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/H5MB7ZUHG4VjYWMx",
    etiquetas: [
      "Pull Planning",
      "Planificación colaborativa",
      "Lean Construction",
      "Programación",
    ],
  },
  {
    id: 58,
    nombre: "RESULTADO OPERATIVO (RO)",
    organizador: "AB ESCUELA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa4a1e0e7-4533-47b5-88e7-38b0e4f90f1e%2FIMG_20220408_195648_963.jpg?id=5eb3f2c7-0588-4cd8-a50b-5e7a563102f2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/2Weql2jagVk3OGMx",
    etiquetas: [
      "Resultado operativo",
      "Control financiero",
      "Gestión de obras",
      "Costos",
    ],
  },
  {
    id: 59,
    nombre: "OFICINA TÉCNICA",
    organizador: "AB ESCUELA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F757a0780-eab4-45b0-aaf1-0669d7c3a486%2FIMG_20220408_195714_259.jpg?id=bae033ad-b49b-4f71-8308-714eb3b5ff0d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/86OXQn8Y5LE4NWRh",
    etiquetas: [
      "Oficina técnica",
      "Control de obras",
      "Documentación",
      "Gestión",
    ],
  },
  {
    id: 60,
    nombre: "LEAN CONSTRUCTION",
    organizador: "TC C&T",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F64fe4a24-8db5-4099-b537-0bc0dbdac2e1%2FIMG_20220408_195732_858.jpg?id=48ae3273-fd2f-4476-a391-846dbf06dd28&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/5rptN-BOMZRlZmVh",
    etiquetas: [
      "Lean Construction",
      "Productividad",
      "Construcción sin pérdidas",
      "Gestión de obras",
    ],
  },
  {
    id: 61,
    nombre: "CONTROL DE PROYECTOS PROJECT 2016",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafbd5661-4d12-4e7a-a82d-7646224a4fb9%2FIMG_20220408_195833_576.jpg?id=836d7840-6fd5-465d-badf-d39421df68e1&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/k7IKV6ROdB1mYWVh",
    etiquetas: ["Control de proyectos", "Seguimiento", "Cronograma", "Gestión"],
  },
  {
    id: 62,
    nombre: "PROGRAMACIÓN DE OBRAS GUÍA DEL PMBOK Y PROJECT 2016",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb53b0a68-71c0-4827-901b-209058ab3193%2FIMG_20220408_195918_850.jpg?id=31dffb8e-9e4a-4b30-ae84-14473320ddc0&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/nOX9RPgGS-lmNmFh",
    etiquetas: [
      "PMBOK",
      "MS Project",
      "Gestión de proyectos",
      "Programación de obras",
    ],
  },
  {
    id: 63,
    nombre: "GESTIÓN DE LA CALIDAD EN PROYECTOS DE CONSTRUCCIÓN",
    organizador: "INGENIUM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F376aeda9-5c8a-4f23-8cf6-706c62438706%2FIMG_20220408_211457_248.jpg?id=875e2a1f-788e-45d9-85fe-c0ffd758e15d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/QPo-E8C7DmU4MWU5",
    etiquetas: [
      "Gestión de calidad",
      "Control de calidad",
      "ISO",
      "Construcción",
    ],
  },
  {
    id: 64,
    nombre: "JEFE DE OFICINA TÉCNICA POWER BI",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fed45e4d3-97ee-434f-977a-dcf19f669a7a%2FIMG_20220408_211521_970.jpg?id=2adf9b1c-aa31-499c-a9df-0a8adf7acf30&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/AVpwMEsZTqJkYzQ5",
    etiquetas: [
      "Power BI",
      "Business Intelligence",
      "Dashboards",
      "Gestión de datos",
    ],
  },
  {
    id: 65,
    nombre: "DASHBOARD INTERACTIVOS",
    organizador: "G-INPRO",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3b98bd4b-b7d8-4c67-a457-0142a63c7405%2FIMG_20220408_211547_039.jpg?id=a54a8770-fbd7-4516-9075-64be85034404&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/C_08x7SyV3g2ZmRh",
    etiquetas: ["Dashboards", "Power BI", "Visualización de datos", "Gestión"],
  },
  {
    id: 66,
    nombre: "TALLER DE EXPEDIENTES PARA LICENCIA DE EDIFICACIÓN",
    organizador: "IFIC UNI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fccba69ff-ab7d-4868-a1d2-804d42c0d69e%2FIMG_20220408_211612_406.jpg?id=c924b2d2-ffb5-4a37-8a58-427fe295dcff&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/EnuqJd54DmwxZWY5",
    etiquetas: [
      "Licencia de edificación",
      "Trámites municipales",
      "Normativa",
      "Gestión",
    ],
  },
  {
    id: 67,
    nombre: "TASACIONES EN EDIFICACIONES",
    organizador: "IFIC UNI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F419d7348-a6f9-4df2-96e9-afb2ce709807%2FIMG_20220408_211642_836.jpg?id=db63b365-44da-453a-b70b-e61f4771df13&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/iMOdwLcU84hlZjIx",
    etiquetas: [
      "Tasaciones",
      "Valoración inmobiliaria",
      "Peritaje",
      "Edificaciones",
    ],
  },
  {
    id: 68,
    nombre: "ELABORACIÓN DE EXPEDIENTES TÉCNICOS PARA LICITACIONES PÚBLICAS",
    organizador: "CAP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6a10bc6f-b187-4bf7-b609-a8ce356810ec%2FIMG_20220408_211704_572.jpg?id=9eb8d325-3bc2-4677-86ed-4e34d795dff1&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/n6GMvq0_izs5MDVh",
    etiquetas: [
      "Licitaciones",
      "Contrataciones del Estado",
      "Expediente técnico",
      "Obras públicas",
    ],
  },
  {
    id: 69,
    nombre: "APLICACIÓN HERRAMIENTAS LEAN EN OBRAS DE CONSTRUCCIÓN",
    organizador: "PRO MGMT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7304e912-f57a-405d-a6b1-a319d6e99167%2FIMG_20220408_211736_399.jpg?id=144f206c-4d5f-4fa9-a7f4-c52f2cd370dc&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/HA4P35rdK0Y2ZmYx",
    etiquetas: [
      "Gestión de proyectos",
      "Construcción",
      "Administración",
      "Ingeniería civil",
    ],
  },
  {
    id: 70,
    nombre: "APRENDIENDO LAS APLICACIONES DE LEAN CONSTRUCTION",
    organizador: "E-CONSTRUCTION",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f731162-f265-4bf3-a5a3-77c2a7421901%2FIMG_20220408_212000_998.jpg?id=e414cabe-9e45-49d2-9f95-375d67b34980&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/anOon9pOpPMwYTVh",
    etiquetas: [
      "Lean Construction",
      "Productividad",
      "Construcción sin pérdidas",
      "Gestión de obras",
    ],
  },
  {
    id: 71,
    nombre: "JEFE DE PRODUCCIÓN EN EDIFICACIONES",
    organizador: "PRO MGMT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb4b5334a-24bd-4b15-bc18-cea90f9b12c5%2FIMG_20220408_212023_081.jpg?id=b9a2158a-d9dc-4970-bda6-6c58b91c0ca3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/My_KV5G57Ic0MTk5",
    etiquetas: [
      "Jefe de producción",
      "Control de obras",
      "Planificación",
      "Edificaciones",
    ],
  },
  {
    id: 72,
    nombre: "CURSO GESTIÓN DE OBRAS SIN PÉRDIDA",
    organizador: "360Â° LEAM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4eab8835-e48c-49ca-afbb-46d25e9a1b1b%2FIMG_20220408_212105_717.jpg?id=369c5d15-7c03-4319-a82e-13c97e80e1d1&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/QTbPXmG5mdQ5M2Nh",
    etiquetas: [
      "Gestión de obras",
      "Construcción",
      "Administración",
      "Proyectos",
    ],
  },
  {
    id: 73,
    nombre: "EFICIENCIA EN LA CONSTRUCCIÓN",
    organizador: "K+K GROUP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d1803c2-5a33-4f23-9531-24484100ee37%2FIMG_20220408_212127_889.jpg?id=4e66135e-9cb2-49f0-b007-17cb85242741&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/74Vo5IAJfcZhYTU5",
    etiquetas: [
      "Gestión de proyectos",
      "Construcción",
      "Administración",
      "Ingeniería civil",
    ],
  },
  {
    id: 74,
    nombre: "LEAN CONSTRUCTION + POWER BI",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3f2976d-e3d1-4949-8674-37e2967639ca%2FIMG_20220408_212151_721.jpg?id=ca28e6d8-9f5d-4779-af83-1f2fe55ca53e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/_qOAqwhKSfg3MDU5",
    etiquetas: [
      "Lean Construction",
      "Productividad",
      "Construcción sin pérdidas",
      "Gestión de obras",
    ],
  },
  {
    id: 75,
    nombre: "GESTIÓN DE RIESGOS CON ENFOQUE PMI",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faaf6ebaf-3fb4-47f0-9326-195f4f5b37c1%2FIMG_20220408_212214_024.jpg?id=dec25533-ee83-47ee-923c-0e7b440c8ca7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/LVPadVG28J0zMTYx",
    etiquetas: ["PMI", "Gestión de riesgos", "Proyectos", "Metodología"],
  },
  {
    id: 76,
    nombre: "PROGRAMACIÓN DE OBRA CON MS PROJECT",
    organizador: "BIM PROJETC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e55a545-357a-47b2-8159-a405df27acc3%2FIMG_20220408_212247_662.jpg?id=5a9cb9eb-915b-49c4-b497-baa94c3c8f33&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/S16pCfxBU2gyZmZh",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 77,
    nombre: "LEAN CONSTRUCTION Y LAST PLANNER EN INFRAESTRUCTURA",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F746bea8c-4752-4de1-81bd-f3f9cfa2b0c3%2FIMG_20220408_212311_022.jpg?id=aa6e527e-ccb1-45e4-89d0-c3492192cbb7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/6gp70v_FdPM5YTUx",
    etiquetas: [
      "Lean Construction",
      "Last Planner",
      "Planificación",
      "Productividad",
    ],
  },
  {
    id: 78,
    nombre: "S10 COSTOS Y PRESUPUESTOS",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F604fbf7e-68fa-4e62-bf0e-7ab4d03d9b03%2FIMG_20220408_212338_985.jpg?id=a6996a97-5519-4b2a-ab2d-eead0cb89deb&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/84z5t33cZ4k3NDJh",
    etiquetas: ["S10", "Costos y presupuestos", "Software", "Gestión de obras"],
  },
  {
    id: 79,
    nombre: "RISK ANALYSIS BAJO EL ENFOQUE PMI",
    organizador: "GINPRO",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb898392-45dc-4e4b-bc1c-a13625af2f35%2FIMG_20220408_213802_870.jpg?id=a16dfbc0-8eec-4d03-a99a-22d76a0844a9&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/3A9oIi1wOXY3NjYx",
    etiquetas: ["PMI", "Gestión de riesgos", "Proyectos", "Metodología"],
  },
  {
    id: 80,
    nombre: "VALORIZACIÓN Y LIQUIDACIÓN DE OBRA",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe473899d-3f73-4b99-a1d6-832e03a70b5b%2FIMG_20220408_213828_767.jpg?id=9bff74ad-b09a-49c5-adc4-8f5450c1a8fe&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/MLj2MVzda6g1OTMx",
    etiquetas: [
      "Valorización",
      "Liquidación de obras",
      "Control de costos",
      "Obras públicas",
    ],
  },
  {
    id: 81,
    nombre: "ESTRATEGIAS Y CONCEPTOS DE COSTOS EN EDIFICACIONES",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06a1c3ac-4d18-4d78-b931-36e2609a504a%2FIMG_20220408_213850_785.jpg?id=722134d7-66ca-4ada-8239-8643ac40cd5e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/oT51g9JmFjc4OTRh",
    etiquetas: [
      "Estrategia de costos",
      "Control financiero",
      "Edificaciones",
      "Gestión",
    ],
  },
  {
    id: 82,
    nombre: "DISEÑO Y CONSTRUCCIÓN DE ESTABLECIMIENTO DE SALUD",
    organizador: "ASPAIH",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1dde6a0-e328-40f8-a3b2-bea2548e11cd%2FIMG_20220408_213922_416.jpg?id=1961dc07-f3b7-41d1-a7a0-be1317f02c61&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ED7C0opxnBZlM2Yx",
    etiquetas: [
      "Establecimientos de salud",
      "Infraestructura",
      "Normas técnicas",
      "Diseño hospitalario",
    ],
  },
  {
    id: 83,
    nombre: "PRODUCCIÓN DE OBRA (EDIC 18)",
    organizador: "CEFORE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb59b0935-cfda-40b5-afe5-72af1e7568a5%2FIMG_20220408_213950_405.jpg?id=e3d64d05-9ace-4e40-873e-de5d0b911d8b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/A4rtQ8wAg-IyYTFh",
    etiquetas: [
      "Jefe de producción",
      "Control de obras",
      "Planificación",
      "Edificaciones",
    ],
  },
  {
    id: 84,
    nombre: "PRODUCCIÓN DE OBRA (EDIC 18)",
    organizador: "CEFORE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb59b0935-cfda-40b5-afe5-72af1e7568a5%2FIMG_20220408_213950_405.jpg?id=e3d64d05-9ace-4e40-873e-de5d0b911d8b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/A4rtQ8wAg-IyYTFh",
    etiquetas: [
      "Jefe de producción",
      "Control de obras",
      "Planificación",
      "Edificaciones",
    ],
  },
  {
    id: 85,
    nombre: "OFICINA TÉCNICA",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7baac033-2b6c-4835-8f28-36106b90e0b3%2FIMG_20220408_214017_809.jpg?id=2b2694b9-a4e1-4d39-87dc-4769d23de08f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/zcE09akAvroxMDVh",
    etiquetas: [
      "Oficina técnica",
      "Control de obras",
      "Documentación",
      "Gestión",
    ],
  },
  {
    id: 86,
    nombre: "GESTIÓN DE LA CONSTRUCCIÓN EN EDIFICACIÓN",
    organizador: "AB ESCUELA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe514fe13-1692-43e4-a10e-edb964039ce5%2FIMG_20220408_214043_433.jpg?id=0709385c-ef83-42ce-b878-331fc2351278&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ZF9Wuc6sFI1hM2Qx",
    etiquetas: [
      "Gestión de obras",
      "Construcción",
      "Administración",
      "Proyectos",
    ],
  },
  {
    id: 87,
    nombre: "LICENCIA DE EDIFICACIÓN VIVIENDA",
    organizador: "",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F959e4efd-616c-4edb-a80a-ebb2c8cf1959%2FIMG_20220408_214107_762.jpg?id=c41e64d4-a540-468c-b996-603270792a6f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/xlwgrrNNmk44MTEx",
    etiquetas: [
      "Licencia de edificación",
      "Trámites municipales",
      "Normativa",
      "Gestión",
    ],
  },
  {
    id: 88,
    nombre: "RESIDENTE DE OBRA PRIVADAS + POWER BI",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe6fdfaf5-b488-4e7d-9c24-5f5677eb3f0e%2FIMG_20220409_073451_229.jpg?id=6065fe96-76e6-40aa-9e57-ef886a8d177d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/vOKte79ZVsIyZWJh",
    etiquetas: [
      "Power BI",
      "Business Intelligence",
      "Dashboards",
      "Gestión de datos",
    ],
  },
  {
    id: 89,
    nombre: "INTELIGENCIA DE NEGOCIOS CON POWER BI Y POWER PIVOT",
    organizador: "CACP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2a95e829-1091-4c2a-b810-05d9bf69cc4b%2FIMG_20220409_073508_775.jpg?id=fd4809aa-5be9-419a-8498-7cc605c3a725&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/YJUukvja3dc2MmUx",
    etiquetas: [
      "Power BI",
      "Business Intelligence",
      "Dashboards",
      "Gestión de datos",
    ],
  },
  {
    id: 90,
    nombre: "JEFE DE PRODUCCIÓN (VER. NOV. 2020)",
    organizador: "ITC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb650e37-b6c8-4cd3-9dfb-986a46e84578%2FIMG_20220409_073525_811.jpg?id=6435cac0-3b51-417c-a0fa-6c9cae4557de&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/n5hCtL3sswxiMWUx",
    etiquetas: [
      "Jefe de producción",
      "Control de obras",
      "Planificación",
      "Edificaciones",
    ],
  },
  {
    id: 91,
    nombre: "PRODUCCIÓN DE OBRA (DIC 2020)",
    organizador: "AB ESCUELA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F38021301-f5f7-45e6-baff-190c56951f19%2FIMG_20220409_073546_652.jpg?id=ff7cb9d1-56a3-445f-ab4d-4fdf5f467230&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/rLcUzPebAXA5OTY5",
    etiquetas: [
      "Jefe de producción",
      "Control de obras",
      "Planificación",
      "Edificaciones",
    ],
  },
  {
    id: 92,
    nombre:
      "DIPLOMADO ESPECIALIZADO GERENCIA Y GESTION DE PROYECTOS (JULIO 2020)",
    organizador: "PDEE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4e774627-056c-4214-8be2-f907a6e50ea2%2FIMG_20220409_073602_734.jpg?id=f4ce5d78-c5b0-461d-8b5b-90db8351823b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/gvhdvJgBoWA0ODMx",
    etiquetas: [
      "Gestión de proyectos",
      "Construcción",
      "Administración",
      "Ingeniería civil",
    ],
  },
  {
    id: 93,
    nombre: "CONTROL DE PROYECTOS DE CONSTRUCCIÓN",
    organizador: "AB ESCUELA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F91f56393-178a-4e84-96f0-ae1aac87c538%2FIMG_20220409_073627_140.jpg?id=3c703262-7e1a-4e7e-adf3-04babd9ecf49&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/JFbaAzKapAAyMmJh",
    etiquetas: ["Control de proyectos", "Seguimiento", "Cronograma", "Gestión"],
  },
  {
    id: 94,
    nombre: "FORMACIÓN DE DIRECTORES DE OBRA",
    organizador: "BIMCAT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe47aca62-f6d7-4720-9f52-75ab60ce1c4e%2FIMG_20220409_073645_576.jpg?id=939b0960-4a75-404b-b35e-c529bc3b80a1&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/1pIx5DopkbU3ODYx",
    etiquetas: [
      "Dirección de obra",
      "Liderazgo",
      "Gestión de proyectos",
      "Construcción",
    ],
  },
  {
    id: 95,
    nombre: "CURSO LECTURA DE PLANOS",
    organizador: "ICIP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1cea79a4-28c4-46ff-813f-69127f0d0a92%2FIMG_20220409_073704_671.jpg?id=8811b63d-8848-46e2-8a77-faa2ee185700&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/0Qhkq-MBhwljYTlh",
    etiquetas: [
      "Lectura de planos",
      "Interpretación de planos",
      "Obra civil",
      "Documentación",
    ],
  },
  {
    id: 96,
    nombre: "CONTROL ECONÓMICO DE PROYECTOS RESULTADO OPERATIVO",
    organizador: "CEFORE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F39aba232-9092-4bfa-9461-f2946a93b4b8%2FIMG_20220409_073721_630.jpg?id=f69ffc09-1319-4b85-8195-09c686a3b490&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/wWp8vLUrMtE0ODlh",
    etiquetas: [
      "Resultado operativo",
      "Control financiero",
      "Gestión de obras",
      "Costos",
    ],
  },
  {
    id: 97,
    nombre: "GESTIÓN DE PROYECTOS BASADO EN PMBOK (6TA EDICIÓN)",
    organizador: "CACP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F215fdbd3-a4de-4f3e-abe7-30b4acf4db1f%2FIMG_20220409_073739_151.jpg?id=54b2ea7b-cadf-4470-98ae-6f7b9ffe2e7b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/0F4bYSRHoz00NWYx",
    etiquetas: ["PMBOK", "PMI", "Gestión de proyectos", "Buenas prácticas"],
  },
  {
    id: 98,
    nombre:
      "BUENAS PRACTICAS CONSTRUCTIVAS, ERRORES FRECUENTES EN OBRA Y CONTROL DE CALIDAD DE CONCRETO",
    organizador: "CONSULCRETO",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F66f6fcea-12b2-4058-aa45-6bb2dad34e05%2FIMG_20220409_074306_426.jpg?id=13cc80c2-c76e-43b1-bb47-7f26e924fafc&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/FIoIR0RGXxBjMjQx",
    etiquetas: [
      "Concreto armado",
      "Diseño estructural",
      "Edificaciones",
      "Cálculo",
    ],
  },
  {
    id: 99,
    nombre: "DETALLES Y PROCESOS CONSTRUCTIVOS",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F760ae997-eca0-47f3-bf1f-24f0bda55637%2FIMG_20220409_074331_461.jpg?id=4fc875c3-5872-4aeb-8137-b8a8dd4f1c4c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/f4xNN2AyY6Q5YTYx",
    etiquetas: [
      "Procesos constructivos",
      "Control de calidad",
      "Técnicas constructivas",
      "Obra",
    ],
  },
  {
    id: 100,
    nombre: "POWER BI PROJECT DASHBOARD APLICADO A LA CONSTRUCCIÓN",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd756b02a-cc0d-4d43-9f10-55e293e2b145%2FIMG_20220409_074351_114.jpg?id=921b2979-0c97-4f75-a473-1d622962c853&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/QIKQEjtXHv0xYWIx",
    etiquetas: [
      "Power BI",
      "Business Intelligence",
      "Dashboards",
      "Gestión de datos",
    ],
  },
  {
    id: 101,
    nombre:
      "PROGRAMACION, SEGUIMIENTO Y CONTROL DE OBRAS CIVILES CON MICROSOFT PROJECT",
    organizador: "BIMCAT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa771aab7-d6fe-47e7-8180-584969fd7eeb%2FIMG_20220409_074411_635.jpg?id=a18e4ea9-2ed9-407d-9cde-4574ba9a756a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/P5rpFoA0OJ00ZWY5",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 102,
    nombre: "GESTIÓN ESTRATÉGICA DE COSTOS Y PRESUPUESTOS CON S10",
    organizador: "CD LAMBAYEQUE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcf48ba92-a299-4494-a533-148edd22f8b0%2FIMG_20220409_074432_774.jpg?id=7287da5c-09d0-4695-9317-5a177ce84ca5&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/7oiJVM6pRuE2NTEx",
    etiquetas: ["S10", "Costos y presupuestos", "Software", "Gestión de obras"],
  },
  {
    id: 103,
    nombre: "GESTIÓN FINANCIERA EN LA CONSTRUCCIÓN + POWER BI",
    organizador: "PRO MGMT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6e80d0ed-f976-4f9d-a796-4db67c057877%2FIMG_20220409_074455_359.jpg?id=eb160a5c-c88e-4026-a9f9-531d0abb6c7c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/VJJVjp17U-ljMWZh",
    etiquetas: [
      "Power BI",
      "Business Intelligence",
      "Dashboards",
      "Gestión de datos",
    ],
  },
  {
    id: 104,
    nombre: "RESIDENCIA Y SUPERVISIÓN DE OBRAS",
    organizador: "CYBOT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff267193f-7f31-4cd5-8146-8437fdfce773%2FIMG_20220409_074538_975.jpg?id=17fe3167-ece2-4ca0-9419-caf88b9027ab&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/znDcUjdglWM2M2Ux",
    etiquetas: [
      "Supervisión de obras",
      "Control de calidad",
      "Residencia",
      "Gestión",
    ],
  },
  {
    id: 105,
    nombre: "SUPERVISOR EN MEDIO AMBIENTE",
    organizador: "ICA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F425296d6-cbf2-4f2f-8b66-41137dd00160%2FIMG_20220409_074601_607.jpg?id=24c5c31e-149c-420e-bf28-cfe831749d87&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/KeudhBjgVOM0NTIx",
    etiquetas: [
      "Medio ambiente",
      "Gestión ambiental",
      "ISO 14001",
      "Sostenibilidad",
    ],
  },
  {
    id: 106,
    nombre:
      "DIPLOMADO RESIDENCIA, SUPERVISION Y SS EN OBRAS CON ENFOQUE A LEAN CONSTRUCTION",
    organizador: "ILCP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F147499b3-174b-409a-ad6f-e95aa5c10d03%2FIMG_20220409_074622_307.jpg?id=ce35a732-f666-492f-a92e-4ac898342314&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/WCniNBSPdQM4NWJh",
    etiquetas: [
      "Lean Construction",
      "Productividad",
      "Construcción sin pérdidas",
      "Gestión de obras",
    ],
  },
  {
    id: 107,
    nombre: "CÓMPUTOS Y PRESUPUESTOS DE OBRAS CIVILES",
    organizador: "DM&SM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1729323b-4c9f-4554-b6b1-ad1b56136234%2FIMG_20220409_085257_449.jpg?id=a16775dc-88a4-4b6d-9e69-72a79306ec57&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/qRmV3rI8TCwyMzQx",
    etiquetas: [
      "Presupuestos",
      "Costos",
      "Gestión de obras",
      "Expediente técnico",
    ],
  },
  {
    id: 108,
    nombre: "DISEÑO DE PLANO AUTOCAD",
    organizador: "CONSTRU SUMA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa00de02a-9d45-4f10-afe1-0bb7f3b5a9df%2FIMG_20220409_085316_752.jpg?id=49c8068a-125e-4faa-a02e-ff096dd13366&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/qXrMFNPKS084MTdh",
    etiquetas: ["AutoCAD", "Planos", "Diseño CAD", "Dibujo técnico"],
  },
  {
    id: 109,
    nombre: "CURSO VALORIZACIÓN Y LIQUIDACIÓN DE OBRAS PÚBLICAS CON EXCEL",
    organizador: "CD LAMBAYEQUE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F153caedd-24dc-44ef-a25f-55d006666050%2FIMG_20220409_085338_347.jpg?id=2617f4d6-b94f-4c63-946a-37f12aa7afc6&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/PD8XHO5QztE5NTAx",
    etiquetas: [
      "Valorización",
      "Liquidación de obras",
      "Control de costos",
      "Obras públicas",
    ],
  },
  {
    id: 110,
    nombre: "INTEGRACIÓN MS PROJECT PARA LA CONSTRUCCIÓN 2020",
    organizador: "PLANICONTROL",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F24d943f1-b2f6-4c86-bb8d-ea957a9f2540%2FIMG_20220409_085356_063.jpg?id=584cc991-9a15-4d9f-9875-41841c10f917&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/zNv0jta1Qq04NzUx",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 111,
    nombre: "CÓMO INICIAR UNA EMPRESA CONSTRUCTORA DE ÉXITO",
    organizador: "",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9896c761-3a81-4ec8-a5bc-4ac55ce41457%2FIMG_20220409_085414_413.jpg?id=59f13c16-0d08-48c7-9467-9f8584c4da0e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/tr8e4xGQfAAzYWMx",
    etiquetas: [
      "Empresa constructora",
      "Emprendimiento",
      "Gestión empresarial",
      "Construcción",
    ],
  },
  {
    id: 112,
    nombre: "ELABORACIÓN DE PRESUPUESTOS DE CONSTRUCCIÓN",
    organizador: "IC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6fcd93ca-89cc-4ad7-a71b-c13d47867d3b%2FIMG_20220409_085432_350.jpg?id=92052e16-bea6-48df-add7-bfaecbb46a2f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/mrPobvHYljs1Mzlh",
    etiquetas: [
      "Presupuestos",
      "Costos",
      "Gestión de obras",
      "Expediente técnico",
    ],
  },
  {
    id: 113,
    nombre: "PROGRAMACIÓN MACROS EXCEL AUTOCAD",
    organizador: "INFINITY",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F80dfd050-a67b-4791-82dd-dcf6528a4f1e%2FIMG_20220409_085452_920.jpg?id=678c4d80-a032-46fc-b9a1-b56944c6747c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/Ag3imBtAQxFiMDJh",
    etiquetas: ["AutoCAD", "Macros", "Excel", "Automatización"],
  },
  {
    id: 114,
    nombre: "GESTIÓN CONTRACTUAL PARA PROYECTOS Y CONSTRUCCIÓN 2020",
    organizador: "COSTOS EDUCA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f5258df-10cd-42ad-8ccd-5069826b21e5%2FIMG_20220409_085511_380.jpg?id=31562778-8769-4e10-9645-03ed225c4a3d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/_Ydt6An41jVlZjdh",
    etiquetas: [
      "Contrataciones",
      "Gestión contractual",
      "Obras públicas",
      "Legal",
    ],
  },
  {
    id: 115,
    nombre: "GESTIÓN DE ADICIONALES Y AMPLIACIÓN DE PLAZO CON EL ESTADO",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4b62b6b-3e99-4427-8301-a6e95ef6f6cd%2FIMG_20220409_085527_908.jpg?id=266c59e4-5aed-46ed-b632-d7f930f04b9a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/eBdlciQQZtcyNGM5",
    etiquetas: [
      "Adicionales de obra",
      "Ampliación de plazo",
      "Contrato estatal",
      "Obras públicas",
    ],
  },
  {
    id: 116,
    nombre: "GESTIÓN DE CATASTRO URBANO",
    organizador: "CENSASIT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e0cb259-5340-422e-a872-f0b43bc34b02%2FIMG_20220409_085544_884.jpg?id=4db5a9c8-7864-4b26-af4f-fcae9f61d5c0&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/D6RTNS0ANq9jMjgx",
    etiquetas: ["Catastro", "SIG", "Gestión urbana", "Predios"],
  },
  {
    id: 117,
    nombre: "MS PROJECT PROGRAMACIÓN DE OBRAS",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F381c3563-e97f-4764-8d7a-0f9ae3b8472e%2FIMG_20220409_085600_082.jpg?id=99068879-b530-4fc1-a389-3758c7451ec7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/WtXm4blKXCQ0M2Ux",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 118,
    nombre: "METRADOS EN EDIFICACIONES",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3ae0606b-b7d4-4398-8ac0-75d98646696e%2FIMG_20220409_085628_023.jpg?id=01fd93ea-5682-4f72-b780-5c08dffe2689&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/yAF5FK6Nbf04Mjkx",
    etiquetas: [
      "Metrados",
      "Cómputos métricos",
      "Edificaciones",
      "Presupuestos",
    ],
  },
  {
    id: 119,
    nombre: "AUTOCAD AVANZADO - BLOQUES DINÁMICOS Y ATRIBUTOS",
    organizador: "LINKEDIN LEARNING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F99d0a152-2483-4af4-9ce1-cc51f829489d%2FIMG_20220409_085651_991.jpg?id=3b6fe1e9-8db6-4a7b-892c-1a1cbe4ea896&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/GqCwgctZ8_JjODUx",
    etiquetas: ["AutoCAD", "Planos", "Diseño CAD", "Dibujo técnico"],
  },
  {
    id: 120,
    nombre: "DISEÑO DE INTERIORES DE PRINCIPIO A FIN",
    organizador: "DOMESTIKA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcb16f66e-71e4-49a3-9c8f-8130190a4031%2FIMG_20220409_085746_317.jpg?id=4685670e-d850-4592-b4f6-d0d808418f9a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ghPQGh_38UpkOTEx",
    etiquetas: [
      "Diseño de interiores",
      "Arquitectura",
      "Decoración",
      "Espacios",
    ],
  },
  {
    id: 121,
    nombre: "FLUJO DE CAJA",
    organizador: "CD LAMBAYEQUE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04f08988-74e9-4eca-8185-0bb58fe45b5b%2FIMG_20220409_085814_073.jpg?id=cd17dc65-236f-40fa-971e-bac4a90224c2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/dS5G5IH9Aw84MDA5",
    etiquetas: ["Flujo de caja", "Finanzas", "Gestión financiera", "Proyectos"],
  },
  {
    id: 122,
    nombre:
      "ASPECTOS CONSTRUCTIVOS PARA EL DISEÃ‘O CONSTRUCCION Y SUPERVISION DE INSTALACIONES SANITARIAS DE AGUA Y ALCANTARILLADO",
    organizador: "EIS",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9e7f5e2-fc90-48af-bf10-efb288ce4e9f%2FIMG_20220409_085836_927.jpg?id=404789a3-68fe-4089-a205-ca881bba5fc7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/JdwNRFwLGyNiMTQx",
    etiquetas: [
      "Procesos constructivos",
      "Control de calidad",
      "Técnicas constructivas",
      "Obra",
    ],
  },
  {
    id: 123,
    nombre: "VALORIZACIÓN, RECEPCIÓN Y LIQUIDACIÓN DE OBRAS",
    organizador: "CENCACIT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F68f91bd0-efe0-407d-ad0f-fdff75c65263%2FIMG_20220409_114043_659.jpg?id=2fec224e-18c0-4cb5-8622-422ebea437fd&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/UEHH_xFnz71kNDMx",
    etiquetas: [
      "Valorización",
      "Liquidación de obras",
      "Control de costos",
      "Obras públicas",
    ],
  },
  {
    id: 124,
    nombre: "GESTIÓN DE CONTRATACIONES ESTATALES",
    organizador: "CYBOT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa3645555-db29-49c1-9673-11704255a11b%2FIMG_20220409_114104_869.jpg?id=49108b54-b565-4823-9b7b-3cb942b75e3f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/WGxuPYNnTXhhMGUx",
    etiquetas: [
      "Contrataciones",
      "Gestión contractual",
      "Obras públicas",
      "Legal",
    ],
  },
  {
    id: 125,
    nombre:
      "INTERPRET. Y APLIC. DE LAS NORMAS TÃ‰C INFRAESTRUCT Y EQUIP. DE ESTABLECIMIENTOS DE SALUD DE LOS TRES NIVELES DE ATENCIÃ“N",
    organizador: "ASPAIH",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5fae0024-c930-400a-9901-f74896345777%2FIMG_20220409_114123_157.jpg?id=bf1da765-5672-4d3a-a81e-9df7fcff8591&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/D1XOCj37d5A2ZTA5",
    etiquetas: ["Normativa técnica", "Reglamentos", "Calidad", "Seguridad"],
  },
  {
    id: 126,
    nombre:
      "MECANICA DE SUELOS Y PAVIMENTOS APLICADA A LA SUPERVISION OBRAS VIALES",
    organizador: "ECOE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F93bef5a7-7850-4a48-b528-3a9ed6fe50df%2FIMG_20220409_114140_807.jpg?id=ed56b9c1-78eb-43b4-80ba-3fe6490d6fed&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/Bjxsq-n1tuU3MDk5",
    etiquetas: [
      "Pavimentos",
      "Diseño vial",
      "Ingeniería vial",
      "Infraestructura",
    ],
  },
  {
    id: 127,
    nombre: "RESIDENCIA Y SUPERVISIÓN DE OBRAS PÚBLICAS",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f1cbd9c-c6a8-4b8b-ae86-71a4505bf2b4%2FIMG_20220409_114158_302.jpg?id=d0ea2ae8-b005-4201-b93d-10350c95d766&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/apoyAAd6r69jZWNh",
    etiquetas: [
      "Supervisión de obras",
      "Control de calidad",
      "Residencia",
      "Gestión",
    ],
  },
  {
    id: 128,
    nombre:
      "GESTIÓN, ELABORACIÓN Y EVALUACIÓN DE ESTUDIOS DE IMPACTO AMBIENTAL",
    organizador: "CENESAM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F19fccfae-935a-4f5e-b26c-82dcd7641f55%2FIMG_20220409_114221_373.jpg?id=45b0d678-1f90-4883-98e6-2b5162dea63a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/pXhIkghfknQ1ZDUx",
    etiquetas: [
      "Impacto ambiental",
      "EIA",
      "Medio ambiente",
      "Gestión ambiental",
    ],
  },
  {
    id: 129,
    nombre: "CÓMO TRIUNFAR EN ENTREVISTAS DE TRABAJO",
    organizador: "PLATZI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd7dd691b-9afa-4f91-94bf-534689d84b24%2FIMG_20220409_114242_295.jpg?id=13e15e4d-a956-4cf4-834c-602ae7eaf1a5&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/qGQSmD2I-qYwOGJh",
    etiquetas: [
      "Entrevistas de trabajo",
      "Desarrollo profesional",
      "Empleabilidad",
      "Carrera",
    ],
  },
  {
    id: 130,
    nombre: "MS PROJECT 2016 ESENCIAL",
    organizador: "LINKEDIN LEARNING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F88adf4c3-c85c-44fc-a1d8-f40a49b78b78%2FIMG_20220409_114258_742.jpg?id=c4d809bc-d577-4187-9a55-3d4417c75356&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ImFGIKFhc_QyN2Rh",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 131,
    nombre: "CURSO MSPROJECT 2016 AVANZADO",
    organizador: "LINKEDIN LEARNING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F25f99cea-5a00-410b-a315-a84fb07dc437%2FIMG_20220409_114317_971.jpg?id=ae8e8066-7325-41e6-b16c-e1ed8605cb4a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/Efe1zQbNpzJiYWNh",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 132,
    nombre: "REPRESENTACIÓN ARQUITECTÓNICA EN ACUARELA",
    organizador: "PORTADA",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4627381-d96d-423e-93bf-e53678cdc20a%2FIMG_20220409_114338_224.jpg?id=f52cb52f-e044-435f-8867-fe02f5380d41&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/xpBiS6pxM2diMWFh",
    etiquetas: [
      "Representación arquitectónica",
      "Acuarela",
      "Dibujo",
      "Arquitectura",
    ],
  },
  {
    id: 133,
    nombre: "DIPLOMADO ESPECIALIZADO ESTUDIO DE IMPACTO AMBIENTAL",
    organizador: "ENAM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fca8a2399-e357-49cd-b44c-b2116a9befed%2FIMG_20220409_114355_089.jpg?id=d822fad3-f82a-4575-ba63-e7761c1f7533&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/xP5BOnIA5oNkZmZh",
    etiquetas: [
      "Impacto ambiental",
      "EIA",
      "Medio ambiente",
      "Gestión ambiental",
    ],
  },
  {
    id: 134,
    nombre: "PLANEAMIENTO DE PROYECTOS DE CONSTRUCCIÓN",
    organizador: "ITC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F82f5b62f-5c06-4f3f-af00-debe0527cff0%2FIMG_20220409_114424_350.jpg?id=ee993937-23ce-4a8f-ad38-6c188985675a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/YmdFIUxqf_g0OGYx",
    etiquetas: [
      "Planificación",
      "Control de proyectos",
      "Gestión de obras",
      "Programación",
    ],
  },
  {
    id: 135,
    nombre: "ELABORACIÓN DE COSTOS Y PRESUPUESTOS CON PRESCOM",
    organizador: "MAUDEZ",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0a2efd44-af1b-400b-8d5d-d0a5e860b2d9%2FIMG_20220409_114515_840.jpg?id=d83ce729-9a07-4134-8b36-f1eff5ebac63&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/cQ3hhMvAhREzNWIx",
    etiquetas: [
      "Presupuestos",
      "Costos",
      "Gestión de obras",
      "Expediente técnico",
    ],
  },
  {
    id: 136,
    nombre:
      "PROGRAMA DE ACTUALIZACION Y ESPECIALIZACION SANEAMIENTO FISICO LEGAL DE PREDIOS: TEMAS TECNICOS Y LEGALES",
    organizador: "INFOPRE",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F697aa599-7483-4c61-a1f2-0463a0790496%2FIMG_20220409_114536_432.jpg?id=a057c219-2aff-4954-a4a0-689036370156&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/u6_A4LcQ13g1MzMx",
    etiquetas: ["Saneamiento físico legal", "Predios", "Legal", "Catastro"],
  },
  {
    id: 137,
    nombre:
      "REQUISITOS OBLIGATORIOS DE CALIDAD, SEGURIDAD Y MEDIOAMBIENTE EN OBRAS",
    organizador: "",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20451634-8177-48f0-9bbf-a003f4cfbfb7%2FIMG_20220409_114601_992.jpg?id=d7a8a6b7-54ec-4cf9-bc0f-249bdd72cce6&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/DD82UOlJz2BjZDQ5",
    etiquetas: [
      "Medio ambiente",
      "Gestión ambiental",
      "ISO 14001",
      "Sostenibilidad",
    ],
  },
  {
    id: 138,
    nombre: "PRESUPUESTO Y SEGUIMIENTO DE OBRA CON PRESCOM Y SECON",
    organizador: "INFINITY",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f150a55-8bcc-4e93-89e5-d1360eb35d94%2FIMG_20220409_123632_380.jpg?id=d94e5742-0698-4b26-b9b0-5e7eb6f43373&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/3WlDYQtEpQRjMTQ5",
    etiquetas: [
      "Presupuestos",
      "Costos",
      "Gestión de obras",
      "Expediente técnico",
    ],
  },
  {
    id: 139,
    nombre: "HERRAMIENTAS DE CONTROL Y MEJORA DE PRODUCTIVIDAD",
    organizador: "INGENIABEC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe06e5509-8781-4815-b908-93abd207205d%2FIMG_20220409_123655_365.jpg?id=5814b36e-fd2b-4594-b826-eef33409d3bf&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/EGiZLrEO67UzMWYx",
    etiquetas: [
      "Productividad",
      "Lean Construction",
      "Optimización",
      "Gestión de obras",
    ],
  },
  {
    id: 140,
    nombre: "LEAN CONSTRUCTION - CONSTRUCCIÓN SIN PÉRDIDAS",
    organizador: "VIENA GROUP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F99e538b2-fdf9-4247-8958-38d67455c5d2%2FIMG_20220409_123712_552.jpg?id=3b0320d8-5f28-4515-bda1-7e3657c5805a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/RqBl2Ou90uA0ZGIx",
    etiquetas: [
      "Lean Construction",
      "Productividad",
      "Construcción sin pérdidas",
      "Gestión de obras",
    ],
  },
  {
    id: 141,
    nombre: "GESTIÓN DE PROYECTOS MULTIFAMILIARES",
    organizador: "JM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb2536053-e807-4804-9174-000db52cd2c8%2FIMG_20220409_123732_771.jpg?id=bc770b7e-1b82-435e-acb8-bd68585cd6b2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/vB8zjI6wxvYxZTZh",
    etiquetas: [
      "Edificios multifamiliares",
      "Gestión de proyectos",
      "Urbanismo",
      "Construcción",
    ],
  },
  {
    id: 142,
    nombre:
      "GESTION DE PROYECTOS BASADO EN LA GUIA DEL PMBOK EXTENSION CONTRUCCION",
    organizador: "PRO MANAGEMENT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdb0b9a94-ef72-4248-a771-bed9a56ff71a%2FIMG_20220409_123751_764.jpg?id=aa3ab5fd-f009-44ee-9318-d8e7131e2994&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/JPZgtOWq4_NiOWUx",
    etiquetas: ["PMBOK", "PMI", "Gestión de proyectos", "Buenas prácticas"],
  },
  {
    id: 143,
    nombre: "SIG APLICADO A LA GESTIÓN CATASTRAL",
    organizador: "ICIP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2f7debb8-1e6c-4f6b-a423-53e72a6d50b9%2FIMG_20220409_123853_588.jpg?id=f9192207-1d49-4c75-948d-f2afeae8512b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/AjP2DY0Op2c3NWVh",
    etiquetas: ["SIG", "Catastro", "Gestión territorial", "Georreferenciación"],
  },
  {
    id: 144,
    nombre: "LEAN CONSTRUCTION Y SU CORRECTA APLICABILIDAD",
    organizador: "TEDI",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Facda82a7-db46-4d77-944e-3c031fef6f1d%2FIMG_20220409_124947_640.jpg?id=38d53dc7-60d0-4a28-8d57-c21fbd23fb3b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/CvZ5bFBI9SNkMzMx",
    etiquetas: [
      "Lean Construction",
      "Productividad",
      "Construcción sin pérdidas",
      "Gestión de obras",
    ],
  },
  {
    id: 145,
    nombre: "TALLER APLICATIVO LAST PLANNER SYSTEM",
    organizador: "CAPITEL",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F746bef65-f447-4b65-9bf2-b8acb49934aa%2FIMG_20220409_125007_481.jpg?id=4e95c62e-281c-47f7-958d-1f40edd54898&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/SYOc3clEhhpjZTcx",
    etiquetas: [
      "Last Planner",
      "Planificación",
      "Control de obras",
      "Lean Construction",
    ],
  },
  {
    id: 146,
    nombre: "GESTIÓN DE ENCOFRADOS INDUSTRIALIZADOS",
    organizador: "AGILE GROUP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3305c271-05fe-49fd-b4a6-532552c9ea24%2FIMG_20220409_125023_250.jpg?id=8825960f-6f88-4fef-accf-fa8810f80af8&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/mGX2-Tqa5FVmNjcx",
    etiquetas: [
      "Encofrados",
      "Industrializados",
      "Gestión de recursos",
      "Obra",
    ],
  },
  {
    id: 147,
    nombre: "GESTIÓN DE LA PMO",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe74ab459-9c63-4488-b48f-7051a304ee7e%2FIMG_20220409_125040_564.jpg?id=a72e7632-1288-4d24-904b-9630441c12a2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/_fb5m6o8s4lhMmM5",
    etiquetas: [
      "PMO",
      "Gestión de proyectos",
      "Oficina de proyectos",
      "Organización",
    ],
  },
  {
    id: 148,
    nombre: "RESULTADO OPERATIVO, COMO HERRAMIENTA ESTRATÉGICA DE GESTIÓN",
    organizador: "",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F056a802a-3103-4bd8-8e62-4f8e0832dcb4%2FIMG_20220409_125058_121.jpg?id=423e66db-7b94-42ec-a1a1-4149ca85fb9c&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/O6mjd9Bgf_A0ODlh",
    etiquetas: [
      "Resultado operativo",
      "Control financiero",
      "Gestión de obras",
      "Costos",
    ],
  },
  {
    id: 149,
    nombre: "ANÁLISIS DE PRECIOS UNITARIOS Y ELABORACIÓN DE PRESUPUESTOS",
    organizador: "PROJECTIC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbad390bd-40bc-4007-900b-d192ff3cf268%2FIMG_20220409_125115_085.jpg?id=b9b93a48-df32-45e9-a0e6-23b31af9db80&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/sxJrzXvEtSc0MWIx",
    etiquetas: [
      "Presupuestos",
      "Costos",
      "Gestión de obras",
      "Expediente técnico",
    ],
  },
  {
    id: 150,
    nombre: "CURSO DE ESPECIALIZACIÓN EN LAST PLANNER SYSTEM",
    organizador: "INGENIUM",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda8e4152-d293-4161-9bcf-b19a2323d0d1%2FIMG_20220409_125131_282.jpg?id=260784aa-0997-407e-9648-000fbb40ecae&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/7vgA79NeAsJkMGFh",
    etiquetas: [
      "Last Planner",
      "Planificación",
      "Control de obras",
      "Lean Construction",
    ],
  },
  {
    id: 151,
    nombre: "METRADOS COSTOS PRESUPUESTOS EN EDIFICACIONES",
    organizador: "PROYECTABC",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F95ebd8b6-e70e-4bd8-91b9-b80d9f4df395%2FIMG_20220409_125150_730.jpg?id=a1b3a4e0-43b4-43fc-926b-3fd23d2b758a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/TgXmUfkglI8zNDEx",
    etiquetas: [
      "Metrados",
      "Cómputos métricos",
      "Edificaciones",
      "Presupuestos",
    ],
  },
  {
    id: 152,
    nombre: "ESTRATEGIAS DE PRODUCTIVIDAD - PLANIFICACIÓN CON GRÚAS TORRES",
    organizador: "QUALITY CONSULTING",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3a510f7d-e054-4056-9963-2aa1c0b1463f%2FIMG_20220409_125208_324.jpg?id=cc164cf9-658a-4170-b212-756b32fb64bf&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/hC9tUGHfFDY0NjAx",
    etiquetas: [
      "Productividad",
      "Lean Construction",
      "Optimización",
      "Gestión de obras",
    ],
  },
  {
    id: 153,
    nombre:
      "FACTORES DE RIESGO OCUPACIONALES Y RL COVID -19 EN OBRAS DE CONSTRUCCIÃ“N CIVIL",
    organizador: "SENCICO",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2c226fba-2cbf-4c6d-ac59-4019145cf796%2FIMG_20220409_125238_304.jpg?id=c1b8c9c7-b53a-4456-9555-d455277ff476&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/BmPp9amU90QyN2Zh",
    etiquetas: [
      "COVID-19",
      "Seguridad laboral",
      "Riesgos ocupacionales",
      "Obra",
    ],
  },
  {
    id: 154,
    nombre: "LECTURA DE PLANOS DE ESTRUCTURA",
    organizador: "SENCICO",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f12f684-03aa-4b2c-b64e-9671c324c536%2FIMG_20220409_125335_057.jpg?id=5c990d7d-8a28-422b-81b0-c706bc16873a&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/JILku0x5Jo9jNWYx",
    etiquetas: [
      "Lectura de planos",
      "Interpretación de planos",
      "Obra civil",
      "Documentación",
    ],
  },
  {
    id: 155,
    nombre: "PLANIFICACIÓN Y CONTROL DE PROYECTOS CON MS PROJECT",
    organizador: "",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fecbf8a92-1848-4c73-878d-1fd19dc3b96e%2FIMG_20220409_125355_680.jpg?id=58ee89e9-ad8d-4e7f-a814-80385aa5e166&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/hVe9qjBpQcU5NDkx",
    etiquetas: [
      "MS Project",
      "Programación de obras",
      "Cronograma",
      "Control de proyectos",
    ],
  },
  {
    id: 156,
    nombre:
      "DIPLOMADO METRADO, COSTOS Y PRESUPUESTOS, PROGRAMACION, VALORIZACION Y LIQUIDACION DE OBRA",
    organizador: "ILCP",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff37c6312-030b-44a4-a7b8-1deb43319891%2FIMG_20220409_125501_832.jpg?id=b96c3278-16a6-4834-bcbe-bd21bc8e3612&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/haoUmqiKnZw5ZjAx",
    etiquetas: [
      "Metrados",
      "Cómputos métricos",
      "Edificaciones",
      "Presupuestos",
    ],
  },
  {
    id: 157,
    nombre: "VALORIZACIONES DE OBRA EN EXCEL Y CURVA EXCEL",
    organizador: "UDEMY",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a03d94c-c078-44b5-8b6d-82eb354845b3%2FIMG_20220409_125523_522.jpg?id=926c28b9-6689-4c2c-9269-39959233ffa3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/R1q1D7hlBoI2YzBh",
    etiquetas: [
      "Valorización",
      "Liquidación de obras",
      "Control de costos",
      "Obras públicas",
    ],
  },
  {
    id: 158,
    nombre: "METRADO EN EDIFICACIONES, LECTURA E INTERPRETACIÓN DE PLANOS",
    organizador: "DOZER",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11aa7d31-a053-4492-80f7-7908e599ac54%2FIMG_20220409_125607_450.jpg?id=e0923ac4-42ed-4f75-882d-97953ebb2903&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/c1uS589AWXYyODgx",
    etiquetas: [
      "Metrados",
      "Cómputos métricos",
      "Edificaciones",
      "Presupuestos",
    ],
  },
  {
    id: 159,
    nombre: "COSTOS Y PRESUPUESTOS POR COMPUTADORA S10",
    organizador: "SENCICO",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8b8d01e2-f697-4271-9784-68b6fe1be692%2FIMG_20220409_125630_739.jpg?id=984c1bef-30b4-49de-8da7-5b75b22969e7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/XSdi3pbqOJo0ZGRh",
    etiquetas: ["S10", "Costos y presupuestos", "Software", "Gestión de obras"],
  },
  {
    id: 160,
    nombre: "ELABORACIÓN DE PROPUESTAS",
    organizador: "ECCOPRET",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff6a66766-037b-49f7-8675-8f0081935278%2FIMG_20220409_125654_549.jpg?id=ad4ca618-adf3-4b29-97da-92a41bf73674&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/gVL-O9E1z743NTgx",
    etiquetas: [
      "Propuestas técnicas",
      "Licitaciones",
      "Gestión",
      "Construcción",
    ],
  },
  {
    id: 161,
    nombre: "EXPEDIENTES TÉCNICOS DE OBRAS CIVILES Y ARQUITECTURA",
    organizador: "",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F371b5545-58b2-403d-938b-8dcc344f9753%2FIMG_20220409_125717_149.jpg?id=f6e583c2-2848-4b9a-96d1-b285a5130e16&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/Ty3iz-ziTvUyNzkx",
    etiquetas: [
      "Gestión de proyectos",
      "Construcción",
      "Administración",
      "Ingeniería civil",
    ],
  },
  {
    id: 162,
    nombre: "ELABORACIÓN DE PLANILLAS DE AVANCE",
    organizador: "BIMCAT",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F51fa1f9f-03c2-4525-8401-1f4ed30593b7%2FIMG_20220409_125734_207.jpg?id=2c837a91-a856-48a1-a6eb-b25f92339034&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/HUHWgTjkm0MwMTIx",
    etiquetas: [
      "Planillas de avance",
      "Control de obra",
      "Documentación",
      "Gestión",
    ],
  },
  {
    id: 163,
    nombre: "PROGRAMA DE ESPECIALIZACIÓN EN CONTROL DE PROYECTOS 2020",
    organizador: "CAPITEL",
    categoria: "Gerencia",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa04eb2c9-435b-44ac-9e6c-d4629aab6e19%2FIMG_20220409_125755_317.jpg?id=48f7cc7a-093f-456b-979c-30619e032370&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/IPt7DxBmxcwzMGZh",
    etiquetas: ["Control de proyectos", "Seguimiento", "Cronograma", "Gestión"],
  },
  {
    id: 164,
    nombre: "CURSOS CON CERTIFICACIÓN (-APARTADO-)",
    organizador: "CERSA",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72ecd39f-61dc-4a3b-b968-ea7be15f3afe%2FIMG-20220417-WA0071.jpg?id=541ae70a-ea98-4f3a-8743-855c944fe775&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://cersa.org.pe/cursosgratis/",
    etiquetas: [
      "Instalaciones sanitarias",
      "Hidráulica",
      "Saneamiento",
      "Ingeniería civil",
    ],
  },
  {
    id: 165,
    nombre: "MATERIAL EXTRA (CANALES)",
    organizador: "ITZ HIDRAULICA",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F62e64e41-8046-42dc-bbd5-d5124f112805%2Fplataformas-resumenes-libros-k3PH-U110241932894Z9G-644x483MujerHoy.jpg?id=4f88c3e9-b333-4bdd-8f5a-50d04a6fe626&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://sites.google.com/site/itzhidraulica/home/canales",
    etiquetas: ["Canales", "Hidráulica", "Diseño de canales", "Irrigación"],
  },
  {
    id: 166,
    nombre: "DIPLOMADO HIDRÁULICA (2017)",
    organizador: "CERSA",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe6c91f7b-3ea9-4031-bf7e-12785ddbabb3%2Fventajas-y-desventajas-de-la-energa-hidrulica.jpg?id=6dfce0e6-005e-4647-af74-8df0e2e7476e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://drive.google.com/drive/folders/1_9M24gb5zCuj133JvSrJWXOZUzCJIdVV",
    etiquetas: [
      "Hidráulica",
      "Diplomado",
      "Diseño hidráulico",
      "Ingeniería civil",
    ],
  },
  {
    id: 167,
    nombre: "RIEGO TECNIFICADO",
    organizador: "YOV UNIVERSITY",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F33d7b680-c068-4555-821b-bdd2c6d7333d%2FDeTjXXMUQAIVub4.jpg?id=b548fddc-1e6c-46b6-9c68-f7f76cce14b4&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://drive.google.com/drive/folders/1eayF4umxEBUVlyduOn4QtJjYSckOk1WP?usp=sharing",
    etiquetas: ["Riego tecnificado", "Sistemas de riego", "Goteo", "Aspersión"],
  },
  {
    id: 168,
    nombre: "INSTALACIONES SANITARIAS",
    organizador: "PROYEING",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff4fabda9-b114-4a40-bf9a-99e982616088%2Fwater-809289_1920.jpg?id=ebaa39d5-daba-4c77-b271-69d685126f57&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://drive.google.com/drive/folders/1p8J-IlActrvLn0riOZZs9TLN-SdEg7Te",
    etiquetas: [
      "Instalaciones sanitarias",
      "Diseño hidrosanitario",
      "Agua potable",
      "Desagüe",
    ],
  },
  {
    id: 169,
    nombre: "SISTEMA DE ABASTECIMIENTO GRAVEDAD Y BOMBEO",
    organizador: "KADES",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F26a09574-9a16-4c00-9752-c08a80ec2d47%2F20.jpg?id=ac97d893-b8d1-4d36-81b3-4993f1d5bcf8&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://drive.google.com/drive/mobile/folders/1mdAG0wa0W_ipp_0XPvuXnb9TWBIAOB0A",
    etiquetas: [
      "Abastecimiento de agua",
      "Sistemas de bombeo",
      "Gravedad",
      "Hidráulica",
    ],
  },
  {
    id: 170,
    nombre:
      "MODELACIÓN HIDRÁULICA DE SISTEMAS DE AGUA POTABLE Y ALCANTARILLADO USANDO WATERCAD Y SEWERCAD",
    organizador: "CACP",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd4c56d11-b731-4f68-95cc-a8bd35838acb%2FIMG_20220408_102437_387.jpg?id=95c0cf85-0bc4-4038-bf30-6ad501e017f3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/5JBVgNMWDbpmMWYx",
    etiquetas: [
      "Agua potable",
      "Alcantarillado",
      "Saneamiento",
      "Redes hidráulicas",
    ],
  },
  {
    id: 171,
    nombre:
      "ASPECTOS CONSTRUCTIVOS PARA EL DISEÑO, CONSTRUCCIÓN Y SUPERVISIÓN DE INSTALACIONES SANITARIAS DE AGUA Y ALCANTARILLADO",
    organizador: "EIS",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff10438fa-dca0-46e0-a5ca-842b18a1f9c6%2FIMG_20220408_102504_098.jpg?id=9f38ea1c-cbf3-4c89-894c-38ec941b0a47&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/eVidZoV6PCo4ODFh",
    etiquetas: [
      "Supervisión de obras",
      "Control de calidad",
      "Residencia",
      "Gestión",
    ],
  },
  {
    id: 172,
    nombre: "RIEGO TECNIFICADO PRESURIZADO",
    organizador: "TESLA",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff87ad6c0-bcad-49db-8d7f-25c1151581cf%2FIMG_20220408_102527_270.jpg?id=babed87f-25a2-4ba6-af36-486d1952867b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/h6NjOioGLQY1MTlh",
    etiquetas: [
      "Riego tecnificado",
      "Riego presurizado",
      "Agricultura",
      "Hidráulica",
    ],
  },
  {
    id: 173,
    nombre:
      "DIPLOMADO DE ESPECIALIZACIÓN EN TRATAMIENTO DE AGUAS RESIDUALES 2020",
    organizador: "CERSA",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9529b2f2-9094-460a-8ae4-67f566d505c7%2FIMG_20220408_102554_577.jpg?id=ed788e95-ffbb-4d8e-9e2d-688a68eda41e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ZtPqlXBoCZo3NTUx",
    etiquetas: [
      "Especialización",
      "Posgrado",
      "Formación profesional",
      "Ingeniería civil",
    ],
  },
  {
    id: 174,
    nombre: "DIPLOMADO EN DISEÑO DE PRESAS",
    organizador: "CERSA",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F385b91d5-6409-4b99-8708-ae531b8209e2%2FIMG_20220408_102617_151.jpg?id=2d480c5d-0062-45df-8ef5-5371cb24c292&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/1asJx5Ub64hhZDg5",
    etiquetas: ["Presas", "Hidráulica", "Diseño de presas", "Geotecnia"],
  },
  {
    id: 175,
    nombre:
      "DISEÑO Y MODELACIÓN DE REDES DE AGUA POTABLE Y RIEGO CON WATERCAD 2020",
    organizador: "MAUDEZ",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3f70f52b-020f-4976-b23f-65521e1332f6%2FIMG_20220408_102641_105.jpg?id=492370e9-b953-43e3-be17-a7019d884e48&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/zFXgvIrah_c2OWU5",
    etiquetas: ["WaterCAD", "Agua potable", "Redes hidráulicas", "Modelación"],
  },
  {
    id: 176,
    nombre: "DISEÑO DE INSTALACIONES SANITARIAS EN EDIFICACIONES",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa78aeb79-82e6-43bc-a873-d275864246f1%2FIMG_20220408_102703_885.jpg?id=1067313d-27a4-425f-97f2-55bbf746b480&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/VAqAcc3KZnMwZjcx",
    etiquetas: [
      "Instalaciones sanitarias",
      "Diseño hidrosanitario",
      "Agua potable",
      "Desagüe",
    ],
  },
  {
    id: 177,
    nombre:
      "DISEÑO DE PISCINAS Y SU REGLAMENTACIÓN PARA CALIFICAR COMO SALUDABLES",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2541929f-4e34-470d-b835-b13f6ebbcce2%2FIMG_20220408_102723_944.jpg?id=82db075d-8e5a-4dda-b198-d4ee17ab7f92&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/5qjf3TL3wOg0YWMx",
    etiquetas: [
      "Piscinas",
      "Diseño hidráulico",
      "Reglamentación",
      "Instalaciones",
    ],
  },
  {
    id: 178,
    nombre:
      "USOS DE TUBERÍAS DE OVC Y POLIPROPILENO EN INSTALACIONES SANITARIAS DE EDIFICACIONES",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8c2bf6bd-9ccb-4fdd-b023-0e09c73f37fb%2FIMG_20220408_102744_300.jpg?id=fcdfaec3-b9be-4682-8fd4-8ad2bfc9008f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/mNwFl1ohMNw3NzIx",
    etiquetas: [
      "Instalaciones sanitarias",
      "Diseño hidrosanitario",
      "Agua potable",
      "Desagüe",
    ],
  },
  {
    id: 179,
    nombre: "SISTEMA DE BOMBEO PARA EDIFICACIONES",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb2e8ad7a-00c3-4d4f-976a-8551245d9a60%2FIMG_20220408_181232_659.jpg?id=749e346f-f4ea-4845-b532-34bcbe91b866&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/xrb2q_FKf8JhOTAx",
    etiquetas: [
      "Sistema de bombeo",
      "Instalaciones sanitarias",
      "Hidráulica",
      "Edificaciones",
    ],
  },
  {
    id: 180,
    nombre: "PRUEBAS HIDRÁULICAS DE AGUA Y DESAGÜE",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4f1b2fc1-b0cf-49e7-aa1a-a72633d25a80%2FIMG_20220408_181249_379.jpg?id=bb4dbdad-19dc-441a-9db4-e322cc5ed2a5&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/FDX8_WWWNwNiMmRh",
    etiquetas: [
      "Hidráulica",
      "Diseño hidráulico",
      "Fluidos",
      "Ingeniería civil",
    ],
  },
  {
    id: 181,
    nombre: "TRAMPAS DE GRASAS PARA RESTAURANTE E INDUSTRIAS",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F98c9c91c-6631-4d7c-93e1-3e46cf865e04%2FIMG_20220408_181310_712.jpg?id=b80e97b7-4809-4d72-ba65-13ccb47c2faa&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/P8_90h9Smrs5YWYx",
    etiquetas: [
      "Trampa de grasas",
      "Instalaciones sanitarias",
      "Restaurantes",
      "Saneamiento",
    ],
  },
  {
    id: 182,
    nombre: "CRITERIOS BÁSICOS DE DISEÑO ACI",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F826f4f27-47c4-4fe0-b07e-a0fed441b2ab%2FIMG_20220408_181332_698.jpg?id=54171f0f-d5f9-43f2-9222-6af292ff364d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/84S6z0o6gQhjMjRh",
    etiquetas: ["ACI", "Diseño por criterios", "Norma ACI", "Concreto"],
  },
  {
    id: 183,
    nombre: "SUPERVISIÓN DE OBRAS DE II.SS EDIF",
    organizador: "MAKOTO",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe9a274a7-13b9-4b2c-a93e-84395f2f772e%2FIMG_20220408_181350_740.jpg?id=f8109c0e-eb62-4610-b6bc-657b9f24aa1e&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/y86sTsbc2-ZhOGQx",
    etiquetas: [
      "Supervisión de obras",
      "Control de calidad",
      "Residencia",
      "Gestión",
    ],
  },
  {
    id: 184,
    nombre:
      "DISEÑO DE SISTEMA DE AGUA POTABLE Y ALCANTARILLADO CON CIVIL 3D 2021 & EXCEL",
    organizador: "CCI INGENIEROS",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F15b5a461-d119-461d-9534-c42c5bfa952f%2FIMG_20220408_181415_838.jpg?id=e4258538-c28b-4605-9881-41713533ee0b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/XKcSWDutUFIzMjkx",
    etiquetas: ["Civil 3D", "Software CAD", "Diseño", "Infraestructura"],
  },
  {
    id: 185,
    nombre: "DISEÑO DE UN SISTEMA DE ALCANTARILLADO",
    organizador: "HT",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F246df0cb-2632-4d7f-9cab-6138da86ef88%2FIMG_20220408_194318_597.jpg?id=350b7172-3654-4ee8-919e-1f0aee0230e7&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/M_JYpYvei65hZTAx",
    etiquetas: [
      "Alcantarillado",
      "Redes de desagüe",
      "Saneamiento",
      "Diseño hidráulico",
    ],
  },
  {
    id: 186,
    nombre: "ELABORACIÓN DE EXPEDIENTES TÉCNICOS DE SANEAMIENTO URBANO Y RURAL",
    organizador: "PAC",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fda3e01f0-5c6c-42d8-872e-8a77c0baab6d%2FIMG_20220408_194339_107.jpg?id=19bf4b38-7c4a-4006-adaf-19f3576bc7a9&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/Sbv0xegWEA5mMGUx",
    etiquetas: [
      "Saneamiento",
      "Agua potable",
      "Alcantarillado",
      "Expediente técnico",
    ],
  },
  {
    id: 187,
    nombre:
      "DISEÑO HIDRÁULICO DE LÍNEA DE CONDUCCIÓN Y ADUCCIÓN DE SISTEMAS DE AGUA POTABLE EN EL ÁMBITO RURAL (RM 192-2018)",
    organizador: "PAC",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F45130274-26f5-4403-8b3f-f2702ce7ddc9%2FIMG_20220408_194430_090.jpg?id=a332da6d-ecf3-43d3-a6f1-2e859c139967&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/d13AI_P2ByhhNGNh",
    etiquetas: ["Agua potable", "Diseño hidráulico", "Redes", "Saneamiento"],
  },
  {
    id: 188,
    nombre: "WATERCAD DISEÑO DE REDES DE AGUA POTABLE",
    organizador: "CONZING",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F670fabae-f5f4-472c-9b4d-f11482d920d7%2FIMG_20220408_194450_949.jpg?id=19b5ab06-2d5f-4136-9d36-21764211a21b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/1qLt7-JzJaA1Y2Ix",
    etiquetas: ["WaterCAD", "Agua potable", "Redes hidráulicas", "Modelación"],
  },
  {
    id: 189,
    nombre: "DIPLOMADO EN DISEÑO DE PRESAS Y EMBALSES",
    organizador: "SIB",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d2f6ab8-7a34-41a0-bd06-c565538dc2fd%2FIMG_20220408_194518_383.jpg?id=adf5ac9c-1317-4365-b983-5b39e1a95bf3&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/aUImehXW9_lkOThh",
    etiquetas: ["Presas", "Embalses", "Hidráulica", "Diseño"],
  },
  {
    id: 190,
    nombre: "SISTEMAS DE RIEGO PRESURIZADO, GOTEO Y ASPERSIÓN",
    organizador: "BIMCAT",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F24050e5c-4aa4-4358-9a84-93ba914c41f3%2FIMG_20220408_194727_791.jpg?id=6c66febf-9552-491b-b22a-131d55f6860b&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/QfBToOq0K6Q2MGFh",
    etiquetas: ["Riego presurizado", "Goteo", "Aspersión", "Agricultura"],
  },
  {
    id: 191,
    nombre: "DISEÑO DE PRESAS PEQUEÑAS Y MEDIANAS",
    organizador: "INFINITY",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0a80eea-9ae6-477f-8c0a-0d8b5dded5ea%2FIMG_20220408_194900_531.jpg?id=1032ef52-012e-4870-b874-f0f0e6cc02e2&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/tZqYx9YyfoljNzAx",
    etiquetas: ["Presas", "Hidráulica", "Diseño de presas", "Geotecnia"],
  },
  {
    id: 192,
    nombre: "DISEÑO DE SISTEMAS DE ALCANTARILLADO CON SEWERGEMS",
    organizador: "MAUDEZ",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F33fbac33-55ee-4679-bd93-048d7ae0a092%2FIMG_20220408_194928_182.jpg?id=4e38baf1-36c0-4a3a-9d8f-67a39f0511ae&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ske57eLKVGMyMjZh",
    etiquetas: ["SewerGEMS", "Alcantarillado", "Diseño hidráulico", "Software"],
  },
  {
    id: 193,
    nombre: "DISEÑO DE PROYECTOS DE AGUA Y SANEAMIENTO URBANO",
    organizador: "100% INGENIEROS",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F755f0b66-b0a3-413e-9126-3c71454a28b6%2FIMG_20220408_194948_120.jpg?id=18579f5d-850e-4014-83fd-42687af8e6f8&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/wwxYuC4bjK43YzMx",
    etiquetas: [
      "Saneamiento",
      "Agua potable",
      "Alcantarillado",
      "Expediente técnico",
    ],
  },
  {
    id: 194,
    nombre: "DIPLOMADO OBRAS HIDRÁULICAS",
    organizador: "CD LAMBAYAQUE",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22e9273e-6255-4dfc-98b3-80f690aa0e6d%2FIMG_20220408_195006_515.jpg?id=0518c995-cf1f-4579-876d-fd38b1ead0fc&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/1PG0Xz749Xk1YTRh",
    etiquetas: [
      "Hidráulica",
      "Diplomado",
      "Diseño hidráulico",
      "Ingeniería civil",
    ],
  },
  {
    id: 195,
    nombre: "CIVIL 3D 2020 AVANZADO",
    organizador: "BIMCAT",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fabdccbd7-cc39-41f0-a7f8-1e16d0e9fd74%2FIMG_20220408_195026_866.jpg?id=d01bfae4-69e4-4648-93a6-cb7d80f3af4d&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/iVOXwVOiDAQ0YWFh",
    etiquetas: ["Civil 3D", "Diseño avanzado", "Autodesk", "Software"],
  },
  {
    id: 196,
    nombre: "WATER SEWER CAD",
    organizador: "",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7e24492a-58ca-44c2-a146-d449806f2226%2FIMG_20220408_195045_028.jpg?id=6579d2d9-d58f-48c8-be1d-2528ba5b875f&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/08X6oARyEYk5ZDAx",
    etiquetas: [
      "WaterCAD",
      "Redes de agua",
      "Modelación hidráulica",
      "Software",
    ],
  },
  {
    id: 197,
    nombre: "CURSO VIRTUAL DE PYTHON EN HIDROLOGÍA (8 SESIONES)",
    organizador: "",
    categoria: "Hidrosanitaria",
    portada:
      "https://sceic01.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fde3c3a7d-4ae2-4c6e-a21a-b2979ff18c0e%2FIMG_20220408_195144_349.jpg?id=08574fcc-3cea-4b5e-a392-e19355896af4&table=block&spaceId=2c7853db-925d-4e2d-aadf-0354503f9ce3&width=50&userId=&cache=v2",
    link: "https://t.me/joinchat/ZtOBeBr2wOxlNmZh",
    etiquetas: ["Python", "Hidrología", "Programación", "Análisis hidráulico"],
  },
];
