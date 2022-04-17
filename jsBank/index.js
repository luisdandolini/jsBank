import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12312312322);
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ana", 5000, 12312312311);
gerente.cadastrarSenha("1234")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const geretenEstaLogado = SistemaAutenticacao.login(gerente, "1234");

console.log(diretorEstaLogado);
console.log(geretenEstaLogado);  