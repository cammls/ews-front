<template>

  <div>
    <h1>Home</h1>
    <div>
      Welcome, {{getEmail}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters(['getEmail'])
  }
}
</script>
