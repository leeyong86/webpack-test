import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state= {
    count: 0
}

const mutations= {
    // mutation 的第一个参数是当前的 state
    // 你可以在函数里修改 state
    INCREMENT (state, amount) {
        state.count = state.count + amount
    }
}

export default new Vuex.Store({
    state, mutations
})
