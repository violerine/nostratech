<template>
<div class="navbar">
    <div class="navbar-menu container">
        <div class="navbar-start"> 
            <router-link to="/"> <img class="nostra-logo" src="../assets/nostra.png"></router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <router-link to="/admin">
                 <a v-if="this.logged == true" type="button" class="button">Admin</a>
                </router-link>
                <button v-if="this.logged == false" @click="activateModal" type="button" class="button is-warning">Login</button>
                <button v-if="this.logged == true" @click="logout()" type="button" class="button is-warning">Log out</button>
            </div>
        </div>
    </div>
</div>


    
</template>

<script>

export default {
    data:function(){
        return{
            logged: true
        }
    },
    created:function(){
        this.checkUser()
    },
    methods:{
        activateModal(){
            $(".modal").addClass("is-active")
        },
        logout(){
            localStorage.clear()
            this.logged = false
            this.$router.push('/')
            swal("User logged out")
        },
        checkUser(){
            if(localStorage.getItem('token')){
                this.logged = true
            }
            else{
                this.logged = false
            }
        }
    }

}
</script>

<style scoped>
.nostra-logo{
    width: 200px;
    height: 80px;
}

.button{
    margin-left: 10px;
}

</style>
