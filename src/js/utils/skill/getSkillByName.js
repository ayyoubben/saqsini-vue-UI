import { get } from '../config';
import * as tokens from '../../../tokens'
import {vm} from '../../../main'
import {state} from '../../../store.js'

export const getSkillByName = async (skillName, token) => {
    const { data } = await get({
        url: `/skills/${skillName}`,
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }).then(response => {
        //console.log(response);
        while(vm.$store.state.skillSearch.length > 0) {
            vm.$store.state.skillSearch.pop();
        }
        for(let key in response.data) {
            vm.$store.state.skillSearch.push(response.data[key])
        };
        console.log(vm.$store.state.skillSearch);
        vm.$router.push({name: 'result'})
    })

    return data;
}



//THE response of getSkillByName
//array of skills
const response = [
    {
        owner: {
            _id: "5eaf0049e241b400179fcb9c",
            userName: "malibu",
            imgUrl: "/users/5eaf0049e241b400179fcb9c/profilePicture"
        },
        _id: "5eb045309a16ea00176c9aa4",
        skill: "moraba",
        description: "JaaaNn had chir !!",
        createdAt: "2020-05-04T16:39:12.739Z",
        updatedAt: "2020-05-04T16:39:12.739Z"
    },
    {
        owner: {
            _id: "5eaf0049e241b400179fcb9c",
            userName: "malibu",
            imgUrl: "/users/5eaf0049e241b400179fcb9c/profilePicture"
        },
        _id: "5eb045309a16ea00176c9aa4",
        skill: "moraba",
        description: "JaaaNn had chir !!",
        createdAt: "2020-05-04T16:39:12.739Z",
        updatedAt: "2020-05-04T16:39:12.739Z"
    }
]