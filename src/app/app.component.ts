import { Component, VERSION } from '@angular/core';
import { Distrito } from './model/distrito';
import { DistritoService } from './model/distrito.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  distritoSelecionado: Distrito;

  distritos: Distrito[] = [];

  constructor(private distritoService: DistritoService) {}

  ngOnInit() {
    this.distritos = this.distritoService.getDistritos();
  }

  clicouNoDistrito(distrito: Distrito) {
    this.distritoSelecionado = distrito;
  }
}
