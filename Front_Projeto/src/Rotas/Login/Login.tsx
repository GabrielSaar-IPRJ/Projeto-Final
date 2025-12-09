import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    //aqui pra fazer a verificaçao com o backend depois
    if (email === "admin@teste.com" && password === "1234") {
      alert("Login bem-sucedido!");
      navigate("/"); //me lembremmmmmmmmmmmmmmmmmmmmm ou tentem fazer tbm, nao vou reclamar 😁

    } else {
      alert("Email ou senha incorretos");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brVerde focus:border-brVerde transition"
          placeholder="Digite seu email"
          required
        />

        <label className="block mb-2 font-semibold">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brVerde focus:border-brVerde transition"
          placeholder="Digite sua senha"
          required
        />

        <button
          type="submit"
          className="w-full bg-azul text-white py-2 rounded hover:bg-green-500 active:bg-green-500 transition-colors"
        >
          Entrar
        </button>


      
      <div className="flex items-center justify-center text-center pt-2">
        <Link to='/agendar' 
            className="justify-center w-full bg-brVerde text-white py-2 rounded hover:bg-brAzul active:bg-brAzul transition-colors"
          >
            Cadastre-se
        </Link>         
      </div>
      </form>
    </div>
  );
}

export default Login;