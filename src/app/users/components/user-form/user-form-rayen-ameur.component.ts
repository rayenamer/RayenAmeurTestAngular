import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceRayenAmeurService } from '../../../services/userservice-rayen-ameur.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  isEdit = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserserviceRayenAmeurService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['user', Validators.required],
      status: ['active', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.userId = +id;
        this.loadUser(this.userId);
      }
    });
  }

  loadUser(id: number) {
    this.userService.getUserById(id).subscribe(user => {
      this.userForm.patchValue(user);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      
      if (this.isEdit && this.userId) {
        this.userService.updateUser(this.userId, userData).subscribe(() => {
          this.router.navigate(['/users']);
        });
      } else {
        this.userService.createUser(userData).subscribe(() => {
          this.router.navigate(['/users']);
        });
      }
    }
  }
}
