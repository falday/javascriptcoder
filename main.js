let totalHoras = 0;
let jornadas = 0;
let horas = 0;
let horastrabajadas = [];
let promedio =0;



for (let DiasDeTrabajo = 0; DiasDeTrabajo < 7; DiasDeTrabajo++)
 {
    horas = prompt("ingrese la cantidad de horas trabajadas por dia en la semana, al finalizar ingrese:  0 ");
    if (horas == 0)
    {break}
                 if (horas <= 14)

                    { horastrabajadas.push(horas);
                        jornadas = jornadas +1;
                    totalHoras = parseFloat(totalHoras) + parseFloat(horas)
                   
                    } 
                     else
                    {DiasDeTrabajo--;
                     alert("LA JORNADA MAXIMA ES DE 14hs");
    
                    }
    }

 document.write("los dias trabajados son " + jornadas);
 document.write(". las Horas trabajadas son "+ horastrabajadas);
 document.write(". la cantida de horas son " + totalHoras);

promedio = parseFloat(totalHoras/jornadas);
 alert("Las horas trabajadas en promedio por dia son: " + promedio);
let valorHora = prompt("ingrese el valor de la hora");
valorHora = valorHora*totalHoras;
let viaticos = prompt("ingrese monto de viaticos diarios");
viaticos = viaticos*jornadas
let paga= valorHora + viaticos;
document.write("total por horas de trabajo $",+valorHora, " por viaticos $", +viaticos," El PAGO DE LA SEMANA ES :$" + paga  );


