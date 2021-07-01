import { Component } from '@angular/core';

@Component({
  selector: 'login-pane',
  templateUrl: './login-pane.component.html',
  styleUrls: ['./login-pane.component.css']
})
export class loginPaneComponent {
  share() {
    alert('loginpanel');
  }
}
