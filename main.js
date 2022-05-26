/*
    Envento load == .ready 
        titulo()
        opcionJugador()
        jugada()
        resultado() => Reutilización

    Evento Change =>
        Función que maneja Selección Usuario(opcionJugador)
            Función que maneja cambio imagen
            resultado() => Reutilización
            Devuelve la opción elegida

    Evento Click =>    
        Función que maneja Jugada(jugada)
            Función que maneja cambio imagen
            Función que maneja Selección PC (random)
            Función que muestra el resultado de la jugada    
*/

/*function saludar() {
  console.log("Hola");
}

saludar();

$(document).ready(function () {
  saludar();
  $("#jugar").click(saludar);
});

window.addEventListener("load", function () {
  document.getElementById("jugar").addEventListener("click", saludar);
}); */

function ponerTitulo(titulo) {
    //$(".caja-titulo").html("Pieda, Papel o Tijera");
    $(".caja-titulo").html(`<i>${titulo}</i>`);
  }
  
  function imprimirImagen(img, id) {
    if (img === "") img = "signo";
    $(`#${id}`).attr("src", `imagenes/${img}.jpg`);
  }
  
  //imprimirResultado('GANASTE');
  //imprimirResultado("Por favor, elija opcion");
  function imprimirResultado(resultado) {
    $(".caja-resultado").html(`<i>${resultado}</i>`);
  
    let resultadoColor = {
      EMPATASTE: "yellow",
      GANASTE: "limegreen",
      PERDISTE: "red",
    };
  
    let color = resultadoColor[resultado];
    //console.log(color);
    //condicion ? true : false;
  
    /* switch (resultado) {
        case 'GANASTE':
            color = 'limegreen'
            break;
    } */
  
    $(".caja-resultado").css("color", color ? color : "");
  }
  
  let seleccionJugador = "";
  
  function opcionJugador() {
    //impresión imagenes inicial
    seleccionJugador = "piedra";
    imprimirImagen(seleccionJugador, "img-jugador");
    imprimirImagen("", "img-computadora");
  
    $("select").change(function () {
      seleccionJugador = $("select").val();
      imprimirImagen(seleccionJugador, "img-jugador");
      imprimirImagen("", "img-computadora");
      imprimirResultado("Jugar!");
    });
  }
  
  function jugada() {
    $("button").click(function () {
      let seleccionComputadora = opcion();
      imprimirImagen(seleccionComputadora, "img-computadora");
  
      let resultado = obtenerResultado(seleccionJugador, seleccionComputadora);
      imprimirResultado(resultado);
    });
  }
  
  function opcion() {
    let opciones = ["piedra", "papel", "tijera"];
    let random = Math.random(); //0 ... 0.99999999
    random *= 3; //0 ... 2.999999999
    random = parseInt(random); //0 ... 2
  
    return opciones[random];
  }
  
  function obtenerResultado(opJ, opC) {
    let resultados = {
      //[opC]  [opJ]
      piedra: { piedra: "EMPATASTE", papel: "GANASTE", tijera: "PERDISTE" },
      papel: { piedra: "PERDISTE", papel: "EMPATASTE", tijera: "GANASTE" },
      tijera: { piedra: "GANASTE", papel: "PERDISTE", tijera: "EMPATASTE" },
    };
  
    return resultados[opC][opJ];
  }
  
  $(function () {
    ponerTitulo("Piedra, Papel o Tijera");
    opcionJugador();
    jugada();
    imprimirResultado("Por favor, elija opción");
  });
  
  /* const colores = ['Rojo', 'Amarillo', 'Verde'];
  //Paradigma declarativo
  colores.forEach(color => console.log(color));
  //Paradigma imperativo
  for (let index = 0; index < colores.length; index++) {
      const element = colores[index];
      console.log(element);    
  } */