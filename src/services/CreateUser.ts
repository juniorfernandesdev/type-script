/**
 * Para criar: name, email, password
 */

//  quando temos que definir um formato de um obj temos que criar outra interface

interface TechObject {
    title: string;
    experienc: Number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}
export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}