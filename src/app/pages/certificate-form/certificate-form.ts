import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from '../../_components/secundary-button/secondary-button';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {

}
