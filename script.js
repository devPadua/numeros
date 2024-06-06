var numeros = []
var res = document.getElementById('res')
var conjunto = document.getElementById('conjunto')
function adicionar(){
    let numadd = document.getElementById('num')
    let numaddn = Number(numadd.value)
    if (numaddn < 1 || numaddn > 100){
        window.alert('Adicione um número entre 1 e 100')
        document.getElementById('num').value = ""
    } else if (numeros.includes(numaddn)){
        window.alert('Este número ja foi adicionado')
        document.getElementById('num').value = ""
    } else {
    numeros.push(numaddn)
    document.getElementById('num').value = ""
    conjunto.innerHTML += `${numaddn} `
    }
}
function fin(){
    if (numeros.length == 0){
        window.alert('Você não adicionou nenhum número :( adicione alguns!')
    } else {
        var total = 0
        for (c = 0; c < numeros.length; c++){
            var total = total + numeros[c]}
            var media = total/numeros.length
        res.innerHTML = `Ao todo temos ${numeros.length} números. <br/><br/>
        O maior valor informado foi o ${Math.max(...numeros)}.<br/><br/>
        O menor valor informado foi o ${Math.min(...numeros)}.<br/><br/>
        Somando todos os valores, temos ${total}.<br/><br/>
        A média dos valores é ${Math.round((media + Number.EPSILON) * 100)/100}.`
    } 
}
function limpar(){
    numeros = []
    conjunto.innerHTML = ""
    res.innerHTML = ""
    document.getElementById('num').value = ""
}