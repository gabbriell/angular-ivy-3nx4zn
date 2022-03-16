import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Distrito } from './distrito';

@Injectable({
  providedIn: 'root',
})
export class tamanhoDistritoService {
  OTamanhoDoDistritoEh(distrito: Distrito): string {
    if (distrito.area >= 110) return 'Grande';
    else return 'Pequeno';
  } 
}
