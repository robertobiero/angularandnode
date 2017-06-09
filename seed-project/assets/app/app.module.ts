import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import{MessageComponent} from "./messages/message.component";
import{MessageListComponent} from "./messages/message-list.component";
import{ErrorComponent} from "./error/error.component";
import{MessageInputComponent} from "./messages/message-input.component";
import{MessagesComponent} from "./messages/messages.component";
import{LogoutComponent} from "./auth/logout.component";
import{SignupComponent} from "./auth/signup.component";
import{AuthenticationComponent} from "./auth/authentication.component";
import {Tabs} from "./tabs/tabs.component";
import { RouterModule, Routes } from '@angular/router';





const appRoutes: Routes = [
{ path: '', component: AuthenticationComponent},
{path : 'crisis-center',component : MessageListComponent},
{ path: 'sign-up', component: SignupComponent }

];
@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        Tabs,
        MessageListComponent,
        ErrorComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        LogoutComponent,
        SignupComponent
    ],
    imports: [ RouterModule.forRoot(appRoutes),BrowserModule,FormsModule,ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}