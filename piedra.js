var SMS = alert('Bienvenido a mi primer juego')
var J1 = prompt('Selecciona piedra, papel o tijera')
var J2 = prompt('Selecciona piedra, papel o tijera')
var piedra = 'piedra'
var tijera = 'tijera'
var papel = 'papel'

if (J1 === piedra && J2 === papel){
    alert('El papel le gana a la piedra Jugador 2 Gana')
}else if (J1 === papel && J2 === tijera){
    alert('La tijera le gana al papel Jugador 2 Gana')
}else if (J1 === tijera && J2 === piedra){
    alert('La piedra le gana a la tijera Jugador 2 Gana')
}

if (J2 === piedra && J1 === papel){
    alert('El papel le gana a la piedra Jugador 1 Gana')
}else if (J2 === papel && J1 === tijera){
    alert('La tijera le gana al papel Jugador 1 Gana')
}else if (J2 === tijera && J1 === piedra){
    alert('La piedra le gana a la tijera Jugador 1 Gana¨)
