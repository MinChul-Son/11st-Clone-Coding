<template>
  <LNB />
  <TheHeader />
</template>

<script>
import LNB from '~/components/LNB'
import TheHeader from '~/components/TheHeader'

export default {
  components: {
    LNB,
    TheHeader
  }
}
</script>

<style lang="scss">
@import "~/scss/main";
</style>