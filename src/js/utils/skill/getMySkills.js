import { get } from '../config';
import * as tokens from '../../../tokens'
import {state} from '../../../store.js'
import { vm } from '../../../main';


export const getMySkills = async (token) => {
    const { data } = await get({
        url: `/skills/me`,
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }).then(response => {
        while(vm.$store.state.skillsMe.length > 0) {
            vm.$store.state.skillsMe.pop();
        }
        //console.log(response);
        for(let key in response.data) {
            vm.$store.state.skillsMe.push(response.data[key])
        };
        //console.log(tokens.skillsMe);
    })

    return data;
}

//THE response of geMySkills
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