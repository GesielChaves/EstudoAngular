import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
@NgModule({
    declarations: [SignInComponent, SignUpComponent, HomeComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, VMessageModule, RouterModule]
})
export class HomeModule { }