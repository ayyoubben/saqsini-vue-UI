<template style="background-color: rgb(226, 215, 215);">
    <div style="background-color: rgb(226, 215, 215);">

        



      <nav style="background-image: linear-gradient( #EB3349,#F45C43) !important;" class="navbar navbar-expand-lg navbar-dark bg-light">
  <a  href=""><img  src="./photo_2020-10-13_15-14-57.png" width="70" height="60"   alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link to="/user" tag="li" class="nav-item" active-class="active">
        <a class="nav-link">Profile</a>
      </router-link>
      <router-link to="/chat" tag="li" class="nav-item" active-class="active">
        <a class="nav-link">Chat</a>
      </router-link>
      <li class="nav-item">
        <a @click="userLogout" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Log Out</a>
      </li>
      <li class="nav-item">
        <a @click="userLogoutAll" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Log Out All</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/boudiaf-anis-dhiya-eddine-a99a69177/" tabindex="-1" aria-disabled="true">Contact Us</a>
      </li>

    </ul>
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchSkill">
      <input v-model="skillName" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
       <!-- <nav style=" padding: 0; background-image: linear-gradient( #EB3349,#F45C43) !important; " class="navbar navbar-light light-blue lighten-4">
   
  <a  href=""><img  src="./97993404_655126375269269_4986927226495696896_n.png" width="90" height="90"   alt=""></a>
  <div style="width: 50%;" class="active-pink-1 mb-0">
    <form action="#" @submit.prevent="searchSkill">
      <input v-model="skillName" class="form-control" type="text" placeholder="Search" aria-label="Search">
    </form>
  </div> 
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav"> 
      <router-link to="/" tag="li" class="nav-item" active-class="active" exact>
        <a class="nav-link">Search</a>
      </router-link>
      <router-link to="/user" tag="li" class="nav-item" active-class="active">
        <a class="nav-link">Profile</a>
      </router-link>
      <router-link to="/chat" tag="li" class="nav-item" active-class="active">
        <a class="nav-link">Chat</a>
      </router-link>
      <li class="nav-item">
        <a @click="userLogout" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Log Out</a>
      </li>
      <li class="nav-item">
        <a @click="userLogoutAll" class="nav-link" href="#" tabindex="-1" aria-disabled="true">Log Out All</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/boudiaf-anis-dhiya-eddine-a99a69177/" tabindex="-1" aria-disabled="true">Contact Us</a>
      </li>
    </ul>
  </div>

 
</nav>
-->
    </div>
</template>

<script>
  import * as getSkills from './js/utils/skill/getSkillByName'
  import * as tokens from './tokens'
  import {logout} from './js/utils/user/logout'
  import {logoutAll} from './js/utils/user/logoutAll'
  export default {
    data () {
            return {
                skillName: '',
            }
        },
        methods: {
            
        },
    methods:{
      /*navToSearch () {
        this.$router.push({name: 'search'})
      },
      navToProfile () {
        this.$router.push({name: 'user'})
      },
      navToChat () {
        this.$router.push({name: 'chat'})
      }*/
      searchSkill () {
        const formSkill = this.skillName;
        //console.log(formSkill);
        getSkills.getSkillByName(formSkill, this.$store.state.token.idToken);
      },
      userLogout () {
        logout(this.$store.state.token.idToken);
      },
      userLogoutAll () {
        logoutAll(this.$store.state.token.idToken);
      }
    },
  }
</script>