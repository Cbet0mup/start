import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {DataService} from "../../services/data.service";
import {BerryModel} from "../../models/berry.model";
import {InfoCardBerriesComponent} from "../info-card-berries/info-card-berries.component";
import { MatDialog } from "@angular/material/dialog";
import { BerrySelectDataService } from "../../services/berry-select-data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  berries: BerryModel[] = []; //общий
  berry: any[] = [];          //частный
  berrySelectInfo: any;
  constructor(private dataService: DataService, public dialog: MatDialog, private serviceSelectInfo: BerrySelectDataService) {
  }

  ngOnInit(): void {
    this.dataService.getBerries()                 //общий запрос
      .subscribe((response: any) => {
        this.berries = response.results;
        this.berries.forEach((res) => {
           this.dataService.getMoreData(res.url)      //частный запрос
             .subscribe(response => {
               this.berry.push(response)
             })
        })
      })
  }
// получаем инфу выбранного элемента
  getBerryInfo(name: string) {
    this.berry.forEach( x => {
      if (x.name === name) {
        this.berrySelectInfo = x;
      }
    })
    this.serviceSelectInfo.berrySelectInfo = this.berrySelectInfo;
  }

//открыть диалог!!111
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(InfoCardBerriesComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  getSelectName(): any{
    return this.serviceSelectInfo.berrySelectName;
  }
}
