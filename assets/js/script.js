
let container = document.getElementById("grid")
container.innerHTML = ""

for (let i = 1; i <= 10; i++) {
    let elemento = `<div class="col-6 col-md-4 mt-3">
                    <div class="card">
                        <h5 class="card-title">Tabla del ${i}</h5>
                        <div class="card-body">
                `
    
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j, i * j);
        elemento += `<p class="card-text">${i} * ${j} = ${i * j}</p>`
    }
    elemento +=  `</div>
                  </div>
                  </div>
                `

    container.innerHTML += elemento
}