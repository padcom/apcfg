<template>
  <div class="stats">
    <div class="item">Test</div>
    <div class="configurator-version">{{ version }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { version } from '../../package.json'

export default defineComponent({
  name: 'Stats',
  data() {
    return {
    }
  },
  computed: {
    version() {
      return version
    }
  },
})
</script>

<style lang="scss" scoped>
.stats {
  display: flex;
  font-size: var(--default-font-size);
  height: 1.3rem;
}

.item {
  padding: 2px 4px;
  margin-right: 2px;
  border: solid 1px gray;
}

.error {
  color: red;
}

.configurator-version {
  align-self: center;
  margin-left: auto;
  margin-right: 8px;
}
</style>
