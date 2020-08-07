<template>
  <b-container class="mt-5">
    <b-container>
      <b-input-group class="mt-3">
        <b-input v-on:keyup.enter="onEnter" v-model="inputValue" placeholder="请输入待办事项"></b-input>
        <b-input-group-append>
          <b-button variant="primary" @click="onEnter">添加</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-container>

    <div v-if="taskQueue.length">
      <!--
      for循环是非常建议对列表项绑定:key, 这个key应当是固定且唯一的，可以是uuid，或者id。
      不要绑定数组的index, 否则就会出现Vue项目中v-for数组删除第n项元素产生渲染错误。
      这里是一个 bad demo
      -->
      <b-container v-bind:key="index" v-for="(task, index) in taskQueue" class="mt-3 pl-3">
        <b-row>
          <b-col>
            <b-avatar variant="success" :text="(index+1).toString()" size="1.5rem"></b-avatar>
            <p class="ml-3 d-inline"> {{ task.name }}
            </p>
          </b-col>
          <b-col cols="12" md="auto">
            <b-button pill size="sm" variant="outline-success" @click="taskDone(index)" :hidden="task.isDone">
              搞他
            </b-button>
            <b-button pill size="sm" variant="outline-danger" @click="taskDelete(index)" :hidden="!task.isDone">
              搞完
            </b-button>
          </b-col>
        </b-row>
        <hr>
      </b-container>
    </div>

    <div v-else class="mt-5 text-center">
      <h5>所有任务均已完成！</h5>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: "TodoList",
    data() {
      return {
        inputValue: '',
        taskQueue: [],
      }
    },

    methods: {
      taskDone(index) {
        this.taskQueue[index].isDone = true
      },
      taskDelete(index) {
        // 直接对数组进行删除是无效的，所以使用 $delete 方法来处理
        // this.taskQueue.slice(index, 1)
        this.$delete(this.taskQueue, index)
      },
      onEnter() {
        if(this.inputValue.trim() === '') {
          this.$bvToast.toast('请输入任务', {
            title: `警告`,
            variant: 'warning',
          })
        } else {
          const task = {
            name: this.inputValue,
            isDone: false
          }
          this.taskQueue.push(task)
          this.inputValue = ''
        }
      }
    }
  }
</script>