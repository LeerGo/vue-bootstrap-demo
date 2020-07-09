<template>
  <div id="app">
    <Navbar title="Bootstrap-Vue Demo"></Navbar>
    <div class="d-flex justify-content-center">
      <router-view>/</router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";

  export default {
    name: 'App',
    components: { Navbar },
  }
</script>
<style>
  /* Custom variants instead of bootstraps */
  .custom-success {
    background-color: #d4edda !important;
  }

  .btn.custom-success {
    background-color: #59dd99 !important;
    border-color: #59aa73 !important;
  }

  .btn.custom-success:hover {
    background-color: #59aa73 !important;
    border-color: #59aa73 !important;
  }

  .custom-warning {
    background-color: rgba(255, 193, 7, 0.211) !important;
  }


  .custom-danger {
    background-color: #f8d7da !important;
  }

  .custom-info {
    background-color: #343a40 !important;
  }
</style>