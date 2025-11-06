import { Request, Response, NextFunction } from "express"
import { Role } from "../models/user.model"
import { AuthRequest } from "./auth.middlewares"

export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: No user found" })
    }

    if (!req.user.roles?.includes(Role.ADMIN)) {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
    
    next();
  } catch (err: any) {
    res.status(500).json({ message: err?.message })
  }
}