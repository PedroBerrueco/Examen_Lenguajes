import { Component, OnInit } from '@angular/core';
import { ApiserService } from '../service/apiser.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit{

  data: any[] = [];

  constructor(private api: ApiserService) { }

  ngOnInit(): void {
    this.llamaApi();
  }

  llamaApi(){
    this.api.getApi().subscribe(response => {
      this.data = response.drinks;
      console.log(this.data);
    })
  }

}
