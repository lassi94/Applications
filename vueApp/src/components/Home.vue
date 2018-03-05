<template>
  <div class="hello">
    <section class="hero is-primary is-bold">
        <div class="hero-body">
          <div class="container">
          <h1 class="title">
            {{ heading }}
          </h1>
          <div class="column is-two-thirds is-paddingless">
            <h2 class="subtitle is-4">
              {{ subheading }}
            </h2>
          </div>
            <a class="button is-primary is-large" id="services" href="#">Our Services</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fas fa-cog"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong id="providement">{{ provide }}</strong></p>
          </div>
          <div class="column">
            <p id="info">{{ information }}</p>
          </div>
        </div>

      <div class="columns pd">

        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                {{ cardContent }}
              </p>
              <p class="subtitle">
                -Peter Pan
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                {{ cardContent }}
              </p>
              <p class="subtitle">
                -Sam Stark
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                {{ cardContent }}
              </p>
              <p class="subtitle">
                -Tony Popper
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
     heading: 'Soaring to new heights',
     subheading: 'Lorem impsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed tellus nisl. Nunc mattis id diam sollicitudin convallis. Quisque risus ligula, sollicitudin vitae vestibulum vitae, tincidunt in urna.',
     provide: 'We provide solutions for you so that your company can survive in this crazy world',
     information: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
     cardContent: '"I think it is an absoluutely excellent tool for our business. I cant survive without this thing"'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass"scoped>

@import '../mq.sass'

.hero
  background: url('')
  background-size: cover

  .title
    +mobile
      font-weight: bold
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 65px
  color: $primary

#services
  +desktop
    margin-bottom: 2rem

.pd
  +tablet
    padding: 2rem

#info
  font-size: 24px
  font-weight: light

#providement
  font-size: 32px

.card-content
  padding: 56px 90px

.card-content p.subtitle
  margin-top: 20px
  font-weight: lighter

.card-content p.title
  font-weight: lighter

</style>
