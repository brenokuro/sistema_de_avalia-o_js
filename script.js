const vendas_do_dia = [1000, 1400, 2300, 5000]
function vendas(){
 const soma = vendas_do_dia.reduce((total, venda) => total + venda, 0);
 console.log(`O total de vendas do dia foi de R$${soma}`);
}
vendas();
