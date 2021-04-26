export const messageError = msg => {
    switch(msg){
        case 'INVALID_EMAIL':
            return 'Digite um email válido';
        case 'MISSING_PASSWORD':
            return 'A senha é obrigatória';
        case 'INVALID_PASSWORD':
            return 'Confira sua senha';
        case 'EMAIL_NOT_FOUND':
            return 'Email não encontrado';
    }
}
