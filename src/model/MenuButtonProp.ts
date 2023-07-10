export class MenuButtonProp{
    id: string;
    icon: string|undefined;
    link: string;
    label?: string | undefined;

    constructor(icon: string, link:string,id: string, label?: string){
        this.icon = icon;
        this.link = link;
        this.id = id;
        this.label = label;
    }
}