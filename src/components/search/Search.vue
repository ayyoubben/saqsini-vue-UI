<template>
    <div style="background-color: rgb(226, 215, 215);">
        <app-nav-bar></app-nav-bar>
        <div class="image" style=" text-align: center;margin-top:5%;">
            <img src="../../received_1132444510459521.png" style="width: 300px;height: 300px;">
        </div>
        <form action="#" @submit.prevent="searchSkill">
        <div class="container" style="text-align: center;">
            <div class="input-group">
               
                <input type="text" v-model="skillName" class="form-control" placeholder="Search for skills" style=" font-size:32px;" >
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="sumbit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                
            </div> 
        </div>
        </form> 
    </div>
</template>

<script>
    import NavBar from '../../NavBar.vue'
    import * as tokens from '../../tokens'
    import * as getSkills from '../../js/utils/skill/getSkillByName'

    export default {
        data () {
            return {
                skillName: '',
            }
        },
        methods: {
            searchSkill () {
                const formSkill = this.skillName;
                //console.log(formSkill);
                getSkills.getSkillByName(formSkill, this.$store.state.token.idToken);
            }
        },
        components: {
            appNavBar: NavBar,
        }
    }
</script>