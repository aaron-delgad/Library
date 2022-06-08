import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-library',
  template: `
   <button class="button">Libreria-1</button>
  `,
  styles: [
    `
    .button {
        background-color: red;
        border: none;
        color: white;
    }
    `
  ]
})
export class LibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
