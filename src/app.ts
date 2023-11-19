import express from 'express'
import noteRoutes from './routes/noteRoutes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger-output.json'
import healthRoutes from './routes/healthRoutes'

const app = express()
app.use(express.json())

const port = 3000

/* Middlewares */
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

/* Routes */
app.use('/api/notes', noteRoutes)
app.use('/healthcheck', healthRoutes)

app.get('/', function (req, res) {
  res.send('Notes API running on AWS Beanstalk!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
