import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticDataSource } from '../model/datos-generales.model';
import { DatosCliente } from '../model/datos.model';
@Component({
  selector: 'app-add-datos-generales',
  templateUrl: './add-datos-generales.page.html',
  styleUrls: ['./add-datos-generales.page.scss'],
})
export class AddDatosGeneralesPage implements OnInit {
  item: string;
  items: string[] = ['Datos Cliente', 'Datos Proceso', 'Datos Empresa', 'Datos instalación'];
  questions: any;
  questionsView: string[];
  constructor(
    private activedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activedRouter.params.subscribe(data => this.item = data.item);
    this.handleQuestions(this.item);
  }

  handleQuestions(item: string): void {
      switch (item) {
      case this.items[0]: {
        this.questions = new DatosCliente();

        console.log(this.questions);
        break;
      }
      case this.items[1]: {
        console.log(item);
        break;
      }
      case this.items[2]: {
        console.log(item);
        break;
      }
      case this.items[3]: {
        console.log(item);
        break;
      }
    }
  }
}
