import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage implements OnInit {
  items: string[] = ['Datos Cliente', 'Datos Proceso', 'Datos Empresa', 'Datos instalación'];
  item: string;
  constructor(
      private router: Router,
    ) { }

  ngOnInit() {}

  itemSelected(item: string) {
    switch (item) {
      case this.items[0]: {
        console.log(item);
        this.router.navigate(['/add-datos-generales', {item}]);
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
back() {
  this.router.navigateByUrl('/');
}
}
