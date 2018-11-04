import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
    signupForm: FormGroup;
    @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;
    constructor(private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
            userName: ['',
                [Validators.required,
                    lowerCaseValidator,
                Validators.minLength(2),
                Validators.maxLength(30)],
                this.userNotTakenValidatorService.checkUserNameTaken()],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
        });

        this.platformDetectorService.isPlatformBrowser() && this.inputEmail.nativeElement.focus();
    }

    signUp() {
        const newUser = this.signupForm.getRawValue() as NewUser;

        this.signUpService
            .sigUp(newUser)
            .subscribe(() =>
                this.router.navigate(['']),
                err => console.log(err)
            );
    }
}