var simplemaps_worldmap_mapdata={
  main_settings:{
		//General settings
		width: 'responsive', //or 'responsive'
		background_color: '#FFFFFF',	
		background_transparent: 'yes',
		popups: 'detect', //on_click, on_hover, or detect
	
		//State defaults
		state_description:   'State description',
    state_color: "#88A4BC",
    state_hover_color: "#3333FF",
    state_url: "javascript:alert('Send users to a url (like http://simplemaps.com). Or, activate a javascript function upon click.');",
    border_size: "1",
		border_color: '#ffffff',
		all_states_inactive: 'no',
		all_states_zoomable: 'no',		
		
		//Location defaults
    location_description: "Location description",
    location_color: "#FF1570",
		location_opacity: .8,
		location_hover_opacity: 1,
    location_url: "https://simplemaps.com",
    location_size: "30",
		location_type: 'marker', // circle, square, image
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,				
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',
		
		//Labels
		label_color: '#ffffff',	
		label_hover_color: '#ffffff',		
		label_size: 22,
		label_font: 'Arial',
		hide_labels: 'no',
    hide_eastern_labels: false,
		
		//Zoom settings
    manual_zoom: 'no',
    back_image: 'no',
    arrow_box: 'no',
    navigation_size: '40',
    navigation_color: '#f7f7f7',
    navigation_border_color: '#636363',
		initial_back: 'no', //Show back button when zoomed out and do this JavaScript upon click		
		initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
		initial_zoom_solo: 'no', //hide adjacent states when starting map zoomed in
		region_opacity: 1,
		region_hover_opacity: .6,
    region_cascade_all: "yes",
		zoom_out_incrementally: 'yes',  // if no, map will zoom all the way out on click
		zoom_percentage: .99,
		zoom_time: .5, //time to zoom between regions in seconds
		
		//Popup settings
		popup_color: 'white',
		popup_opacity: .9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no', //use your own css	
		
		//Advanced settings
		div: 'map',
		auto_load: 'yes',		
    rotate: '0',
		url_new_tab: 'yes', 
		images_directory: 'default', //e.g. 'map_images/'
    import_labels: 'no',
		fade_time:  .1, //time to fade out		
		link_text: 'View Website'  //Text mobile browsers will see for links	
		
	},
  state_specific: {
    AE: {
      name: "United Arab Emirates",
      description: "Tipos de suelo: Gamaflor Full Steel.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://lostraveleros.com/que-ver-en-emiratos-arabes-unidos/"
    },
    AF: {
      name: "Afghanistan",
      description: "Afganistán está dominado por el macizo del Hindu Kush, que cuenta con más de 100 picos de más de 6000 metros; el más alto es el Naochak, en el Pamir, de casi 7500 metros.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://www.tripadvisor.co/Attractions-g659499-Activities-Afghanistan.html"
    },
    AL: {
      name: "Albania",
      description: "Tipos de suelos: fina o gruesa, y por su estructura: floculada, agregada o dispersa, lo que define su porosidad que permite una mayor o menor circulación del agua, y por lo tanto la existencia de especies vegetales que necesitan concentraciones más o menos elevadas de agua o de gases.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://viajerocasual.com/que-ver-en-albania/"
    },
    AM: {
      name: "Armenia",
      description: "",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-armenia/"
    },
    AO: {
      name: "Angola",
      description: "Agricultura 9,6%, industria 65,8% comercio y servicios 24,6%.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://ciudadesconencanto.com/11-cosas-que-hacer-en-luanda-angola/"
    },
    AR: {
      name: "Argentina",
      description: "Tipos de suelo que tiene: Entisoles, Vertisoles, Inceptisoles, Ardisoles, Molisoles, Alfisoles, Oxisoles, Spodosoles, Histosoles, Litosoles. Argentina tiene disponible para cultivar 14,4% de su extensión total (lo que significa 0,96 hectáreas por cada habitante). Del total de la tierra de Brasil, 8,7% es arable.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://medium.com/@TurismoAkza/20-lugares-turisticos-de-argentina-que-debes-conocer-a221b44e28bc"
    },
    AT: {
      name: "Austria",
      description: "Con una superficie de 83.858 km2, es un estado continental situado en la parte meridional de Europa Central, comprende parte de los Alpes Orientales y de la cuenca del Danubi.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.skyscanner.es/noticias/inspiracion/los-10-lugares-mas-bonitos-que-ver-en-austria"
    },
    AU: {
      name: "Australia",
      description: " La Clasificación de suelos de Australia, hay catorce órdenes de suelos. Son: Antroposoles, Organosoles, Podosoles, Vertosoles, Hidrosoles, Kurosoles, Sodosoles Cromosoles, Calcarosoles, Ferrosoles, Dermosoles, Kandosoles, Rudosoles y Tenosoles. ",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/australia/lugares-turisticos"
    },
    AZ: {
      name: "Azerbaidjan"
    },
    BA: {
      name: "Bosnia-Herzegovina",
      description: "",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: ""
    },
    BD: {
      name: "Bangladesh",
      description: "Tipos de suelo: Pedogénicos en un gradiente de humedad Hillel, D. Soil in the Environment.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-bangladesh/"
    },
    BE: {
      name: "Belgium",
      description: "Tipo de suelos: suelo arenoso.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.spanish.hostelworld.com/blog/lugares-que-visitar-en-belgica/"
    },
    BF: {
      name: "Burkina Faso",
      description: "Tipos de suelo: El macizo etíope, pradera montaña.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://es.topworldtraveling.com/articles/travel-guides/15-best-places-to-visit-in-burkina-faso.html"
    },
    BG: {
      name: "Bulgaria"
    },
    BH: {
      name: "Bahrain"
    },
    BI: {
      name: "Burundi"
    },
    BJ: {
      name: "Benin",
      description: "",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://es.wikipedia.org/wiki/Ben%C3%ADn"
    },
    BN: {
      name: "Brunei Darussalam"
    },
    BO: {
      name: "Bolivia",
      description: "Los suelos aluviales de la región agropecuaria más cercana a la ciudad de Santa Cruz, en las tierras bajas bolivianas, son relativamente más fértiles a pesar de su bajo contenido de materia orgánica.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://lanzateyviaja.com/bolivia/lugares-turisticos"
    },
    BR: {
      name: "Brazil",
      description: "Tipos de suelo que tiene: Massapê, Aluviais, Salmourão y Terra Roxa. Un 12,5% cultivos. En estas zonas se cultiva: frijoles, maíz, cacao, plátanos y arroz y un tercio de naranjas. Los suelos destinados al pasto en Brasil es las áreas boscosas cubren cerca de 551 millones  un 65,2% de la superficie total.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.turismobr.com/sitios-turisticos-en-brasil/"
    },
    BS: {
      name: "Bahamas"
    },
    BT: {
      name: "Bhutan"
    },
    BW: {
      name: "Botswana",
      description: "Tipos de suelo: ránker, rendzina y los suelos de estepa.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://www.ambito.com/edicion-impresa/los-10-mejores-lugares-botswana-n3901410"
    },
    BY: {
      name: "Belarus",
      description: "Tipos de suelo: estepa, chernozem, el brunizem y las tierras negras.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://viajerocasual.com/que-ver-en-bielorrusia/"
    },
    BZ: {
      name: "Belize",
      description: " Consiste principalmente en planicies costeras pantanosas, en algunos sitios densamente forestadas. En el sur se encuentra una parte de la pequeña cadena montañosa de los Montes Maya, cuyo punto más elevado en territorio de Belice es Doyle's Delight, con 1124 m.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-belice/"
    },
    CA: {
      name: "Canada",
      description: "Tipos de suelo que tiene: Molisoles, Vertisoles, Solonetzic, Chernozem, Crysolic, Brunisolic, Podzolico, Orgánico.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://tipsparatuviaje.com/lugares-turisticos-de-canada/"

    },
    CD: {
      name: "Congo",
      description: "Tipos de suelo: Selva y sabana: 30%.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://www.tripadvisor.com.mx/Attractions-g294186-Activities-c47-Democratic_Republic_of_the_Congo.html"
    },
    CF: {
      name: "Central African Republic",
      description: "",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://es.topworldtraveling.com/articles/travel-guides/15-best-places-to-visit-in-central-african-republic.html"
    },
    CG: {
      name: "Congo",
      description: "Tipos de suelo: Selva y sabana: 30%.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://www.tripadvisor.com.mx/Attractions-g294186-Activities-c47-Democratic_Republic_of_the_Congo.html"
    },
    CH: {
      name: "Switzerland",
      description: ".",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-la-suecia/"
    },
    CI: {
      name: "Ivory Coast",
      description: "Tipos de suelo: El macizo etíope, pradera montaña.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://es.topworldtraveling.com/articles/travel-guides/15-best-places-to-visit-in-ivory-coast.html"
    },
    CL: {
      name: "Chile",
      description: " Tipos de suelo: Aridisoles, Entisoles, Alfisoles.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://tipsparatuviaje.com/lugares-turisticos-de-chile/"
    },
    CM: {
      name: "Cameroon",
      description: "Posee cerca de 4200 especies, es una de las más ricas del norte de África y una de las más diversas de la región mediterránea. Tipos de vegetación: el bosque mediterráneo norteafricano, la estepa arbustiva mediterránea",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://qveren.com/camerun/"
    },
    CN: {
      name: "China",
      description: "Tipos de suelo: tierra oscura de pradera, estepa y desierto.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/china/lugares-turisticos"
    },
    CO: {
      name: "Colombia",
      description: "Los tipos de suelos son: litorales, aluviales y lacustres, planicie eólica, altillanuras, aluvial de piedemonte, colina, cordillera, altiplanos. Se destacan los suelos incipientes, poco evolucionados con un 58.11 %.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://www.colombia.co/visita-colombia/experiencias-unicas/12-lugares-que-no-puedes-dejar-de-ver-en-colombia/"
    },
    CR: {
      name: "Costa Rica",
      description: "Tipos de Suelos: Inceptisoles: 15,8%, Alfisoles: 38,9%, Vertisoles: 62,1%, Molisoles: 54,6%, Espodosoles: 62,8%.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-costa-rica/"
    },
    CU: {
      name: "Cuba",
      description: "Tipos de suelo que tiene: El Pardo Sialítico con 2869,74 miles de hectáreas el 26,82% del total, seguidos por los Ferralítico y Fersialítico, mientras que los de menores superficie son Histosol, Ferrálico y Halomórfico.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/cuba/lugares-turisticos"
    },
    CV: {
      name: "Cape Verde"
    },
    CY: {
      name: "Cyprus"
    },
    CZ: {
      name: "Czech Republic",
      description: "En el interior del país aparecen planicies y mesetas ligeramente onduladas, mientras que, a lo largo de la frontera, con excepción del sureste del país, se alzan cadenas montañosas. ",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.skyscanner.es/noticias/inspiracion/los-10-mejores-lugares-que-ver-en-republica-checa"
    },
    DE: {
      name: "Germany",
      description: "Tipos de suelos: areniscas en la llanura del norte de Alemania, la tierra negro en Turingia y Baviera en la tierra marrón.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.guiadealemania.com/sitios-turisticos-en-alemania/"
    },
    DJ: {
      name: "Djibouti"
    },
    DK: {
      name: "Denmark",
      description: "Su costa oeste está protegida de las tempestades en el mar del norte por dunas y bancos de arena.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://javitour.com/atracciones-turisticas-de-dinamarca/"
    },
    DO: {
      name: "Dominican Republic",
      description: "",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/republica-dominicana/lugares-turisticos"
    },
    DZ: {
      name: "Algeria",
       description: "",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://www.turismotop.com/africa/10-lugares-imprescindibles-para-visitar-en-argelia/"
    },
    EC: {
      name: "Ecuador",
      description: " Tipos de suelo que tiene : Suelo Arenoso, Suelo Calizos, Suelo Humiferos, Suelo Arcilloso, Suelo Pedregoso, Suelo Francos. Un 9.9% de las zonas rurales está ocupada por cultivos .En estas zonas se cultiva  :banano, papas, maíz, caña de azúcar, palma africana, arroz, café y cacao .Los Suelos destinados a pastos, corresponden a un 19,4% del territorio ecuatoriano. Se destinan a la cría de ganado vacuno, porcino, avícola. Además un 17,3% se dedica a la explotación forestal .El 53,5% de los suelos del Ecuador está ocupado por las zonas urbanas.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://lostraveleros.com/que-ver-en-ecuador/"
    },
    EE: {
      name: "Estonia",
      description: "Según la IUCN, en Estonia había, en 2021, 15.403 áreas protegidas, ocupando unos 9633 km2, el 21,21 % del territorio, y 6825 km2 de áreas marinas, el 18,78 % de la superficie marina que corresponde al país, unos 36.345 km2..",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-estonia/"
    },
    EG: {
      name: "Egypt",
      description: "Tipos de suelo: suelos calcáreos y el suelo marino.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://www.viajeroscallejeros.com/lugares-que-visitar-egipto/"
    },
    EH: {
      name: "Western Sahara"
    },
    ER: {
      name: "Eritrea"
    },
    ES: {
      name: "Spain",
      description: "Tipos de suelos: Suelos zonales, suelos de tipo oceánico, suelos de dominio mediterráneo, suelos de zonas áridas, suelos azonales, Vertisoles, Redziniformes, suelos pardos calizos. ",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.mayoresudp.org/los-10-mejores-lugares-turisticos-en-espana/"
    },
    ET: {
      name: "Ethiopia",
      description: "Tipos de suelo: El macizo etíope, pradera montaña.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://www.cooperatingvolunteers.com/sin-categorizar/5-lugares-que-tienes-que-ver-en-etiopia/"
    },
    FI: {
      name: "Finland",
      description: "Tipos de suelos: Suelos grises, Turberas ácidas, arcillas de origen marino.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.turismoquindio.com/municipios/filandia/"
    },
    FJ: {
      name: "Fiji"
    },
    FK: {
      name: "Falkland Islands"
    },
    FR: {
      name: "France",
      description: "Tipos de suelos: marrón el suelo del bosque, bosque marrón noroeste variación suelo y podzol europeo.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/francia/lugares-turisticos"
    },
    GA: {
      name: "Gabon",
      description: "Se distinguen claramente tres unidades estratigráficas: el zócalo arcaico y los sedimentos proterozoicos, que cubren el 75 por ciento del país, y la cobertura sedimentaria del fanerozoico.  ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://es.topworldtraveling.com/articles/travel-guides/15-best-places-to-visit-in-gabon.html"
    },
    GB: {
      name: "Great Britain"

    },
    GE: {
      name: "Georgia",
      description: "",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://red-viajes.com/los-10-mejores-lugares-para-visitar-en-el-pais-de-georgia/"

    },
    GF: {
      name: "French Guyana",
      description: "Su territorio ocupa una superficie de 92 300 km², por lo que su extensión puede compararse con la de Portugal.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://www.liligo.es/magazine-viajes/5-lugares-que-visitar-en-la-guayana-francesa-78150.html"
    },
    GH: {
      name: "Ghana",
       description: "Se requiere de un sistema de suelo elevado que permita por un lado la colocación de una gran cantidad de instalaciones eléctricas, tuberías, voz y datos.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "http://taly.com.ar/8-las-mejores-atracciones-turisticas-ghana/"
    },
    GL: {
      name: "Greenland",
      description: "Tipos de suelo que tiene:  fino, pesados, poroso y bastante salado. ",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://elpais.com/elpais/2013/07/22/paco_nadal/1374472800_137447.html"
    },
    GM: {
      name: "Gambia",
       description: "Tiene una extensa sabana y sus humedales, sigue siendo el hábitat de un gran número de especies animales.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://es.topworldtraveling.com/articles/travel-guides/15-best-places-to-visit-in-the-gambia.html"
    },
    GN: {
      name: "Guinea",
      description: "Tipos de suelo: granito y gneis..",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://cronosair.blog/lugares-turisticos-guinea-ecuatorial/"

    },
    GQ: {
      name: "Equatorial Guinea"
    },
    GR: {
      name: "Greece",
      description: "La mayor parte de estas islas tienen suelo rocoso, poco apto para la vegetación.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.skyscanner.es/noticias/los-15-mejores-lugares-que-ver-en-grecia"
    },
    GS: {
      name: "S. Georgia & S. Sandwich Isls."
    },
    GT: {
      name: "Guatemala",
      description: "Tierras bajas de Petén: Las mismas representan un área de bosque tropical, Provincia volcánica: Abarca un área aproximada de 25 000 kilómetros cuadrados, conteniendo 40 volcanes principales.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://lanzateyviaja.com/guatemala/lugares-turisticos"
    },
    GW: {
      name: "Guinea Bissau"
    },
    GY: {
      name: "Guyana",
      description: "Los suelos de la Región Guayana son los suelos más antiguos del mundo, es de tipo rocoso, por lo cual la agricultura es muy pobre.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-guayana/"
    },
    HN: {
      name: "Honduras",
      description: "Se caracteriza por tener diferentes tipos de suelos, los podemos caracterizar o clasificar según su humedad: Húmedos siendo un el 46% del territorio; Secos conformando un gran porcentaje con el 43%territorio del; Zonas Pantanosas formado el 9.2% del país, El resto son piedras o rocas carentes de suelo..",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-honduras/"
    },
    HR: {
      name: "Croatia",
      description: "Tipos de suelos: humus, negros.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.losapuntesdelviajero.com/que-ver-en-croacia/"
    },
    HT: {
      name: "Haiti",
      description: "Los suelos que predominan son los aridisoles , Argids ,pedalfers, podzólicos.",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-haiti/"
    },
    HU: {
      name: "Hungary",
      description: "Tipos de suelos suelo, suelo pardo forestal, suelo pálido forestal, suelo arenoso, suelo pantanoso suelo chernozem, suelo aluvial, suelo de pradera, suelo salino, suelo marrón rojizo, mapa, naturaleza, geografía.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://www.skyscanner.es/noticias/inspiracion/los-15-mejores-lugares-que-ver-en-hungria"
    },
    IC: {
      name: "Canary Islands"
    },
    ID: {
      name: "Indonesia",
      description: "Los tipos de suelos se clasifican en: Turba, Tierra de humus, Tierra de arena, Suelo de laterita, Mergel Land, suelos aluviales, caliza,arcilla,Suelo volcánico,Suelo de andosol. ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-indonesia/"
    },
    IE: {
      name: "Ireland"
    },
    IL: {
      name: "Israel"
    },
    IN: {
      name: "India",
      description: "Tipos de suelo: suelo aluvial, suelo negro, suelo rojo, Laterita.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-india/"
    },
    IQ: {
      name: "Iraq",
      description: "Iraq cuenta con una superficie de 438 317 km².",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-iraq/"
    },
    IR: {
      name: "Iran",
      description: "Más del 10% del país está cubierto de bosque. Los más extensos se encuentran en las laderas montañosas que se alzan desde el mar Caspio, con roble, fresno, olmo, cipreses y otros árboles valiosos.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-iran/"
    },
    IS: {
      name: "Iceland"
    },
    IT: {
      name: "Italy",
      description: "El suelo dominante, en este tipo de regiones, es el rojo mediterráneo y el pardo, y en las zonas en las que predomina la caliza la terra rossa.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-italia/"
    },
    JM: {
      name: "Jamaica",
      description: "",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://javitour.com/atractivos-turisticos-de-jamaica/"
    },
    JO: {
      name: "Jordan",
      description: "Jordania posee una árida planicie que cubre las regiones centrales y orientales de su territorio, por lo que solamente el 3,32% de las tierras son cultivables.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-jordania/"
    },
    JP: {
      name: "Japan",
      description: "Debido a la secuencia alternante de montaña y valle y a que la mayoría del suelo es rocoso, se estima que solo el 12,9 % del territorio japonés está cultivado",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-japon/"
    },
    KE: {
      name: "Kenya",
      description: "Su relieve montañoso y régimen de lluvias hacen que en pocas distancias cambie radicalmente el paisaje. La agricultura es bien marcada. Según sus pocas estadísticas confiables, un 75 % de la tierra está en manos de pequeños productores.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-eslovenia/"
    },
    KG: {
      name: "Kyrgyzstan",
      description: "La región montañosa del Tian Shan cubre más del 80% del país.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-kirguistan/"
    },
    KH: {
      name: "Cambodia",
      description: "Su geografía está dominada por el río Mekong , una fuente muy importante de pesca, sobre todo en época de lluvias cuando sus aguas fluyen en sentido contrario.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-camboya/"
    },
    KP: {
      name: "North Korea",
      description: "El territorio de Corea del Norte es considerablemente montañoso, con cordilleras cubiertas por bosques.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-corea-del-norte/"
    },
    KR: {
      name: "South Korea",
      description: "En estas zonas se ha desarrollado una agricultura que, además de los valles, ha ocupado las laderas de los montes mediante terrazas.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-corea-del-sur/"
    },
    KW: {
      name: "Kuwait",
      description: "Tipos de suelo: Desértico.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-kuwait/"
    },
    KZ: {
      name: "Kazakhstan",
      description: "Tipos de suelo que tiene: Massapê, Aluviais, Salmourão y Terra Roxa. Un 12,5% cultivos. En estas zonas se cultiva: frijoles, maíz, cacao, plátanos y arroz y un tercio de naranjas. Los suelos destinados al pasto en Brasil es las áreas boscosas cubren cerca de 551 millones  un 65,2% de la superficie total.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-kazajstan/"
    },
    LA: {
      name: "Laos",
      description: "Tipos de suelo: Alfisoles, Andisoles.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-laos/"
    },
    LK: {
      name: "Sri Lanka",
      description: "",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-sri-lanka/"
    },
    LR: {
      name: "Liberia"
    },
    LS: {
      name: "Lesotho"
    },
    LT: {
      name: "Lithuania",
      description: "La estructura básica de Lituania es de unas fértiles llanuras centrales separadas por tierras altas onduladas que son antiguos depósitos glaciares.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: ""
    },
    LU: {
      name: "Luxembourg"
    },
    LV: {
      name: "Latvia",
      description: "La mayor parte de su territorio es llano, cubierto por depósitos de tierra y barro y con grandes zonas ocupadas por bosques de coníferas, páramos y pantanos.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-de-turisticos-de-lituania/"
    },
    LY: {
      name: "Libya",
      description: "Tiene grandes extensiones de desierto sahariano que cubren la totalidad del país a excepción de una estrecha franja litoral, donde se encuentran los principales núcleos de población del país, como Trípoli y Bengasi.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://es.wikipedia.org/wiki/Libia"
    },
    MA: {
      name: "Morocco",
      description: "Posee cerca de 4200 especies, es una de las más ricas del norte de África y una de las más diversas de la región mediterránea. Tipos de vegetación: el bosque mediterráneo norteafricano, la estepa arbustiva mediterránea, y el bosque seco mediterráneo y matorral suculento de acacias y erguenes. ",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://www.turismomarruecos.net/blog/10-lugares-recomendados-para-visitar-en-marruecos/"
    },
    MD: {
      name: "Moldavia"
    },
    ME: {
      name: "Montenegro",
      description: "Se encuentra ubicado en la península de los Balcanes junto a la costa oriental del mar..",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-montenegro/"
    },
    MG: {
      name: "Madagascar",
      description: "Tipos de suelos: Ferralsoles. ",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://planificatuviaje.es/africa/madagascar/"
    },
    MK: {
      name: "Macedonia"
    },
    ML: {
      name: "Mali",
      description: "Desertificación, la deforestación, la erosión del suelo.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://www.skyscanner.es/noticias/los-5-mejores-lugares-que-ver-en-mali"
    },
    MM: {
      name: "Myanmar",
      description: "El relieve montañoso culmina en su extremo norte, hay muchos volcanes inactivos.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-myanmar/"
    },
    MN: {
      name: "Mongolia",
      description: "La región central de Mongolia consiste principalmente en estepas relativamente planas.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-las-mongolia/"
    },
    MR: {
      name: "Mauritania",
      description: " Tipos de suelos: Consiste en una serie de sinclinales: el de Tindouf, cubierto de areniscas, en la frontera con Argelia, y el de Taoudeni, que ocupa las dos terceras partes ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://www.tripadvisor.es/Attractions-g293814-Activities-c47-Mauritania.html"

    },
    MW: {
      name: "Malawi"
    },
    MX: {
      name: "Mexico",
      description: "La mayor parte del territorio nacional está dominado por cinco unidades: leptosoles (24% del territorio), regosoles (18.5%), calcisoles (18.2%), feozems (9.7%) y vertisoles (8.3%), con los que se cubren casi las cuatro quintas partes del país.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/mexico/lugares-turisticos"
    },
    MY: {
      name: "Malaysia",
      description: "La superficie total de Malasia, de unos 330.000 km², la convierte en el 66 país del mundo por extensión, y es el único país que contiene a la vez tierra en Asia y el archipiélago Malayo..",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-malasia/"
    },
    MZ: {
      name: "Mozambique",
      description: "Tipos de suelo: de cuarcita, de esquisto y húmedos o hidromórficos. Sobre suelos cuarcíticos, los pastizales generalmente crecen bajos, con pastos copetudos.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://viajerocasual.com/que-ver-en-mozambique/"
    },
    NA: {
      name: "Namibia",
      description: "",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://elviajero.elpais.com/elviajero/2016/08/01/actualidad/1470062865_741875.html"
    },
    NC: {
      name: "New Caledonia (French)"
    },
    NE: {
      name: "Niger",
      description: "Tipos de suelo: El macizo etíope, pradera montaña.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://www.turismotop.com/africa/10-lugares-imprescindibles-para-visitar-en-nigeria/"
    },
    NG: {
      name: "Nigeria",
      description: "Agricultura 33,4%, industria 34,1% comercio y servicios 32,5%.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://www.turismotop.com/africa/10-lugares-imprescindibles-para-visitar-en-nigeria/"
    },
    NI: {
      name: "Nicaragua",
      description: "Tipos de suelo que tiene: Molisoles, Entisoles, Vertisoles, Inceptisoles, Alfisoles, Ultisoles, Oxisoles, Histosoles, suelos de tobas, brechas y conglomerados de diversas texturas y composición, suelos arcillosos, el sonsocuite, o arcilla negra de los trópicos, Suelos arenosos ácidos, los suelos aluviales, los suelos pedregosos o litosuelos.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://es.wikipedia.org/wiki/Nicaragua"
    },
    NL: {
      name: "Netherlands",
      description: "Es un país muy llano. La mitad de su territorio, la región de los pólders está por debajo del nivel del mar y dos quintas partes están entre 0 y 5 msnm.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://es.wikipedia.org/wiki/Pa%C3%ADses_Bajos"
    },
    NO: {
      name: "Norway",
      description: "Tipos de suelo: Meseta penillanura, pero el relieve glaciar ha modificado en mucho esta estructura, formando las montañas verticales que caracterizan a Noruega.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-nicaragua/"
    },
    NP: {
      name: "Nepal",
      description: "Tipos de suelo: Rocosos, montañosas y colinas.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-nepal/"
    },
    NZ: {
      name: "New Zealand"
    },
    OM: {
      name: "Oman",
      description: "Tipos de suelo: Desértico. ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-oman/"
    },
    PA: {
      name: "Panama",
      description: "Suelos fértiles como los de Volcán, Cerro Punta y Boquete, suelo arcilloso, suelo árido o desértico, suelo de pantano (posee exceso de humedad), suelo de tundra.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://www.lugaresturisticos.org/panama/"
    },
    PE: {
      name: "Peru",
      description: "Tipo de suelo que tiene : Suelo Arenoso, Suelo Rocoso, Suelo Arcilloso, Suelos Arcalino ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-peru/"

    },
    PG: {
      name: "Papua New Guinea",
      description: "Su territorio ocupa una superficie de 92 300 km², por lo que su extensión puede compararse con la de Portugal.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://www.tripadvisor.es/Attractions-g294115-Activities-Papua_New_Guinea.html"
    },
    PH: {
      name: "Philippines",
      description: "Esta constituida por un archipiélago de 7107 islas que suman un total de unos 300 000 km² de tierra. Dos de estas islas ya suman 200 000 km²: la mayor, Luzón, con un total de 105 000 km² aproximadamente, y Mindanao, con 94 600 km².",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-filipinas/"
    },
    PK: {
      name: "Pakistan",
      description: "En Pakistán hay 178 áreas protegidas que cubren 98.000 km², el 12,3 por ciento del territorio, además de 1700 km² de áreas marinas, el 0,77 por ciento de los 222.744 km² que corresponden a Pakistán.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-pakistan/"
    },
    PL: {
      name: "Poland",
      description: "El suelo de Polonia forma en su mayor parte por el Escudo Báltico y la Llanura Sarmática. La inclinación del terreno es de sur a norte, es decir, de los Cárpatos hacia el mar Báltico.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-polonia/"

    },
    PR: {
      name: "Puerto Rico"
    },
    PS: {
      name: "Palestine"
    },
    PT: {
      name: "Portugal",
      description: "Tipos de suelos: Silíceo, granitos, gneis, pizarras, entre otros.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-portugal/"
    },
    PY: {
      name: "Paraguay",
      description: "Tipos de suelo que tiene son: basaltos, granito y sedimentos. La explotación forestal aprovecha las numerosas especies tropicales de madera, como el palo rosa, de donde se extrae el tanino y cuya madera se utiliza en la fabricación de durmientes para las vías férreas. Tierras arables: 6%, cultivos permanentes: 0%, pasturas permanentes: 55%, bosques y forestaciones: 32%.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-paraguay/"
    },
    QA: {
      name: "Qatar",
      description: "Tipos de suelo: Catas de Mezcal, Megueyes.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-qatar/"
    },
    RO: {
      name: "Romania",
      description: "El país está dividido en tres regiones principales, la meseta de Transilvania, en el centro del país; los Cárpatosque rodean la meseta central y se extienden hacia el norte y el sur y las tierras bajas.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-romania/"
    },
    RS: {
      name: "Serbia"
    },
    RU: {
      name: "Russia",
      description: "El suelo típico de la estepa es el chernozem, el brunizem y las tierras negras.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-rusia/"
    },
    RW: {
      name: "Rwanda"
    },
    SA: {
      name: "Saudi Arabia",
      description: "Tiene grandes problemas en cuanto al agua del medio ambiente se refiere. Principalmente, estos problemas están marcados por la desertificación, el agotamiento de aguas subterráneas y la ausencia de masas permanentes de esta sustancia.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-arabia-saudita/"
    },
    SB: {
      name: "Solomon Islands"
    },
    SD: {
      name: "Sudan",
      description: "Tipos de suelos: Desierto del Sahara, Estepa y sabana arbolada del Sahara meridional, Sabana de acacias del Sahel, Sabana sudanesa oriental.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://www.tripadvisor.com.mx/Attractions-g293834-Activities-c47-Sudan.html"
    },
    SE: {
      name: "Sweden",
      description: "Tipos de suelos: Tundra, Taiga y bosques.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-la-suecia/"
    },
    SI: {
      name: "Slovenia"
    },
    SK: {
      name: "Slovak Republic",
      description: "El paisaje eslovaco se destaca por sus montañas, los Cárpatos, que se extienden a todo lo ancho de la zona septentrional del país. ",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-eslovaquia/"
    },
    SL: {
      name: "Sierra Leone"
    },
    SN: {
      name: "Senegal",
      description: "Con solo alrededor del 5% de la tierra irrigada, Senegal sigue dependiendo de la agricultura de secano, que ocupa alrededor del 75% de la mano de obra. ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://1000sitiosquever.com/que-ver-en-senegal"
    },
    SO: {
      name: "Somalia",
      description: "Compuesto principalmente de llanuras, mesetas y tierras elevadas.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://www.tripadvisor.com.mx/Attractions-g294439-Activities-c47-Somalia.html"
    },
    SR: {
      name: "Suriname",
      description: "Su mayor parte de su territorio > 90% son bosques tropicales de lluvia, mesolíticos, con relictos de vegetación xerofítica y sabanas, testimonio de periodos del pleistoceno más húmedos que los actuales.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-surinam/"
    },
    SS: {
      name: "South Sudan",
      description: "Tipos de suelo: Selva y sabana: 30%.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://es.topworldtraveling.com/articles/travel-guides/15-best-places-to-visit-in-south-sudan.html"
    },
    SV: {
      name: "El Salvador",
      description: "Suelos arenosos. Incapaces de retener el agua, son escasos en materia orgánica y por lo tanto poco fértiles, suelos calizos, suelos humíferos, suelos arcillosos, suelos pedregosos, suelos mixtos.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://enviajes.cl/el-salvador/lugares-turisticos-de-el-salvador/"
    },
    SY: {
      name: "Syria",
      description: "Tiene una doble cordillera en cuyo interior se abren diversos valles y más hacia el sur, las cumbres del Monte Hermón, en la frontera entre Líbano y Siria, descienden hacia la meseta Hauranque recibe los vientos húmedos del Mediterráneo.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://www.descubra.info/turismo-en-siria-viaje-al-viejo-mundo/"
    },
    SZ: {
      name: "Swaziland",
      description: "Suiza está marcada por la presencia de cinco cuencas fluviales, de numerosos lagos y de algunos de los glaciares más grandes de Europa.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-suiza/"
    },
    TD: {
      name: "Chad",
      description: "La estructura física dominante es una cuenca amplia limitada en el norte, este y sur por cadenas montañosas.",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://es.topworldtraveling.com/articles/travel-guides/14-best-places-to-visit-in-chad.html"
    },
    TG: {
      name: "Togo",
      description: "Tipos de suelo: El macizo etíope, pradera montaña.",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://www.tripadvisor.es/Attractions-g293838-Activities-c47-Togo.html"
    },
    TH: {
      name: "Thailand",
      description: "La posición de Tailandia como eje de la zona ha influenciado muchos aspectos de su sociedad y de su cultura.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-tailandia/"
    },
    TJ: {
      name: "Tadjikistan",
      description: "es pobre en humus, pero rico en nutrientes minerales. La arena, las tejas, los pedregales, las rocas desnudas y la nieve y el hielo permanentes cubren aproximadamente dos tercios de la superficie.",
      color: "#808078",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-tayikistan/"
    },
    TL: {
      name: "East Timor"
    },
    TM: {
      name: "Turkmenistan",
       description: "Ocupado casi en su totalidad por el desierto de Karakum y la meseta de Karabil. ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-turkmenistan/"
    },
    TN: {
      name: "Tunisia"
    },
    TR: {
      name: "Turkey",
      description: "Las categorías principales del uso del suelo en Turquía son agricultura, prados y pastos.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-turquia/"
    },
    TT: {
      name: "Trinidad and Tobago"
    },
    TW: {
      name: "Taiwan",
      description: "El 99% conforma el archipiélago, y el 1% conforma las otras Islas.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-taiwan/"
    },
    TZ: {
      name: "Tanzania",
      description: "Sus fronteras naturales las conforman el océano Índico al este, el Kilimanjaro y el lago Victoria al norte, el río Kagera al noroeste, el lago Tanganica al oeste, el lago Malaui al sudoeste y el río Ruvuma al sur.",
      color: "#AD061C",
      hover_color: "#EC9FE7",
      url: "https://www.turistum.com/10-atracciones-turisticas-en-tanzania"
    },
    UA: {
      name: "Ukraine",
      description: "Tipos de suelos: Chernoze.",
      color: "#1BC349",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-ucrania/"
    },
    UG: {
      name: "Uganda",
      description: "Tipos de suelo: Sabana sudanesa oriental en el norte, Mosaico de selva y sabana del norte del Congo en el noroeste, Sabana arbustiva de Kenia en el nordeste, Mosaico de selva y sabana de la cuenca del lago Victoria.",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://1000sitiosquever.com/sitios-que-ver-en-uganda"
    },
    US: {
      name: "United States",
      description: "Tipos de suelo que tiene: Spodosols, Orthods, Humods, Cryods, Gelods y Aquods. Spodosols conforman 3,5%, Histosol ocupa el 1,6%.",
      color: "#337CEC",
      hover_color: "#EC9FE7",
      url: "https://lanzateyviaja.com/estados-unidos/lugares-turisticos"
    },
    UY: {
      name: "Uruguay"

    },
    UZ: {
      name: "Uzbekistan",
      description: "La topografía del país es variada, desde la planicie desértica que comprende casi el 80% del territorio a las montañas en el este, que llegan a los 4.643 m de altitud.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-uzbekistan/"
    },
    VE: {
      name: "Venezuela",
      description: "Los suelos venezolanos se agrupan en suelos zonales, suelos azonales, suelos intrazonales, suelos de zonas áridas, semiáridas y posterioridad grandes cambios en los suelos cuando llueve y tenemos la llamada erosión, meteorización y formación..",
      color: "#DC6A11",
      hover_color: "#B95A0C",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-venezuela/"
    },
    VN: {
      name: "Vietnam",
      description: "En las tierras altas del norte del país hay minerales de gran valor, como hierro, antricta, cinc, cromo, estaño y apatito. Frente a la costa se han descubierto yacimientos de petróleo y gas natural.",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-vietnam/"
    },
    VU: {
      name: "Vanuatu"
    },
    YE: {
      name: "Yemen",
      description: "Tipos de suelo: Litosol, Feozem háplico, Luvisol vértico y férrico y Gleysol mólico. ",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://ecuco7.com/blog/lugares-turisticos-de-yemen/"
    },
    ZA: {
      name: "South Africa",
      description: "Tipos de suelo: arenisca al oeste en Table Mountain (perfecta para vinos blancos); aluviones alrededor del río Eerste y granito (bueno para los tintos) al este en las estribaciones montañosas. ",
      color: "#B6900D",
      hover_color: "#EC9FE7",
      url: "https://growproexperience.com/sudafrica/que-ver-en-sudafrica/"
    },
    ZM: {
      name: "Zambia",
      description: "",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://visaalmundo.com/blog/que-ver-en-zambia-viajes-a-africa/"
    },
    ZW: {
      name: "Zimbabwe",
      description: "Tipos de vegetación: Sabana arbolada de teca del Zambeze (oeste), Sabana arbolada del Kalahari (oeste), Sabana arbolada de mopane del Zambeze (norte y sur), Sabana arbolada de miombo meridional (centro), ",
      color: "#7206A5",
      hover_color: "#EC9FE7",
      url: "https://visaalmundo.com/blog/que-ver-en-zambia-viajes-a-africa/"
    }
  },
  locations: {
    "0": {
      name: "Poland",
       lat: " 51.919438",
      lng: " 19.145136",
      description:"Su rango de temperatura es de -10 a 8°C anuales. Su mayor producción son las siguientes: aparatos receptores de televisión: 4,36%, máquinas automáticas: 4,11%.",
      color: "#7A640D",
      url: ""
    },
    "1": {
      name: "Italy",
      lat: "41.87194",
      lng: "12.56738",
      description:"Su rango de temperatura es de 11 a 19°C anuales. Su mayor producción son las siguientes: aceites de petróleo o minerales bituminosos: 14,2%, Cultivos de microorganismos: 7,23%.",
      color: "#7A640D",
      url: ""
    },
    "2": {
      name: "Norway",
      lat: "  60.472024",
      lng: "8.468946",
      description:"Su rango de temperatura es de 5 a 28°C anuales. Su mayor producción son las siguientes: aceites de petróleo y de mineral bituminoso no crudo: 70%.",
      color: "#7A640D",
      url: ""
    },
    "3": {
      name: "Sweden",
      lat: " 60.128161",
      lng: "18.643501",
      description:"Su rango de temperatura es de 6°C anuales. Su mayor producción son las siguientes: Vehículos: 19,7%, pescado: (18,4), maquinaria: (15,6%).",
      color: "#7A640D",
      url: ""
    },
    "4": {
      name: "France",
      lat: "46.227638",
      lng: "2.213749",
      description:"Su rango de temperatura es de 11,7°C anuales. Su mayor producción son las siguientes: aeronaves, vehículos productos farmacéuticos, productos alimentarios (vino), hidrocarburos y componentes electrónicos: 65%.",
      color: "#7A640D",
      url: ""
    },
    "5": {
      name: "Ecuador",
      lat: "-0.225219",
      lng: "-78.5248",
      description: "El rango de temperatura es de -0 a 26°C Anuales. Su mayor produccion son las siguientes : Petroleo con 37,1% , Camaron con 14,8% , Banano y Platano con 5,8% y Flores con 4% .",
      color: "#650897",
      url: ""
    },
    "6": {
      name: "Peru",
      lat: "-9.189967",
      lng: "-75.015152",
      description: "El rango de temperatura de 0 a 35°C Anueales. Su Mayor produccion son : ",
      color: "#650897",
      url: ""
    },
    "7": {
      name: "Chile",
      lat: "-35.675147",
      lng: "-71.542969",
      description: "Su rango de temperatura es de 19 cola mayor producción:-Cobre: 50%,- filetes de pescado.",
      color: "#650897",
      url: ""
    },
    "8": {
      name: "Colombia",
      lat: "4.570868",
      lng: "-74.297333",
      description: "Su rango de temperatura es de 29 °C. La mayor producción: -Combustibles y minerales: 47,4%, -Ordenadores: 8%, -Vehículos: 5,6%.",
      color: "#650897",
      url: ""
    },
    "9": {
      name: "Argentina",
      lat: "-38.416097",
      lng: "-63.616672",
      description: "Su temperatura maxima es de 23°C Anuales. La mayor producción: -Harina de soja: 13,5%, Maíz: 9,10%,-Camiones: 6%,-Porotos deshuesada: 2,24%,-Oro: 2,21%,-Camarones y langostinos congelados: 1,62%.",
      color: "#650897",
      url: ""
    },
    "10": {
      name: "Paraguay",
      lat: "-23.442503",
      lng: "-58.443832",
      description: "Su temperatura promedio es de 25 a 38 °C Anuales. La mayor producción: -vegetales: 1,1%, -Minerales: 24%, -Alimentos animales: 14%,- Productos Alimenticios: 13%.",
      color: "#650897",
      url: ""
    },
    "11": {
      name: "Uruguay",
      lat: "-32.522779",
      lng: "-55.765835",
      description: "Tierra ",
      color: "#650897",
      url: ""
    },
    "12": {
      name: "Bolivia",
      lat: "-16.290154",
      lng: "-63.588653",
      description: "Su temperatura máxima es de 25 °C Anuales. La mayor producción: -Combustibles minerales y petróleo: 28,9%, - Metales preciosos: 21,1%, -Minerales, Escoria, Ceniza: 21,1%, - frutos secos: 2,3%, -Cereales: 1,5%,- Semillas oleaginosas: 1,3%, -Bebidas, licores, vinagre: 1%.",
      color: "#650897",
      url: ""
    },
    "13": {
      name: "Brazil",
      lat: "-14.235004",
      lng: "-51.92528",
      description: "Su temperatura maxima es de 26 °C anuales. La mayor producción:- Hierro mineral y hierro fundido: 16,3%,-Petróleo: 8,4%, -Soja : 6,4%,-Caña de azúcar: 4,5% -Café en grano: 3,1%, -Carne de pollo: 2,8%,-Aceite de soja: 2,2%, Madera: 1,9%. ",
      color: "#650897",
      url: ""
    },
    "14": {
      name: "Venezuela",
      lat: "6.42375",
      lng: "-66.58973",
      description: "Su rango de temperatura es de 26 °C Anuales. La mayor producción: -Minerales: 82,5%, -Metales preciosos: 10%, -Químicos orgánicos: 1,3%,- Acero, hierro: 0,9%,- Aluminio: 0,8%, -Fertilizantes: 0,7%,- Pescado: 0,4%,- Bebidas, licores, vinagre: 0,2%.",
      color: "#650897",
      url: ""
    },
    "15": {
      name: "Guyana",
      lat: "4.860416",
      lng: "-58.93018",
      description: "Su rango de temperatura es de 26,8 °C. La mayor producción: azúcar, oro, bauxita, camarón, madera y arroz que representa el 60%.",
      color: "#650897",
      url: ""
    },
    "16": {
      name: "Suriname",
      lat: "3.919305",
      lng: "-56.027783",
      description: "Su rango de temperatura es de 26 a 28 °C Anuales. Sus mayor producción: Alúmina, oro y petróleo: 85%.",
      color: "#650897",
      url: ""
    },
    "17": {
      name: "French Guyana",
      lat: "3.933889",
      lng: "-53.125782",
      description: "Su rango de temperatura es de 29 °C. La mayor producción en cultivos se limita a la zona costera, donde la población se concentra principalmente, el arroz y la yuca son dos de los cultivos principales.",
      color: "#650897",
      url: ""
    },
    "18": {
      name: "Mexico",
      lat: "23.634501",
      lng: "-102.552784",
      description: "Su rango de temperatura es de 2 a 30°C anuales. Su mayor producción son las siguientes: cerveza, tomate, chiles, pimientos, frutos rojos, aguacate, tequila: 84%, Exportaciones manufactureras 89.6% del total, Agropecuarias 4.5%, Petroleras 4.1%, Extractivas 1.8%, Equipo de transporte 38.4%, Eléctrico 23.6%, Aparatos y accesorios eléctricos, 5.8%, Industria química 4.6%, Maquinaria y equipo 4.4%, Industrias metálicas básicas 4.1%, Resto de subsectores 19%.",
      color: "#EC912A",
      url: ""
    },
    "19": {
      name: "Canada",
      lat: "56.130366",
      lng: "-106.346771",
      description: "Su rango de temperatura es de 0 a 26°C anuales. Su mayor producción son las siguientes: Aceites crudos de petróleo o de mineral bituminoso: 15,3%, Automóviles de turismo y demás vehículos automóviles: 9,1%, Oro, incl. el oro platinado en bruto, semielaborado o en polvo; 3,5%, Aceites de petróleo o de mineral bituminoso: 2,7%, Madera aserrada o desbastada longitudinalmente, lijada o unida por los extremos: 1,4%.",
      color: "#EC912A",
      url: ""
    },
    "20": {
      name: "Greenland",
      lat: "71.706936",
      lng: "-42.604303",
      description: "Siempre hace frío, tienen temperaturas por debajo de 0°C. Su mayor producción son las siguientes: Camarones, langostinos, quisquillas y gambas preparados o conservados: 36%, caballa y estorninos frescos refrigerados, hígados, huevas, lechas: 54%.",
      color: "#EC912A",
      url: ""
    },
    "21": {
      name: "United States",
      lat: "38.0000000",
      lng: "-97.0000000",
      description: "Su rango de temperatura es de -3 a 21,5°C anuales. Su mayor producción son las siguientes: Ordenadores: 13,1%, Maquinaría eléctrica: 11,5%, Aviones y naves espaciales: 9,3%, Vehículos: 8,5%, Combustibles minerales: 6,5%, Aparatos ópticos, técnicos y médicos: 5,6%, Platicos: 4%, Metales preciosos: 4%, Farmacéuticos: 3,2%, Químicos orgánicos: 2,3%.",
      color: "#EC912A",
      url: ""
    },
    "22": {
      name: "Guatemala",
      lat: "15.783471",
      lng: "-90.230759",
      description: "Su rango de temperatura es de 27°C anuales. Su mayor producción son las siguientes: Café, té, especias: 11,8%, Frutas, nueces: 11,2%, Ropa y accesorios de punto o crochet: 10,3%, Azúcar, artículos de confitería: 7,3%, Combustibles minerales, incluido el petróleo: 4,5%, Grasas, aceites y ceras animales/ vegetales: 4,4%, Hierro, acero: 3%, Plásticos, artículos de plástico: 3,1%, Verduras: 3%, Bebidas, licores, vinagre: 3%. ",
      color: "blue",
      url: ""
    },
    "23": {
      name: "Salvador",
      lat: "13.794185",
      lng: "-88.89653",
      description: "Su rango de temperatura es de 23,5°C anuales. Su mayor producción son las siguientes: Café, Azúcar, Caña y granos básicos: 15%, Plástico y caucho: 27%. ",
      color: "blue",
      url: ""
    },
    "24": {
      name: "Cuba",
      lat: "21.521757",
      lng: "-77.781167",
      description: "Su rango de temperatura es de 24 a 26°C anuales. Su mayor producción son las siguientes: Productos de origen Animal y Vegetal: 28,5%, Productos minerales: 34,8%, Productos de la industria Química: 56,7%, Servicios: 17%.",
      color: "blue",
      url: ""
    },
    "25": {
      name: "Nicaragua",
      lat: "12.865416",
      lng: "-85.207229",
      description: "Su rango de temperatura es de 34°C anuales. Su mayor producción son las siguientes: Café oro: 117,5%, Carne de bovino: 97%, Azúcar de caña: 36,9%, Oro en bruto: 78,5%, Maní: 22,2%, Queso: 28,9%, Frijoles: 14,4%, Langosta: 16,8%, Leche: 8,3%, Camarón de cultivo: 10,3%, Aceites y grasas: 6,7%.",
      color: "blue",
      url: ""
    },
    "26": {
      name: "Australia",
      lat: "-25.274398",
      lng: "133.775136",
      description: "Tiene un rango de temperatura  de 29ºC. Y el invierno va de junio a agosto, con temperaturas medias en torno a 13 grados.La principal exportación de Australia es el mineral de hierro, seguido de otras valiosas exportaciones como el carbón, el oro o el petróleo. Solo estas exportaciones ya suponen unos ingresos de $48.2 mil millones.",
      color: "blue",
      url: ""
    },
    "27": {
      name: "Indonesia",
      lat: "-0.789275",
      lng: "113.921327",
      description: "Tiene un rango de temperatura de 22/25 grados y una máxima de 30/32 grados durante todo el año. Las principales exportaciones de Indonesia son Hullas; Briquetas, Ovoides y Combustibles Sólidos Similares, Obtenidos de la Hulla, Aceite de Palma..",
      color: "blue",
      url: ""
    },
    "28": {
      name: "Papua New Guinea",
      lat: "-6.314993",
      lng: "143.95555",
      description: "Su rango de temperatura es de 34°C anuales. Su mayor producción son las siguientes: Café oro: 117,5%, Carne de bovino: 97%, Azúcar de caña: 36,9%, Oro en bruto: 78,5%, Maní: 22,2%, Queso: 28,9%, Frijoles: 14,4%, Langosta: 16,8%, Leche: 8,3%, Camarón de cultivo: 10,3%, Aceites y grasas: 6,7%.",
      color: "blue",
      url: ""
    },
    "29": {
      name: "Malaysia",
      lat: "4.210484",
      lng: "101.975766",
      description: "La temperatura media máxima está comprendida en el rango de los 32-33ºC y la temperatura media mínima oscila entre 23 y 25ºC. Las principales exportaciones de Malasia son Circuitos Electrónicos Integrados, Aceites de Petróleo o Minerales Bituminosos Gas de Petróleo Diodos, Transistores y Semiconductores Similares y Aceite de Palma.",
      color: "blue",
      url: ""
    },
    "30": {
      name: "Russia",
      lat: "61.52401",
      lng: "105.318756",
      description: "Su rango de temperatura es de -5,5°C anuales. Su mayor producción son las siguientes: Petróleo: 6,1%, gas: 24%, Aluminio, Metal, Acero, Chapa, Cobre y Níquel:10%, Maquinaria y equipamiento Básico: 7,3%, Trigo: 6%.",
      color: "#B30505",
      url: ""
    },
    "31": {
      name: "Kazakhstan",
      lat: "48.019573",
      lng: "66.923684",
      description: "Su rango de temperatura es de 34°C anuales. Su mayor producción son las siguientes: Café oro: 117,5%, Carne de bovino: 97%, Azúcar de caña: 36,9%, Oro en bruto: 78,5%, Maní: 22,2%, Queso: 28,9%, Frijoles: 14,4%, Langosta: 16,8%, Leche: 8,3%, Camarón de cultivo: 10,3%, Aceites y grasas: 6,7%.",
      color: "#B30505",
      url: ""
    },
    "32": {
      name: "Mongolia",
      lat: "46.862496",
      lng: "103.846656",
      description: "Su rango de temperatura es de 40 a 45°C anuales. Su mayor producción son las siguientes: vehículos: 54,6%.",
      color: "#B30505",
      url: ""
    },
    "33": {
      name: "Egypt",
      lat: "26.820553",
      lng: "30.802498",
      description: "Su rango de temperatura es de 22 a 28°C anuales. Su mayor producción son las siguientes: Productos metálicos, algodón, textiles y químicos: 18%.",
      color: "#3EDA0C",
      url: ""
    },
    "34": {
      name: "Nigeria",
      lat: "9.081999",
      lng: "8.675277",
      description: "Su rango de temperatura es de 18°C anuales. Su mayor producción son las siguientes: Petróleo: 65%, sorgo, mijo, maíz y arroz: 21%, Cacao: 33%, Carbón, Hierro y Estaño: 23%, Ovino, caprino y bovino: 55%.",
      color: "#3EDA0C",
      url: ""
    },
    "35": {
      name: "Mali",
      lat: "17.5706929",
      lng: "-3.996166",
      description: "Su rango de temperatura es de 27,8°C anuales. Su mayor producción son las siguientes: agricultura, pescas: 80%, hierro, algodón, oro: 34%, turismo: 4%.",
      color: "#3EDA0C",
      url: ""
    },
    "36": {
      name: "Congo",
      lat: "-0.228021",
      lng: "15.827659",
      description: "Su rango de temperatura es de 36,2 a 37°C anuales. Su mayor producción son las siguientes: Mandioca: 13%, Maíz: 12%, Aceite de palma: 45%, Arroz: 7%, batata, plátano, maní, mango: 26%. ",
      color: "#3EDA0C",
      url: ""
    },
    "37": {
      name: "Mauritania",
      lat: "21.00789",
      lng: "-10.940835",
      description: "Su rango de temperatura es de 29 a 35°C anuales. Su mayor producción son las siguientes: recursos mineros: 64%, Pesca: 25%.",
      color: "#3EDA0C",
      url: ""
    },
    "38": {
      name: "Ethiopia",
      lat: "9.145",
      lng: "40.489673",
      description: "Su rango de temperatura es de 27°C anuales. Su mayor producción son las siguientes: Maíz, sorgo, trigo, cebada, batata, caña de azúcar, ñame: 67%, Habas, patata, vegetales, garbanzo: 17%, café, repollo, gusane, cebolla, sésamo: 29%.",
      color: "#3EDA0C",
      url: ""
    },
    "39": {
      name: "Somalia",
      lat: "  5.152149",
      lng: "46.199616",
      description: "Su rango de temperatura es de 30°C anuales. Su mayor producción son las siguientes: Banana, azúcar, sorgo, maíz, pescado: 28,5%.",
      color: "#3EDA0C",
      url: ""
    },
    "40": {
      name: "Angola",
      lat: "-11.202692",
      lng: "17.873887",
      description: "Su rango de temperatura es de 27°C anuales. Su mayor producción son las siguientes: Petróleo: 11,1%, piña: 67%.",
      color: "#3EDA0C",
      url: ""
    },
    "41": {
      name: "Liberia",
      lat: "6.428055",
      lng: "-9.429499",
      description: "Su rango de temperatura es de 25,8°C anuales. ",
      color: "#3EDA0C",
      url: ""
    },
    "42": {
      name: "Libya",
      lat: "26.3351",
      lng: "17.228331",
      description: "Su rango de temperatura es de 10,2°C anuales. Su mayor producción son las siguientes: Minerales de hierro: 27,2%, Caucho Natural, Balata, Guatapercha, Guayle, Chicle y Gomas Naturales: 58,6%.",
      color: "#3EDA0C",
      url: ""
    },
    "43": {
      name: "Tunisia",
      lat: "33.886917",
      lng: "9.537499",
      description: "Su rango de temperatura es de 18,7°C anuales. Su mayor producción son las siguientes: Industria textil, subproductos del petróleo, aparatos eléctricos, aceite de oliva, viajes y transporte: 13,2%.",
      color: "#3EDA0C",
      url: ""
    },
    "44": {
      name: "Sudan",
      lat: "12.862807",
      lng: "30.217636",
      description: "Su rango de temperatura es de 38°C anuales. Su mayor producción son las siguientes: platino (9,3%), vehículos a motor (7,5%), mineral de hierro (6,5%) carbón y combustibles sólidos similares (5,3%), y oro (5,2%).",
      color: "#3EDA0C",
      url: ""
    },
    "45": {
      name: "Chad",
      lat: "15.454166",
      lng: "18.732207",
      description: "Su rango de temperatura es de 10 a 20°C anuales. Su mayor producción son las siguientes:  sorgo, arroz, patatas, mandioca: 67%.",
      color: "#3EDA0C",
      url: ""
    },
    "46": {
      name: "Cameroon",
      lat: "7.369722",
      lng: "12.354722",
      description: "Su rango de temperatura es de 19,7°C anuales. Su mayor producción son las siguientes: petróleo, cacao, café y algodón: 60%.",
      color: "#3EDA0C",
      url: ""
    },
    "47": {
      name: "Tanzania",
      lat: "-6.369028",
      lng: "34.888822",
      description: "Su rango de temperatura es de 4 a 26°C anuales. Su mayor producción son las siguientes: Automóviles, transporte: 2,30%, Trigo, Morcajo: 17,4%.",
      color: "#3EDA0C",
      url: ""
    },
    "48": {
      name: "Kenya",
      lat: "-0.023559",
      lng: "37.906193",
      description: "Su rango de temperatura es de 26,2°C anuales. Su mayor producción son las siguientes: Té: 21%. ",
      color: "#3EDA0C",
      url: ""
    },
    "49": {
      name: "Uganda",
      lat: "1.373333",
      lng: "32.290275",
      description: "Su rango de temperatura es de 22,5 a 25°C anuales. Su mayor producción son las siguientes: Cobre, oro: 80%, café: 42%. ",
      color: "#3EDA0C",
      url: ""
    },
    "50": {
      name: "Guinea",
      lat: "9.945587",
      lng: "-9.696645",
      description: "Su rango de temperatura es de 27 a 30°C anuales. Su mayor producción son las siguientes: remesas: 4,4%, producto interno bruto: 15%. ",
      color: "#3EDA0C",
      url: ""
    },
    "51": {
      name: "Ghana",
      lat: "7.946527",
      lng: "-1.023194",
      description: "Su rango de temperatura es de 26 a 31°C anuales. Su mayor producción son las siguientes: distribución de sus productos o servicios: 21%",
      color: "#3EDA0C",
      url: ""
    },
    "52": {
      name: "Gabon",
      lat: "-0.803689",
      lng: "11.609444",
      description: "Su rango de temperatura es de 25,5°C anuales. Su mayor producción son las siguientes: Leña, manganeso: 50%, petróleo: 80%.",
      color: "#3EDA0C",
      url: ""
    },
    "53": {
      name: "Mozambique",
      lat: "-18.665695",
      lng: "35.529562",
      description: "Su rango de temperatura es de 21,5 a 24,5°C anuales. Su mayor producción son las siguientes: Mandioca, caña de azúcar, maíz, batata, plátano, tomates, patata, coco: 75%, cebolla, arroz, anacardo: 45%.",
      color: "#3EDA0C",
      url: ""
    },
    "54": {
      name: "Zimbabwe",
      lat: "-19.015438",
      lng: "29.154857",
      description: "Su rango de temperatura es de 17,95°C anuales. Su mayor producción son las siguientes: Minerales de níquel y sus concentrados: 22,9%, Tabaco: 4,38%, oro en bruto, semifacturados: 1,72%.",
      color: "#3EDA0C",
      url: ""
    },
    "55": {
      name: "Botswana",
      lat: "-22.328474",
      lng: "24.684866",
      description: "Su rango de temperatura es de 16 a 28°C anuales. Su mayor producción son las siguientes: Minerales: 4,7%, recursos naturales: 20%.",
      color: "#3EDA0C",
      url: ""
    },
    "56": {
      name: "Madagascar",
      lat: "-18.766947",
      lng: "46.869107",
      description: "Su rango de temperatura es de 10 a 22°C anuales. Su mayor producción son las siguientes: carne y mariscos, fabricación de jabón, cerveza, artículos de cuero,  tejidos, vidrio, cemento, montaje de automóviles, papel, petróleo, el turismo y la minería: 70%.",
      color: "#3EDA0C",
      url: ""
    },
    "57": {
      name: "Angola",
      lat: "-11.202692",
      lng: "17.8738877",
      description: "Su rango de temperatura es de 9,2°C anuales. Su mayor producción son las siguientes: petróleo; diamante, mineral de hierro, fosfato, feldespato: 78%, bauxita, uranio y oro; cemento; productos básicos de metal; procesamiento de pescado: 45%, procesamiento de alimentos, cerveza, tabaco, azúcar; textiles; reparación de barcos: 56%",
      color: "#3EDA0C",
      url: ""
    },
    "58": {
      name: "Sahara",
      lat: "24.215527",
      lng: "-12.885834",
      description: "Su rango de temperatura es de -21 a 59°C anuales. Su mayor producción son las siguientes: mineral de hierro (6,5%) carbón y combustibles sólidos similares (5,3%).",
      color: "#3EDA0C",
      url: ""
    },
    "59": {
      name: "Senegal",
      lat: "14.497401",
      lng: "-14.452362",
      description: "Su rango de temperatura es de 26 a 30°C anuales. Su mayor producción son las siguientes: recursos naturales, principalmente hierro, circonio, gas, oro, fosfatos y numerosos yacimientos de petróleo: 38%.",
      color: "#3EDA0C",
      url: ""
    },
    "60": {
      name: "Gambia",
      lat: "13.443182",
      lng: "-15.310139",
      description: "Su rango de temperatura es de 17°C anuales. Su mayor producción son las siguientes: soya (11,4 %), preparaciones de uso animal (9,5 %), café (6,5 %) azúcar de caña (6,5 %), otros preparados alimenticios (5,5 %) y pescados (5,2 %).",
      color: "#3EDA0C",
      url: ""
    },
    "61": {
      name: "Sierra Leone",
      lat: "8.460555",
      lng: "-11.779889",
      description: "Su rango de temperatura es de 30°C anuales. Su mayor producción son las siguientes: Exportaciones de alta tecnología: 0,7%, Importación de bienes: 1%.",
      color: "#3EDA0C",
      url: ""
    },
    "62": {
      name: "Morocco",
      lat: "34.01325",
      lng: "-6.83255",
      description: "Su rango de temperatura es de 15 a 40°C anuales. Su mayor producción son las siguientes: Maquinaría: 17%, Productos químicos: 14%.",
      color: "#3EDA0C",
      url: ""
    },
    "63": {
      name: "South Africa",
      lat: "-30.559482",
      lng: "22.937506",
      description: "Su rango de temperatura es de 15,9°C anuales. Su mayor producción son las siguientes: platino (9,3%), vehículos a motor (7,5%), mineral de hierro (6,5%) carbón y combustibles sólidos similares (5,3%), y oro (5,2%).",
      color: "#3EDA0C",
      url: ""
    },
    "64": {
      name: "China",
      lat: "35.86166",
      lng: "104.195397",
      description:"Su rango de temperatura es de 20 a 30°C anuales. Su mayor producción son las siguientes: Ordenadores (6.6%), Equipos de radiodifusión (5.6%), Teléfonos (4.1%), Camisas y jerseys femeninos (12%), Barras de Aluminio, estructuras de hierro (7,3%), Pesticidas, fertilizantes, antibióticos (4,6%), Partes de vehículos, barcos de carga y pasajeros, motociclistas (4,5%).",
      color: "#B30505",
      url: ""
    },
    "65": {
      name: "Kazajist",
      lat: "48.019573",
      lng: "66.923684",
      description:"Su rango de temperatura es de 5,6°C anuales. La s ventas al exterior representan el 28,19%.",
      color: "#B30505",
      url: ""
    },
    "66": {
      name: "India",
      lat: "20.593684",
      lng: "78.96288",
      description:"Su rango de temperatura es de 23,9°C anuales. Su mayor producción son las siguientes: petróleo (13,2%), diamantes (6,8%), medicamentos (4,5%), artículos de joyería (4,2%) y vehículos motorizados (2,2%), mientras que importa petróleo (21,3%), oro (6,5%), carbón y carburante sólidos similares (4,7%), diamantes (4,6%), gas de petróleo y otros hidrocarburos gaseosos (3,6%).",
      color: "#B30505",
      url: ""
    },
    "67": {
      name: "Afghanistan",
      lat: "33.93911",
      lng: "67.709953",
      description:"Su rango de temperatura es de 2,88 a -4,55°C anuales. Su mayor producción son las siguientes: Jugos y extractos vegetales (11,4%), Pasas (88%), Higos (85,7%), Hullas (8,69%), Uvas (42,2%).",
      color: "#B30505",
      url: ""
    },
    "68": {
      name: "Taiwan",
      lat: "23.69781",
      lng: "120.960515",
      description:"Su rango de temperatura es de 25°C anuales. El 17% de los productos que el país exporta hacia Taiwán, son de desperdicios y desechos de hierro y acero.",
      color: "#B30505",
      url: ""
    },
    "69": {
      name: "Japan",
      lat: "36.204824",
      lng: "138.252924",
      description:"Su rango de temperatura es de 12,8 a 14,6°C anuales. Su mayor producción son las siguientes: vehículos motorizados (13,9%), repuestos y accesorios de vehículos (4,6%), circuitos integrados electrónicos y micro ensamblajes (3,9%), barcos y embarcaciones (1,9%) y aceites de petróleo (1,6%).",
      color: "#B30505",
      url: ""
    },
    "70": {
      name: "South Korea",
      lat: "35.907757",
      lng: "127.766922",
      description:"Su rango de temperatura es de 4 a 29°C anuales. Su mayor producción son las siguientes: equipos eléctricos (14,6% de las exportaciones totales), vehículos (7,5%), aceites de petróleo (7,2%) y partes y accesorios para vehículos (3,5%). ",
      color: "#B30505",
      url: ""
    },
    "71": {
      name: "North Korea",
      lat: "  40.339852",
      lng: "127.510093",
      description:"Su rango de temperatura es de 15°C anuales. Su mayor producción son las siguientes: son aceites de petróleo (14%), equipos eléctricos (7,1%), gas (4,8%), hidrocarburos (3,4%) y carbón (3,1%).",
      color: "#B30505",
      url: ""
    },
    "72": {
      name: "Philippines",
      lat: "  12.879721",
      lng: "121.774017",
      description:"Su rango de temperatura es de 26 a 30°C anuales. Su mayor producción son las siguientes: Circuitos integrados monolíticos (8,21%), Accesorios de máquinas (7,55%), Juegos de cables para bujías, juegos de cables para medios de transporte (2,34%), Bananas (1,98%), Oro (13,91%).",
      color: "#B30505",
      url: ""
    },
    "73": {
      name: "Indonesia",
      lat: "-0.789275",
      lng: "  113.921327",
      description:"Su rango de temperatura es de 25,8 a 26,8°C anuales. Su mayor producción son las siguientes: Aceite de palma (11,7%), Gas natural (5,21%).",
      color: "#B30505",
      url: ""
    },
    "74": {
      name: "Cambodia",
      lat: "12.565679",
      lng: " 104.990963",
      description:"Su rango de temperatura es de 25 a 35°C anuales. Su mayor producción son las siguientes: camisetas de algodón (6,34%), Pantalones de mujer (4,25%), Jerseys de algodón (5,47%), bicicletas (4,13%).",
      color: "#B30505",
      url: ""
    },
    "75": {
      name: "Brunei",
      lat: "4.535277",
      lng: "114.727669",
      description:"Su rango de temperatura es de 26,8 a 27,7°C anuales. Su mayor producción son las siguientes: petróleo y el gas natural licuado (80%), prendas de vestir, y la maquinaria y el equipo de transporte (89%).",
      color: "#B30505",
      url: ""
    },
    "76": {
      name: "Timor East",
      lat: "-8.874217",
      lng: "125.727539",
      description:"Su rango de temperatura es de 27 a 29°C anuales. Su mayor producción son las siguientes: Artículos de prendería (4,56%), Café sin tostar (1,92%), Jugos y extractos vegetales (8,17%), Algas (54%).",
      color: "#B30505",
      url: ""
    },
    "77": {
      name: "Vietnam",
      lat: "14.058324",
      lng: "108.277199",
      description:"Su rango de temperatura es de 26°C anuales. Su mayor producción son las siguientes: Las ventas al exterior representan el 80,19%.",
      color: "#B30505",
      url: ""
    },
    "78": {
      name: "Turkey",
      lat: "38.963745",
      lng: "35.243322",
      description:"Su rango de temperatura es de 8 a 12°C anuales. Su mayor producción son las siguientes: industria automotriz (12,1% del total de exportaciones, incluyendo vehículos de pasajeros, de transporte y accesorios para vehículos) y los productos de petróleo (3,9%).",
      color: "#B30505",
      url: ""
    },
    "79": {
      name: "Pakistan",
      lat: "30.375321",
      lng: "69.345116",
      description:"Su rango de temperatura es de 19,7 a 22°C anuales. Su mayor producción son las siguientes: Arroz emblanqueado o blanqueado (1,78%), Conjuntos para hombres y mujeres de algodón (1,62%), Ropas de cama (85,3%).",
      color: "#B30505",
      url: ""
    },
    "80": {
      name: "Iran",
      lat: "32.427908",
      lng: "53.688046",
      description:"Su rango de temperatura es de 18 a 46°C anuales. Su mayor producción son las siguientes: Caña d azúcar (56%).",
      color: "#B30505",
      url: ""
    },
    "81": {
      name: "Iraq",
      lat: "33.223191",
      lng: "43.679291",
      description:"Su rango de temperatura es de 5 a 40°C anuales. Su mayor producción son las siguientes: Aceites de petróleo o minerales bituminosos (84,1%), Pieles en bruto de ovino (11,5%).",
      color: "#B30505",
      url: ""
    },
    "82": {
      name: "Syria",
      lat: "34.802075",
      lng: "38.996815",
      description:"Su rango de temperatura es de 16 a 34°C anuales. Su mayor producción son las siguientes: Aceites de petróleo o minerales bituminosos (4,32%), Animales vivos de la especie ovina (18,8%).",
      color: "#B30505",
      url: ""
    },
    "81": {
      name: "Saudi Arabia",
      lat: "23.885942",
      lng: "45.079162",
      description:"Su rango de temperatura es de 28 a 42°C anuales. Su mayor producción son las siguientes:  Petróleo refinado (10%), Aluminio (3,5%), Aceite de Alquitrán de Hulla (8,5%).",
      color: "#B30505",
      url: ""
    },
    "82": {
      name: "Israel",
      lat: "31.046051",
      lng: "34.851612",
      description:"Su rango de temperatura es de 20,5°C anuales. Su mayor producción son las siguientes: Partes de aviones o de helicópteros (1,8%), Circuitos integrados monolíticos (1,96%), diamantes no industriales (9,7%).",
      color: "#B30505",
      url: ""
    },
    "83": {
      name: "Lebanon",
      lat: "33.854721",
      lng: "35.862285",
      description:"Su rango de temperatura es de 22°C anuales. Su mayor producción son las siguientes: diamantes no industriales (9,7%), Desperdicios y desechos, cobre (88,2%), Oro para uso no monetario (2,89%).",
      color: "#B30505",
      url: ""
    },
    "84": {
      name: "Jordan",
      lat: "30.585164",
      lng: "36.238414",
      description:"Su rango de temperatura es de 25°C anuales. Su mayor producción son las siguientes: Prendas de vestir (1,11%), Abonos, minerales o químicos potásicos (59%), Medicamentos (42,1%).",
      color: "#B30505",
      url: ""
    },
    "85": {
      name: "Yemen",
      lat: "15.552727",
      lng: "48.516388",
      description:"Su rango de temperatura es de 18 a 54°C anuales. Su mayor producción son las siguientes: Petróleo (25%).",
      color: "#B30505",
      url: ""
    },
    "86": {
      name: "Oman",
      lat: "21.512583",
      lng: "55.923255",
      description:"Su rango de temperatura es de 17 a 50°C anuales. Su mayor producción son las siguientes: Automóviles (17,7%), alimentación y bebidas (16,9%).",
      color: "#B30505",
      url: ""
    },
    "87": {
      name: "Kuwait",
      lat: "29.31166",
      lng: "47.481766",
      description:"Su rango de temperatura es de 26,4°C anuales. Las ventas al exterior representan el 47,9%.",
      color: "#B30505",
      url: ""
    },
    "88": {
      name: "Bahrain",
      lat: "25.930414",
      lng: "50.637772",
      description:"Su rango de temperatura es de 20 a 40°C anuales. Su mayor producción son las siguientes: Aceites de petróleo o de minerales bituminosos (6,90%), Minerales de hierro (9,89%)..",
      color: "#B30505",
      url: ""
    },
    "89": {
      name: "Qatar",
      lat: "25.354826",
      lng: "51.183884",
      description:"Su rango de temperatura es de 18°C anuales. Su mayor producción son las siguientes: Gas natural (45,11%), Aceites de petróleo o de minerales bituminosos (12,41%), Azufre en bruto y azufre sin refinar (22,3%).",
      color: "#B30505",
      url: ""
    },
    "90": {
      name: "Tadjikistan",
      lat: "38.861034",
      lng: "71.276093",
      description:"Su rango de temperatura es de -10 a 20°C anuales. Su mayor producción son las siguientes: Productos Intermedios de hierro o acero sin Alear (12,2%).",
      color: "#B30505",
      url: ""
    },
    "91": {
      name: "Bhutan",
      lat: "27.514162",
      lng: "90.4336013",
      description:"Su rango de temperatura es de 10 a 14°C anuales. Su mayor producción son las siguientes: Dolomita (25,3%), Productos Intermedios de hierro o acero sin Alear (22,2%), Cementos Hidráulicos (14,8%).",
      color: "#B30505",
      url: ""
    },
    "92": {
      name: " United Arab Emirates ",
      lat: "23.424076",
      lng: "53.847818",
      description:"Su rango de temperatura es de 28,2°C anuales. Su mayor producción son las siguientes: Los perfumes y los cosméticos (48,4%).",
      color: "#B30505",
      url: ""
    },
    "93": {
      name: "Palestine",
      lat: "31.952162",
      lng: "35.233154",
      description:"Su rango de temperatura es de 20 a 68°C anuales. Su mayor producción son las siguientes: Piedras talladas, aserradas, planas (14,3%), Bolsas, saquitos, cucuruchos (55,6%).",
      color: "#B30505",
      url: ""
    },
    "94": {
      name: "Thailand",
      lat: "15.870032",
      lng: "100.992541",
      description:"Su rango de temperatura es de 19 a 38°C anuales. Su mayor producción son las siguientes: combustibles minerales (-19,7%) y los cereales (-13,8%).",
      color: "#B30505",
      url: ""
    },
    "95": {
      name: " Myanmar ",
      lat: "21.913965",
      lng: "95.956223",
      description:"Su rango de temperatura es de 26,8°C anuales. Su mayor producción son las siguientes: Aguardiente de vino o de orujo de uvas (40,0%).",
      color: "#B30505",
      url: ""
    },
    "96": {
      name: " Laos ",
      lat: "19.85627",
      lng: "102.495496",
      description:"Su rango de temperatura es de 24,8°C anuales. Su mayor producción son las siguientes: Minerales de metales preciosos (2%).",
      color: "#B30505",
      url: ""
    },
    "97": {
      name: " Kyrgyzstan",
      lat: "41.20438",
      lng: "74.766098",
      description:"Su rango de temperatura es de -15 a 18,5°C anuales. Su mayor producción son las siguientes: Oro para uso no monetario (8,32), Minerales de metales preciosos (1,62%).",
      color: "#B30505",
      url: ""
    },
    "98": {
      name: "Turkmenistan",
      lat: "  38.969719",
      lng: "  59.556278",
      description:"Su rango de temperatura es de 9 a 35°C anuales. Su mayor producción son las siguientes: Gas natural (1,24%), Aceites crudos de petróleo o de minerales bituminosos (5,13%).",
      color: "#B30505",
      url: ""
    },
    "99": {
      name: "Uzbekistan",
      lat: "  41.377491",
      lng: "64.585262",
      description:"Su rango de temperatura es de 25 a 30°C anuales. Su mayor producción son las siguientes: Oro para uso no monetario (4,91%), Gas natural (2,26%), Cobre refinado (55,2%).",
      color: "#B30505",
      url: ""
    },
    "100": {
      name: "Nepal",
      lat: "28.394857",
      lng: "84.124008",
      description:"Su rango de temperatura es de 15 a 25°C anuales. Su mayor producción son las siguientes: Amomos y cardamomos (66,2%), Poliéster (85%), Mezclas de jugos (31,37%), Tejidos fabricados (29,5%).",
      color: "#B30505",
      url: ""
    },
    "101": {
      name: "Bangladesh",
      lat: "23.684994",
      lng: "90.356331",
      description:"Su rango de temperatura es de 24 a 33°C anuales. Su mayor producción son las siguientes: Materias primas (8,24%), Bienes intermediarios (3,7%).",
      color: "#B30505",
      url: ""
    },
    "102": {
      name: "Finland",
      lat: "61.92411",
      lng: "25.748151",
      description:"Su rango de temperatura es de 5 a 7,5°C anuales. Su mayor producción son las siguientes: aceites de petróleo o de mineral bituminoso: 70%.",
      color: "#7A640D",
      url: ""
    },
    "103": {
      name: "Estonia",
      lat: "58.595272",
      lng: "25.013607",
      description:"Su rango de temperatura es de 16,4 a 30°C anuales. Su mayor producción son las siguientes: Aceites y productos de destilación de los alquitranes: 5,48%, Emisores de radiotelefonía: 9,36%.",
      color: "#7A640D",
      url: ""
    },
    "104": {
      name: "Spain",
      lat: "40.463667",
      lng: "-3.74922",
      description:"Su rango de temperatura es de 15 a 18°C anuales. Su mayor producción son las siguientes: semimanufacturas (24,7%), productos químicos (14,3%).",
      color: "#7A640D",
      url: ""
    },
    "105": {
      name: "Portugal",
      lat: "39.399872",
      lng: "-8.224454",
      description:"Su rango de temperatura es de 0 a 20°C anuales. Su mayor producción son las siguientes: aceites de petróleo o de minerales bituminosos: 3,5%, vehículos de turismo con motor: 1,78%.",
      color: "#7A640D",
      url: ""
    },
    "106": {
      name: "Ukraine",
      lat: "48.379433",
      lng: "31.16558",
      description:"Su rango de temperatura es de 8,8°C anuales. Su mayor producción son las siguientes: aceites de girasol: 3,72%, maíz: 3,49%, minerales de hierro y sus concentrados: 1,61%.",
      color: "#7A640D",
      url: ""
    },
    "107": {
      name: "Latvia",
      lat: "56.879635",
      lng: "  24.603189",
      description:"Su rango de temperatura es de -5,5°C anuales. Su mayor producción son las siguientes: Emisores de radiotelefonía: 7,45%, Madera de coníferas, aserrada, devastada: 6,76%.",
      color: "#7A640D",
      url: ""
    },
    "108": {
      name: "Lithuania",
      lat: "55.169438",
      lng: " 23.881275",
      description:"Su rango de temperatura es de 8,5°C anuales. Su mayor producción son las siguientes: aceites de petróleo o de minerales bituminoso: 3,78%, trigo blando y morcajo o trasquilón: 6,75%.",
      color: "#7A640D",
      url: ""
    },
    "109": {
      name: "Belarus",
      lat: "53.709807",
      lng: "27.953389",
      description:"Su rango de temperatura es de 6,9°C anuales. las ventas al exterior representan el 51,17%.",
      color: "#7A640D",
      url: ""
    },
    "110": {
      name: "Germany",
      lat: "51.165691",
      lng: "10.451526",
      description:"Su rango de temperatura es de 10,1°C anuales. Su mayor producción son las siguientes: café, té y especias; alimentos, bebidas y tabaco; y vegetales: 67%.",
      color: "#7A640D",
      url: ""
    },
    "111": {
      name: "Belgium",
      lat: "  50.503887",
      lng: "4.469936",
      description:"Su rango de temperatura es de 9 a10°C anuales. Su mayor producción son las siguientes: vehículos (8,5%), medicamentos (6,3%), aceites de petróleo (6,1%), y sangre (5%).",
      color: "#7A640D",
      url: ""
    },
    "112": {
      name: "Swaziland",
      lat: " 46.818188",
      lng: "  8.227512",
      description:"Su rango de temperatura es de 2 a 15°C anuales. Su mayor producción son las siguientes: Oro para uso no monetario: 53%, Cultivos de microorganismos: 34,3%.",
      color: "#7A640D",
      url: ""
    },
    "113": {
      name: "Greece",
      lat: " 39.074208",
      lng: " 21.824312",
      description:"Su rango de temperatura es de 19,5°C anuales. Su mayor producción son las siguientes: aceites de petróleo o de minerales bituminosos: 11%, chapas, bandas de aluminio: 6%.",
      color: "#7A640D",
      url: ""
    },
    "114": {
      name: "Albania",
      lat: " 41.153332",
      lng: " 20.168331",
      description:"Su rango de temperatura es de 18,1°C anuales. Su mayor producción son las siguientes: Calzados con piso de caucho: 80,36%, Pantalones: 90,5%, Calzados con puntera de metal: 68,26%.",
      color: "#7A640D",
      url: ""
    },
    "115": {
      name: "Czech Republic",
      lat: " 49.817492",
      lng: " 15.472962",
      description:"Su rango de temperatura es de 12,9°C anuales. Su mayor producción son las siguientes: Emisores receptores de radiotelegrafía, televisión, radio: 10,36%, Vehículos de turismo con motor: 7%.",
      color: "#7A640D",
      url: ""
    },
    "116": {
      name: "Slovak Republic",
      lat: "  48.669026",
      lng: " 19.699024",
      description:"Su rango de temperatura es de 5 a 18,5°C anuales. Su mayor producción son las siguientes: uva (8%), los arándanos (51%), la palta (4%), la pota cruda congelada (65%), los mangos frescos (1.5%), la pota precocida congelada (5.5%), la plata aleada (200%), la mandarina (128%), el alcohol etílico (80%) y los langostinos (54%).",
      color: "#7A640D",
      url: ""
    },
    "113": {
      name: "Moldavia",
      lat: "  47.411631",
      lng: "  28.369885",
      description:"Su rango de temperatura es de 10,9°C anuales. Su mayor producción son las siguientes: Juegos de cables para bujías: 1,86%, Maíz: 1,16%, partes de los asientos: 1,9%.",
      color: "#7A640D",
      url: ""
    },
    "114": {
      name: "Romania",
      lat: " 45.943161",
      lng: "  24.96676",
      description:"Su rango de temperatura es de 1,5 a 10,2°C anuales. Su mayor producción son las siguientes: Juegos de cables de bujías: 2,64%, Cuadros, paneles, armarios: 2,43%.",
      color: "#7A640D",
      url: ""
    },
    "115": {
      name: "Hungary",
      lat: "  47.162494",
      lng: " 19.503304",
      description:"Su rango de temperatura es de 20 a 25°C anuales. Su mayor producción son las siguientes: Vehículos de turismo: 2,85%.",
      color: "#7A640D",
      url: ""
    },
    "116": {
      name: "Ireland",
      lat: "  53.41291",
      lng: " -8.24389",
      description:"Su rango de temperatura es de 9 a 11°C anuales. Su mayor producción son las siguientes: ciclo primidina o piperazina: 8,2%, Circuitos integrales monolíticos: 7,2%.",
      color: "#7A640D",
      url: ""
    },
    "117": {
      name: "Austria",
      lat: " 47.516231",
      lng: " 14.550072",
      description:"Su rango de temperatura es de 8,4°C anuales. Su mayor producción son las siguientes: juguetes y juegos que contengan sulfatos de cobre, artículos con una lámina de metal flexible contenida en plástico o papel: 65%.",
      color: "#7A640D",
      url: ""
    },
    "118": {
      name: "Bulgaria",
      lat: "42.733883",
      lng: " 25.48583",
      description:"Su rango de temperatura es de 11,8°C anuales. Su mayor producción son las siguientes: cofre refinado: 9,95%, aceites de petróleo o de minerales bituminosos: 2,47%.",
      color: "#7A640D",
      url: ""
    },
    "119": {
      name: "Serbia",
      lat: "44.016521",
      lng: "21.005859",
      description:"Su rango de temperatura es de 12,7°C anuales. La tasa de cobertura fue de 77,4%.",
      color: "#7A640D",
      url: ""
    },
    "120": {
      name: "Croatia",
      lat: "45.1",
      lng: "15.2",
      description:"Su rango de temperatura es de 1,2 a 15,5°C anuales. Su mayor producción son las siguientes: aceites de petróleo o de minerales bituminosos: 1,14%, Cultivos de microorganismos: 4,32%.",
      color: "#7A640D",
      url: ""
    },
    "121": {
      name: "Montenegro",
      lat: "42.708678",
      lng: "19.37439",
      description:"Su rango de temperatura es de 19,6°C anuales. Su mayor producción son las siguientes: metálicas básicas (21%), equipo electrónico (12%), maquinaria y equipo (11%), electrodomésticos (7%).",
      color: "#7A640D",
      url: ""
    },
    "122": {
      name: "Albania",
      lat: "41.153332",
      lng: "20.168331",
      description:"Su rango de temperatura es de 18,1°C anuales. Su mayor producción son las siguientes: Calzados con piso de caucho: 80,36%, Pantalones: 90,5%, Calzados con puntera de metal: 68,26%.",
      color: "#7A640D",
      url: ""
    },
    "123": {
      name: "Macedonia",
      lat: "41.608635",
      lng: "21.745275",
      description:"Su rango de temperatura es de -3,3 a 22,6°C anuales. Su mayor producción son las siguientes: productos químicos: 11%",
      color: "#7A640D",
      url: ""
    },
    "124": {
      name: "Denmark",
      lat: "56.26392",
      lng: "9.501785",
      description:"Su rango de temperatura es de 7,1 a 9,2°C anuales. Su mayor producción son las siguientes: motores hidráulicos: 7%, neumáticos, motores, maquinas motrices: 1,73%.",
      color: "#7A640D",
      url: ""
    },
    "125": {
      name: "Netherlands",
      lat: "52.132633",
      lng: "5.291266",
      description:"Su rango de temperatura es de 2 a 9,2°C anuales. Su mayor producción son las siguientes: aceites de petróleo: 53%, partes y accesorios de máquina: 11,24%.",
      color: "#7A640D",
      url: ""
    },
    "126": {
      name: "Belize",
      lat: "17.189877",
      lng: "-88.49765",
      description:"Su rango de temperatura es de 10 a 35°C anuales. Su mayor producción son las siguientes: Cardamomo: 49,5%, Energía Eléctrica: 43,4%, Hierro y acero: 18,8%.",
      color: "blue",
      url: ""
    },
    "127": {
      name: "Costa Rica",
      lat: "9.748917",
      lng: "-83.753428",
      description:"Su rango de temperatura es de 17,2 a 27,2°C anuales. Su mayor producción son las siguientes: Dispositivos médicos: 34%, Sector agrícola: 24%, Industria alimentaria: 14%.",
      color: "blue",
      url: ""
    },
    "128": {
      name: "Panama",
      lat: "8.537981",
      lng: "-80.782127",
      description:"Su rango de temperatura es de 29°C anuales. Su mayor producción son las siguientes: Azúcar sin refinar:24.6%, Banano: 5.2%, Piña: 3.2%, Melón: 64.8%, Café: 20.7%.",
      color: "blue",
      url: ""
    },
    "129": {
      name: "Haiti",
      lat: "  18.971187",
      lng: "-72.285215",
      description:"Su rango de temperatura es de 13 a 29,5°C anuales. Su mayor producción son las siguientes: Mangos: 10%, Árboles: 50%, productos textiles, cacao.",
      color: "blue",
      url: ""
    },
    "130": {
      name: "Honduras",
      lat: " 15.199999",
      lng: "-86.241905",
      description:"Su rango de temperatura es de 19,8°C anuales. Su mayor producción son las siguientes: Café: 26,9%, Banano: 10,4%, Aceite de palma: 6,9%, Camarones: 1,9%, Melones y Sandías: 54,3%.",
      color: "blue",
      url: ""
    }








    
  },
  regions: {
    "0": {
      name: "Norte America",
      states: [
        "MX",
        "CA",
        "US",
        "GL"
      ],
      color: "#B6142C"
    },
    "1": {
      name: "Sur America",
      states: [
        "EC",
        "AR",
        "VE",
        "BR",
        "CO",
        "BO",
        "PE",
        "CL",
        "GY",
        "GF",
        "PY",
        "SR",
        "UY"
      ],
      color: "#31B83C"
    },
    "2": {
      name: "Central America",
      states: [
        "PR",
        "JM",
        "HT",
        "BZ",
        "CR",
        "DO",
        "GT",
        "HN",
        "NI",
        "BS",
        "CU",
        "PA",
        "SV"
      ],
      color: "#1CCCE1"
    },
    "3": {
      name: "Europa",
      states: [
        "IT",
        "NL",
        "NO",
        "DK",
        "IE",
        "GB",
        "RO",
        "DE",
        "FR",
        "AL",
        "AM",
        "AT",
        "BY",
        "BE",
        "LU",
        "BG",
        "CZ",
        "EE",
        "GE",
        "GR",
        "HU",
        "IS",
        "LV",
        "LT",
        "MD",
        "PL",
        "PT",
        "RS",
        "SI",
        "HR",
        "BA",
        "ME",
        "MK",
        "SK",
        "ES",
        "FI",
        "SE",
        "CH",
        "TR",
        "CY",
        "UA"
      ],
      color: "#148F77"
    },
    "4": {
      name: "Africa",
      states: [
        "NE",
        "AO",
        "EG",
        "TN",
        "GA",
        "DZ",
        "LY",
        "CG",
        "GQ",
        "BJ",
        "BW",
        "BF",
        "BI",
        "CM",
        "CF",
        "TD",
        "CI",
        "CD",
        "DJ",
        "ET",
        "GM",
        "GH",
        "GN",
        "GW",
        "KE",
        "LS",
        "LR",
        "MG",
        "MW",
        "ML",
        "MA",
        "MR",
        "MZ",
        "NA",
        "NG",
        "ER",
        "RW",
        "SN",
        "SL",
        "SO",
        "ZA",
        "SD",
        "SS",
        "SZ",
        "TZ",
        "TG",
        "UG",
        "EH",
        "ZM",
        "ZW"
      ],
      color: "#AB18AD"
    },
    "5": {
      name: "Oriente Medio",
      states: [
        "QA",
        "SA",
        "AE",
        "SY",
        "OM",
        "KW",
        "PK",
        "AZ",
        "AF",
        "IR",
        "IQ",
        "IL",
        "PS",
        "JO",
        "LB",
        "YE",
        "TJ",
        "TM",
        "UZ",
        "KG"
      ],
      color: "#E9F141"
    },
    "6": {
      name: "Sur Asia",
      states: [
        "TW",
        "IN",
        "NP",
        "TH",
        "BN",
        "JP",
        "VN",
        "LK",
        "SB",
        "BD",
        "BT",
        "KH",
        "LA",
        "MM",
        "KP",
        "PH",
        "KR",
        "CN"
      ],
      color: "#E9F141"
    },
    "7": {
      name: "Oceania",
      states: [
        "ID",
        "AU",
        "MY",
        "PG",
        "FJ",
        "NZ"
      ],
      color: "#A770BF"
    },
    "8": {
      name: "Norte Asia",
      states: [
        "MN",
        "RU",
        "KZ"
      ],
      color: "#E9F141"
    }
  },
  labels: {}
};