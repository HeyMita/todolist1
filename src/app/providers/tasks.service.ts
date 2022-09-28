import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public usuario: any = {};

  constructor(public auth: AngularFireAuth, private router: Router) { }
    
  googleAuth(){
      return this.authLogin(new GoogleAuthProvider())
    }
    authLogin(provider: any){
      return this.auth.signInWithPopup(provider).then(result => {
        console.log('success');
      }).catch(console.error);
    }
    getStateUser(){
      return this.auth.authState;

    }
    
}

  
