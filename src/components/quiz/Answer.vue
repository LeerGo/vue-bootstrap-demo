<template>
  <div>
    <b-card no-body class="answer-card rounded-0">
      <QuestionBody :question-data="question.questionData"></QuestionBody>

      <b-card-body class="pt-0 text-left">
        <hr class="mt-0">
        <b-card-text class="px-2" v-html="question.questionData.correct_answer"/>
        <b-card-text class="px-2 success"
                     :class="{'custom-success':question.correct, 'custom-danger':!question.correct}"
                     v-html="question.userAnswer"/>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  import QuestionBody from "./QuestionBody";

  export default {
    name: "Answer",
    components: { QuestionBody },
    props: {
      question: {
        required: true,
        type: Object
      }
    }
  }
</script>