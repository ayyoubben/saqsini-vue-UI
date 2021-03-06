import { post } from '../config';
import {vm} from '../../../main'
import {state} from '../../../store.js'

import * as getProf from './getOwnProfile'
import * as tokens from '../../../tokens.js'

export const signup = async (userName, email, password) => {
    try {
        const { data } = await post({
            url: '/users',
            data: {
                userName,
                email,
                password
            }
        }).then( response => {
            //console.log(response.data);
            vm.$store.state.token.idToken = response.data.token;
            //console.log(tokens.token.idToken);
            //console.log(tokens.token.idToken);
            if (vm.$store.state.token.idToken) {
                
              getProf.getOwnProfile(vm.$store.state.token.idToken);
              vm.$router.push({name: 'edit'});
            }
            
        })
        
        return data;
    } catch (e) {
        console.log(e);
        //alert("There is an error. Please check your informations!")
    }
}

//the RESPONSE OF signup
/* const response = {
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

*/