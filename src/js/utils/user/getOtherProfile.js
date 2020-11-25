import { get } from '../config';

import * as tokens from '../../../tokens'
import {getOthersSkills} from '../skill/getOthersSkills'
import {state} from '../../../store.js'
import {vm} from '../../../main.js'

export const getOtherProfile = async (id, token) => {
    const {data} = await get({
        url: `/users/${id}`,
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }).then( response => {
        console.log(response)
        vm.$store.state.otherUser.userName = response.data.userName;
        vm.$store.state.otherUser.email = response.data.email;
        vm.$store.state.otherUser.gender = response.data.gender;
        vm.$store.state.otherUser.imgUrl = response.data.imgUrl;
        console.log(vm.$store.state.otherUser);
        getOthersSkills(vm.$store.state.token.otherUserId, vm.$store.state.token.idToken)
    })

    return data;
}
//the response of getOthersProfile
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