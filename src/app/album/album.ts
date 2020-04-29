import { Banda } from '../banda/banda';

export class Album {
    id: number;
    nome: string;
    ano: number;
    banda: Banda;
    estiloMusical: string;
    artistas: any[];
    musicas: any[];
}