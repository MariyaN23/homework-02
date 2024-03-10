export type initStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ThemeReducerActionType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            debugger
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export type ThemeReducerActionType = changeThemeIdACType

type changeThemeIdACType = {
    type: 'SET_THEME_ID'
    id: number
}
export const changeThemeId = (id: number): changeThemeIdACType => ({ type: 'SET_THEME_ID', id }) // fix any
