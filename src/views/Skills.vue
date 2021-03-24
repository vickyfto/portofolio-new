<template>
  <div class="about main-content">
    <div class="left-content" style="background-color:#4F4D64;">
      <p class="subtxt" style="color:white;">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
        laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis libero optio unde doloribus hic. Voluptate porro eligendi explicabo soluta cumque qui. Odio voluptatum fugiat sint iste, possimus neque. Tempore, excepturi est sequi ipsum culpa quasi velit suscipit temporibus perferendis voluptatem, 
      </p>
      <button style="color:white; border: 1px solid white; margin-top:3em;">
        <router-link style="color:white !important;" to="/portfolio/one">PORTOFOLIO PROJECT</router-link>
      </button>
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
