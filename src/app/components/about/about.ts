import { Component } from '@angular/core';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [Reveal],
  templateUrl: './about.html',
})
export class About {}
