import { type Request, type Response } from 'express'
import { PrismaClient } from '../../generated/client'

const prisma = new PrismaClient()

export const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await prisma.notes.findMany({
      where: { published: true },
      include: { author: true }
    })
    res.json(notes)
  } catch (err) {
    console.error(err)
  }
}

export const createNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, authorEmail } = req.body
    const result = await prisma.notes.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } }
      }
    })
    res.json(result)
  } catch (err) {
    console.error(err)
  }
}

export const getNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const notes = await prisma.notes.findUnique({
      where: { id: Number(id) }
    })

    res.json(notes)
  } catch (err) {
    console.error(err)
  }
}

export const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const post = await prisma.notes.update({
      where: { id: Number(id) },
      data: { published: true }
    })
    res.json(post)
  } catch (err) {
    console.error(err)
  }
}

export const deleteNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const post = await prisma.notes.delete({
      where: {
        id: Number(id)
      }
    })
    res.json(post)
  } catch (err) {
    console.error(err)
  }
}
