<template>
  <header :class="{'active' : scrollPos > 0}" class="header">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img :src="logo" alt="logo">
        </NuxtLink>
      </div>
      <nav class="nav">
        <ul class="nav__links">
          <li v-for="link in menuLinks" :key="link.name">
            <NuxtLink :to="link.path" class="nav__link">
              {{ link.name }}
            </NuxtLink>
          </li>
          <SocialIcons />
        </ul>
        <div class="burger">
          <div class="burger__line" />
          <div class="burger__line" />
          <div class="burger__line" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from '../assets/img/elladium-logo.png'
import menuLinks from '../config/menu.js'
import SocialIcons from './SocialIcons.vue'

export default {
  name: 'Header',
  components: { SocialIcons },
  props: {
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      logo,
      menuLinks,
      scrollPos: 0
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)

    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav__links')
    const links = document.querySelectorAll('.nav__link')

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active')
      burger.classList.toggle('toggle')
    })
    links.forEach((link, index) => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-active')
        burger.classList.toggle('toggle')
      })
    })
  },
  methods: {
    handleScroll () {
      this.scrollPos = window.scrollY
    }
  }
}
</script>
