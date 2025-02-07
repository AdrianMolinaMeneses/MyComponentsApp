import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public menuItems: string[] = [
    'Formularios',
    'Graficas',
    'Carrusel',
    'Validaciones',
    'Imagenes',
  ];

  public colors: string[] = [
    '#00418D',
    'indianred',
    '#74698C',
    '#8FBBAF',
    '#6B7B8E',
  ];

  public currentBackgroundColor: string = '';
  public tooltip: string = 'facebook';

  ngOnInit(): void {
    this.currentBackgroundColor = this.colors[0];
  }

  public changeColor() {
    let index = this.colors.indexOf(this.currentBackgroundColor) + 1;

    this.currentBackgroundColor =
      this.colors.length - 1 < index ? this.colors[0] : this.colors[index];
  }

  goToSite(url: string): void {
    window.open(url, '_blank');
  }
}
