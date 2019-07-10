// Actions
export const ADD_EXPENSE = 'expenses/ADD_EXPENSE';
export const REMOVE_EXPENSE = 'expenses/REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'expenses/EDIT_EXPENSE';

// Action Creators
export const addExpense = (category, value) => ({ type: ADD_EXPENSE, category, value });
export const removeExpense = id => ({ type: REMOVE_EXPENSE, id });
export const editExpense = (id, update) => ({ type: EDIT_EXPENSE, update, id });

const initialState = [
    { id: 0, text: 'siema' }
];

export default function expensesDuck(state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    category: action.category,
                    value: action.value
                }
            ];

        case REMOVE_EXPENSE:
            return state.filter(todo => todo.id !== action.id);

        case EDIT_EXPENSE:
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, ...action.update }
                    : todo
            );

        default:
            return state
    }
}
