import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  ngOnInit(): void{

    //this.setupMenuClose();
    this.setupMenuToggle();
  }
  public setupMenuToggle(): void {
    const menuContainer = document.querySelector('.menu_container');
    if (menuContainer) {
      menuContainer.classList.toggle('active');
      menuContainer.classList.toggle('menu_container_move');
    }
  }
}
