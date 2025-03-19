let listaAmigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('nome-amigo').value;
    const listaNomes = document.getElementById('lista-amigos');

    if (nome && !listaAmigos.includes(nome)) {
        listaAmigos.push(nome);
        listaNomes.textContent = listaAmigos.join(', ');
        document.getElementById('nome-amigo').value = '';
        atualizarSorteio();
        atualizarLista();
    } else if (!nome) {
        alert("Por favor, insira um nome!");
    } else {
        alert("Nome já adicionado!");
    }
}

function atualizarLista() {
    const listaNomes = document.getElementById('lista-amigos');
    listaNomes.textContent = listaAmigos.join(', ');
}

function sortear() {
    if (listaAmigos.length < 2) {
        alert("Você precisa de pelo menos 2 amigos para o sorteio!");
        return;
    }

    embaralhar(listaAmigos);
    const sorteio = document.getElementById('lista-sorteio');
    let sorteioTexto = '';
    for (let index = 0; index < listaAmigos.length; index++) {
        let amigoSorteado = listaAmigos[(index + 1) % listaAmigos.length];  
        sorteioTexto += `${listaAmigos[index]} --> ${amigoSorteado}<br/>`;
    }

    sorteio.innerHTML = sorteioTexto;
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i]];
    }
}

function limparLista() {
    listaAmigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
