<template lang="pug">
  option(class="option" :value="country.name") {{ country.name }}
</template>
<script>
export default {
  name: 'country',
  props: ['country']
}
</script>
<style lang="stylus" scope>
div.option 
  width 100%
</style>

