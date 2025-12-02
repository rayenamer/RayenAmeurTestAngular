import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Suggestion } from '../../../models/suggestion';
import { title } from 'process';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {
 addSuggestionForm!: FormGroup;
 suggestion: Suggestion = {
  id: 0,
  title: '',
  description: '',
  category: '',
  date: this.getTodayDate(),
  status: 'en_attente'
 };

 getTodayDate() {
  const today= new Date();
  return today.toISOString().split('T')[0];
 }

 categories: string[] = [
  'Infrastructure et bâtiments',
  'Technologie et services numériques',
  'Restauration et cafétéria',
  'Hygiène et environnement',
  'Transport et mobilité',
  'Activités et événements',
  'Sécurité',
  'Communication interne',
  'Accessibilité',
  'Autre'
  ];

 constructor(private router: Router) { }

 ngOnInit(): void {
  this.addSuggestionForm = new FormGroup({
    title: new FormControl(this.suggestion.title, [Validators.required, Validators.minLength(5),Validators.pattern("^[A-Z][a-zA-Z]*$")]),
    description: new FormControl(this.suggestion.description, [Validators.required, Validators.minLength(10)]),
    category: new FormControl(this.suggestion.category, Validators.required),
    /*date: new FormControl({value: this.suggestion.date, disabled: true}),
    status: new FormControl({value: this.suggestion.status, disabled: true})*/
    date: new FormControl(this.suggestion.date),
    status: new FormControl(this.suggestion.status)
  });
 }

  get title(){ return this.addSuggestionForm.get('title');  }
  get description(){ return this.addSuggestionForm.get('description');  }
  get category(){ return this.addSuggestionForm.get('category');  }
  get date(){ return this.addSuggestionForm.get('date');  }
  get status(){ return this.addSuggestionForm.get('status');  }

  submitSuggestion(){
    console.log(this.addSuggestionForm.value);
    //this.router.navigate(['/suggestions']);
    this.router.navigateByUrl('/suggestions');
  }
}
