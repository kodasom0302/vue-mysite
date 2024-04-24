import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
export default createStore({
    state() {
        return {
            authUser: null,
            token: null
        };
    },
    mutations: {
        setAuthUser(state, payload){
            state.authUser = payload;
        },
        setToken(state, payload){
            state.token = payload;
        },
        setAuthName(state, payload){
            state.authUser.name = payload;
        }
    },
    plugins: [
        createPersistedState({
            paths: ['authUser', 'token']
        })
    ]
});