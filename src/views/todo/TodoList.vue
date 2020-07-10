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
      <b-container v-bind:key="index" v-for="(task,index) in taskQueue" class="mt-3 pl-3">
        <b-row>
          <b-col>
            <b-avatar variant="success" :text="(index+1).toString()" size="1.5rem"></b-avatar>
            <p class="ml-3 d-inline"> {{task.name}}
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
        this.taskQueue = this.taskQueue.slice(index, 1)
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

<style scoped>

</style>