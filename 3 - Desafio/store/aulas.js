const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const initialState = [
    {
        id: 1,
        nome: 'Desenvolvimento de Aplicações Web',
        completa: true
    },
    {
        id: 2,
        nome: 'Desenvolvimento de Aplicações Mobile',
        completa: false
    },
    {
        id: 3,
        nome: 'Desenvolvimento de Aplicações Desktop',
        completa: false
    },
];



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETAR_AULA:
            return state.map(aula => aula.id === action.payload ? { ...aula, completa: true } :{ ...aula, completa: false });
        case COMPLETAR_CURSO:
            return state.map(aula => ({ ...aula, completa: true }));
        case RESETAR_CURSO:
            return state.map(aula => ({ ...aula, completa: false }));
    }
};


export default reducer;