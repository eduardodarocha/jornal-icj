document.querySelector(".menu-abrir").onclick = function() {
    document.documentElement.classList.add("menu-ativo");
};
document.querySelector(".menu-fechar").onclick = function() {
    document.documentElement.classList.remove("menu-ativo");
};
//O JS é bem simples: adiciona eventos de clique nos dois botões que adicionam/removem uma classe menu-ativo no elemento <html> (acessado em JS via document.documentElement).//

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};