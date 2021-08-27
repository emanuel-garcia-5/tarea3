const div = document.getElementById("lista");

const curso = {
    nombre: "Pogramacion 2",
    estudiantes: [
        { nombre: "juan", nota: 10 },
        { nombre: "maria", nota: 30 },
        { nombre: "carlos", nota: 20 },
        { nombre: "carla", nota: 40 }
    ]
}
const curso2 = {
    nombre: "Desarrollo web",
    estudiantes: [
        { nombre: "lili", nota: 30 },
        { nombre: "cleo", nota: 40 },
        { nombre: "pedro", nota: 33 },
        { nombre: "marco", nota: 21 }
    ]
}

const todos = curso.estudiantes.concat(curso2.estudiantes);
todos.forEach((al) => {
    const li = document.createElement('li');
    li.innerText = `${al.nombre} ${al.nota}`;
    if (al.nota > 20) {
        li.style = "color: blue"
    } else if (al.nota < 11) {
        li.style = "color: red"
    } else {
        li.style = "color: green"
    }

    document.body.appendChild(li);
});





