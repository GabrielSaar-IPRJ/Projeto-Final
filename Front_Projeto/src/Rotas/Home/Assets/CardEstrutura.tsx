import { useState } from "react"
import { motion } from "motion/react"

interface CardEstruturaProps {
  titulo: string;
  desc: string;
  bgColor: string;
  border: string;
}

export default function CardEstrutura({ titulo, desc, bgColor, border }:CardEstruturaProps){
    const [isOpen, setIsOpen] = useState(false)


    return(
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={isOpen? ()=> setIsOpen(false) : () => setIsOpen(true)}>
            <div className={`flex items-center justify-center text-center w-[350px] h-[350px] lg:w-[350px] lg:h-[380px] hover:cursor-pointer ${bgColor} ${border} p-3`}>
                {isOpen ? 
                    <div>
                        <a className="text-l font-light lg:font-normal p-2 text-white">
                            {desc}                           
                        </a>
                    </div>
                    :
                    <div className="flex text-center justify-center">
                        <a className="text-4xl lg:text-5xl font-bold text-white">
                            {titulo}
                        </a>
                    </div>
                }                        
            </div>
        </motion.button>
    )
}