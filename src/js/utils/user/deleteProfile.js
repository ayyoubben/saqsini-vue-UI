import { remove } from '../config';

export const deleteProfile = async () => {
    const { data } = await remove({
        url: `/users/me`
    })

    return data;
}

//THE response of deleteProfile 
const response = {
    gender: "not specific",
    _id: "5eb02f4b7fb70f001786414f",
    userName: "lomi",
    email: "k.mario@mail.com",
    imgUrl: "https://saqsini-api.herokuapp.com/users/5eb02f4b7fb70f001786414f/profilePicture",
    backgroundUrl: "https://saqsini-api.herokuapp.com/users/5eb02f4b7fb70f001786414f/backgroundPicture",
    createdAt: "2020-05-04T15:05:47.344Z",
    updatedAt: "2020-05-05T09:10:03.216Z"
}