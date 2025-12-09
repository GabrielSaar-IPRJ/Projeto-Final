import { Link } from "react-router-dom"

function Menu(){
return(
        <div className="flex gap-4">
            <Link to="/">
                <div className="rounded-3xl text-[#FFFFFF] p-1 hover:cursor-pointer hover:bg-white/10">
                    Início
                </div>
            </Link>
            <Link to="/eventos">
                <div className="rounded-3xl text-[#FFFFFF] p-1 hover:cursor-pointer hover:bg-white/10">
                    Agenda de Eventos
                </div>
            </Link>
            <Link to="/login">
                <div className="rounded-3xl text-[#FFFFFF] p-1 hover:cursor-pointer hover:bg-white/10">
                    Login 
                </div>
            </Link>
        </div>
    )
}
export default Menu;