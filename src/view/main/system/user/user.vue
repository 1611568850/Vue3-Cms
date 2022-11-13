<template>
  <div class="user">
    <div class="search">
      <ShFrom v-bind="searchformItemConfig"></ShFrom>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
// import ShFrom from '@/base-ui/form'
import ShFrom from '@/base-ui/form'
import searchformItemConfig from './config/searchConfig'
</script>

<style scoped></style>
