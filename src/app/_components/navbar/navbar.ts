import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  // ngOnInit executa uma ação sempre que o componente inicar ou executar
  ngOnInit(): void {
    console.log('Meu componente navbar inicializou')
  }

}
