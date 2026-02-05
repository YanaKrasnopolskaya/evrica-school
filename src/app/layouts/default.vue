<script setup lang="ts">
import { TheHeader } from '~/widgets/header';
import { TheFooter } from '~/widgets/footer';
</script>

<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
