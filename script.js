document.getElementById("formPesquisa").addEventListener("submit", e => {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nascimento = document.getElementById("nascimento").value;
  
    const respostas = {
      p1: document.querySelector('input[name="p1"]:checked').value,
      p2: document.querySelector('input[name="p2"]:checked').value,
      p3: document.querySelector('input[name="p3"]:checked').value,
      p4: document.querySelector('input[name="p4"]:checked').value,
      p5: document.querySelector('input[name="p5"]:checked').value,
      p6: document.querySelector('input[name="p6"]:checked').value
    };
  
    const registro = {
      nome,
      email,
      nascimento,
      respostas,
      data: new Date().toLocaleString()
    };
  
    const dados = JSON.parse(localStorage.getItem("pesquisa")) || [];
    dados.push(registro);
    localStorage.setItem("pesquisa", JSON.stringify(dados));
  
    alert("Respostas enviadas com sucesso!");
    e.target.reset();
  });
  