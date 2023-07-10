export class ContactForm{
    name: string | undefined;
    email: string | undefined;
    message: string | undefined;

    constructor(name?: string, email?: string, message?: string){
        this.name = name;
        this.email = email;
        this.message = message;
    }
}