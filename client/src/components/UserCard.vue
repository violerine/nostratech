<template>
    <div class="user-card">
        <div v-if="this.formstatus == false" class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-one-fifth">
                        <img :src="user.avatar" >
                    </div>
                    <div class="column">
                        <h2 class="username"><b>{{user.name}}</b></h2>
                        <p>{{user.address}}</p>
                        <p>{{user.city}}, {{user.zip}}</p>
                    </div>
                    <div class="column is-one-fifth">
                        <button @click="changeFormStatus()" class="button" type="button">Edit</button>
                        <button @click="deleteUser(user.id)" class="button is-danger" type="button">Delete</button>
                    </div>
                </div>
            </div>
        </div>

        <!--update form-->
        <div v-if="this.formstatus == true" class="update-form">
            <div class="card">
                <div class="card-content">
                    <label v-show="$route.path==='/admin' ? true : false" class="label">Name</label>
                        <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                            <input v-model="name" class="input is-warning" type="text" :placeholder="user.name" >
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </div>
                    <label v-show="$route.path==='/admin' ? true : false" class="label">Avatar Link</label>
                            <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                            <input v-model="avatar" class="input is-warning" type="text" :placeholder="user.avatar" >
                            <span class="icon is-small is-left">
                            <i class="fas fa-image"></i>
                            </span>
                        </div>
                    <label v-show="$route.path==='/admin' ? true : false" class="label">Address</label>
                            <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                            <input v-model="address" class="input is-warning" :placeholder="user.address" type="text" >
                            <span class="icon is-small is-left">
                            <i class="fas fa-home"></i>
                            </span>
                        </div>
                    <label v-show="$route.path==='/admin' ? true : false" class="label">City</label>
                            <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                            <input v-model="city" class="input is-warning" :placeholder="user.city" type="text" >
                            <span class="icon is-small is-left">
                            <i class="fas fa-building"></i>
                            </span>
                        </div>
                    <label v-show="$route.path==='/admin' ? true : false" class="label">Zip code</label>
                            <div v-show="$route.path==='/admin' ? true : false" class="control has-icons-left has-icons-right">
                            <input v-model="zipcode" class="input is-warning" :placeholder="user.zipcode" type="text" >
                            <span class="icon is-small is-left">
                            <i class="fas fa-home"></i>
                            </span>
                        </div>
                    <button @click="updateUser(user.id)" class="button" type="button">Update</button>
                    <button @click="changeFormStatusToFalse()" class="button" type="button">Cancel</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Modal from '@/components/Modal'

export default {
    props:['user','index'],
    components:{
        Modal
    },
    data:function(){
        return{
            name:'',
            avatar:'',
            address:'',
            city:'',
            zipcode:'',
            formstatus:false
        }
    },
    methods:{

        deleteUser(userid){
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this user",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        axios.delete(`http://5bea50d1b854d10013109221.mockapi.io/users/${userid}`)
                            .then(({data})=>{

                                window.location.reload()
                                console.log(data)
                            })
                            .catch(err=>[
                                console.log("ERROR DI DELETE USER", err)
                            ])
                        swal("User has been deleted!", {
                        icon: "success",
                        });
                } 
            });

        },
        activateModal(){
            $(".modal").addClass("is-active")
        },
        changeFormStatus(){
            console.log("AAAAA")
            this.formstatus = true
            console.log(this.formstatus)
        },
        changeFormStatusToFalse(){
            console.log("AAAAA")
            this.formstatus = false
            console.log(this.formstatus)
        },
        updateUser(userid){
            let newUserData = {
                name:this.name,
                avatar:this.avatar,
                address:this.address,
                city:this.city,
                zipcode:this.zipcode
            }
            axios.put(`http://5bea50d1b854d10013109221.mockapi.io/users/${userid}`,newUserData)
            .then(({data})=>{
                console.log("UPDATE USER SUCCESS",data)
                window.location.reload()
            })
            .catch(err=>{
                console.log("ERROR IN UPDATE USER",err)
            })
        },
    }

}
</script>

<style scoped>
.username{
    font-size: 25px;
}

.card{
    margin-top:10px;
    margin-bottom: 30px;
}
.button{
    margin-top:10px;
    margin-left: 10px
}


</style>
