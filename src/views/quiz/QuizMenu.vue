<template>
  <b-card class="mt-5" no-body>
    <b-card-header class="custom-info text-white font-weight-bold">New Game</b-card-header>
    <b-card-body>
      <GameForm @form-submitted="handleFormSubmitted"/>
    </b-card-body>
  </b-card>
</template>

<script>
  import GameForm from "../../components/quiz/GameForm";

  export default {
    name: "MainMenu",
    components: { GameForm },
    methods: {
      handleFormSubmitted(formData) {
        const query = formData;
        query.difficulty = query.difficulty.toLowerCase()
        this.$router.push({ name: "quiz-game", query: query })
      }
    }
  }
</script>