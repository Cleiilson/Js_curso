const obj1={}

console.log(obj1)

const obj2 = new Object()

console.log(obj2)
 
function meuObj(nome, preco, desconto){
    this.nome = nome

    this.precoComDesconto = ()=>{

        return preco*(1-desconto)
    }
 }

 p1 = new meuObj("livro", 10.00, 0.10)
 p2 = new meuObj("notebook", 299.00, 0.20)
 console.log(p1, p2)
 console.log(p1.precoComDesconto())
 console.log(p2.nome, p2.precoComDesconto())