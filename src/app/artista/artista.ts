import { Paiz } from '../paiz/paiz';

export class Artista {
    id: number;
    nome: string;
    nascimento: string;
    genero: string;
    paizOrigem: Paiz;
    instrumento: any[];
}