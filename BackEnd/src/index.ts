import express from "express";
import { z } from "zod"
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

const userSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters').nonempty(),
    password: z.string().min(6, 'Password must be at least 6 characters').nonempty()
})
const todoSchema = z.object({
    title:z.string().nonempty(),
    description:z.string().nonempty(),
    Done:z.boolean().default(false),
})

//@ts-ignore
app.post("/user", async (req, res) => {
    const result = userSchema.parse(req.body)
    if (!result) {
        return res.status(400).json({ error: "Invalid data" })
    }
    else {
        const user = await prisma.user.create({
            data: {
                username: result.username,
                password: result.password
            },
        });
        res.json(user);
    }
});
//@ts-ignore
app.post("/todo/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
   const result = todoSchema.safeParse(req.body)
   if(!result.success){
    return res.status(400).json({ error: "Invalid data" })
   }
   else{
       const todo = await prisma.todo.create({
           data: {
               title:result.data.title,
               description:result.data.description,
               Done: result.data.Done,
               userId: Number(id)
           }
       });
       res.json(todo);
       
   }
})

app.get("/todo/:id", async (req, res) => {
    const id = req.params.id
    const todo = await prisma.todo.findMany({
        where: {
            userId: Number(id)
        }
    });
    res.json(todo);
})

app.get("/user/:id", async (req, res) => {
    const id = req.params.id
    const user = await prisma.user.findUnique({
        where: {
            Id: Number(id)
        }
    });
    res.json(user);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});