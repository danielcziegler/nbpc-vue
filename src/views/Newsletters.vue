<template>
  <div>
    <v-alert :color="colors.bannerColor" :class="colors.bannerText" dense>
      There are no Newsletters available in our archive yet.. please check back
      again soon!
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Newsletters",
};
</script>
