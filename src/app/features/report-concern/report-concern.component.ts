import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ConcernForm {
  name: string;
  email: string;
  phone: string;
  anonymous: boolean;
  entity: string;
  concernType: string;
  description: string;
  amount: string;
  attachmentNote: string;
}

@Component({
  selector: 'app-report-concern',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './report-concern.component.html',
  styleUrl: './report-concern.component.scss',
})
export class ReportConcernComponent {
  submitted = signal(false);
  submitting = signal(false);

  form: ConcernForm = {
    name: '',
    email: '',
    phone: '',
    anonymous: false,
    entity: '',
    concernType: '',
    description: '',
    amount: '',
    attachmentNote: '',
  };

  concernTypes = [
    'Misuse or Misappropriation of Public Funds',
    'Procurement Irregularities / Fraud',
    'Ghost Workers / Payroll Fraud',
    'Corruption or Bribery',
    'Wasteful or Extravagant Expenditure',
    'Non-compliance with Financial Regulations',
    'Abuse of Public Assets',
    'Other Financial Misconduct',
  ];

  ministries = [
    'Ministry of Finance and Economic Development',
    'Ministry of Health and Wellness',
    'Ministry of Education',
    'Ministry of Public Infrastructure',
    'Ministry of Land Transport and Light Rail',
    'Ministry of Housing and Land Use Planning',
    'Ministry of Social Integration and Economic Empowerment',
    'Ministry of Tourism',
    'Ministry of Agro-Industry and Food Security',
    'Ministry of Environment',
    'Ministry of Labour, Human Resource Development and Training',
    'Ministry of Youth Empowerment, Sports and Recreation',
    'Local Government (City / District / Town Council)',
    'Statutory Body / Parastatal',
    'Other / Unknown',
  ];

  onSubmit() {
    this.submitting.set(true);
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 1200);
  }

  reset() {
    this.form = {
      name: '',
      email: '',
      phone: '',
      anonymous: false,
      entity: '',
      concernType: '',
      description: '',
      amount: '',
      attachmentNote: '',
    };
    this.submitted.set(false);
  }
}
