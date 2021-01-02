<template>
  <div class="home">
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
