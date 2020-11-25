<template>
    <div style="background-color: rgb(226, 215, 215);">
        <app-nav-bar-sear></app-nav-bar-sear>
        <div style="background-color: rgb(226, 215, 215);" class=" shadow-none card mb-3  border-bottom border-right-0 border-dark">
  <img style="object-fit: cover !important; height: 250px !important;" src="https://mdbootstrap.com/img/Photos/Others/photo6.jpg" class="card-img-top" alt="...">
  <div   class="card-body container pt-0 ">
    <div class="row">
      <div class="col-lg-3 col-5">
    <img style=" margin-top: -20% !important; border: 5px solid #F45C43" class="mb-3 rounded-circle img-fluid " :src="imgUrl" ></div>
    <div class="col-lg-9 col-7">
     
    <h1  >{{userName}}</h1>
    <p  class="card-text">high school of computer science esi sba </p>
    <div class="d-lg-flex justify-content-between text-center align-items-center">
                    <div class="d-flex align-items-center" >
          
                      <a href="" class="fb-ic mr-2 text-decoration-none">
                      <i style="color: black !important;" class="fas fa-map-marker-alt fa-lg white-text mr-md-1 mr-3 fa-2x"> </i>
                      <small style="color:black">{{userName}}'s home</small> </a>
          
                      <a href="" class="fb-ic  mr-2 text-decoration-none">
                      <i style="color: black !important; padding-right: 0 !important;" class="fab fa-facebook fa-lg white-text mr-md-1 mr-3 fa-2x"> </i>
                      <small style="color:black"> {{userName}} </small> </a>
          
                      <a href="" class="fb-ic  mr-2 text-decoration-none">
                      <i style="color: black !important;" class="fab fa-instagram fa-lg white-text mr-md-1 mr-3 fa-2x"> </i>
                      <small style="color:black"> {{userName}}</small> </a> 
          
                    </div>
                    
   
                    <button @click="navToChat" style=" background-image: linear-gradient(#EB3349, #F45C43) !important ;" type="button" class="btn btn-lg ml-auto mt-2 mt-lg-0  ">Chat</button>
              
                  </div>
    
   
      
 </div>
</div>
  </div>
</div>
<article class="p-4" >
      <div class="container">
          <h2  >skills</h2>    
      
      <div class="card-deck mt-3">
        <template v-for="skill in skills">
        <div   class="card">
          <div style=" background-image: linear-gradient(#EB3349, #F45C43)!important ;" class="card-header">
            <h4>{{skill.skill}}</h4>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>{{skill.description}}</p>

            </blockquote>
          </div>
        </div>

        </template>
      </div>  
    </div>
    </article>
<div >
</div>





    </div>
</template>

<script>
    import * as tokens from '../../tokens'
    import NavBarSear from '../../NavBarSear.vue'
    export default {
        components: {
            appNavBarSear: NavBarSear,
        },
        methods: {
          navToChat() {
            this.$router.push({name: 'chat'})
          }
        },
        computed : {
          userName() {
            return !this.$store.state.token.idToken ? false : this.$store.state.otherUser.userName;
          },
          gender() {
            return !this.$store.state.token.idToken ? false : this.$store.state.otherUser.gender;
          },
          imgUrl() {
            return !this.$store.state.token.idToken ? false : this.$store.state.otherUser.imgUrl;
          },
          skills() {
            return !this.$store.state.token.idToken ? false : this.$store.state.otherUserSkills;
          }
      },
    }
</script>