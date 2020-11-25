import { patch } from '../config';
//import {vm} from '../../../main'
import * as getProf from './getOwnProfile'
import * as tokens from '../../../tokens'
import {state} from '../../../store.js'

export const updateProfile = async (updates = {}, token) => {
    const { data } = await patch({
        url: `/users/me`,
        data: updates,
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    }).then( response => {
        //console.log(response);
        if (vm.$store.state.token.idToken) {
                
            getProf.getOwnProfile(vm.$store.state.token.idToken);
  
        }
        //vm.$router.push({ name: 'search' });
    } )

    return data;
}

//Updates is an Objest that contains one or more
//of the following properties
// {userName, email, password, gender}
//exemple:
//const updates = {userName: 'imane', gender: 'female'}
//updateProfile()


//THE RESPONSE OF updateProfile
//
const response = {
    gender: "not specific",
    _id: "5eb12a9bf49655211b63c4d2",
    userName: "lomi",
    email: "s.mario@mail.com",
    imgUrl: "https://saqsini-api.herokuapp.com/users/5eb12a9bf49655211b63c4d2/profilePicture",
    backgroundUrl: "https://saqsini-api.herokuapp.com/users/5eb12a9bf49655211b63c4d2/backgroundPicture",
    createdAt: "2020-05-05T08:58:03.747Z",
    updatedAt: "2020-05-05T08:58:03.747Z",
    __v: 0
}