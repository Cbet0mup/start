import { Component} from '@angular/core';
import { BerrySelectDataService } from "../../services/berry-select-data.service";
@Component({
  selector: 'app-info-card-berries',
  templateUrl: './info-card-berries.component.html',
  styleUrls: ['./info-card-berries.component.css']
})
export class InfoCardBerriesComponent{

  berrySelectInfo: any;

  constructor(private getName: BerrySelectDataService) {
    this.berrySelectInfo = getName.berrySelectInfo;
  }

  selectName() {
    this.getName.berrySelectName = this.berrySelectInfo.name;
  }
}
