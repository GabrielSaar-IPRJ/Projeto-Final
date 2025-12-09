import { useRef, type FormEvent } from "react"

export default function Cadastro(){
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    function handleCadastro(e : FormEvent){
        e.preventDefault()
    }

    return(
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleCadastro}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            ref={emailRef}
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brVerde focus:border-brVerde transition"
            placeholder="Digite seu email"
            required
          />

          <label className="block mb-2 font-semibold">Senha</label>
          <input
            type="password"
            ref={passwordRef}
            className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brVerde focus:border-brVerde transition"
            placeholder="Digite sua senha"
            required
          />

          <button
            type="submit"
            className="w-full bg-azul text-white py-2 rounded hover:bg-brVerde active:bg-brVerde transition-colors"
          >
            Cadastrar-se
          </button>
        </form>
    </div>
    )
}