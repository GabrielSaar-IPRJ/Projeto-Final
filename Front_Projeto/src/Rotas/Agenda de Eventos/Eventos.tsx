import { useEffect, useState } from "react";
import Cards from "./Components/cards"
import CarouselDemo from "./Components/carousel"
import Form from './Components/form'
import { Link } from "react-router-dom";
interface test{
    id: number,
    title: string;
    date: Date | number;
    location: string;
    price: number; 
    description: string   
}

function Eventos(){

    const [isFormOpen, setFormOpen] = useState(false)
    const [formIndex, setFormIndex] = useState(0)
    const [eventos,setEventos] = useState<test[]>([])

    function requestTitle(index: number, eventos:test[]){
        eventos.map((i)=>{
            if(i.id === index){
                return i.title
            }
        })
    }

    useEffect(()=>{
        function loadApi(){
          setEventos([])
          let url = "http://localhost:3000/events"
          fetch(url)
          .then((r)=> r.json())
          .then((json)=>{
            setEventos(json)
          })
        }
        loadApi()
      }, []); 

      async function handleDelete(id: number) {
        try {
            await fetch(`http://localhost:3000/event/${id}`, { method: 'DELETE' });
            setEventos(prevEventos => prevEventos.filter(evento => evento.id !== id));
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
    }
    
    
    return(
        <>
        <div className="z-2 flex flex-col lg:justify-around lg:flex-row items-center">
           {eventos.length !== 0 ? <>
                <div className="w-[90%] lg:mt-[50px] lg:h-[550px] lg:w-[60%]">
                    <CarouselDemo eventos={eventos} />
                </div>
                <div className="w-[90%] lg:mt-[50px] lg:flex lg:h-[550px] lg:w-[35%] flex-col overflow-y-auto rounded-4xl">
                        {eventos.map((cards) => {
                            return (
                                <Cards
                                    key={cards.id}
                                    id={cards.id}
                                    name={cards.title}
                                    date={cards.date}
                                    local={cards.location}
                                    price={cards.price}
                                    description={cards.description}
                                    onDelete={() => handleDelete(cards.id)}
                                    onClick={() => { setFormOpen(true); setFormIndex(cards.id); } } />
                            );
                        })}
                </div></> : <div className="flex flex-col w-[90%] justify-center mt-[50px] lg:h-[550px] lg:w-[60%]">
                    <Link to='/agendar' 
                    className="lg:w-[30%] text-center self-center bg-brVerde hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Quero marcar meu evento
                    </Link>
                    <CarouselDemo eventos={[]}/>
                </div>}
        </div>
        
        
        </>
    )
}

export default Eventos