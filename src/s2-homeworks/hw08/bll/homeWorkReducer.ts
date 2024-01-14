import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const statecopy = [...state]
            if (action.payload === 'up') {
                return statecopy.sort((a,b)=>a.name.localeCompare(b.name))
            } else {
                return statecopy.sort((a,b)=>b.name.localeCompare(a.name))
            }
             // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload)
            // need to fix
        }
        default:
            return state
    }
}
