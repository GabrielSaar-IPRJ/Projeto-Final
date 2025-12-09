import brasilLogo from "./assets/Brasil_Junior.png"
import Menu from "./assets/menuLivre"
import Burguer from "./assets/menuBurguer"
import { useEffect, useState } from "react"

function Header(){
    const [widthSize,setWidth] = useState<number>(window.innerWidth)
    const quebra = 768
    useEffect(()=>{
        function resize(){
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", resize)
        resize()
        return() => window.removeEventListener("resize", resize)
    })
    return(
        <div className="flex h-20 flex-row items-center justify-between bg-azul px-4">
            <div >
                <img 
                    src={brasilLogo} 
                    alt="Brasil Junior Logo"
                    height="40px"
                    width="120px"
                    >
                </img>
            </div>
            <div className="mr-4">

                {widthSize > quebra ? <Menu/> : <Burguer/>}   
            </div>
            
        </div>

    )
}

export default Header