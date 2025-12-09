import { Button } from "@/components/ui/button";
import { useRef } from "react";
import type { FormEvent } from "react"
import { api } from "@/components/ui/api";
import { useParams } from "react-router-dom";

export default function Update(){
    const { id } = useParams();
    const titleRef = useRef<HTMLInputElement | null>(null)
    const descriptionRef = useRef<HTMLInputElement | null>(null)
    const locationRef = useRef<HTMLInputElement | null>(null)
    const priceRef = useRef<HTMLInputElement | null>(null)
    const dateRef = useRef<HTMLInputElement | null>(null)

    async function handleSubmit(e:FormEvent){
        e.preventDefault()
        if(
            !titleRef.current?.value ||
            !descriptionRef.current?.value ||
            !locationRef.current?.value ||
            !priceRef.current?.value ||
            !dateRef.current?.value
        ){
            return(
                alert("Por Favor, adicione todos os elementos")
            )
        }
        try{
            const response = await api.put(`/event/${id}`,{
                title: titleRef.current?.value,
                description: descriptionRef.current?.value,
                price: Number(priceRef.current?.value),
                location: locationRef.current?.value,
                date: dateRef.current?.value            
            })
            if(response.status === 200){
                // TENTA VOLTAR PARA A PAGINA DE EVENTOS POR FAVOR
            }
            
        }catch(e){
            console.log(e)
        }
        
    }

  return (
    <div className="flex flex-row justify-center absolute w-full h-full z-1 top-22">
      <form
        onSubmit={handleSubmit} 
        action="post" 
        className="flex flex-col items-center w-[90%] p-5 gap-10">
        <a className="text-black font-bold text-2xl w-full text-center">Atualizar Evento</a>
        <input 
            type="text" 
            id="title" 
            placeholder="Insira o título do evento"
            ref={titleRef}
            className="text-black border border-azul p-4 rounded-xl w-full"/>
        <input 
            type="text" 
            id="description" 
            placeholder="Insira a descrição do evento"
            ref={descriptionRef} 
            className="text-black border border-azul p-4 rounded-xl w-full"/>
        <input 
            type="text" 
            id="location" 
            placeholder="Insira o local do evento"
            ref={locationRef} 
            className="text-black border border-azul p-4 rounded-xl w-full"/>
        <input 
            type="number" 
            id="price" 
            placeholder="Insira o preço do evento"
            ref={priceRef} 
            className="text-black border border-azul p-4 rounded-xl w-full"/>
        <input 
            type="date" 
            id="date" 
            placeholder="Insira a data do evento" 
            ref={dateRef}
            className="text-black border border-azul p-4 rounded-xl w-full"/>
        <Button type="submit" variant="outline" className="w-[20%] text-white bg-azul border border-azul hover:bg-blue-100 font-bold">Atualizar</Button>
      </form>
    </div>
  )
}