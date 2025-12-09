import fastify from 'fastify';
import { eventsController } from "./routes/eventsController.ts";
import cors from '@fastify/cors';
const app = fastify();

async function register() {
    await app.register(cors, { origin: "http://localhost:5173", methods: ['GET', 'POST', 'PUT', 'DELETE'] });
}

register()

app.register(eventsController)

app.get("/uerj", () => {
    return { message: "Hello, UERJ!" };
});

app.listen({ port: 3000 }, () => {
    console.log(`Server running at on http://localhost:3000`);
});
