<template>
  <div>
    <QuestionBody :question-data="question.questionData"/>

    <b-card-body class="pt-0">
      <hr>
      <b-form @submit="onSubmit">
        <b-form-group label="Select an answer:" class="text-left">
          <b-form-radio v-for="(ans, index) of question.answers" v-model="answer" :key="index" :value="ans">
            <div v-html="ans"/>
          </b-form-radio>
        </b-form-group>

        <b-button type="submit" class="custom-success">Submit</b-button>
      </b-form>
    </b-card-body>
  </div>
</template>

<script>
  import QuestionBody from "./QuestionBody";

  export default {
    name: "Question",
    components: { QuestionBody },
    props: {
      question: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        answer: null
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        if(this.answer) {
          this.$emit('answer-submitted', this.answer)
          this.answer = null
        }
      }
    }
  }
</script>