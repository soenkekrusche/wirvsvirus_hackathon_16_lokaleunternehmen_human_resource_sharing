import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {CompanyProfile, UserProfile} from '../types';
import { SAMPLE_USER_PROFILE } from './mocks';

@Injectable({
  providedIn: 'root'
})
export class UserServiceMock {
  public getProfile(userId: string): Observable<UserProfile> {
    console.log(`Get profile for user with id '${userId}'.`);
    console.log(`Get profile for user with id '${userId}'.`);
    return of(SAMPLE_USER_PROFILE);
  }
}
