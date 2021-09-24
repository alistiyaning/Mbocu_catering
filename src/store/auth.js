//auth.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import router from "../router/index";
import auth from './auth';

Vue.use(Vuex);

export default {
  state: {
    user: null,
    isLoggedIn: false
  },
  mutations: {
    set_user(state, data) {
      state.user = data
      state.isLoggedIn = true
    },
    reset_user(state) {
      state.user = null
      state.isLoggedIn = false
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn
    },
    user(state) {
      return state.user
    }
  },
  actions: {
    login({ dispatch, commit }, data) {
      return new Promise((resolve, reject) => {
        axios.post('login', data)
          .then(response => {
            const token = response.data.data.access_token;
            localStorage.setItem('token', token)
            setHeaderToken(token)
            dispatch('get_user')
            resolve(response)
          })
          .catch(err => {
            commit('reset_user')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    async get_user({ commit }) {
      if (!localStorage.getItem('token')) {
        return
      }
      try {
        let response = await axios.get('user')
        commit('set_user', response.data.data)
      } catch (error) {
        commit('reset_user')
        removeHeaderToken()
        localStorage.removeItem('token')
        return error
      }
    }
  }
}

// export default new Vuex.Store({
//   el: '#app',
//   auth,
//   render: h => h(App),
//   state: {
//     user: null,
//     isLoggedIn: false,
//   },
//   mutations: {
//     set_user(state, data) {
//       state.user = data
//       state.isLoggedIn = true
//     },
//     reset_user(state) {
//       state.user = null
//       state.isLoggedIn = false
//     }
//   },
//   getters: {
//     isLoggedIn(state) {
//       return state.isLoggedIn
//     },
//     user(state) {
//       return state.user
//     }
//   },
//   actions: {
//     login({ dispatch, commit }, data) {
//       return new Promise((resolve, reject) => {
//         axios.post('login', data)
//           .then(response => {
//             const token = response.data.token
//             localStorage.setItem('token', token)
//             setHeaderToken(token)
//             dispatch('get_user')
//             resolve(response)
//           })
//           .catch(err => {
//             commit('reset_user')
//             localStorage.removeItem('token')
//             reject(err)
//           })
//       })
//     },
//     async get_user({ commit }) {
//       if (!localStorage.getItem('token')) {
//         return
//       }
//       try {
//         let response = await axios.get('user')
//         commit('set_user', response.data.data)
//       } catch (error) {
//         commit('reset_user')
//         removeHeaderToken()
//         localStorage.removeItem('token')
//         return error
//       }
//     },
//     register({ commit }, data) {
//       return new Promise((resolve, reject) => {
//         axios.post('register', data)
//           .then(resp => {
//             resolve(resp)
//           })
//           .catch(err => {
//             commit('reset_user')
//             reject(err)
//           })
//       })
//     },

//   },
//   modules: {
//     auth
//   }
// })