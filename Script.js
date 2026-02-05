let Tablas = document.getElementsByClassName("Tablas")[0];
let Tabla = "";

for (let i = 1; i <= 20; i++) {

    Tabla = "";

    for (let j = 1; j <= 10; j++) {
        Tabla += `<p>${i} x ${j} = ${i * j}</p>`;
    }

    Tablas.innerHTML += `
        <div class="tabla">
            <h2>Tabla del ${i}</h2>
            ${Tabla}
        </div>
    `;
}
