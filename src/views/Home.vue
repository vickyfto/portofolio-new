<template>
  <div class="home main-content">
    <div class="left-content">
      <h1>Front-end developer</h1>
      <router-link to="/portfolio/one">
        <button style="border: 1px solid; margin-top: 3em">
          PORTOFOLIO PROJECT
        </button>
      </router-link>
    </div>

    <div class="right-content img1"></div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped>
.img1 {
  background: url("../assets/portofolio.svg") no-repeat center;
  position: relative;
  height: 100vh;
  width: 100%;
}
</style>
