import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../public.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      password_confirm:''
          })
  }

  submit(){
    this.auth.register(this.form.getRawValue()).subscribe(data =>console.log(data));
      }

}
