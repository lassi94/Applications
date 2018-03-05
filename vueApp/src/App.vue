<template>
  <div id="App">
    <nav class="navbar has-shadow" role="navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">MyCompany</a>
        
          <div class="navbar-burger burger is-hoverable" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
          <div class="navbar-start">
            
          </div>
          <div class="navbar-end">
            <router-link to="/" class="navbar-item r-item">Home</router-link>
            <router-link to="/about" class="navbar-item r-item">About</router-link>
            <router-link to="/features" class="navbar-item r-item">Features</router-link>
            <router-link to="/faq" class="navbar-item r-item">FAQ</router-link>
          </div>

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Join now</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>


    <router-view/>

    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>This is a footer. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="https://facebook.com"><i class="fab fa-facebook-f"></i></a>
            <a class="icon" href="https://twitter.com"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return{
    isActive: false
    }
  },
  methods: {
    toggleNav: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">

@import '../node_modules/bulma/bulma.sass'
@import 'mq.sass'

.navbar
  background-color: #383838
  a:hover
    color: gray
    background-color: #383838

.navbar-brand a
  color:#fff
  font-weight: bold

a.r-item
  color: #C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.burger span
  background-color: #C1C1C1

.footer
  background-color: $primary !important
  color: #fff
  font-weight: light
  font-size: 1.1em

  .icon
    color: #fff
    margin-left: 20px
    
    .fab
      font-size: 2em

</style>
