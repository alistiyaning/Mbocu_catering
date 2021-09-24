import axios from 'axios'
import { setHeaderToken } from '../utils/auth'
axios.defaults.baseURL = 'https://mbocuapi.herokuapp.com/api/'
export default{
    state: {
        user: null,
        isLoggedIn: false, 
      },
    mutations: {
        set_user (state, data) {
            state.user = data[0]
            state.isLoggedIn = true
        }, 
        reset_user (state) {
            state.user = null
            state.isLoggedIn = false
        }
    },
    getters:{
        isLoggedIn (state){
          return state.isLoggedIn
        },
        user (state) {
            
          return state.user
        }
    },
    actions: {
        login({ dispatch, commit }, data) {
          return new Promise((resolve, reject) => { 
              
            axios.post('login', data)
             .then(response => {
               const token = response.data.data.access_token
               localStorage.setItem('token', token) 
               localStorage.setItem('id', response.data.data.data.id) 
               setHeaderToken(token) 
               dispatch('get_user')
               resolve(response)
             })
             .catch(err => {
                console.log(err)
               commit('reset_user')  
               localStorage.removeItem('token')
               reject(err.response.data.data)
            })
          })
        },
        async get_user({commit}){ 
          if(!localStorage.getItem('token')){
            return
          }
          try{ 
            let response = await axios.get('user/'+localStorage.getItem('id'))
            
              commit('set_user', response.data.data)
          } catch (error){
              commit('reset_user') 
              removeHeaderToken()
              localStorage.removeItem('token')
              return error
          } 
        },
        logout({ commit }) {
            return new Promise((resolve) => {
             commit('reset_user')
             localStorage.removeItem('token')
             localStorage.removeItem('id')
            //  removeHeaderToken()
             resolve()
            })
          },
        register({ commit }, data) {
          return new Promise((resolve, reject) => { 
            axios.post('register', data)
            .then(resp => { 
              const token = response.data.data.access_token
               localStorage.setItem('token', token) 
               localStorage.setItem('id', response.data.data.data.id) 
               setHeaderToken(token) 
               dispatch('get_user')
               resolve(response)
            })
            .catch(err => {
              commit('reset_user')   
              reject(err.response.data.data)
            })
          })
          },
      } 
  }