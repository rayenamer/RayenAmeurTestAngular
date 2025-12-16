import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceRayenAmeurService } from '../../../services/userservice-rayen-ameur.service';

@Component({
  selector: 'app-user-role-rayen-ameur',
  standalone: false,
  templateUrl: './user-role-rayen-ameur.component.html',
  styleUrls: ['./user-role-rayen-ameur.component.css']
})
export class UserRoleRayenAmeurComponent {
  role: string = '';
  users: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserserviceRayenAmeurService
  ) {}
  
  ngOnInit() {
    this.route.params.subscribe((params: { [x: string]: string; }) => {
      this.role = params['role'];
      this.loadUsersByRole();
    });
  }
  
  loadUsersByRole() {
    if (this.role) {
      this.userService.getUsersByRole(this.role).subscribe((users: any[]) => {
        this.users = users;
      });
    }
  }
}
