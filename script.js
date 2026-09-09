const pacientes = [
  { numeroTurno: "1", nombrePaciente: "Julian" }, 
  { numeroTurno: "2", nombrePaciente: "María" }, 
  { numeroTurno: "3", nombrePaciente: "Carlos" }, 
  { numeroTurno: "4", nombrePaciente: "Ana" }, 
  { numeroTurno: "5", nombrePaciente: "Luis" }
];

function crearTabla(){
  const tabla = document.createElement("table");
  const encabezado = document.createElement("thead");
  const filaEncabezado = document.createElement("tr");
  const turno = document.createElement("th");
  const paciente = document.createElement("th");
  const cuerpo = document.createElement("tbody");
 
  turno.textContent = "Numero de Turno";
  paciente.textContent = "Nombre del Paciente";
  filaEncabezado.appendChild(turno);
  filaEncabezado.appendChild(paciente);
  encabezado.appendChild(filaEncabezado);
  tabla.appendChild(encabezado);

  pacientes.forEach(function(paciente) {
    const fila = document.createElement("tr");
    const numeroTurno = document.createElement("td");
    const nombrePaciente = document.createElement("td");
    numeroTurno.textContent = paciente.numeroTurno;
    nombrePaciente.textContent = paciente.nombrePaciente;
    fila.appendChild(numeroTurno);
    fila.appendChild(nombrePaciente);
    cuerpo.appendChild(fila);
  });
  tabla.appendChild(cuerpo);
  document.body.appendChild(tabla);
}