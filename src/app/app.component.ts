import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MsrClient';
  name = 'HELLO';
  email = 'hello@email.com';
  number=123456789;
  bool = true;
  boolFlase=false;


  count = 10;
  speed = 100;
  emailAddress = 'address@email.com';
  selectorOne = 'app-root';
  query = 'select * from all';
}
