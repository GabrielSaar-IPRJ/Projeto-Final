import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma.ts";
import { z } from 'zod'

const eventBodySchema = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number().positive(),
    location: z.string(),
    date: z.iso.date()
})

const eventParamsSchema = z.object({
    id: z.string()
})

export const eventsController: FastifyPluginAsyncZod = async app => {
    
    app.get('/events', async (request, reply) => {
        try {
            const eventos = await prisma.event.findMany()
            reply.status(200).send(eventos)
        } catch (error) {
            const debugMessage = error instanceof Error ? error.message : String(error)
            return reply.status(500).send({
                        message: "Nenhum evento encontrado",
                        // O 'error.message' contém o texto explicativo do erro
                        debug_error: debugMessage, 
                        // Opcional: envia o erro completo para você inspecionar
                        full_error: error
            })
        }
    });
    app.post('/event', async(request,reply)=>{
        const data = eventBodySchema.parse(request.body)
        try {
            const novoEvento = await prisma.event.create({
                data:{
                    title: data.title,
                    location: data.location,
                    price: data.price,
                    date: new Date(data.date),
                    description: data.description
                }
            })
            reply.status(200).send(novoEvento)
        } catch (error) {
            reply.status(500).send({error:"Erro ao adicionar evento"})
        }
    })
    app.put("/event/:id",async(request,reply)=>{
        const params = eventParamsSchema.parse(request.params)
        const data = eventBodySchema.parse(request.body)

        const eventid = parseInt(params.id)

        try {
            const updateEvento = await prisma.event.update({
                where: {id: eventid},
                data:{
                    title: data.title,
                    location: data.location,
                    price: data.price,
                    date: new Date(data.date),
                    description: data.description
                }
            })
    
            reply.status(200).send({updateEvento})
        } catch (error) {
            reply.status(500).send({error: "Erro ao atualizar evento"})
        }
    
    }) 
    app.delete("/event/:id", async(request,reply)=>{
        const param = eventParamsSchema.parse(request.params)
        const eventid = parseInt(param.id)
    
        try {
             await prisma.event.delete({
                where: {id: eventid}
             })
            reply.status(200).send({mensage:"Evento excluida corretamente"})
        } catch (error) {
            reply.status(500).send({error: "Erro ao remover Evento"})
        }
    })
       
}
