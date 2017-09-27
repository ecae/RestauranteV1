<template>
    <div>
        <form class="login-form">
            <input type="text"  v-model="login.email" placeholder="Email"/>
            <input type="password" v-model="login.password" placeholder="password"/>
            <button @click.prevent="loginSubmit" >login</button>
        </form>
    </div>

</template>

<style>

</style>

<script>
    import {getHeader} from './../../config';
    export default{
        data(){
            return{
                login:{
                    email:'erick@hotmail.com',
                    password:'alexander'
                }
            }
        },
        methods:{
            loginSubmit(){
                const data = {
                    grant_type: 'password',
                    client_id:2,
                    client_secret:'Ou0JwJjS04kWRjYp9FIDgloeaCFgcU8RQYLQIpWC',
                    username: this.login.email,
                    password:this.login.password,
                    scope:''

                };
                const authUser = {}

                axios.post('/oauth/token', data)
                    .then(response => {
                        if (response.status === 200) {
                            console.log('Oauth token', response)
                            authUser.access_token = response.data.access_token
                            authUser.refresh_token = response.data.refresh_token
                            window.localStorage.setItem('authUser', JSON.stringify(authUser))
                            axios.get('api/user', {headers: getHeader()})
                                .then(response => {
                                    console.log('user object', response.data)
                                    authUser.email = response.data.email
                                    authUser.name = response.data.name
                                    window.localStorage.setItem('authUser', JSON.stringify(authUser))
                                    this.$router.push({name: 'home'})
                                })
                        }

                    })
                    .catch (response => {
                        console.log(response)
                    });
            }
        }

    }

</script>