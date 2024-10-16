import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./base/header/header.component";
import { MainComponent } from './base/main/main.component';
import { FooterComponent } from './base/footer/footer.component';
import { LoaderComponent } from '../components-utils/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent,FooterComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
