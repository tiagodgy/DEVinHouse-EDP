// classes de domínio (modelo)

class ContaBancaria {

    constructor(agencia, numeroConta, saldo) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.operacoes = []; /// lancamentos = debito ou credito
    }

    debitar(valor) {
        if (valor > this.saldo) {
            return false;
        }
        // logica para debito ou saque
        this.saldo -= valor;
        const lancamento = new Lancamento('débito',valor);
        this.operacoes.push(lancamento);
        return true;        
    }

    creditar(valor) {
        this.saldo += valor;
        const lancamento = new Lancamento('crédito',valor);
        this.operacoes.push(lancamento);
    }

    // retorna as operações/lancamentos feitos de forma formatada
    gerarExtrato() {
        const extrato = [];
        for(let i=0; i< this.operacoes.length; i++) {
            const operacao = this.operacoes[i];
            const formatada = `Data: ${operacao.data.toLocaleString('pt-BR')} - ${operacao.tipo} - R$ ${operacao.valor}`;
            extrato.push(formatada);
        }
        return extrato;
    }

}

class Lancamento {

    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
        this.data = new Date(); // data atual
    }

}

var conta = new ContaBancaria(1212, 333, 1000);


// controller: interação com UI
function efetuarOperacao(acao) {
    let valor = obterValor();

    if (acao !== 'saldo' && acao !== 'extrato') {
        // validar o valor de entrada
        const isValido = validar(valor);
        if (!isValido) {
            return;
        }
        valor = parseFloat(valor); // convertendo de string para numérico fracionário
    }

    switch(acao) {
        case 'sacar':
            sacar(valor);
            break;
        case 'saldo':
            alert('O saldo atual é ' + conta.saldo);
            break;
        case 'depositar':
            conta.creditar(valor);
            alert('Depósito realizado com sucesso!');
            break;
        case 'extrato':
            consultarExtrato();
            break;
        default:
            alert('Operacao não reconhecida');
    }

    limparValor();
}

function sacar(valor) {
    const sucesso = conta.debitar(valor);
    if (sucesso) {
        alert('Saque efetuado com sucesso');
    } else {
        alert('Saldo insuficiente');
    }
}

function consultarExtrato() {
    const extrato = conta.gerarExtrato();
    let formatado = "";
    for(let i=0; i < extrato.length; i++) {
        formatado += extrato[i] + '\n';
    }
    alert(formatado);
}

function obterValor() {
    const input = document.querySelector("#valor");
    const valor = input.value;
    return valor;
}

function limparValor() {
    const input = document.querySelector("#valor");
    input.value = "";
}

function limparSaida() {
    const saida = document.querySelector("#saida");
    while(saida.hasChildNodes()) {
        saida.removeChild(saida.lastChild);
    }
}

function validar(valor) {
    if (!valor || valor.length === 0) {
        alert('Valor não preenchido!');
        return false;
    }
    const regex = /^[0-9]*\.?[0-9]*$/;
    const isNumerico = valor.match(regex);
    if (!isNumerico) {
        alert('Valor deve ser numérico, parte fracionária separada por ponto e ser maior que zero!');
        return false;
    }
    if (parseFloat(valor) === 0) {
        alert('Valor não pode ser zero!');
        return false;
    }
    return true;
}

