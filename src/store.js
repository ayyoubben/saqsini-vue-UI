import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        token: {
            idToken: "",
            otherUserId: "",
        },
        
        userMe: {},
        
        skillsMe: [],
        
        skillSearch: [],
        
        otherUser: {},
        
        otherUserSkills: [],
    },
   
})