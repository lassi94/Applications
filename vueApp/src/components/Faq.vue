<template>
  <div class="faq page">
    <div class="container">
        <section class="section">
            <h1 class="title">FAQ</h1>
            <div class="column is-three-fifths is-paddingless">
                <h2 class="subtitle is-4"></h2>
            </div>

            <div class="columns" v-if="faqs && faqs.length">
                <div class="column is-one-third" v-for="faq of faqs">
                    <div class="card">
                        <div class="card-content">
                            <p class="title">{{ faq.title }}</p>
                            <p class="answer">{{ faq.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Faq',

  data: () => ({
      faqs: [],
      errors: []
  }),

  created(){
      axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
          this.faqs = response.data.slice(0,10)
      })
      .catch(e => {
          this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

@import '../mq.sass'

.pd
    padding: 2.5em 0 1.5em 0

.answer
    margin-top: 10px !important
    color: gray

.columns
    flex-wrap: wrap
</style>
