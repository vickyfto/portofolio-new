<template>
  <div class="two main-content">
    <div class="left-content slideUp">
      <router-link to="/portfolio/one">
        <img src="../assets/arrow-up.svg" class="arrow arrow-up" />
      </router-link>

      <h1>Vue Quiz</h1>

      <p class="subtxt">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p class="subtxt">
        <a href="">See Project</a>
      </p>

      <router-link to="/portfolio/three">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down" />
      </router-link>
    </div>

    <div class="right-content img2"></div>
  </div>
</template>

<script>
export default {
  name: "two",
};
</script>

<style lang="scss" scoped>
$page_color: #48b886;

h1 {
  color: $page_color !important;
}

.img2 {
  background: url("../assets/vue-quiz.png");
  background-size: cover;
  background-position: 50%;
  margin-top: 5%;
  height: 110%;

  img {
    width: 100%;
  }
}
</style>
