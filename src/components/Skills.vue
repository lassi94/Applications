<template>
<div class="container">
  <div class="hello">
    <div class="holder">

      <!--submit data and prevent page uploading-->
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill" v-validate="'min:5'" name="skill">
        
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </transition>      
      </form>
      <ul>
        <transition-group name="list" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
          <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>      
      </ul>
      <p>These are the skills you possess</p>
    </div>
</div>

   <!-- {{ name }}

    If(?) else(:)
    {{ btnState ? 'The button is disabled' : 'The button is active' }}

    <button v-on:click="changeName" v-bind:disabled="btnState">Change name</button>-->
  </div>
</template>

<script src="./Skills.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Skills.css" scoped></style>
