<template>
  <div class="about">
      <h1>Hello {{ t_name }}, this is an about page</h1>
      <p>LoremIpsum laalallaa</p>
  </div>
</template>

<script>
export default {
  data(){
      return{
          t_name: this.$route.params.name
      }
  }
}
</script>

