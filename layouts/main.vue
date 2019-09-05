<template>
  <div>
    <NavHeader />
    <nuxt />
  </div>
</template>

<script>
import NavHeader from '~/components/navigation/Navigation.vue'

export default {
  components: {
    NavHeader
  }
}
</script>
