import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  showHeader: boolean = true;
  isSignUpComponent: boolean = false ;
  constructor(private router: Router) {
    router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/signUp' ||  val.url == '/signIn') {
          this.showHeader = false;
          this.isSignUpComponent = true;
        }
        else{
          this.showHeader = true;
          this.isSignUpComponent = false;
        }
      }
    });
  }


}
