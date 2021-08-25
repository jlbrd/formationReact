import { combineReducers, createStore } from 'redux'
import REST_SRV, { RESSOURCES } from '../config/config'
export const eActions = Object.freeze({
    INIT: 'INIT',
    IMAGES: 'IMAGES',
    REPLACE_IMAGES: 'REPLACE_IMAGES',
    UPDATE_CURRENT: 'UPDATE_CURRENT',
    REPLACE_MEMES: 'REPLACE_MEMES',
    SAVE_MEME: 'SAVE_MEME',
    ADD_MEME: 'ADD_MEME',
    UPDATE_MEME: 'UPDATE_MEME',
    RESET_CURRENT: 'RESET_CURRENT',
});

export const initialRessourceState = {
    memes: [],
    images: [],
}

export const initialState = {
    text: "nouveau texte",
    x: 200,
    y: 200,
    imageId: -1,
    color: "#ACACAC",
    fontsize: 20,
    underline: false,
    italic: false,
    fontWeight: 200,
}

function ressourcesReducer(state = initialRessourceState, action) {
    const type = action.type.includes('@@redux/PROBE_UNKNOWN_ACTION') ? eActions.INIT : action.type;
    //console.log('ressourcesReducer', action.value);
    switch (type) {
        case eActions.INIT:
            fetch(REST_SRV + RESSOURCES.images)
                .then(f => {
                    let json = f.json()
                    console.log('images', json);
                    return json;
                })
                .then(
                    images => {
                        store.dispatch({ type: eActions.REPLACE_IMAGES, values: images });
                    });
            fetch(REST_SRV + RESSOURCES.memes)
                .then(f => {
                    let json = f.json()
                    console.log('memes', json);
                    return json;
                })
                .then(
                    memes => {
                        store.dispatch({ type: eActions.REPLACE_MEMES, values: memes });
                    });
            return state;
        case eActions.REPLACE_IMAGES: return { ...state, images: action.values }
        case eActions.REPLACE_MEMES: return { ...state, memes: action.values }
        case eActions.ADD_MEME:
            let position = state.memes.findIndex(e => e.id === action.value.id);
            if (position === -1) {
                return { ...state, memes: [...state.memes, action.value] }
            } else {
                return {
                    ...state, memes:
                        [
                            ...state.memes.slice(0, position),
                            action.value,
                            ...state.memes.slice(position),
                        ]
                }
            }
        default: return state;
    }
}

const currentReducer = (state = initialState, action) => {
    switch (action.type) {
        case eActions.UPDATE_CURRENT: return { ...action.value }
        case eActions.SAVE_MEME:
            fetch(REST_SRV + RESSOURCES.memes + (state.id ? "/" + state.id : ""), {
                method: (state.id ? "PUT" : "POST"),
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(state),
            }).then(f => {
                return f.json()
            })
                .then(o => {
                    store.dispatch({ type: eActions.UPDATE_CURRENT, value: o })
                    store.dispatch({ type: eActions.ADD_MEME, value: o })
                })
            return state;
        default: return state;
    }
}

const store = createStore(combineReducers({ editor: currentReducer, ressources: ressourcesReducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
    let state = store.getState();
    console.log('store', state);
});

//store.dispatch({ type: action.REPLACE_IMAGES, values: [{ id: 0 }, { id: 1 }] });
//store.dispatch({ type: action.REPLACE_IMAGES, values: [{ id: 5 }, { id: 10 }] });

export default store;