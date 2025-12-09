import { useState } from "react"
import {Menu} from 'lucide-react'
import { Link } from "react-router-dom"
function Burguer(){
    const [aberto,setAbrir] = useState(false)

    return(
        <div className="relative flex text-white">
            <button onClick={() => setAbrir(!aberto)}>
                <Menu/>
            </button>
            {aberto ?
                <div className="absolute top-full -right-4 mt-2 w-50 flex flex-col bg-azul gap-4 p-4 rounded-lg shadow-lg z-50">
                    <Link to="/">
                        <div className="rounded-3xl text-[#FFFFFF] p-1 hover:bg-white/10 hover:cursor-pointer transition-colors">
                            Início
                        </div>
                    </Link>
                    <Link to="/eventos">
                        <div className="rounded-3xl text-[#FFFFFF] p-1 hover:bg-white/10 hover:cursor-pointer transition-colors">
                            Agenda de Eventos
                        </div>
                    </Link>
                    <Link to="/login">
                        <div className="rounded-3xl text-[#FFFFFF] p-1 hover:bg-white/10 hover:cursor-pointer transition-colors">
                            Login
                        </div>
                    </Link>
                </div>
                :
                <div className="hidden">
                </div>          
            }
        </div>
    )
}  
export default Burguer