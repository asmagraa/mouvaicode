import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { myservice } from '../services/service.service';
import { avi } from '../model/avis';
@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {
  myForm!: FormGroup;

    constructor(private myservice:myservice,private router:Router,private fb: FormBuilder) { }
    ngOnInit(): void {
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        comment: ['', Validators.required]
      });
    }
  
    submitForm(): void {
      // Handle form submission logic here
      // Access form values using this.myForm.value
      console.log(this.myForm.value);
    }
}
