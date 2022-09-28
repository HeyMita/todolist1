import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../../app/providers/tasks.service"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor( private authService: TasksService) { }

  googleAuth(){
    this.authService.googleAuth();
  }
  ngOnInit(): void {
    
  }

}
