<template>
    <div class="admin">
        <Navbar></Navbar>
        <p class="title loading" v-if="loadingUser==true">Loading users....</p>
        <div class="container">
            <button v-if="loadingUser== false" @click="activateModal()" class="button addnewuser" type="button">Add new user</button>
            <div class="columns is-multiline">
                <div v-for="(user,index) in userData" :key="index" class="column is-half">
                    <UserCard :user="user" :index="index"></UserCard>
                </div>
            </div>
        </div>
        <Footer></Footer>
    <!--Modal-->
        <div class="modal">
            <Modal></Modal>
        </div>
        <!--Modal-->
    </div>
</template>

<script>
import UserCard from '@/components/UserCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default {
    components:{
        UserCard,
        Navbar,
        Footer,
        Modal
    },
    data:function(){
        return{
            userData:[],
            loadingUser:true

        }
    },
    created:function(){
        this.getUsers()
    },
    methods:{
        getUsers(){
            axios.get('http://5bea50d1b854d10013109221.mockapi.io/users')
            .then(({data})=>{
                this.loadingUser = false
                this.userData = data
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        activateModal(){
            $(".modal").addClass("is-active")
        },

    }
     
}
</script>

<style scoped>

.addnewuser{
    margin-top: 20px;
    margin-bottom: 20px;
}

.loading{
    margin: 50px;
}
</style>
