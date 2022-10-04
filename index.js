let intentos = 6;
let listaDinamica = [];
let palabraSecreta;
let palabraSecretaCategoria;

const palabras = [
    palabra001 = {
        nombre: "ESPAÑA",
        categoria: "PAISES DE EUROPA"
    },
    palabra002 = {
        nombre: "REPUBLICA CHECA",
        categoria: "PAISES DE EUROPA"
    },
    palabra003 = {
        nombre: "SAN MARINO",
        categoria: "PAISES DE EUROPA"
    },
    palabra004 = {
        nombre: "FRANCIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra005 = {
        nombre: "PORTUGAL",
        categoria: "PAISES DE EUROPA"
    },
    palabra006 = {
        nombre: "REINO UNIDO",
        categoria: "PAISES DE EUROPA"
    },
    palabra007 = {
        nombre: "SUIZA",
        categoria: "PAISES DE EUROPA"
    },
    palabra008 = {
        nombre: "ANDORRA",
        categoria: "PAISES DE EUROPA"
    },
    palabra009 = {
        nombre: "MONTENEGRO",
        categoria: "PAISES DE EUROPA"
    },
    palabra010 = {
        nombre: "ALEMANIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra011 = {
        nombre: "CIUDAD DEL VATICANO",
        categoria: "PAISES DE EUROPA"
    },
    palabra012 = {
        nombre: "GRECIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra013 = {
        nombre: "ESPAÑA",
        categoria: "PAISES DE EUROPA"
    },
    palabra014 = {
        nombre: "AUSTRIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra015 = {
        nombre: "HAWAI",
        categoria: "PAISES DE EUROPA"
    },
    palabra016 = {
        nombre: "UCRANIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra017 = {
        nombre: "PAISES BAJOS",
        categoria: "PAISES DE EUROPA"
    },
    palabra018 = {
        nombre: "BELGICA",
        categoria: "PAISES DE EUROPA"
    },
    palabra019 = {
        nombre: "POLONIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra020 = {
        nombre: "HUNGRIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra021 = {
        nombre: "CROACIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra022 = {
        nombre: "ESLOVENIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra023 = {
        nombre: "MOLDAVIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra024 = {
        nombre: "SERBIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra025 = {
        nombre: "DINAMARCA",
        categoria: "PAISES DE EUROPA"
    },
    palabra026 = {
        nombre: "ALBANIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra027 = {
        nombre: "BULGARIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra028 = {
        nombre: "BOSNIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra029 = {
        nombre: "MACEDONIA DEL NORTE",
        categoria: "PAISES DE EUROPA"
    },
    palabra030 = {
        nombre: "RUMANIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra031 = {
        nombre: "ESLOVAQUIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra032 = {
        nombre: "BIELORRUSIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra033 = {
        nombre: "ISLANDIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra034 = {
        nombre: "LITUANIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra035 = {
        nombre: "LETONIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra036 = {
        nombre: "ESTONIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra037 = {
        nombre: "FINLANDIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra038 = {
        nombre: "SUECIA",
        categoria: "PAISES DE EUROPA"
    },
    palabra039 = {
        nombre: "NORUEGA",
        categoria: "PAISES DE EUROPA"
    },
    palabra040 = {
        nombre: "LIECHTENSTEIN",
        categoria: "PAISES DE EUROPA"
    },
    palabra041 = {
        nombre: "LUXEMBURGO",
        categoria: "PAISES DE EUROPA"
    },
    palabra042 = {
        nombre: "MALTA",
        categoria: "PAISES DE EUROPA"
    },
    palabra043 = {
        nombre: "MONACO",
        categoria: "PAISES DE EUROPA"
    },
    palabra044 = {
        nombre: "CHIPRE",
        categoria: "PAISES DE EUROPA"
    },
    palabra045 = {
        nombre: "AFGANISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra046 = {
        nombre: "ARABIA SAUDITA",
        categoria: "PAISES DE ASIA"
    },
    palabra047 = {
        nombre: "ARMENIA",
        categoria: "PAISES DE ASIA"
    },
    palabra048 = {
        nombre: "AZERBAIYAN",
        categoria: "PAISES DE ASIA"
    },
    palabra049 = {
        nombre: "BANGLADES",
        categoria: "PAISES DE ASIA"
    },
    palabra050 = {
        nombre: "BUTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra051 = {
        nombre: "CATAR",
        categoria: "PAISES DE ASIA"
    },
    palabra052 = {
        nombre: "CAMBOYA",
        categoria: "PAISES DE ASIA"
    },
    palabra053 = {
        nombre: "CHINA",
        categoria: "PAISES DE ASIA"
    },
    palabra054 = {
        nombre: "COREA DEL NORTE",
        categoria: "PAISES DE ASIA"
    },
    palabra055 = {
        nombre: "COREA DEL SUR",
        categoria: "PAISES DE ASIA"
    },
    palabra056 = {
        nombre: "EMIRATOS ARABES UNIDOS",
        categoria: "PAISES DE ASIA"
    },
    palabra057 = {
        nombre: "FILIPINAS",
        categoria: "PAISES DE ASIA"
    },
    palabra058 = {
        nombre: "GEORGIA",
        categoria: "PAISES DE ASIA"
    },
    palabra059 = {
        nombre: "INDIA",
        categoria: "PAISES DE ASIA"
    },
    palabra060 = {
        nombre: "INDONESIA",
        categoria: "PAISES DE ASIA"
    },
    palabra061 = {
        nombre: "IRAK",
        categoria: "PAISES DE ASIA"
    },
    palabra062 = {
        nombre: "IRAN",
        categoria: "PAISES DE ASIA"
    },
    palabra063 = {
        nombre: "ISRAEL",
        categoria: "PAISES DE ASIA"
    },
    palabra064 = {
        nombre: "JAPON",
        categoria: "PAISES DE ASIA"
    },
    palabra065 = {
        nombre: "JORDANIA",
        categoria: "PAISES DE ASIA"
    },
    palabra066 = {
        nombre: "KAZAJISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra067 = {
        nombre: "KIRGUISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra068 = {
        nombre: "BIRMANIA",
        categoria: "PAISES DE ASIA"
    },
    palabra069 = {
        nombre: "BRUNEI",
        categoria: "PAISES DE ASIA"
    },
    palabra070 = {
        nombre: "KUWAIT",
        categoria: "PAISES DE ASIA"
    },
    palabra071 = {
        nombre: "LAOS",
        categoria: "PAISES DE ASIA"
    },
    palabra072 = {
        nombre: "LIBANO",
        categoria: "PAISES DE ASIA"
    },
    palabra073 = {
        nombre: "MALDIVAS",
        categoria: "PAISES DE ASIA"
    },
    palabra074 = {
        nombre: "MALASIA",
        categoria: "PAISES DE ASIA"
    },
    palabra075 = {
        nombre: "MONGOLIA",
        categoria: "PAISES DE ASIA"
    },
    palabra076 = {
        nombre: "NEPAL",
        categoria: "PAISES DE ASIA"
    },
    palabra077 = {
        nombre: "OMAN",
        categoria: "PAISES DE ASIA"
    },
    palabra078 = {
        nombre: "PAKISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra079 = {
        nombre: "RUSIA",
        categoria: "PAISES DE ASIA"
    },
    palabra080 = {
        nombre: "SINGAPUR",
        categoria: "PAISES DE ASIA"
    },
    palabra081 = {
        nombre: "SIRIA",
        categoria: "PAISES DE ASIA"
    },
    palabra082 = {
        nombre: "SRI LANKA",
        categoria: "PAISES DE ASIA"
    },
    palabra083 = {
        nombre: "TAYIKISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra084 = {
        nombre: "TAILANDIA",
        categoria: "PAISES DE ASIA"
    },
    palabra085 = {
        nombre: "TIMOR ORIENTAL",
        categoria: "PAISES DE ASIA"
    },
    palabra086 = {
        nombre: "TURQUIA",
        categoria: "PAISES DE ASIA"
    },
    palabra087 = {
        nombre: "TURKMENISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra088 = {
        nombre: "UZBEKISTAN",
        categoria: "PAISES DE ASIA"
    },
    palabra089 = {
        nombre: "VIETNAM",
        categoria: "PAISES DE ASIA"
    },
    palabra090 = {
        nombre: "YEMEN",
        categoria: "PAISES DE ASIA"
    },
    palabra091 = {
        nombre: "ANTIGUA Y BARBUDA",
        categoria: "PAISES DE AMERICA"
    },
    palabra092 = {
        nombre: "ARGENTINA",
        categoria: "PAISES DE AMERICA"
    },
    palabra093 = {
        nombre: "BAHAMAS",
        categoria: "PAISES DE AMERICA"
    },
    palabra094 = {
        nombre: "BARBADOS",
        categoria: "PAISES DE AMERICA"
    },
    palabra095 = {
        nombre: "BELICE",
        categoria: "PAISES DE AMERICA"
    },
    palabra096 = {
        nombre: "BOLIVIA",
        categoria: "PAISES DE AMERICA"
    },
    palabra097 = {
        nombre: "BRASIL",
        categoria: "PAISES DE AMERICA"
    },
    palabra098 = {
        nombre: "CANADA",
        categoria: "PAISES DE AMERICA"
    },
    palabra099 = {
        nombre: "CHILE",
        categoria: "PAISES DE AMERICA"
    },
    palabra100 = {
        nombre: "COLOMBIA",
        categoria: "PAISES DE AMERICA"
    },
    palabra101 = {
        nombre: "COSTA RICA",
        categoria: "PAISES DE AMERICA"
    },
    palabra102 = {
        nombre: "CUBA",
        categoria: "PAISES DE AMERICA"
    },
    palabra103 = {
        nombre: "DOMINICA",
        categoria: "PAISES DE AMERICA"
    },
    palabra104 = {
        nombre: "ECUADOR",
        categoria: "PAISES DE AMERICA"
    },
    palabra105 = {
        nombre: "EL SALVADOR",
        categoria: "PAISES DE AMERICA"
    },
    palabra106 = {
        nombre: "ESTADOS UNIDOS",
        categoria: "PAISES DE AMERICA"
    },
    palabra107 = {
        nombre: "GRANADA",
        categoria: "PAISES DE AMERICA"
    },
    palabra108 = {
        nombre: "GUATEMALA",
        categoria: "PAISES DE AMERICA"
    },
    palabra109 = {
        nombre: "GUAYANA",
        categoria: "PAISES DE AMERICA"
    },
    palabra110 = {
        nombre: "HAITI",
        categoria: "PAISES DE AMERICA"
    },
    palabra111 = {
        nombre: "HONDURAS",
        categoria: "PAISES DE AMERICA"
    },  
    palabra112 = {
        nombre: "JAMAICA",
        categoria: "PAISES DE AMERICA"
    },
    palabra113 = {
        nombre: "MEXICO",
        categoria: "PAISES DE AMERICA"
    },
    palabra114 = {
        nombre: "NICARAGUA",
        categoria: "PAISES DE AMERICA"
    },
    palabra115 = {
        nombre: "PANAMA",
        categoria: "PAISES DE AMERICA"
    },
    palabra116 = {
        nombre: "PUERTO RICO",
        categoria: "PAISES DE AMERICA"
    },
    palabra117 = {
        nombre: "PARAGUAY",
        categoria: "PAISES DE AMERICA"
    },
    palabra118 = {
        nombre: "PERU",
        categoria: "PAISES DE AMERICA"
    },
    palabra119 = {
        nombre: "REPUBLICA DOMINICANA",
        categoria: "PAISES DE AMERICA"
    },
    palabra120 = {
        nombre: "SAN CRISTOBAL Y NIEVES",
        categoria: "PAISES DE AMERICA"
    },
    palabra121 = {
        nombre: "SAN VICENTE Y LAS GRANADINAS",
        categoria: "PAISES DE AMERICA"
    },
    palabra122 = {
        nombre: "SANTA LUCIA",
        categoria: "PAISES DE AMERICA"
    },
    palabra123 = {
        nombre: "SURINAM",
        categoria: "PAISES DE AMERICA"
    },
    palabra124 = {
        nombre: "TRINIDAD Y TOBAGO",
        categoria: "PAISES DE AMERICA"
    },
    palabra125 = {
        nombre: "URUGUAY",
        categoria: "PAISES DE AMERICA"
    },
    palabra126 = {
        nombre: "VENEZUELA",
        categoria: "PAISES DE AMERICA"
    },
    palabra128 = {
        nombre: "PAELLA",
        categoria: "COMIDAS"
    },
    palabra129 = {
        nombre: "AREPA",
        categoria: "COMIDAS"
    },
    palabra130 = {
        nombre: "EMPANADA",
        categoria: "COMIDAS"
    },
    palabra131 = {
        nombre: "PATATAS FRITAS",
        categoria: "COMIDAS"
    },
    palabra132 = {
        nombre: "TACOS",
        categoria: "COMIDAS"
    },
    palabra133 = {
        nombre: "ENSALADA",
        categoria: "COMIDAS"
    },
    palabra134 = {
        nombre: "PIZZA",
        categoria: "COMIDAS"
    },
    palabra135 = {
        nombre: "HAMBURGUESA",
        categoria: "COMIDAS"
    },
    palabra136 = {
        nombre: "LASAÑA",
        categoria: "COMIDAS"
    },
    palabra137 = {
        nombre: "SUSHI",
        categoria: "COMIDAS"
    },
    palabra138 = {
        nombre: "SOPA",
        categoria: "COMIDAS"
    },
    palabra139 = {
        nombre: "PANQUEQUE",
        categoria: "COMIDAS"
    },
    palabra140 = {
        nombre: "TORTILLA",
        categoria: "COMIDAS"
    },
    palabra141 = {
        nombre: "TORTILLA ESPAÑOLA",
        categoria: "COMIDAS"
    },
    palabra142 = {
        nombre: "KEBAB",
        categoria: "COMIDAS"
    },
    palabra143 = {
        nombre: "ESPAGUETI",
        categoria: "COMIDAS"
    },
    palabra144 = {
        nombre: "RAMEN",
        categoria: "COMIDAS"
    },
    palabra145 = {
        nombre: "LENTEJAS",
        categoria: "COMIDAS"
    },
    palabra146 = {
        nombre: "PERRITO CALIENTE",
        categoria: "COMIDAS"
    },
    palabra147 = {
        nombre: "ARROZ",
        categoria: "COMIDAS"
    },
    palabra148 = {
        nombre: "MILANESA",
        categoria: "COMIDAS"
    },
    palabra149 = {
        nombre: "FUTBOL",
        categoria: "DEPORTES"
    },
    palabra150 = {
        nombre: "BALONCESTO",
        categoria: "DEPORTES"
    },
    palabra151 = {
        nombre: "TENIS",
        categoria: "DEPORTES"
    },
    palabra152 = {
        nombre: "BEISBOL",
        categoria: "DEPORTES"
    },
    palabra153 = {
        nombre: "VOLEIBOL",
        categoria: "DEPORTES"
    },
    palabra154 = {
        nombre: "NATACION",
        categoria: "DEPORTES"
    },
    palabra155 = {
        nombre: "ESGRIMA",
        categoria: "DEPORTES"
    },
    palabra156 = {
        nombre: "EQUITACION",
        categoria: "DEPORTES"
    },
    palabra157 = {
        nombre: "BOXEO",
        categoria: "DEPORTES"
    },
    palabra158 = {
        nombre: "HOCKEY",
        categoria: "DEPORTES"
    },
    palabra159 = {
        nombre: "FUTBOL AMERICANO",
        categoria: "DEPORTES"
    },
    palabra160 = {
        nombre: "SURF",
        categoria: "DEPORTES"
    },
    palabra161 = {
        nombre: "ESQUI",
        categoria: "DEPORTES"
    },
    palabra162 = {
        nombre: "PARACAIDISMO",
        categoria: "DEPORTES"
    },
    palabra163 = {
        nombre: "TENIS DE MESA",
        categoria: "DEPORTES"
    },
    palabra164 = {
        nombre: "ATLETISMO",
        categoria: "DEPORTES"
    },
    palabra165 = {
        nombre: "WATERPOLO",
        categoria: "DEPORTES"
    },
    palabra166 = {
        nombre: "TIRO CON ARCO",
        categoria: "DEPORTES"
    },
    palabra167 = {
        nombre: "BOLOS",
        categoria: "DEPORTES"
    },
    palabra168 = {
        nombre: "RUGBY",
        categoria: "DEPORTES"
    },
    palabra169 = {
        nombre: "GOLF",
        categoria: "DEPORTES"
    },
    palabra170 = {
        nombre: "BADMINTON",
        categoria: "DEPORTES"
    },
    palabra171 = {
        nombre: "CICLISMO",
        categoria: "DEPORTES"
    },
    palabra172 = {
        nombre: "RALLY",
        categoria: "DEPORTES"
    },
    palabra173 = {
        nombre: "MOTOCROSS",
        categoria: "DEPORTES"
    },
    palabra174 = {
        nombre: "DARDOS",
        categoria: "DEPORTES"
    },
    palabra175 = {
        nombre: "BILLAR",
        categoria: "DEPORTES"
    },
    palabra176 = {
        nombre: "PETANCA",
        categoria: "DEPORTES"
    },
    palabra177 = {
        nombre: "JUDO",
        categoria: "DEPORTES"
    },
    palabra178 = {
        nombre: "KARATE",
        categoria: "DEPORTES"
    },
    palabra179 = {
        nombre: "TAEKWONDO",
        categoria: "DEPORTES"
    },
    palabra180 = {
        nombre: "SUMO",
        categoria: "DEPORTES"
    },
    palabra181 = {
        nombre: "BALONMANO",
        categoria: "DEPORTES"
    },
    palabra182 = {
        nombre: "MANZANA",
        categoria: "FRUTAS"
    },
    palabra183 = {
        nombre: "PERA",
        categoria: "FRUTAS"
    },
    palabra184 = {
        nombre: "CEREZA",
        categoria: "FRUTAS"
    },
    palabra185 = {
        nombre: "FRESA",
        categoria: "FRUTAS"
    },
    palabra186 = {
        nombre: "ARANDANO",
        categoria: "FRUTAS"
    },
    palabra187 = {
        nombre: "FRAMBUESA",
        categoria: "FRUTAS"
    },
    palabra188 = {
        nombre: "ZARZAMORA",
        categoria: "FRUTAS"
    },
    palabra189 = {
        nombre: "LIMON",
        categoria: "FRUTAS"
    },
    palabra190 = {
        nombre: "MANDARINA",
        categoria: "FRUTAS"
    },
    palabra191 = {
        nombre: "NARANJA",
        categoria: "FRUTAS"
    },
    palabra192 = {
        nombre: "POMELO",
        categoria: "FRUTAS"
    },
    palabra193 = {
        nombre: "MELON",
        categoria: "FRUTAS"
    },
    palabra194 = {
        nombre: "SANDIA",
        categoria: "FRUTAS"
    },
    palabra195 = {
        nombre: "AGUACATE",
        categoria: "FRUTAS"
    },
    palabra196 = {
        nombre: "COCO",
        categoria: "FRUTAS"
    },
    palabra197 = {
        nombre: "KIWI",
        categoria: "FRUTAS"
    },
    palabra198 = {
        nombre: "PIÑA",
        categoria: "FRUTAS"
    },
    palabra199 = {
        nombre: "PLATANO",
        categoria: "FRUTAS"
    },
    palabra200 = {
        nombre: "MANGO",
        categoria: "FRUTAS"
    },
    palabra201 = {
        nombre: "PAPAYA",
        categoria: "FRUTAS"
    },
    palabra202 = {
        nombre: "DATIL",
        categoria: "FRUTAS"
    },
    palabra203 = {
        nombre: "CARAMBOLA",
        categoria: "FRUTAS"
    },
    palabra204 = {
        nombre: "CHIRIMOYA",
        categoria: "FRUTAS"
    },
    palabra205 = {
        nombre: "ALBARICOQUE",
        categoria: "FRUTAS"
    },
    palabra206 = {
        nombre: "CIRUELA",
        categoria: "FRUTAS"
    },
    palabra207 = {
        nombre: "HIGO",
        categoria: "FRUTAS"
    },
    palabra208 = {
        nombre: "KAKI",
        categoria: "FRUTAS"
    },
    palabra209 = {
        nombre: "MELOCOTON",
        categoria: "FRUTAS"
    },
    palabra210 = {
        nombre: "NECTARINA",
        categoria: "FRUTAS"
    },
    palabra211 = {
        nombre: "NISPERO",
        categoria: "FRUTAS"
    },
    palabra212 = {
        nombre: "UVA",
        categoria: "FRUTAS"
    },
    palabra213 = {
        nombre: "NUEZ",
        categoria: "FRUTAS"
    },
];

crearPalabraSecreta();
function crearPalabraSecreta() {
    const indexPalabra = parseInt(Math.random() * palabras.length)

    palabraSecreta = palabras[indexPalabra].nombre;
    palabraSecretaCategoria = palabras[indexPalabra].categoria;
}

palabraEnPantalla()
function palabraEnPantalla() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palabraSecretaCategoria;

    const palabraPantalla = document.getElementById("palabra-secreta");
    palabraPantalla.innerHTML = "";

    for(i = 0; i < palabraSecreta.length; i++) {
        if(listaDinamica[i] == undefined) {
            if (palabraSecreta[i] == " ") {
                listaDinamica[i] = " ";
                palabraPantalla.innerHTML = palabraPantalla.innerHTML + "<div class='letrasEspacio'>" + listaDinamica[i] + "</div>"
            }
            else {
                listaDinamica[i] = "&nbsp;"
                palabraPantalla.innerHTML = palabraPantalla.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
        else{
            if (palabraSecreta[i] == " ") {
                listaDinamica[i] = " ";
                palabraPantalla.innerHTML = palabraPantalla.innerHTML + "<div class='letrasEspacio'>" + listaDinamica[i] + "</div>"
            }
            else {
                palabraPantalla.innerHTML = palabraPantalla.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            } 
        }
    }
}

function comprobarLetraElegida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if(intentos > 0) {
        cambiarEstiloLetra("tecla-" + letra, false);
        compararListas(letra);
        palabraEnPantalla();
    }
}

function cambiarEstiloLetra(tecla, condicion) {
    if(condicion == false) {
        document.getElementById(tecla).style.background = "#FF0000"
        document.getElementById(tecla).style.color = "#fffff"
    }
    else {
        document.getElementById(tecla).style.background = "#00EADC"
        document.getElementById(tecla).style.color = "#fffff"
    }
    
}

function compararListas(letra) {
    const pos = palabraSecreta.indexOf(letra)
    if(pos < 0) {
        intentos--
        cargarImagenHogera();

        if(intentos == 1) {
            abrirModal("Perdiste 😞", "Tu amada sucumbió a las llamas 🔥 <br> ...  <br> La palabra secreta era: " + palabraSecreta);
        }      
    }
    else {
        cambiarEstiloLetra("tecla-" + letra, true);
        for(i = 0; i < palabraSecreta.length; i++) {
            if(palabraSecreta[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let victoria = true;
    for(i = 0; i < palabraSecreta.length; i++) {
        if(palabraSecreta[i] != listaDinamica[i]) {
            victoria = false;
        }
    }

    if(victoria == true) {
        abrirModal("¡Enhorabuena! 🤩", "Has salvado a tu amada. 💧")
        intentos = 0;
    }
}

function cargarImagenHogera() {
    switch(intentos) {
        case 5:
            document.getElementById("imagen").style.background = "url('/resources/img/hogeras/mujer2.png')";
            break;
        case 4:
            document.getElementById("imagen").style.background = "url('/resources/img/hogeras/mujer3.png')";
            break;
        case 3:
            document.getElementById("imagen").style.background = "url('/resources/img/hogeras/mujer4.png')";
            break;
        case 2:
            document.getElementById("imagen").style.background = "url('/resources/img/hogeras/mujer5.png')";
            break;
        case 1:
            document.getElementById("imagen").style.background = "url('/resources/img/hogeras/mujer6.png')";
            break;
        default:
            document.getElementById("imagen").style.background = "url('/resources/img/hogeras/mujer1.png')";
            break;
    }
}

function abrirModal(titulo, mensaje) {
    let modalTitulo = document.getElementById("ModalTitulo")
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("ModalBody")
    modalBody.innerHTML = mensaje;


    $("#myModal").modal(
        {
            show: true
        }
    )
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function() {
    location.reload();
}
);
