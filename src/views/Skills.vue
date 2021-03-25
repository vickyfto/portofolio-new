<template>
  <div class="about main-content">
    <div class="left-content" style="background-color: #4f4d64">
      <p class="subtxt mt-5" style="color: white">
        <b>noted</b> : <br />
        I'm working and learning at night and I keep developing myself to get
        better at coding. what do I learn? I learn back-end and want to become a
        full-stack Web Developer
      </p>
      <router-link
        style="color: white !important; color: white; margin-top: 3em"
        to="/portfolio/one"
      >
        <button class="text-white mt-5">PORTOFOLIO PROJECT</button>
      </router-link>
    </div>

    <div class="right-content">
      <div>
        <div>
          <ul class="list-group list-group-horizontal" style="font-size: 30px">
            <li class="list-group-item rmv-border">
              <img src="../assets/html.png" alt="html" />
              <!-- <i class="fab fa-html5 animate__animated animate__bounce"></i> -->
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/css.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/javascript.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/react-.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/vue.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/mysql.png" alt="css" />
            </li>
          </ul>
        </div>
        <div>
          <ul class="list-group list-group-horizontal" style="font-size: 30px">
            <li class="list-group-item rmv-border">
              <img src="../assets/php.png" alt="html" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/github.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/bootstrap.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/cli.png" alt="css" />
            </li>
            <li class="list-group-item rmv-border">
              <img src="../assets/jquery.png" alt="css" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
};
</script>

<style scoped>
.rmv-border {
  border: none;
}
/* .fs-icon {
          font-size: ;
    } */
</style>
