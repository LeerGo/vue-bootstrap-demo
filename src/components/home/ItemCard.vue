<template>
  <b-container class="mt-5">
    <b-card
      :title="item.title"
      :img-src="item.banner"
      img-top
      style="max-width: 14rem;">

      <b-card-text> {{item.desc}}</b-card-text>
      <b-button :to="{ name: item.url}" variant="primary">查看演示</b-button>
    </b-card>
  </b-container>
</template>

<script>
  export default {
    name: "ItemCard",
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>