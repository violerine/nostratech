<template>
    <div class="modal-component">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p v-show="$route.path==='/' ? true : false" class="modal-card-title">Login to you account</p>
                        <p v-show="$route.path==='/admin' ? true : false"  class="modal-card-title">Add new user</p>
                        <button @click="closeModal()" class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                        <label v-show="$route.path==='/' ? true : false" class="label">Username</label>
                            <div v-show="$route.path==='/' ? true : false" class="control has-icons-left has-icons-right">
                                <input class="input is-warning" type="text" value="test">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                            </div>
                        <label v-show="$route.path==='/' ? true : false" class="label">Password</label>
                            <div v-show="$route.path==='/' ? true : false" class="control has-icons-left has-icons-right">
                                <input class="input is-warning" type="text" value="test">
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                            </div>
                        <label v-show="$route.path==='/admin' ? true : false" class="label">Name</label>
                            <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                                <input v-model="name" class="input is-warning" type="text" >
                                <span class="icon is-small is-left">
                                <i class="fas fa-user"></i>
                                </span>
                            </div>
                        <label v-show="$route.path==='/admin' ? true : false" class="label">Avatar Link</label>
                             <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                                <input v-model="avatar" class="input is-warning" type="text" >
                                <span class="icon is-small is-left">
                                <i class="fas fa-image"></i>
                                </span>
                            </div>
                        <label v-show="$route.path==='/admin' ? true : false" class="label">Address</label>
                             <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                                <input v-model="address" class="input is-warning" type="text" >
                                <span class="icon is-small is-left">
                                <i class="fas fa-home"></i>
                                </span>
                            </div>
                        <label v-show="$route.path==='/admin' ? true : false" class="label">City</label>
                             <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                                <input v-model="city" class="input is-warning" type="text" >
                                <span class="icon is-small is-left">
                                <i class="fas fa-building"></i>
                                </span>
                            </div>
                        <label v-show="$route.path==='/admin' ? true : false" class="label">Zip code</label>
                             <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                                <input v-model="zipcode" class="input is-warning" type="text" >
                                <span class="icon is-small is-left">
                                <i class="fas fa-home"></i>
                                </span>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                        <button @click="login()" v-show="$route.path==='/' ? true : false"  class="button is-warning">Login</button>
                        <button @click="addNewUser()" v-show="$route.path==='/admin' ? true : false"  class="button is-warning">Add user</button>  
                        <button @click="closeModal()" class="button">Cancel</button>
                    </footer>
                </div>
            </div>
</template>

<script>
export default {
    data:function(){
        return{
            name:'',
            avatar:'',
            address:'',
            city:'',
            zipcode:''
        }
    },
    methods:{
        closeModal(){
            $(".modal").removeClass("is-active")
        },
        login(){
            axios.post('http://5bea50d1b854d10013109221.mockapi.io/login')
            .then(({data})=>{
                if(data.result){
                    localStorage.setItem('token',data.result)
                    this.$router.push('/admin')
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        addNewUser(){
            let newUser= {
                name:this.name,
                avatar:this.avatar,
                address:this.address,
                city:this.city,
                zipcode:this.zipcode
            }
            axios.post('http://5bea50d1b854d10013109221.mockapi.io/users',newUser)
            .then(({data})=>{
                this.closeModal()
                window.location.reload()
                console.log("ADD USER SUCCESS",data)
            })
            .catch(err=>{
                console.log("ERROR IN ADD USER",err)
            })
        },


    }
}
</script>

<style>

</style>
