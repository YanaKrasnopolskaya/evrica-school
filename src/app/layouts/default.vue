<script setup lang="ts">
import {AppHeader} from "~/widgets/header";
import {AppFooter} from "~/widgets/footer";
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>