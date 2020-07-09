<template>
  <div>
    <LoadingIcon v-if="loading"></LoadingIcon>

    <div v-else>
      <b-form @submit="onSubmit">

        <b-form-group
          id="input-group-number-of-questions"
          label="Select a number"
          label-for="input-number-of-questions"
          class="text-left">
          <b-input
            id="input-number-of-questions"
            v-model="form.number"
            type="number"
            required
            :min="minQuestions"
            :max="maxQuestions"
            :placeholder="`Between ${minQuestions} and ${maxQuestions}`"/>
        </b-form-group>

        <b-form-group id="input-group-category">
          <b-select
            id="input-number-of-questions"
            v-model="form.category"
            required
            :options="categories"
            :placeholder="`Category`"/>
        </b-form-group>

        <b-form-group id="input-group-difficulty">
          <b-select
            id="input-number-of-questions"
            v-model="form.difficulty"
            required
            :options="difficulties"
            :placeholder="`Difficulty`"/>
        </b-form-group>

        <b-form-group id="input-group-type">
          <b-select
            id="input-number-of-questions"
            v-model="form.type"
            required
            :options="types"
            :placeholder="`Type`"/>
        </b-form-group>

        <b-button type="submit" class="custom-success">Submit</b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
  import LoadingIcon from "./LoadingIcon";
  import axios from 'axios'

  export default {
    components: { LoadingIcon },
    data() {
      return {
        form: {
          number: '',
          category: '',
          difficulty: '',
          type: ''
        },
        loading: true,
        categories: [{ text: 'Category', value: '' }],
        difficulties: [{ text: 'Difficulty', value: '' }, 'Easy', 'Medium', 'Hard'],
        types: [
          { text: 'Type', value: '' },
          { text: 'Multiple Choice', value: 'multiple' },
          { text: 'True or False', value: 'boolean' }
        ],
        minQuestions: 1,
        maxQuestions: 20,
      }
    },
    created() {
      this.fetchCategories()
    },
    methods: {
      fetchCategories() {
        axios.get('https://opentdb.com/api_category.php')
          .then(resp => resp.data)
          .then(resp => {
            resp.trivia_categories.forEach(category => {
              this.categories.push({ text: category.name, value: `${category.id}` })
            });
            this.loading = false;
          })
      },
      onSubmit(event) {
        event.preventDefault()
        this.$emit('form-submitted', this.form)
      }
    }
  }
</script>