import { post } from '../config';
import * as getSkills from './getMySkills'
import * as tokens from '../../../tokens'
import {state} from '../../../store.js'

export const addSkill = async (skillName, description, token) => {
    const { data } = await post({
        url: '/skills',
        data: {
            skill: skillName,
            description
        },
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }).then( response => {
        console.log(response.data);
        getSkills.getMySkills(vm.$store.state.token.idToken);

    })

    return data;
}

//THE RESPONSE of rateSkill
const response = {
    _id: "5eb0466c9a16ea00176c9aae",
    skill: "coding",
    description: "mrid ta3 chorba",
    owner: {
        _id: "5eaf0049e241b400179fcb9c",
        userName: "malibu",
        imgUrl: "https://saqsini-api.herokuapp.com/users/5eaf0049e241b400179fcb9c/profilePicture"
    },
    createdAt: "2020-05-04T16:44:28.676Z",
    updatedAt: "2020-05-04T16:45:15.435Z",
    __v: 1,
    evaluation: 0 //evaluation represente la moyenne genrale attribué par les utilisateurs
}