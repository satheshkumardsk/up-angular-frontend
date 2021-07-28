import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {

  user!: User;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.user().subscribe(

    (responseData:any) =>{this.user=responseData.data;},

    error => {
      console.log(error);
      //this.router.navigate(['/login'])
    }
    );
  }

}
