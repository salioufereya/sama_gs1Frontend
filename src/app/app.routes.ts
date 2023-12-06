import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnterEmailComponent } from './recup_password/enter-email/enter-email.component';
import { EnterNewPasswordComponent } from './recup_password/enter-new-password/enter-new-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'enter_email', component: EnterEmailComponent },
  { path: 'enter_new_password', component: EnterNewPasswordComponent },
  { path: 'sidebar', component: SidebarComponent },
];
