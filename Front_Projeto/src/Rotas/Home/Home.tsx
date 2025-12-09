import { motion } from "motion/react"
import brasilLogo from "./assets/Brasil_Junior.png"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CardEstrutura from "./Assets/CardEstrutura";
import { Link } from "react-router-dom";

function Home(){

    return(
        <div className="flex-col h-screen m-0 p-0">

            <div className="flex flex-row items-center justify-between gap-3 lg:p-10 p-6">
                <div>
                    <h1 className="text-3xl font-bold text-black">
                        O que é o MEJ
                    </h1>
                    <br/>
                    <a>
                        O Movimento Empresa Júnior (MEJ) é um movimento que conecta estudantes universitários a experiências práticas de empreendedorismo e gestão empresarial
                        através de Empresas Juniores (EJs).
                        <br />
                        <br />
                        O que nos torna únicos: 
                        <br />
                        "Representar e potencializar o Movimento Empresa Júnior como agente de formação de lideranças empreendedoras comprometidas e 
                        capazes de transformar o país em um Brasil Empreendedor."                         
                    </a>
                    <br />
                    <br />
                    <a className="text-azul underline" href="https://brasiljunior.org.br/conheca-o-mej" target="_blank">Mais Informações</a>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-3 bg-azul lg:p-10 p-6">
                <div>
                    <a className="text-3xl font-bold text-white">
                        Estrutura do MEJ
                    </a>
                    <br/>
                    <a className="text-1xl font-normal text-white">
                        O MEJ é organizado em uma estrutura hierárquica conhecidas como instâncias:
                    </a>                    
                </div> 
            </div>

            <div className="flex items-center justify-center pt-12 pb-12">
                <div className="grid grid-cols-1 gap-7 lg:gap-10 lg:grid-cols-3">

                    <CardEstrutura titulo="Brasil Júnior" desc="Representa o MEJ em âmbito nacional. Sua principal função é definir as diretrizes, a estratégia
                                        e a identidade do movimento em todo o território brasileiro e regulamentar a atividade das EJs no país
                                        e promover a integração e o desenvolvimento das federações estaduais." bgColor="bg-azul" border="lg:rounded-tl-3xl"/>

                   
                    <CardEstrutura titulo="JE Global" desc="É a instância que representa o MEJ a nível mundial. Funciona como a confederação global, 
                                        conectando os movimentos nacionais de diversos países e promovendo a troca de experiências e a padronização de práticas em 
                                        escala internacional." bgColor="bg-brVerde" border="none"/>

                    <CardEstrutura titulo="Federações Estaduais" desc="Abaixo da Brasil Júnior, estão as federações estaduais, que representam o movimento em cada um dos 27 estados do Brasil. 
                                        Elas são responsáveis por aplicar as diretrizes nacionais em nível regional, adaptar as estratégias 
                                        para as realidades locais e auxiliar no desenvolvimento das empresas juniores em seus respectivos estados." bgColor="bg-azul" border="lg:rounded-tr-3xl"/>

                    <CardEstrutura titulo="Núcleos Regionais" desc="Os núcleos regionais atuam em uma área geográfica mais restrita dentro de um estado. 
                                        Eles servem como um ponto de apoio e articulação mais próximo às EJs de uma determinada região 
                                        ou de universidades específicas, facilitando a comunicação, a integração e o suporte direto." bgColor="bg-brVerde" border="lg:rounded-bl-3xl"/>


                    <motion.div whileHover={{ scale: 1.05 }} className="lg:flex items-center justify-center bg-azul p-3 hidden">
                        <img 
                            src={brasilLogo} 
                            alt="Brasil Junior Logo"
                            height="175px"
                            width="175px"
                        />
                    </motion.div>

                    <CardEstrutura titulo="Empresas Juniores" desc="Na base da estrutura estão as EJ's, que são as organizações sem fins lucrativos formadas e geridas 
                                        por alunos de graduação dentro das universidades. Elas prestam serviços e consultorias a clientes 
                                        reais (micro e pequenas empresas, por exemplo), proporcionando a vivência empresarial 
                                        prática e a formação de lideranças, que é a missão central do MEJ." bgColor="lg:bg-brVerde bg-azul" border="lg:rounded-br-3xl"/>
                </div>
            </div>

            <div className="flex flex-row items-center justify-between bg-brVerde lg:p-10 p-6">
                <div>
                    <h2 className="text-3xl font-bold text-white">
                        Sistema de Clusters
                    </h2>
                    <br />
                    <a className="text-white">
                        No Movimento Empresa Júnior (MEJ) brasileiro, os
                        clusters são níveis de classificação usados para medir a maturidade e o desempenho das Empresas Juniores (EJs). Eles funcionam como um sistema de categorização que norteia os esforços de desenvolvimento das EJs e da rede como um todo. 
                    </a>
                </div>
            </div>

            <Accordion type="multiple" className="lg:p-15 p-6">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl font-bold text-brVerde">Cluster 1 - Incubação</AccordionTrigger>
                    <AccordionContent className="text-lg">
                    EJs iniciando a jornada: estruturam processos básicos, validam projetos e aprendem a vender.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl font-bold text-brVerde">Cluster 2 - Operação</AccordionTrigger>
                    <AccordionContent className="text-lg">
                    EJs já funcionam, mas ainda de forma instável: melhoram processos, validam soluções e ganham ritmo comercial.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl font-bold text-brVerde">Cluster 3 - Crescimento</AccordionTrigger>
                    <AccordionContent className="text-lg">
                    EJs estruturadas: ampliam faturamento, profissionalizam vendas e evoluem soluções com foco no cliente.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl font-bold text-brVerde">Cluster 4 - Consolidação</AccordionTrigger>
                    <AccordionContent className="text-lg">
                    EJs maduras: buscam inovação nos projetos, mais previsibilidade comercial e agilidade operacional.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-2xl font-bold text-brVerde">Cluster 5 - Tração</AccordionTrigger>
                    <AccordionContent className="text-lg">
                    EJs referência: alto faturamento, inovação avançada, gestão estratégica robusta e time de alta performance.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="flex flex-row items-center justify-between lg:p-10 p-7 mt-4 mb-4 border-t-22 border-b-2 border-t-brVerde">
                <div>
                    <h2 className="text-3xl font-bold text-black">
                        Eventos do MEJ
                    </h2>
                    <br />
                    <a className="text-black">
                        Tem algo que deseje apresentar ao mundo das empresas juniors? Algo que vai revolucionar nosso mercado ou apenas uma confraternização?.
                    </a>
                </div>
            </div>            
            <div className="flex justify-center align-center pt-10 pb-10">                                    
                <div className="w-md  p-8 rounded-2xl shadow-lg bg-blue-200 shadow-brVerde text-center ">
                    
                    <p className="text-3xl font-bold text-gray-800 mb-3">
                        Apresente seu Evento
                    </p>    

                    <p className="text-gray-600 mb-8 text-base leading-relaxed">
                        Marque seu evento com nós, se junte aos empresarios da patria
                    </p>
                    <Link to='/agendar' 
                    className="lg:w-[30%] text-center self-center bg-brVerde hover:bg-green-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Quero marcar meu evento
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
