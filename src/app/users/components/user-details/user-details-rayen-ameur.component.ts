import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceRayenAmeurService } from '../../../services/userservice-rayen-ameur.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserserviceRayenAmeurService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe(
        user => this.user = user,
        () => this.router.navigate(['/users'])
      );
    }
  }

  deleteUser() {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(this.user.id).subscribe(
        () => this.router.navigate(['/users'])
      );
    }
  }
}
