import { Hono } from 'hono'

const app = new Hono()

app.post('/',async (c) => {
  const body = await c.req.json()
  const messages =[{
    role: 'system',
    content:"your name is llama boy."
},
  {
    role: 'user',
    content:body.prompt
  }]
  const result = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct", {messages})
  return c.json({result})
})

export default app
