import { Component, OnInit } from '@angular/core';

declare var name: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  
  ngOnInit(): void {
    new name();
  }
  
  title = 'app-js';
}