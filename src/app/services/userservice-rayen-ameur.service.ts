import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceRayenAmeurService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create new user
  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  // Update user
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, userData);
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Get users by role
  getUsersByRole(role: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/role/${role}`);
  }

  // Get users by status
  getUsersByStatus(status: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/status/${status}`);
  }
}
