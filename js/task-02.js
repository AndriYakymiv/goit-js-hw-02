function checkPassword(password) {
        const ADMIN_PASSWORD = "jqueryismyjam";
        
    if (password === ADMIN_PASSWORD) {
        return "Welcome!";
    } 
    return "Access denied, wrong password!";
}