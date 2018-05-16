export class Pokemon {
    id: number;
    name: string;
    spriteUrl: string;
    
    constructor(_id: number, _name: string, _spriteUrl: string) {
        this.id = _id;
        this.name = _name;
        this.spriteUrl = _spriteUrl
    };
}