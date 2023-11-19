import { type Request, type Response } from 'express';
export declare const getNotes: (req: Request, res: Response) => Promise<void>;
export declare const createNote: (req: Request, res: Response) => Promise<void>;
export declare const getNote: (req: Request, res: Response) => Promise<void>;
export declare const updateNote: (req: Request, res: Response) => Promise<void>;
export declare const deleteNote: (req: Request, res: Response) => Promise<void>;
