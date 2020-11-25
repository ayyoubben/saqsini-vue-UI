import { get } from '../config';
import * as tokens from '../../../tokens'
import { vm } from '../../../main';
import {state} from '../../../store.js'

export const getOthersSkills = async (user_id, token) => {
    const { data } = await get({
        url: `/skills/user/${user_id}`,
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }).then(response => {
        while(vm.$store.state.otherUserSkills.length > 0) {
            vm.$store.state.otherUserSkills.pop();
        }
        //console.log(response);
        for(let key in response.data) {
            vm.$store.state.otherUserSkills.push(response.data[key])
        };
        //console.log(tokens.otherUserSkills);
        vm.$router.push({name: 'profile'})
    })

    return data;
}

//THE response of getOhersSkills
//array of skills
const response = [
    {
        _id: "5eb045309a16ea00176c9aa4",
        skill: "moraba",
        description: "JaaaNn had chir !!",
        createdAt: "2020-05-04T16:39:12.739Z",
        updatedAt: "2020-05-04T16:39:12.739Z"
    },
    {
        _id: "5eb045309a16ea00176c9aa4",
        skill: "moraba",
        description: "JaaaNn had chir !!",
        createdAt: "2020-05-04T16:39:12.739Z",
        updatedAt: "2020-05-04T16:39:12.739Z"
    }
]