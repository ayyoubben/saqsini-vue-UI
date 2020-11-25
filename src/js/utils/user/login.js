import { post } from '../config';
import {vm} from '../../../main'
import {store} from '../../../store.js'

import * as getProf from './getOwnProfile'
import * as tokens from '../../../tokens.js'
import * as getMySkills from '../skill/getMySkills' 

export const login = async (email, password) => {
    try {
        const { data } = await post({
            url: '/users/login',
            data: {
                email,
                password
            }
        })
        /*.then( response => {
            vm.$store.state.token.idToken = response.data.token;
            const store = vm.$store.state;
            console.log(store.token.idToken);
            if (store.token.idToken) {
                
            getProf.getOwnProfile(store.token.idToken);
            getMySkills.getMySkills(store.token.idToken);
            vm.$router.push({ name: 'search' });
            }
            
        })*/
        vm.$store.state.token.idToken = data.token;
        //console.log(vm.$store.state.token.idToken);
        if (vm.$store.state.token.idToken) {
                
            getProf.getOwnProfile(vm.$store.state.token.idToken);
            getMySkills.getMySkills(vm.$store.state.token.idToken);
            vm.$router.push({ name: 'search' });
        }
        return data;
    } catch (e) {
        console.log(e);
        //alert("Account doesn't exist. Check your informations, or please sign up if you don't have one!")
        
        alert("Account doesn't exist. Check your informations, or please sign up if you don't have one!")  
        //alert("Account doesn't exist. Check your informations, or please sign up if you don't have one!")
    }
}

//the RESPONSE OF login
const response = {
    user: {
        gender: "not specific",
        _id: "5eb12a9bf49655211b63c4d2",
        userName: "lomi",
        email: "s.mario@mail.com",
        imgUrl: "https://saqsini-api.herokuapp.com/users/5eb12a9bf49655211b63c4d2/profilePicture",
        backgroundUrl: "https://saqsini-api.herokuapp.com/users/5eb12a9bf49655211b63c4d2/backgroundPicture",
        createdAt: "2020-05-05T08:58:03.747Z",
        updatedAt: "2020-05-05T08:58:03.747Z",
        __v: 0
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWIxMmE5YmY0OTY1NTIxMWI2M2M0ZDIiLCJpYXQiOjE1ODg2NjkwODN9.nxx1sEO2yw52txvn4PlaC3qP27NkhC1tya6XqwQYDmY"
}