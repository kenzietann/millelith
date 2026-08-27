import { Component } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { Proof } from './components/proof/proof';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Process } from './components/process/process';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Proof, Services, About, Process, Contact, Footer],
  templateUrl: './app.html',
})
export class App {}
