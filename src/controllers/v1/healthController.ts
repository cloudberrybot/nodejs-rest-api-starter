import { type Request, type Response } from 'express'

export const checkHealth = async (req: Request, res: Response): Promise<void> => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  }
  try {
    res.send(healthcheck)
  } catch (error) {
    healthcheck.message = error as string
    res.status(503).send()
  }
}
