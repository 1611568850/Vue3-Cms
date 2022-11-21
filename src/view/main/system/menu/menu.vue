<template>
  <div class="category">
    <pageTableVue
      :contentTableConfig="menuTableConfig"
      pageName="menu"
    ></pageTableVue>
  </div>
</template>

<script lang="ts" setup>
import pageTableVue from '@/components/page-table'
import menuTableConfig from './config/menuTableConfig'
</script>

<style scoped></style>
