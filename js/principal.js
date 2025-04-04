/**
ARTÍCULOS
Sea la información de un artículo:
nombre, cantidad y precio base. Se
espera que los artículos tengan un
descuento, pero eso dependerá de
cada departamento.

El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para
edad de 1 año.
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva
clase sólo amerita edad y descuento().
Realice un programa que lea los datos de un juguete y reporte el monto a pagar.

Ejemplos de la corrida:
Nombre del juguete: carrito
Cantidad: 2
Precio base: $10
Edad recomendada: 2
Monto a pagar por el carrito: $20.00

Nombre del juguete: peluche
Cantidad: 3
Precio base: $20
Edad recomendada: 1
Monto a pagar por el peluche: $54.00
 */

    import Cl_Juguete from "./Cl_Juguete.js";

    let juge1 = new Cl_Juguete("carrito", 2, 10, 2);
    let juge2 = new Cl_Juguete("peluche", 3, 20, 1);

    
    
    let salida=document.getElementById("Salida");


        let mostrarAr = (ar) => {
            return `
              <tr>
                  <td>${ar.nombre}</td>
                 <td>${ar.cantidad}</td>
                <td>${ar.precioBase }</td>
                <td>${ar.edad}</td>
                 <td>${ar.montPagar()}</td>
                
              </tr>
              `;
          };
          
          salida.innerHTML = `
          <table>
              <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio B</th>
                  <th>Edad</th>
                  <th>Monto a pagar</th>
              </tr>
              ${mostrarAr(juge1)}
              ${mostrarAr(juge2)}
              
          </table>
          
          `;

        



    

        