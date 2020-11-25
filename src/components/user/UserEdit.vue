<template>
    <div style="background-color: rgb(231, 231, 231);line-height: normal;">
        <app-nav-bar></app-nav-bar>
    <div  class="m-3"style=" background-color:white; border-radius: 10px;box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(17, 24, 24, 0.911); ">
        <div class="container-fluid">
            <div class=" text-left" style="height:30px" >
                <h5>Edit profile:</h5>
                <hr>
            </div>
            <div class="row">
                <div class="col-xl-7">
                    <div class="container-fluid">
                        <form style="margin: 3%;" @submit.prevent="onUpdateUser">
                           <div class="form-row">
                            <div class="col-xl-6">
                                    <label for="pwd" style="font-family:Impact, Charcoal, sans-serif; cursor: pointer;">User Name:</label>
                                    <input type="text" class="form-control" placeholder="username" v-model="userName" style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 3px 15px 0 rgba(203, 214, 214, 0.911);">
                                
                            </div>
                            <br><br>        
                            <div class="col-xl-6">
                                    <label for="pwd" style="font-family:Impact, Charcoal, sans-serif; cursor: pointer;">Email Address:</label>
                                    <input type="text" class="form-control" placeholder="Enter email" v-model="email" style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 3px 15px 0 rgba(203, 214, 214, 0.911);">
                                
                            </div>

                            <br><br>
                             <div class="col-xl-6">
                                 <br><br>
                                    <label for="pwd" style="font-family:Impact, Charcoal, sans-serif; cursor: pointer;">Password:</label>
                                    <input type="password" class="form-control" placeholder="Enter password" v-model="password" style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 3px 15px 0 rgba(203, 214, 214, 0.911);">
                                
                            </div>
                            <br><br>
                            <div class="col-xl-3">
                                    <div class="col-xl-10">
                                        <br><br>
                                                    <label for="pwd" style="font-family:Impact, Charcoal, sans-serif; cursor: pointer;">Gender:</label>
                                                    <select name="gender" class="custom-select" @change="onChange($event)" style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 3px 15px 0 rgba(203, 214, 214, 0.911);">
                                                          <option selected >not specific</option>
                                                          <option value="male">Male</option>
                                                          <option value="female">Female</option>
                                                    </select>
                                    </div>
                
                            </div>
                        

                        </div>

                        

                       
                            
                                                       <br><br>
                        <div class="input-cnt" style="display: flex;margin-bottom: 3%;font-size: 170%;padding: 1%;">
                            <input type="submit" value="Confirm updates" class="btn " style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(191, 207, 207, 0.911);background-color:rgb(253, 57, 57);border-radius: 20px;color: white;">
                        </div>

                        </form>

                
                        
                        
                        
                    </div>
                </div>
                <div class="col-xl-4" style="margin-top: 3%;">
                    <div style="min-width: 80%;width: auto;">
                        
                        <div class="form-row">
                        <div class="hobbies">
                            <h5>Add your skills:</h5>
                            <button @click="onAddHobby" type="button" style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(191, 207, 207, 0.911);background-color:rgb(253, 57, 57);border-radius: 20px;color: white;">Add Skills</button>
                            <div class="hobby-list">
                                <div
                                    class="input"
                                    v-for="(hobbyInput, index) in hobbyInputs"
                                    :key="hobbyInput.id">
                                    <label :for="hobbyInput.id">Skill {{ index }}</label>
                                    <input
                                        type="text"
                                        :id="hobbyInput.id"
                                        v-model="hobbyInput.value.skill">
                                    <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
                                    <label :for="hobbyInput.id">Description {{ index }}</label>
                                    <input
                                        type="text"
                                        :id="hobbyInput.id"
                                        v-model="hobbyInput.value.description">
                                    <button @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
                                    <hr>
                                </div>
                            </div>
                        </div>
                        </div>
                        <br><br>
                        <input @click="addMySkills" type="submit" value="Confirm Those skills" class="btn " style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(191, 207, 207, 0.911);background-color:rgb(253, 57, 57);border-radius: 20px;color: white;">
                        
                        <br><br>
                        <form @submit.prevent="addProfImg" style="width: 80%;" enctype="multipart/form-data">
                            <label for="pwd" style="font-family:Impact, Charcoal, sans-serif;">Profile picture:</label>
                            
                            <input type="file" id="file" ref="inputFile" style="display: none;">
                            <br>
                            <button @click="$refs.inputFile.click()" class="btn " style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(191, 207, 207, 0.911);background-color:rgb(253, 57, 57);border-radius: 20px;color: white;">Pick File</button>
                            <button type=submit class="btn " style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(191, 207, 207, 0.911);background-color:rgb(253, 57, 57);border-radius: 20px;color: white;">Upload</button>
                        </form>
                        <br>
                        <p>(PS: Wait for a notification that the upload is finished)</p>

                        
                        <!--<form style="width: 80%;" enctype=multipart/form-data>
                        </form>-->
                            

                        <br><br>



                    </div>
                </div>


            </div>

                <center><button class="btn btn-lg" @click="navToProfile" style="box-shadow: 0 0.5px 0px 0 rgba(253, 250, 250, 0.973),0 7px 21px 0 rgba(191, 207, 207, 0.911);background-color:rgb(253, 57, 57);border-radius: 20px;color: white;">Edit</button></center>
                <br><br>
        
        </div>
    </div>
    </div>
</template>

<script>
    import * as getSkills from '../../js/utils/skill/getMySkills'
    import * as tokens from '../../tokens'
    import * as getProfile from '../../js/utils/user/getOwnProfile'
    import * as addProfileImg from '../../js/utils/user/addProfileImg'
    import * as updateProfile from '../../js/utils/user/updateProfile'
    import * as addSkills from '../../js/utils/skill/addSkill'
    import NavBar from '../../NavBar.vue'
import store from '../../store'
    export default {
        data () {
            return {
                //file: '',
                userName: '',
                email: '',
                password: '',
                gender: '',
                showUserName: false,
                showEmail: false,
                showPassword: false,
                showGender: false,
                hobbyInputs: [],
                descriptionInputs: [],
            }
        },
        components: {
            appNavBar: NavBar,
        },
        methods: {
            onChange(event) {
              //console.log(event.target.value);
              this.gender = event.target.value;
            },
            onUpdateUser () {
                const formData = {}
                if (this.userName) {
                    formData.userName = this.userName
                }
                if (this.email) {
                    formData.email = this.email
                }
                if (this.password) {
                    formData.password = this.password
                }
                if (this.gender) {
                    formData.gender = this.gender
                }
                //console.log(formData)
                updateProfile.updateProfile(formData, this.$store.state.token.idToken);
                //getProfile.getOwnProfile(tokens.token.idToken);
            },
            onAddHobby () {
                const newHobby = {
                id: Math.random() * Math.random() * 1000,
                value: {
                    skill: '',
                    description: '',
                }
                }
                this.hobbyInputs.push(newHobby)
            },
            onDeleteHobby (id) {
                this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id)
            },
            addMySkills () {
                const hobbies = this.hobbyInputs.map(hobby => hobby.value)
                //console.log (hobbies);
                for (let key in hobbies) {
                    const skillName = hobbies[key].skill;
                    const description = hobbies[key].description;
                    //console.log(skillName + ' ' + description)
                    addSkills.addSkill(skillName, description, this.$store.state.token.idToken);                    
                }
            },
            /*handleFileUpload(event){
                this.file = event.target.files[0];
                console.log(this.file);
            },*/
            addProfImg () {
                document.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    let formData = new FormData();
                    let imagefile = document.querySelector('#file');
                    formData.append("profilePicture", imagefile.files[0]);
                //console.log(formData);
                    addProfileImg.addProfileImg(formData, this.$store.state.token.idToken);
                    //getProfile.getOwnProfile(tokens.token.idToken)
                } )           
            }, 
            navToProfile() {
                //getSkills.getMySkills(tokens.token.idToken)
                //getProfile.getOwnProfile(tokens.token.idToken);
                getProfile.getOwnProfile(this.$store.state.token.idToken)
                this.$router.push({name: 'user'})

            }
        }
    }
</script>

<style>
.hobbies button {
    border: 1px solid rgb(253, 57, 57);
    background: rgb(253, 57, 57);
    color: white;
    padding: 6px;
    font: inherit;
    cursor: pointer;
  }

  .hobbies button:hover,
  .hobbies button:active {
    background-color: rgb(253, 57, 57);
  }

  .hobbies input {
    width: 90%;
  }

</style>