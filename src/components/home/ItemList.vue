<template>
  <div>
    <b-container v-if="items.length" class="text-center">
      <b-row>
        <div v-bind:key="item.index" v-for="item in items">
          <b-col>
            <ItemCard :item="item"></ItemCard>
          </b-col>
        </div>
      </b-row>
    </b-container>
    <div v-else class="mt-5">
      <h5 class="text-center">暂无 Demo 视图</h5>
    </div>
  </div>
</template>

<script>
  import ItemCard from "./ItemCard";

  export default {
    name: "ItemList",
    components: { ItemCard },
    data() {
      return {
        items: []
      }
    },
    created() {
      this.setItems()
    },
    methods: {
      setItems() {
        return this.items = [
          {
            'title': 'todo-list',
            'desc': '一个人任务列表演示',
            'banner': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594291564673&di=c8a30772362e2cc5f449024a3184f6af&imgtype=0&src=http%3A%2F%2Fwww.hrtechnation.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fchecklist-750x430.png',
            'url': 'todo'
          },
          {
            'title': 'vue-quiz',
            'desc': '一个知识问答游戏的演示',
            'banner': 'https://pic2.zhimg.com/v2-2bb2ff443c69c3793a871a7a3fd08552_1440w.jpg',
            'url': 'quiz'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>