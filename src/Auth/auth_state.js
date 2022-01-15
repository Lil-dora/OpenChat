let login_state = true;

export const IsLogin = () =>{
    return login_state
}

export const LogIn = () =>{
    login_state = true
}

export const LogOut = () =>{
    login_state = false
}