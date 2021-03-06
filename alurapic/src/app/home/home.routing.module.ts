import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../home/signin/signin.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignUpComponent } from '../home/signup/signup.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent ,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
            },
            {
                path: 'signup',
                component: SignUpComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

