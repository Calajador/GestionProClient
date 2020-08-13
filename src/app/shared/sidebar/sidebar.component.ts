import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public identity;

  constructor(private _auth: AuthService) { 
    this.identity = this._auth.getIdentity();
    
  }

  ngOnInit() {
  }

  logOut() {
    this._auth.logOutUser();
  }

}
