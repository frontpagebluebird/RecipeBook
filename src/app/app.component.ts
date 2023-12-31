import { Component } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';

  loadedFeature = 'recipe';
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

}
