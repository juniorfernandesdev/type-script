import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// interfaces

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'junio@gmail.com',
        password: 'senha',
        techs: [
            'Node',
            'React',
            { title: 'Java Script', experienc: 11 },
            { title: 'outro@oi.com.br', experienc: 982 }
        ],
    });

    return res.json({ message: 'Hello World' });
}