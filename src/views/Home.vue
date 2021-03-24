<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>Front-end developer</h1>

      <button style="margin-top:2em;">
        <router-link to="/portfolio/one">PORTOFOLIO PROJECT</router-link>
      </button>
    </div>

    <div class="right-content img1">
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
.img1 {
  background: url("../assets/portofolio.svg") no-repeat center;
  position:relative;
  height:100vh;
  width: 100%;
}
</style>
