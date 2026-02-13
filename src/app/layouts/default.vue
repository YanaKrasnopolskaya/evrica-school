<script setup lang="ts">
import { TheHeader } from '~/widgets/header';
import { TheFooter } from '~/widgets/footer';
import {TheContacts} from "~/widgets/contacts";
</script>

<template>
  <div>
    <TheHeader />
    <slot />
    <TheContacts />
    <TheFooter />
  </div>
</template>
