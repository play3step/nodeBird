export const state = () => ({
    me: null,
    followerList: [],
    followingList: [],
});

export const mutations = {  /*동기 작업*/
    setMe(state, payload) {  /*회원 가입*/
        state.me = payload;
    },
    changeNickname(state, payload){
        state.me.nickname = payload.nickname;
    }
};


export const actions = {    /*비동기 작업*/
    signUp({ commit, state }, payload) {
        //서버에 회원가입 요청을 보내는 부분
        commit('setMe', payload)
    },
    logIn({ commit }, payload) {
        commit('setMe', payload)

    },
    logOut({ commit }, payload) {
        commit('setMe', null)
    },
    changeNickname({commit}, payload){
        commit('changeNickname', payload);
    }
};