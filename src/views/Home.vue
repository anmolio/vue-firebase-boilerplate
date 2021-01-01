<template>
  <div class="home">
    <button class="button is-danger is-outlined" @click="login()">Login with google</button>
    <button class="button is-danger is-outlined" @click="logout()">Logout</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
import { createNamespacedHelpers } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions('auth', ['login', 'logout']),
};
</script>
