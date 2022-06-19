import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HeaderComponent } from './header/header.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { QueetsComponent } from './components/queets/queets.component';
import { NewQueetComponent } from './components/new-queet/new-queet.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterComponent } from './components/register/register.component';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FollowerComponent } from './components/follower/follower.component';
import { environment } from 'src/environments/environment';
import { FollowingComponent } from './components/following/following.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

// TODO: https://auth0.com/blog/complete-guide-to-angular-user-authentication/#Retrieving-User-Information
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    LoginButtonComponent,
    ProfileComponent,
    HomeComponent,
    QueetsComponent,
    NewQueetComponent,
    RegisterComponent,
    EditProfileComponent,
    FollowerComponent,
    FollowingComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatCheckboxModule,
    MatStepperModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    AuthModule.forRoot({
      domain: environment.AUTH0_DOMAIN,
      clientId: environment.AUTH0_CLIENTID,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
