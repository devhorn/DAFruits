import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})

export class FruitlistComponent {
  howItworks = 'amazing';
  fontColorGood = 'green'
  fontColorBad = 'red'
  fruitlistdata = inject(FruitlistdataService)

  

 addComment(comment:string, index:number){
  this.fruitlistdata.addCommentToFruit(comment, index)
}

}
