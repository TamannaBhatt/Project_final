import { Router } from '@angular/router';
import { User, Profile } from './user.model';
export declare class RegistrationComponent {
    private router;
    user: User;
    profile: Profile;
    constructor(router: Router);
    submit(userId: number): void;
}
