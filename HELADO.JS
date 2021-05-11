var topping = prompt(Helado)
var Helado = 35
var Oreo = 12
var KitKat = 17
var Brownie = 13
//Crear condicion
if(topping === 'Oreo'){
    alert(Helado + Oreo)
    console.log('Tu helado con topping oreo cuesta', Helado + Oreo)
}else if(topping + 'KitKat'){
    alert(Helado + KitKat)
    console.log('Tu heelado con topping KitKat cuesta', Helado + KitKat)
}else if (topping === 'brownie'){
    alert(Helado + Brownie)
    console.log('Tu Helado con topping brownie cuesta', Helado + Brownie)
}else{
    alert('No escogiste correctamente tu topping')
}