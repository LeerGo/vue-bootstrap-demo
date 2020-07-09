<template>
  <div class="h-100 mt-5">
    <b-card-header>You Score: {{score}}/{{maxScore}}</b-card-header>
    <Answer v-for="(question,index) of questions" :key="index" :question="question"></Answer>
  </div>
</template>

<script>
  import Answer from "../../components/quiz/Answer";

  export default {
    name: "GameOver",
    components: { Answer },
    data() {
      return {
        questions: [],
        score: 0,
        maxScore: 0
      }
    },
    created() {
      this.setQuestions()
    },
    methods: {
      setQuestions() {
        this.questions = this.$root.$data.state || [];
        this.$root.$data.state = [];
        this.setScore();
      },
      setScore() {
        this.maxScore = this.questions.length * 10;
        this.score = this.questions.filter(question => question.correct).length * 10;
      }
    }
  }
</script>