<template>
  <div class="about main-content">
    <div class="left-content">
      <h1 style="color: white">ABOUT MEEE</h1>
      <p class="subtxt" style="color: white">
        Tech Enthusiast, Work holic, High curiosity and has great courage to
        try.
      </p>
      <div style="margin-top: 3em"></div>
      <router-link
        style="color: white !important; color: white"
        to="/portfolio/one"
      >
        <button class="text-white">PORTOFOLIO PROJECT</button>
      </router-link>
    </div>
    <div class="right-content">
      <p>
        before I got the chance to join several companies I studied front-end
        development self-taught and got guidance to become a front-end developer
        from seniors, CTO even founders. I worked for the first time at the age
        of 14-15 years old as an internet cafe operator and after that I've been
        through a lot to become like this and I am proud to say that people like
        me are very few. meet me and let's talk about life, believe me you will
        be amazed at what i've been through so far
      </p>
      <div>
        <div style="margin-top: 5em; font-size: 19px"><b>Reach me at :</b></div>
        <ul class="list-group list-group-horizontal" style="font-size: 30px">
          <li class="list-group-item rmv-border">
            <a href="mailto:vickyfitrio19@gmail.com" target="_blank">
              <img src="../assets/gmail.png" alt="gmail" />
            </a>
          </li>
          <li class="list-group-item rmv-border">
            <a href="https://msng.link/o/?vickyfto=tg" target="_blank">
              <img src="../assets/telegram.png" alt="telegram" />
            </a>
          </li>
          <li class="list-group-item rmv-border">
            <a
              href="https://api.whatsapp.com/send?phone=6287891505070&text=Assalamualaikum.%20Hi%2C%20Vicky"
              target="_blank"
            >
              <img src="../assets/whatsapp.png" alt="whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-content {
  background-color: #4f4d64;
}

.right-content {
  background: #fff;
  padding: 50px;
  margin-top: 80px;
  display: block;
}

// button {
//   font-size: 1.3em;
//   margin-top: 100px;
// }

.subtxt {
  font-size: 1.5em;
  margin-top: 30px;
}

.rmv-border {
  border: none;
}
</style>
