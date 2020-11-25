<template>
    <div style="background-color: rgb(226, 215, 215);">
        <app-nav-bar></app-nav-bar>
        <div class="container"> 
        <template v-for="owner in skillsResult">  
            <div style="width: 70%; border-radius: 15px;" class="card mx-auto mt-4  ">
              <div class="container p-3 text-center">
              <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-3 ">
                  <img class="rounded-circle img-fluid" :src="owner.owner.imgUrl" alt="">
                </div>
                <div class=" ml-md-5 mt-2 mt-md-0">
                  <h5 class="card-title">{{owner.owner.userName}}</h5>
                  <h6>high school of computer science esi sba</h6>
                  <button @click="navToChat" style="background-color: #A11D1D !important;" type="button" class="btn btn-primary btn-sm">Message</button>
                  <button @click="checkProfile(owner.owner._id)" style="border: #A11D1D 1px solid !important ; color: #A11D1D ; " type="button" class="btn btn-outline btn-sm">Check Profile</button>
                    

                </div>

              </div></div>
            </div>
        </template>
</div> 
    </div>    
</template>

<script>
    import {getOthersSkills} from '../../js/utils/skill/getOthersSkills'
    import {getOtherProfile} from '../../js/utils/user/getOtherProfile'
    import NavBar from '../../NavBar.vue'
    import * as tokens from '../../tokens'
    export default {
      methods: {
        navToChat() {
          this.$router.push({name: 'chat'})
        },
        checkProfile (userId) {
          //tokens.token.otherUserId = '';
          this.$store.state.token.otherUserId = userId;
          console.log(this.$store.state.token.otherUserId);
          getOtherProfile(this.$store.state.token.otherUserId, this.$store.state.token.idToken);
          //getOthersSkills(this.$store.state.token.otherUserId, this.$store.state.token.idToken);
          //this.$router.push({name: 'profile'})
        }
      },
      computed: {
        skillsResult() {
          return !this.$store.state.token.idToken ? false : this.$store.state.skillSearch;
        },
      },
      components: {
        appNavBar: NavBar,
      },
    }
</script>