import { Component } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  templateUrl: './contact.html',
})
export class Contact {}
