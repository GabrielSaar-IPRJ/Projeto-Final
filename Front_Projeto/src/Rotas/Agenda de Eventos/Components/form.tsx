import { Button } from "@/components/ui/button"
import type { FormEvent } from "react"
interface props{
    title: string;
    onClick: () => void;
}

function handleSubmit(e:FormEvent){
    e.preventDefault();
    
}

export default function Form(props: props){
    return(
        <div className="flex flex-row justify-center absolute w-full h-full z-1 top-22">
            <form onSubmit={(e)=> handleSubmit(e)} className="flex flex-col justify-center items-center w-[80%] lg:w-[30%] lg:h-[80%] bg-brVerde p-5 gap-10">
                <a className="text-white font-bold text-xl hover:cursor-pointer" onClick={props.onClick}>x</a>
                <a className="text-white font-bold text-2xl w-full text-center">{props.title}</a>
                <input type="text" id="nameInput" placeholder="Insira seu nome" className="text-white border p-4 rounded-xl w-full"/>
                <input type="email" id="emailInput" placeholder="Insira seu email" className="text-white border p-4 rounded-xl w-full"/>
                <Button variant="outline" className="w-[50%] text-black">Inscrever-se</Button>
            </form>
        </div>
    )
}
