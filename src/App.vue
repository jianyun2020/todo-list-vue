<template>
  <div class="main">
    <a-input-search
      placeholder="input search text"
      enter-button="Search"
      size="default"
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100px;
}
</style>
