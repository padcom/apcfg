<template>
  <div class="container">
    <Header class="header" />
    <Content class="content">
      <router-view />
    </Content>
    <Stats class="stats" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Stats from './components/Stats.vue'

export default defineComponent({
  components: {
    Header,
    Content,
    Stats
  },
  async mounted() {
    this.$mavlink.on('data', packet => {
      console.log(packet.debug())
    })
  }
})
</script>
