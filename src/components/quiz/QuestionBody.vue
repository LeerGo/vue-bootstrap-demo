<template>
  <div>
    <b-card-header :class="variant" class="d-flex justify-content-center border-bottom-0">
      <div class="text-center">
        <div>{{questionData.category}}</div>
        <div class="text-capitalize font-italic">{{questionData.difficulty}}</div>
      </div>
    </b-card-header>

    <b-card-body>
      <b-card-text class="font-weight-bold" v-html="questionData.question"/>
    </b-card-body>
  </div>
</template>

<script>
  export default {
    name: "QuestionBody",
    props: {
      questionData: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        variants: {
          easy: 'custom-success', medium: 'custom-warning', hard: 'custom-danger', default: 'custom-info'
        },
        variant: 'custom-info'
      }
    },
    methods: {
      setVariant() {
        switch(this.questionData.difficulty) {
          case "easy":
            this.variant = this.variants.easy
            break
          case "medium":
            this.variant = this.variants.medium
            break
          case "hard":
            this.variant = this.variants.hard
            break
          default:
            this.variant = this.variants.default
            break
        }
      }
    },
    mounted() {
      this.setVariant()
    }
  }
</script>

<docs>
  Simple component displaying question category, difficulty and question text.
  Used on both Question component and Answer component.
</docs>