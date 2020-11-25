import { post } from '../config';

import * as getProf from './getOwnProfile'
import * as tokens from '../../../tokens'
import { vm } from '../../../main';

export const addProfileImg = async (file, token) => {
    const data = await post({
        url: '/users/me/profilePicture',
        data: file,
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}` 
        }
    }).then( () => {
        //console.log(response);               
        getProf.getOwnProfile(vm.$store.state.token.idToken);
        alert('The image uploaded successfully!');
        //console.log('Finish')
    })
    return data;
}

//THE response of addProfileImg is nothing
// otherwise u get an error !!


/*
//-----THE JS CODE to upload profile pcture

document.addEventListener('submit', async (e) => {
        e.preventDefault();
        let formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append("profilePicture", imagefile.files[0]);
        try {
            await addImg(formData);
            let data = await getOwnProfile();
            document.querySelector('#image').src = data.imgUrl;
        } catch (error) { console.log(error) }
    })

//-----THE HTML CODE to upload profile pcture
<form id="uploadForm" action='upload_file' role="form" method="post" enctype=multipart/form-data>
        <input type="file" id="file" name="profilePicture">
        <input type=submit value=Upload>
</form>
*/