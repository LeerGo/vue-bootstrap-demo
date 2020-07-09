<template>
  <header>
    <b-navbar variant="primary" type="light" class="navbar bd-navbar" fixed="top" sticky>
      <b-navbar-brand class="text-white" href="/">{{title}}</b-navbar-brand>
      <b-nav-text class="text-white">{{$route.name}}</b-nav-text>
    </b-navbar>
  </header>
</template>

<script>
  export default {
    name: "Navbar",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .bd-navbar {
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, .25), inset 0 -1px 5px rgba(0, 0, 0, .25);
  }
</style>