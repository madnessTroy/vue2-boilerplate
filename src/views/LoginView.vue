<template>
    <div>
        <div>Login view</div>
        <input type="text" v-model="username">
        <input type="text" v-model="password">
        <button class="btn btn-primary" @click="onLogin">Sign in</button>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onLogin() {
            const payload = {
                token: 'toantest123123',
                expiredIn: moment().add(1, 'hour')
            }
            this.$store.dispatch('Login', payload)
            const redirectPath = this.$route.query.redirect || 'dashboard.index'
            this.$router.push({ path: redirectPath.toString() })
        }
    }
}
</script>
