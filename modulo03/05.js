let statusPedido = "enviado";

switch (statusPedido) {
  case "pendente":
    console.log("Aguardando confirmação de pagamento.");
    break;
  case "pago":
    console.log("Pagamento aprovado! Preparando para envio.");
    break;
  case "enviado":
    console.log("Seu produto já saiu do nosso estoque.");
    break;
  case "entregue":
    console.log("Pedido entregue com sucesso!");
    break;
  default:
    console.log("Status desconhecido. Entre em contato com o suporte.");
}