import { Router } from "@angular/router"
import { AuthService } from "./auth.service"
import { inject } from "@angular/core"

export const canActivateAuth = () => {
    const isLoggedIn = inject(AuthService).isAuth

    if (isLoggedIn) {
        return true
    }

    return inject(Router).createUrlTree(['/login'])
}