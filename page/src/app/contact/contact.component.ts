import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { error } from 'protractor';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data: FormGroup;
  constructor(private builder: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.builder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }


  sendEmail(): void{
    this.dataService.sendEmail(this.data.value).subscribe(response => {
      location.href = 'https://mailthis.to/confirm';
      console.log(response);
    }, error => {
      console.warn(error.responseText);
      console.log({ error });
    });
  }
}
