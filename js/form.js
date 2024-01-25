function valida(input) {
  const tipoInput = input.dataset.tipo;

  if (tipoInput == "cep") {
    buscaCep(input);
  }

  if (input.validity.valid) {
    input.classList.remove("contato__campo__entrada--invalido");
    input.classList.add("contato__campo__entrada--valido");
    input.parentElement.querySelector(".contato__erro").innerHTML = "";
  } else {
    input.classList.remove("contato__campo__entrada--valido");
    input.classList.add("contato__campo__entrada--invalido");
    input.parentElement.querySelector(".contato__erro").innerHTML = mostraErros(
      tipoInput,
      input
    );
  }
}

function preencheCamposCep(dados) {
  const endereco = document.querySelector("#contato__endereco");
  const bairro = document.querySelector("#contato__bairro");
  const cidade = document.querySelector("#contato__cidade");
  const estado = document.querySelector("#contato__estado");

  endereco.value = dados.logradouro;
  bairro.value = dados.bairro;
  cidade.value = dados.localidade;
  estado.value = dados.uf;
}

function buscaCep(input) {
  const cep = input.value.replace(/\D/g, "");
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  };

  if (!input.validity.valueMissing && !input.validity.patternMismatch) {
    fetch(url, options)
      .then((response) => response.json())
      .then((dados) => {
        if (dados.erro) {
          input.setCustomValidity("Não foi possível buscar o CEP.");
          return;
        }
        input.setCustomValidity("");
        preencheCamposCep(dados);
        return;
      });
  }
}

function mostraErros(tipoInput, input) {
  let mensagem = "";

  tiposErro.forEach((erro) => {
    if (input.validity[erro]) {
      mensagem = mensagensErro[tipoInput][erro];
    }
  });
  return mensagem;
}

const tiposErro = [
  "customError",
  "typeMismatch",
  "patternMismatch",
  "valueMissing",
];

const mensagensErro = {
  nome: {
    valueMissing: 'O campo "Nome" deve ser preenchido.',
  },
  email: {
    typeMismatch: "O email digitado não é válido.",
    patternMismatch: "O email digitado não é válido.",
    valueMissing: 'O campo "Email" deve ser preenchido.',
  },
  telefone: {
    patternMismatch: "Insira ddd e telefone válidos.",
    valueMissing: 'O campo "Telefone" deve ser preenchido.',
  },
  cep: {
    customError: "Não foi possível buscar o CEP.",
    patternMismatch: "O CEP digitado não é válido.",
    valueMissing: 'O campo "CEP" deve ser preenchido.',
  },
  mensagem: {
    valueMissing: 'O campo "Mensagem" deve ser preenchido.',
  },
};

const inputs = document.querySelectorAll(".contato__campo__entrada");

const inputCep = document.querySelector("#contato__cep");

inputs.forEach((input) => {
  input.addEventListener("keyup", (evento) => {
    valida(evento.target);
  });
});

inputCep.addEventListener("keyup", () => {
  if (this.value <= 0) {
    document.querySelector("#contato__endereco").value = "";
    document.querySelector("#contato__bairro").value = "";
    document.querySelector("#contato__cidade").value = "";
    document.querySelector("#contato__estado").value = "";
  }
});
