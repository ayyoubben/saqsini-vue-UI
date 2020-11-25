<template>
    <div style="background-color:  rgb(231, 231, 231);">
        <div style="text-align: center;">
                <img src="../../received_1132444510459521.png" style="width:210px;height:210px;">
        </div>
        <div style="text-align: center;">
                        <div class="form-container" style="display: inline-block;background: rgb(231, 231, 231);color: white;text-align: center;">
                                        <form action="#" @submit.prevent="onSubmit">
                                            <div class="input-cnt" style="display: flex;margin-bottom: 2%;font-size: 120%;padding: 1%;">
                                                    <i class="far fa-envelope" style="padding: 30px;text-align: center; background: white;border-right-color:  white;border-top-left-radius: 20px;border-bottom-left-radius: 20px;color: #4d5358;"></i>
                                                    <input @input="$v.username.touch()" type="text" placeholder="Username" name="username" v-model="username" style="outline: none;border: none;padding: 4%;border-top-right-radius: 20px;border-bottom-right-radius: 20px;width: 100%;">
                                            </div>
                                            <p v-if="!$v.username.required" style="color: red;">This field must not be empty!</p>    
                                            <div class="input-cnt" style="display: flex;margin-bottom: 2%;font-size: 120%;padding: 1%;">
                                                    <i class="far fa-envelope" style="padding: 30px;text-align: center; background: white;border-right-color:  white;border-top-left-radius: 20px;border-bottom-left-radius: 20px;color: #4d5358;"></i>
                                                    <input @input="$v.email.touch()" type="text" placeholder="Email" name="email" v-model="email" style="outline: none;border: none;padding: 4%;border-top-right-radius: 20px;border-bottom-right-radius: 20px;width: 100%;">
                                            </div>
                                            <p v-if="!$v.email.email" style="color: red;">Please provide a valid email address!</p>
                                            <p v-if="!$v.email.required" style="color: red;">This field must not be empty!</p>
                                            <div class="input-cnt" style="display: flex;margin-bottom: 2%;font-size: 120%;padding: 1%;">
                                                    <i class="fas fa-lock" style="padding: 30px;text-align: center; background: white;border-right-color:  white;border-top-left-radius: 20px;border-bottom-left-radius: 20px;color: #4d5358;"></i>
                                                    <input type="password" placeholder="password" name="password" v-model="password" style="outline: none;border: none;padding: 4%;border-top-right-radius: 20px;border-bottom-right-radius: 20px;width: 100%;">
                                            </div>
                                            <div class="input-cnt" style="display: flex;margin-bottom: 2%;font-size: 120%;padding: 1%;" >
                                                    <i class="fas fa-lock" style="padding: 30px;text-align: center; background: white;border-right-color:  white;border-top-left-radius: 20px;border-bottom-left-radius: 20px;color: #4d5358;"></i>
                                                    <input type="password" placeholder="confirm password" name="password" v-model="confirmPassword" style="outline: none;border: none;padding: 4%;border-top-right-radius: 20px;border-bottom-right-radius: 20px;width: 100%;">
                                            </div>
                                            <div class="input-cnt" style="display: flex;margin-bottom: 1%;font-size: 120%;padding: 1%;">
                                                    <input type="submit" value="Sign Up" style="border:none;border-radius:20px;outline:none;width: 100%;margin:0 auto;margin-top: 10%;padding:5%;color:white;background:rgb(245, 46, 46);">
                                            </div>
                                        </form>                                        
                                        </div>
        </div>
    </div>
</template>

<script>
        import { required, email } from 'vuelidate/lib/validators'
        import * as signUp from '../../js/utils/user/signup'
        export default {
                data () {
                        return {
                                username: '',
                                email: '',
                                password: '',
                                confirmPassword: '',
                        }
                },
                validations: {
                        email: {
                                required,
                                email
                        },
                        username: {
                                required,
                        }
                },
                methods: {
                        onSubmit () {
                                const formData = {
                                        username: this.username,
                                        email: this.email,
                                        password: this.password
                                };
                                //console.log(formData);
                                if (this.password == this.confirmPassword && this.password.length > 0) {
                                        signUp.signup(formData.username, formData.email, formData.password);
                                } else {
                                        alert("There is an error. Please check your informations!")
                                }        
                        },
                }
        }
</script>