import { get } from '../config';
import {state} from '../../../store.js'
import * as tokens from '../../../tokens'
import { vm } from '../../../main';
import {getMySkills} from '../skill/getMySkills'

export const getOwnProfile = async (token) => {
    const {data} = await get({
        url: '/users/me',
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }).then( response => {
        //console.log(response)
        vm.$store.state.userMe.userName = response.data.userName;
        vm.$store.state.userMe.email = response.data.email;
        vm.$store.state.userMe.gender = response.data.gender;
        vm.$store.state.userMe.imgUrl = response.data.imgUrl;
        //console.log(vm.$store.state.userMe);
        getMySkills(vm.$store.state.token.idToken)
    })

    return data;
}

//the response of getOwnProfile
const response = {
    gender: "male",
    _id: "5eb02f4b7fb70f001786414f",
    userName: "lomi",
    email: "k.mario@mail.com",
    imgUrl: "https://saqsini-api.herokuapp.com/users/5eb02f4b7fb70f001786414f/profilePicture",
    backgroundUrl: "https://saqsini-api.herokuapp.com/users/5eb02f4b7fb70f001786414f/backgroundPicture",
    createdAt: "2020-05-04T15:05:47.344Z",
    updatedAt: "2020-05-05T09:10:03.216Z"
}