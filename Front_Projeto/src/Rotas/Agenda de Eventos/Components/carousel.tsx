import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Seus imports de imagem continuam aqui
import evento1 from "../images/evento_1.jpeg"
import evento2 from "../images/evento_2.jpg"
import evento3 from "../images/evento_3.jpeg"
import evento4 from "../images/evento_4.jpg"
import evento5 from "../images/evento_5.jpg"

const array_fotos = [evento1, evento2, evento3, evento4, evento5]

interface Evento{
    title: string;
    date: Date | number;
    location: string;
    price: number; 
    description: string   
}


interface propsEvento {
  eventos: Evento[];
}

function CarouselDemo({ eventos }: propsEvento) {
  const ultimosEventos = eventos.slice(0, 5);

return (
    <Carousel className="h-[550px]">
      <CarouselContent className="h-full">
        {eventos.length !== 0 ? <>
        {ultimosEventos.map((evento, index) => (
          <CarouselItem key={index} className="h-[550px]">
            <Card className="h-full w-full overflow-hidden  border-none  rounded-none shadow-none">
              <CardContent 
                className="flex h-full w-full flex-col items-center justify-center p-6 relative bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${array_fotos[index]})` 
                }}
              >
                <div className=" absolute inset-0 bg-black/60 z-0" />
                <div className="relative z-10 text-center text-white flex flex-col gap-2 lg:gap-4">
                  <span className="text-xl lg:text-3xl  lg:mb-2 font-bold"> {evento.title} </span>
                  
                  {evento.date instanceof Date ?
                      <span className="lg:text-3xl"> Data: {evento.date.toLocaleDateString()} </span>
                      :
                      <span className="lg:text-3xl"> Data: {new Date(evento.date).toLocaleDateString()} </span>
                  }
                  
                  <span className="lg:text-3xl"> Local: {evento.location} </span>
                  <span className="lg:text-3xl"> Preço: R${evento.price} </span>
                  <span className="mt-2">{evento.description} </span>
                </div>

              </CardContent>
            </Card>
          </CarouselItem>
        ))}</> : <>
          <CarouselItem className="h-[550px]">
            <Card className="h-full w-full overflow-hidden  border-none  rounded-none shadow-none">
              <CardContent 
                className="flex h-full w-full flex-col items-center justify-center p-6 relative bg-cover bg-center"
              >
                <div className=" absolute inset-0 bg-black/60 z-0" />
                <div className="relative z-10 text-center flex flex-col gap-2 lg:gap-4">
                  <h2 className="text-white text-4xl ">Sem eventos</h2>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          </>}
      </CarouselContent>
      {/* Ajustei a posição dos botões para ficarem dentro da imagem, se quiser */}
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}

export default CarouselDemo