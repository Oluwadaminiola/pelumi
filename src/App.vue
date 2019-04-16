<template>
  <div id="app">
    <div id="sidebar" >
      <button class="btn btn-secondary" v-on:click="closeSide" ><i class="icon ion-md-redo"></i></button>
      <ul class="list-unstyled" >
        <li class="my-5 px-2">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li class="my-5 px-2">
          <router-link to="/work">
            Work
          </router-link>
        </li>
        <li class="my-5 px-2">
          <router-link to="/contactme">
            Contact Me
          </router-link>
        </li>
      </ul>
    </div>
    <div id="content" >
      <nav class="navbar fixed-top" >
        <router-link to="/" class="navbar-brand">
          Pelumi Oni.
        </router-link>
        <button class="btn btn-open" v-on:click="openSide" >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openSide(){
      document.getElementById('sidebar').style.width = '80px';
      document.getElementById('content').style.marginRight = '80px';
    },
    closeSide(){
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('content').style.marginRight = '0';
    }
  },
}
</script>

<style>

</style>
