import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Distrito } from './distrito';
import { tamanhoDistritoService } from './tamanho-distrito.service';

@Injectable({
  providedIn: 'root',
})
export class DistritoService {
  private distritos: Distrito[] = [
    {
      numeroDistrito: 'DL-01',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Rua José Figueiredo, 34, Centro - 24030-055',
      diretoria: 'DOP 1 - Mattos',
      coordenador: 'Sr. Ricardo Lúcio',
      chefeDeDistrito: 'Sr. Wayne',
      auxiliarAdministrativo: 'Sra. Elaine',
      area: 45,
      bairrosAtendidos:
        'Centro, Ponta D Areia, Bairro de Fátima, São Lourenço (Parte), Morro do Estado',
    },
    {
      numeroDistrito: 'DL-02',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Travessa Mululo da Veiga, 93, Barreto - 24110-235',
      diretoria: 'DOP 1 - Mattos',
      coordenador: 'Sr. Roberto',
      chefeDeDistrito: 'Sr. Sérgio',
      auxiliarAdministrativo: 'Sr. Oderlei',
      area: 60,
      bairrosAtendidos:
        'Barreto, Ilha da Conceição, Engenhoca, Tenente Jardim, Santana',
    },
    {
      numeroDistrito: 'DL-03',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco:
        'Alameda São Boaventura, 770 (dentro do Horto Botânico), Fonseca - 24130-001',
      diretoria: 'DOP 1 - Quintão',
      coordenador: 'Sr. Antonio Luiz (Baiaco)',
      chefeDeDistrito: 'Sr. Marcelo Nunes',
      auxiliarAdministrativo: 'Sra. Aglaice',
      area: 75,
      bairrosAtendidos: 'Fonseca, Cubango (Parte), Viçoso Jardim',
    },
    {
      numeroDistrito: 'DL-04',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Rua Jornalista Irineu Marinho, 466, Icaraí - 24230-126',
      diretoria: 'DOP 1 - Mattos',
      coordenador: 'Sr. Caparica',
      chefeDeDistrito: ' Sr. Paulo Soares (Paulinho)',
      auxiliarAdministrativo: 'Sra. Rosane',
      area: 30,
      bairrosAtendidos: 'Icaraí',
    },
    {
      numeroDistrito: 'DL-05',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Avenida Presidente Roosevelt, 2, São Francisco - 24360-066',
      diretoria: 'DOP 1 - Mattos',
      coordenador: 'Sr. Carlinhos',
      chefeDeDistrito: ' Sr. Jorginho',
      auxiliarAdministrativo: 'Sra. Anaelise',
      area: 90,
      bairrosAtendidos: 'São Francisco, Jurujuba, Charitas, Cachoeira (Parte)',
    },
    {
      numeroDistrito: 'DL-06',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco:
        'Rua Américo Oberlaender, 581 (largo do Marrão), Santa Rosa - 24240-630',
      diretoria: 'DOP 1 - Mattos',
      coordenador: ' Sr. Walmir Martins',
      chefeDeDistrito: 'Sr. Elano',
      auxiliarAdministrativo: ' Sr. Aldair',
      area: 200,
      bairrosAtendidos:
        'Santa Rosa, Cubango (Parte), Vital Brasil, Viradouro, Pé Pequeno',
    },
    {
      numeroDistrito: 'DL-07',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Rua Leonor da Glória, S/Nº, Pendotiba - 24315-410',
      diretoria: 'DOP 2 - Sr. Marco Antonio',
      coordenador: 'Sr. Carlos Otávio',
      chefeDeDistrito: 'Sr. Reinaldo',
      auxiliarAdministrativo: 'Sr. Braz / Sra. Mônica',
      area: 120,
      bairrosAtendidos:
        'Largo da Batalha, Maceio, Sapê, Ititioca (parte), Badu, Cantagalo (Parte), Cachoeira (Parte)',
    },
    {
      numeroDistrito: 'DL-08',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Rua Pastor José Gomes de Souza, 688A, Caramujo - 24140-390',
      diretoria: 'DOP 2 - Sr. Marco Antonio',
      coordenador: ' Sr. Leonardo Torres',
      chefeDeDistrito: 'Sr. Rogério',
      auxiliarAdministrativo: 'Sr. Rinaldo',
      area: 95,
      bairrosAtendidos: 'Caramujo, Baldeadpr, Santa Bárbara, Ititioca',
    },
    {
      numeroDistrito: 'DL-09',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco:
        'Avenida Raul de Oliveira Rodrigues (Antiga Avenida 7, Quadra 172 - Lot. Cafub´), S/Nº, Piratininga - 24350-630',
      diretoria: 'DOP 1 - Quintão',
      coordenador: 'Sr. Antonio Luiz (Baiaco)',
      chefeDeDistrito: 'Sr. Marcelo Nunes',
      auxiliarAdministrativo: 'Sra. Aglaice',
      area: 250,
      bairrosAtendidos:
        'Piratininga, Camboinhas, Cafubá, Jacaré, Cantagalo(Parte), Engenho do Mato(Parte)',
    },
    {
      numeroDistrito: 'DL-10',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Estrada Velha de Maricá, 4644, Rio do Ouro - 24330-000',
      diretoria: 'DOP 2 - Sr. Marco Antonio',
      coordenador: ' Sr. Antonio Quintão',
      chefeDeDistrito: 'Sr. Marcos (Marcão)',
      auxiliarAdministrativo: 'Sr. Pedro',
      area: 105,
      bairrosAtendidos: '',
    },
    {
      numeroDistrito: 'DL-11',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco:
        ' Rua O, S/Nº (Campo Belo - Ao lado da estação de esgoto), Itaipú - 24346-000',
      diretoria: 'DOP 2 - Sr. Marco Antonio',
      coordenador: 'Sra. Daiane Stein',
      chefeDeDistrito: 'Sr. Fernando',
      auxiliarAdministrativo: 'Sr. Rogério',
      area: 60,
      bairrosAtendidos: 'Itaipú, Itacoatiara, Engenho do Mato (Parte)',
    },
    {
      numeroDistrito: 'DL-12',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco:
        'Rua Doutor Luiz Felipe de Moraes Lamego, 490, Santa Bárbara - 24141-420',
      diretoria: 'DOP 2 - Sr. Marco Antonio',
      coordenador: ' Sr. Carlos Eduardo Foly (Dado)',
      chefeDeDistrito: 'Sr. Julio',
      auxiliarAdministrativo: 'Sr. Samuel',
      area: 165,
      bairrosAtendidos:
        'Tenente Jardim (Parte), Fonseca, Baldeador, Santa Bárbara, sape, Maria Paula',
    },
    {
      numeroDistrito: 'DL-14',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Rua Alexandre Moura, 60 (Gragoatá), São Domingos - 24210-200',
      diretoria: 'DOP 1 - Mattos',
      coordenador: 'Sr. Caparica',
      chefeDeDistrito: 'Sr. Barão / Sr. Marcio',
      auxiliarAdministrativo: 'Sra. Cristiane',
      area: 38,
      bairrosAtendidos: 'Ingá, Boa Viagem, Gragoatá, São Domingos',
    },
    {
      numeroDistrito: 'DL-15',
      imagem: 'https://cdn-icons-png.flaticon.com/512/25/25903.png',
      endereco: 'Rua Alexandre Moura, 60 (Gragoatá), São Domingos - 24210-200',
      diretoria: 'DOP 1 - Mattos',
      coordenador: 'Sr. Caparica',
      chefeDeDistrito: 'Sr. Barão / Sr. Marcio',
      auxiliarAdministrativo: 'Sra. Cristiane',
      area: 38,
      bairrosAtendidos: 'Ingá, Boa Viagem, Gragoatá, São Domingos',
    },
  ];
  constructor(private tamanhoDistritoService: tamanhoDistritoService) {}
  getDistritos(): Distrito[] {
    this.distritos = this.distritos.map((distrito) => {
      distrito.tamanho =
        this.tamanhoDistritoService.OTamanhoDoDistritoEh(distrito);

      return distrito;
    });
    return this.distritos;
  }
}
