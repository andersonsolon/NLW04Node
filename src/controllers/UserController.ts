import {Request, Response} from "express";
import { getRepository } from "typeorm";
import {User} from "../models/User";

class UserController {
    async create (req: Request, res: Response){
        const { name, email } = req.body;
        
        const usersRepository = getRepository(User);

        const userAlreadyExistis = await usersRepository.findOne({ email});

        if(userAlreadyExistis) {
            return res.status(400).json({
                error: "User already exists!",
            })
        }

        const user = usersRepository.create({
            name, email
        })
        await usersRepository.save(user);

        return res.json(user);    
    }
}

export {UserController}