<template>
    <div style="background-color:  rgb(231, 231, 231);">
        <div  style="text-align: center;">
                    <img src="../../received_1132444510459521.png" style="width: 210px;height: 210px;">
        </div>
        <div style="text-align: center;">
            <div class="form-container" style="display: inline-block; background: rgb(231, 231, 231);color: white; text-align: center;">
                <form action="#" @submit.prevent="onSubmit" style="padding: 5%;">
                    <div class="input-cnt" style="display: flex;margin-bottom: 3%;font-size: 170%;padding: 1%;">
                        <i class="far fa-envelope" style="padding: 30px;text-align: center;background: white;border-right-color:  white;border-top-left-radius: 20px;border-bottom-left-radius: 20px;color: #4d5358;"></i>
                        <input type="text" placeholder="email" name="Username"  v-model="email" style="outline: none;border: none;padding: 4%;border-top-right-radius: 20px;border-bottom-right-radius: 20px;width: 100%; ">
                    </div>
                    <div class="input-cnt" style="display: flex;margin-bottom: 3%;font-size: 170%;padding: 1%;">
                        <i class="fas fa-lock" style="padding: 30px;text-align: center;background: white;border-right-color:  white;border-top-left-radius: 20px;border-bottom-left-radius: 20px;color: #4d5358;"></i>
                        <input type="password" placeholder="password" name="password" v-model="password" style="outline: none;border: none;padding: 4%;border-top-right-radius: 20px;border-bottom-right-radius: 20px;width: 100%; ">
                    </div>
                    <div class="input-cnt" style="display: flex;margin-bottom: 3%;font-size: 170%;padding: 1%;">
                        <input type="submit" value="get started" style ="border:none;border-radius:20px;outline:none;width: 100%; margin:0 auto; margin-top: 10%;padding:5%;color:white;background:rgb(245, 46, 46);">
                    </div>
                    <div class="sign">
                            <span style="color:black;font-size: 170%;display: block;text-align: center;text-decoration: none;    margin-bottom: 20px;">don't have account?<a style="text-decoration: none;cursor:pointer ;color: rgb(245, 46, 46);" @click="navigateToSignUp" > sign up</a></span>
                        <div style="display: inline;">
                            <hr  width="45%" style="display: block;float: left;">
                                   
                            <hr  width="45%" style="display: block;float: right;">   
                                
                        </div>
                    </div>           
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
  //import * as getProfile from '../../js/utils/user/getOwnProfile';
  import * as logIn from '../../js/utils/user/login'
  import * as tokens from '../../tokens'
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        //console.log(formData);
        logIn.login(formData.email, formData.password);
      },
      navigateToSignUp () {
        this.$router.push({ name: 'signup' });
      }
    }
  }
</script>