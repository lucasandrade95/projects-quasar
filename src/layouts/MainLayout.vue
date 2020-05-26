<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Projetos</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img
      src="../statics/mountains.png"
      class="header-image absolute-top"
      />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="1200">
      <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
        <q-item to="/" exact clickable v-ripple>

            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Projeto
            </q-item-section>
          </q-item>
<!--        <q-item to="/portfolio" exact clickable v-ripple>-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="code" />-->
<!--          </q-item-section>-->

<!--          <q-item-section>-->
<!--           Github-->
<!--          </q-item-section>-->
<!--        </q-item>-->
        <q-item
          to="/roulette"
          exact
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="play_circle_filled" />
          </q-item-section>

          <q-item-section>
            Roleta
          </q-item-section>
        </q-item>

<!--        <q-item to="/help" exact clickable v-ripple>-->
<!--          <q-item-section avatar>-->
<!--            <q-icon name="forum" />-->
<!--          </q-item-section>-->

<!--          <q-item-section>-->
<!--            Suporte-->
<!--          </q-item-section>-->
<!--        </q-item>-->
      </q-scroll-area>

      <q-img class="absolute-top" src="../statics/mountains.png" style="height: 192px">
        <div class="absolute-bottom-left bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" alt="avatar">
          </q-avatar>
          <div class="text-bold">Lucas Andrade</div>
          <div class="q-ma-sm-sm">@olucasandrade</div>
        </div>
      </q-img>
      <q-btn class="button-floating" title="PROMOÇÂO!" to="/roulette">
        <div class="button-floating-gift">
          <q-icon name="loyalty" />
        </div>
      </q-btn>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  },
  computed: {
    todaysDate () {
      const timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd, D MMMM')
    }
  }
}
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.4;
  }
  .button-floating {
    position: fixed;
    top: 419.5px;
    width: 50px;
    height: 100px;
    border: none;
    border-radius: 0px 90px 90px 0px;
    z-index: 1003;
    background-color: rgb(102, 23, 203);
    cursor: pointer;
    display: table;
  }
  .button-floating-gift {
    color: rgb(255, 255, 255);
  }
</style>
