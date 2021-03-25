<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/portofolio-new" id="logo">Vicky Fitrio</router-link>

          <ul>
            <li>
              <router-link to="/portofolio-new">Home</router-link>
            </li>
            <li>
              <router-link to="/portofolio-new/about">About</router-link>
            </li>
            <li>
              <router-link to="/portofolio-new/skills">Skills</router-link>
            </li>
            <li>
              <router-link to="/portofolio-new/experience"
                >experience</router-link
              >
            </li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./global.scss">
</style>
