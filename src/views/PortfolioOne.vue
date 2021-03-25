<template>
  <div class="one main-content">
    <div class="left-content slideUp">
      <h1>React Quiz</h1>

      <p class="subtxt mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <p class="subtxt">
        <a href="https://vickyfto.github.io/react-simple-quiz/" target="_blank">
          See Project
        </a>
      </p>

      <router-link to="/portfolio/two">
        <img src="../assets/arrow-down.svg" class="arrow arrow-down" />
      </router-link>
    </div>

    <div class="right-content img2">
      <img src="../assets/react-quiz.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "one",
};
</script>

<style lang="scss" scoped>
$page_color: #625b7e;

h1 {
  color: $page_color !important;
}

.img2 {
  // background: $page_color;

  img {
    margin-top: 29%;
    width: 100%;
    height: 100%;
  }
}
</style>
