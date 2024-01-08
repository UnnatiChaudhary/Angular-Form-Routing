import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DComponent } from './d/d.component';
import { FormsModule} from '@angular/forms';
import { route } from '../route';

@NgModule({
  declarations: [DComponent],
  imports: [
    CommonModule,
    FormsModule,
    route
  ],
  exports:[
    DComponent
  ]
})
export class SharedModule { }
