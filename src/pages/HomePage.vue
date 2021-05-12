<template>
  <Page>
    <PageHeader>Home page</PageHeader>
    <Row>
      <button @click="requestParams">Request parameters</button>
    </Row>
  </Page>
</template>

<script>
import { defineComponent } from 'vue'

import Page from '../components/common/Page.vue'
import PageHeader from '../components/common/PageHeader.vue'

import Row from '../components/common/Row.vue'

import { common } from 'mavlink-mappings'

export default defineComponent({
  name: 'HomePage',
  components: {
    Page,
    PageHeader,
    Row,
  },
  data() {
    return {}
  },
  methods: {
    requestParams() {
      const command = new common.ParamRequestList()
      command.targetSystem = 1
      command.targetComponent = 1
      this.$mavlink.send(command)
    }
  }
})
</script>
