// login.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase
  ) {}

  async login(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );

      // You can perform additional actions after successful login
      console.log('User logged in:', userCredential.user);

    } catch (error) {
      console.error('Login failed:', error);
    }
  }
}
