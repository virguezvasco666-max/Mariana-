function sumar() {
    let n1, n2, suma;
alert(" Este algoritmo suma dos numeros ingresado por el usuario")
n1 = parseFloat(prompt("ingrese el perimer valor"))
n2 = parseFloat(prompt("ingrese  el segundo valor"))

suma = n1 + n2; 
alert("el resultado de la suma es:" + suma)


}

function OperacionesBasicas() {
  let n1 , n2 ,suma , multiplicar , dividir; 
  alert("Este algoritmo  suma, multiplica y dividir dos numeros ingresados")
  n1 = parseFloat(prompt("ingrese el primer numero"))
  n2 = parseFloat(prompt("ingrese el segundo numero"))
  

  suma = n1 + n2 
  alert("El resultado  de la suma es:"+ suma)
  multiplicar = n1 * n2 
  alert(" El resultado de la multiplicacion es:"+multiplicar)
  dividir = n1 / n2 
  alert("El resultado de la divion es: "+dividir )
}

function ConversionLogitud() {
    let metros , centimetros , kilometros;
    alert("Este algoritmo convierte metros a centimetros y kilometros")
    metros = parseFloat(prompt("ingrese la cantidad de metros"))
    centimetros = parseFloat(prompt("ingrese la cantidad de centimetros"))
    kilometros = parseFloat(prompt("ingrese la cantidad de kilometros"))

centimetros = metros * 100
alert("El resultado de la conversion de centietros"+ centimetros)
kilometros = metros / 1000
alert("El resultado de  la conversion de kilometros es:"+ kilometros)
}

function ConversionTemperatura() {
    let celsius , fahrenheit , kelvin 
    alert("Este algoritmo convierte celsius a fehrenheit y kelvin")
    celsius = parseFloat(prompt("ingrese celsius"));

    fahrenheit = (celsius*9/5) + 32
    alert("El resultado de fahrenheit es:"+fahrenheit)
    kelvin = celsius + 273.15
    alert("El resultado de kelvin es:"+kelvin)

}
function AreaPerimetroRectangulo() {
    let base , altura, area , perimetro ;
    alert("Este algoritmo calcula area y perimero de un rectangulo") ;
    base = parseFloat(prompt("ingrese base"));
    altura = parseFloat(prompt("ingrese altura"));

    area = base * altura 
    alert("El resultado del area es:"+ area)
    perimetro = 2 * (base + altura)
    alert("El resultado del perimetro es:"+perimetro)
    
}

function PromedioTresNumeros() {
    let n1 , n2 , n3 

alert("Este algoritmo calcula suma y promedio de tres numeros");
n1 = parseFloat(prompt("ingrese primer numero")); 
n2 = parseFloat(prompt("ingrese segundo numero"));
n3 = parseFloat(prompt("ingrese trecer numero")); 

suma = n1 + n2 +n3 
alert("El resultado de la suma es:"+ suma)
promedio = suma / 3 
alert("El resultado del promedio es:"+ promedio)
    
}

function ConversionTiempo() {
    let segundo , minuto , horas ; 
    alert("Este algoritmo convierte segundos a minutos y horas");
    segundos = parseFloat("ingrese segundos "); 

    minutos =  segundos / 60
    alert("El resultado de minutos es:"+minutos)
    horas = segundos / 3600
    alert("El resultado de horas es:"+ horas)
    
}

function ConversionPeso() {
    let kilos , gramos , libres , toneladas;
    alert("Este algoritmo convierte kilos a gramos libras y toneladas")
     
    kilos  = parseFloat(prompt("ingrese kilos"));
    gramos = kilos * 1000
    alert("El resultado de gramos es:"+gramos)
    libras = kilos * 2.20462
    alert("El resultado de libras es:"+ libras)
    toneladas = kilos / 1000
    alert("El resultado de toneladas es:"+toneladas)
    
}
  function pesoenlalunayplanetasdelsistemasolar() {
    let pt
    let luna 
    let mercurio
    let venus 
    let marte 
    let jupiter 
    let saturno 
    let urano 
    let neptuno 
    alert("El algoritmo de peso en una luna y planetas del sistema solar ")
     pt =parseFloat(prompt("ingrese el peso de la tierra"))
     luna = pt * 0.166
     alert("El resultado de conversion peso en la tierra al de la luna es"+luna)
     mercurio = pt * 0.38
     alert("El resultado de conversion peso en la tierra al de el mercurio es"+mercurio)
     venus = pt * 0.91
     alert("El resultado de conversion peso en la tierra al de el venus es"+venus)
     marte = PT * 0.38
     alert("El resultado de conversion peso en la tierra al de el marte es"+marte)
     jupeter = pt *2.34
     alert("El resultado de conversion peso en la tierra al de el jupeter es"+jupeter)
     saturno = pt * 1.06
     alert("El resultado de conversion peso en la tierra al de el saturno es"+saturno)
     urano = pt * 0.92
     alert("El resultado de conversion peso en la tierra al de el urano es"+urano)
     neptuno = pt * 1. 19 
     alert("El resultado de conversion peso en la tierra al de el neptuno"+neptuno)

  }

  function CalculoDeCompra() {
    let precio1, cantidad1, precio2, cantidad2, precio3, cantidad3, total1, total2, total3, totalcompra
    alert("Este algoritmo calcula el total de una compra de tres productoeres");
    precio1 = parseFloat(prompt("ingrese precio cuaderno"));
    cantidad = parseFloat(prompt("ingrese cantidad cuaderno"));
    precio2 = parseFloat(prompt("ingrese presio  lapiz"));
    cantidad2 = parseFloat(prompt("ingrese cantidad  lapiz"));
    precio3 = parseFloat(prompt("ingrese precio mochila"));
    cantidad3 = parseFloat(prompt("ingrese cantidad mochila"));
    total1 = precio1 * compra1
    total2 = precio2 * compra2
    total3 = precio3 * compra3
    totalcompra = total1 + total2 + total3 
    alert("El total de la compra es:"+totalcompra)
    
  }

  function CalculoSalario() {
    let salariomensual,diastrabajados,valordia , adicional, togtalpagar
    alert("Este algoritmo calcula el pago de un trabajador");
    salariomensual = parseFloat(prompt("ingrese salario mensual"))
    diastrabajados = parseFloat(prompt("ingrese dias trabajados"))
    valordia = parseFloat(prompt("ingrese valor dia"))
    adicional = parseFloat(prompt("ingrese adicional"))
    valordia = salariomensual / 30
    totalpagar = (valordia * diastrabajos)+adicional
    alert("El total a pagar es:"+totalpagar)

  }

  function facturaservicio() {
    let consumo , valorUnidad , porcentajeImpuesto , subtotal,impuesto , total;
    alert("Este algoritmo calcula subtotal impuesto y total")
    consumo = parseFloat(prompt("ingrese consumo"))
    valorUnidad = parseFloat(prompt("ingreese valorUnidad"))
    porcentajeImpuesto = parseFloat(prompt("ingrese porcentajeImpuesto"))
    subtotal = consumo * valor unidad
    impuesto = subtotal * (porcentajeImpuesto/100)
    total = subtotal + impuesto 
    alert ("El subtotal es:"+subtotal)
    alert ("El impuesto es:"+impuesto )
    alert ("El total a pagar es:"+total)
  }
  function CostoViaje() {
    let distancia , consumoPromedio , PrecioCombustible , litros , costos ; 
    alert("Este algoritmo calcula costo de combustible de viaje")
    distancia = parseFloat(prompt("ingrese distancia km"))
    consumoPromedio = parseFloat(prompt("ingrese consumo promedio km por litro"))
    PrecioCombustible = parseFloat(prompt("ingrese precio combustible"))
    litros = distancia / consumoPromedio
    costo = litros * PrecioCombustible
    alert = ("El precio del viaje es:"+ costo)

  }

  function Tiempoviaje() {
    let distanmcia, velocidad, tiempo 
    alert("Este algorito calcula tiempo estimado de un viaje")
    distancia = parseFloat(prompt("ingrese distancia km"))
    velocidad = parseFloat(prompt("ingrese velocidad promedio km/m "))
    tiempo = distancia / tiempo
    alert = ("El tiempo estimado es:"+tiempo+"horas")
  }
function Notafinal() {
  let nota1, nota2,nota3, final;
  alert("Este algoritmo calculo nota final 20% 30% 50%");
  nota1 = parseFloat(prompt("ingrese nota 1 - 20%"))
  nota2 = parseFloat(prompt("ingrese nota 2 - 30%"))
  nota3 = parseFloat(prompt("ingrese nota 3 - 50%"))
  final = (nota * 0.2) + (nota2 * 0.3)+ (nota3 * 0.5)
  alert("la nota final es:"+final)
  }

function Conversionmonedas() {
  let pesos , dolares , euros , tasadolar , tasaeuros
  alert("El algoritmo convierte pesos colombianos a dolares y euros")
  pesos = parseFloat(prompt("ingrese pesos colomnbianos"))
  tasadolar = 4000
  tasaEuro = 4500
  doares = pesos / tasadolar
  euros = pesos / tasaeuros 
  alert("El resultado en dolor es:"+dolores)
  alert("El resultado en euros es:"+euros)
  
}
  


    
}