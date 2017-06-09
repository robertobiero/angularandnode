import{Routes} from "@angular/router";
import{SignupComponent} from "./signup.component";
import{LogoutComponent} from "./logout.component";

const AUTH_ROUTES : Routes = [
{path : 'signup', component: SignupComponent},
{path : 'logout', component: LogoutComponent}

]