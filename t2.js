
 calcular = () => {
    let num = document.getElementById("numero").value;

    if (isNaN(num)){
        console.log("usted no escribio un numero");
    }else{
        let html = 
        `
        <p>1 * ${num} = ${num * 1} </p>
        <p>2 * ${num} =  ${num * 2} </p>
        <p>3 * ${num} =  ${num * 3} </p>
        <p>4 * ${num} =  ${num * 4} </p>
        <p>5 * ${num} =  ${num * 5} </p>
        <p>6 * ${num} =  ${num * 6} </p>
            <br>
        <p>${num} + ${num} = ${num * 2}</p>
            <br>
        <p>${num} - ${num} = ${num - num}</p>
            <br>
        <p>${num} / ${num} = ${num / num}</p>
        `

     let res =  document.getElementById('result');
     res.innerHTML = html;
     
    }
  
}
