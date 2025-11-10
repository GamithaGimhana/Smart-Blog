import {Request, Response} from 'express'

export const savePost = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'Post created successfully' })
}

export const getAllPost = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'Post viewed successfully' })
}

export const getMyPost = async(req: Request, res: Response) => {
    res.status(200).json({ message: 'Get me from post controller' })
}