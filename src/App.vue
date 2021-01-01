<template>
  <div id="app">
    <template>
      <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="@/assets/code.svg"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" @click="logout()" v-if="isLoggedIn">
                        <strong>Logout</strong>
                    </a>
                    <a class="button is-light" @click="login()" v-if="!isLoggedIn">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <router-view class="container main"/>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    computed: mapState ('auth', ['user', 'isLoggedIn']),
    methods: mapActions ('auth', ['logout', 'login']),
}
</script>
<style lang="scss">
.main {
    margin-top: 2em;
}
</style>
