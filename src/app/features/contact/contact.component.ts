import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  submitted = signal(false);
  submitting = signal(false);

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  subjects = [
    'General Enquiry',
    'Audit Report Request',
    'Media & Press',
    'Feedback on Published Report',
    'Partnership / Training',
    'Other',
  ];

  onSubmit() {
    this.submitting.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 1000);
  }

  reset() {
    this.form = { name: '', email: '', phone: '', subject: '', message: '' };
    this.submitted.set(false);
  }
}
