import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secundary-button/secondary-button';
import { ItemCertified } from './_components/item-certified/item-certified';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificates } from "./pages/certificates/certificates";
import { CertificateForm } from "./pages/certificate-form/certificate-form";

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, PrimaryButton, SecondaryButton, ItemCertified, BaseUi, Certificates, CertificateForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gerador de certificado';
}
