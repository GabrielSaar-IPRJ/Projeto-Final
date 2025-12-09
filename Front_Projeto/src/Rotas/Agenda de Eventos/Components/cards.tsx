import { useState } from "react";
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { ListRestart } from 'lucide-react';
import { Link } from "react-router-dom";
interface props{
    id: number;
    name: string;
    date: Date | number;
    local: string;
    price: number; 
    description: string;
    onUpdate: ()=>void;
    onClick: () => void;
    onDelete: () => void;
}


function Cards(props: props){
    const [isOpen, setIsOpen] = useState(false)


    return(
        <div>
            {!isOpen ? <div className="m-4 flex flex-col gap-1 p-4">
                <a className="text-center text-black self-center font-bold "> {props.name} </a>
                <div className="flex flex-row divide-x-3 divide-dashed divide-white bg-azul">
                    <div className="w-[40%] p-4 flex flex-col text-start">
                        {props.date instanceof Date ?
                            <a className="text-white"> Data: {props.date.toLocaleDateString()} </a>
                            :
                            <a className=" text-white"> Data: {new Date(props.date).toLocaleDateString()} </a>
                        }
                        <a className=" text-white"> Local: {props.local} </a>
                        <a className=" text-white"> Preço do Ingresso: R${props.price} </a>
                    </div>
                    <div className="p-4 w-[60%] flex flex-row justify-end items-end bg-[#0b2781]">
                        <Button variant="ghost" className="self-center hover:cursor-pointer text-white" onClick={props.onClick}>Inscrever-se</Button>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="self-center hover:cursor-pointer"
                onClick={()=>{isOpen ? setIsOpen(false) : setIsOpen(true)}}><path fill="none" stroke="#000" 
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 11l8 3l8-3"/></svg> 
            </div>
            :
            <div className="m-4 flex flex-col bg-[#0b2781] rounded-4xl hover:cursor-pointer gap-2 p-4 divide-y divide-dashed divide-white">
                <a className="w-full text-center text-white self-center font-bold"> {props.name} </a>
                <div className="flex flex-row justify-center items-center">
                    <div className="w-[40%] p-4 flex flex-col text-start">
                        {props.date instanceof Date ?
                            <a className="text-white"> Data: {props.date.toLocaleDateString()} </a>
                            :
                            <a className=" text-white"> Data: {new Date(props.date).toLocaleDateString()} </a>
                        }
                        <a className=" text-white"> Local: {props.local} </a>
                        <a className=" text-white"> Preço do Ingresso: R${props.price} </a>
                    </div>
                    <div className="flex flex-col  ml-[150px] items-end">
                        <div className="p-4 w-[60%] flex flex-row justify-end items-end bg-[#0b2781]">
                            <Link to="/atualizar"  className="self-center hover:cursor-pointer ">
                                <ListRestart />
                            </Link>
                        </div>
                        <div className="p-4 w-[60%] flex flex-row justify-end items-end bg-[#0b2781]">
                            <Button variant="outline" className="self-center hover:cursor-pointer ">Inscrever-se</Button>
                        </div>
                        <div className="p-4 w-[60%] flex flex-row justify-end items-end bg-[#0b2781]">
                            <Button variant="outline" onClick={props.onDelete} className="self-center hover:cursor-pointer ">
                                <Trash2/>
                            </Button>
                        </div>   
                    </div>
                </div>
                <div className="flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="self-center"
                    onClick={()=>{isOpen ? setIsOpen(false) : setIsOpen(true)}}><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 13l8-3l8 3"/></svg>
                    <a className="pl-7 text-white">{props.description}</a> 
                </div>
            </div>
            }
        </div>
    )
}

export default Cards