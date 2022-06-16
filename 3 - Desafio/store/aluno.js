const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

export const incrementarTempo = () => ({type: INCREMENTAR_TEMPO});
export const reduzirTempo = () => ({type: REDUZIR_TEMPO});
export const modificarEmail = (payload) => ({type: MODIFICAR_EMAIL, payload});

const initialState = {
    nome: 'Nathália Urenha',
    email: 'naty.urenha@gmail.com',
    diasRestantes: 120,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENTAR_TEMPO:
            return {...state, diasRestantes: state.diasRestantes + 1};
        case REDUZIR_TEMPO:
            return {...state, diasRestantes: state.diasRestantes - 1};
        case MODIFICAR_EMAIL:
            return {...state, email: action.payload};
    }
};

export default reducer;
