<template>
  <div id="app">
    <div class="container">
      <div class="inner">
        <nav>
          <router-link to="/" id="logo">Vicky Fitrio</router-link>

          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/skills">Skills</router-link>
            </li>
            <li>
              <router-link to="/experience">experience</router-link>
            </li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./global.scss">
</style>
