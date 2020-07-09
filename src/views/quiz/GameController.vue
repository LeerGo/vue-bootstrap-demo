<template>
  <b-card class="h-100 mt-5" no-body>
    <LoadingIcon v-if="loading"></LoadingIcon>
    <Question :question="currentQuestion" @answer-submitted="onAnswerSubmit" v-else></Question>
  </b-card>
</template>

<script>
  import axios from 'axios'
  import EventBus from "../../eventbus";
  import ShuffleMixin from "../../mixins/shuffleMixin";
  import Question from "../../components/quiz/Question";
  import LoadingIcon from "../../components/quiz/LoadingIcon";

  export default {
    name: "GameController",
    mixins: [ShuffleMixin],
    components: {
      Question,
      LoadingIcon
    },
    props: {
      number: {
        default: '10',
        type: String,
        required: true
      },
      category: String,
      difficulty: String,
      type: String
    },
    data() {
      return {
        questions: [],
        currentQuestion: {},
        loading: true
      }
    },
    created() {
      this.fetchQuestion()
    },
    methods: {
      fetchQuestion() {
        let url = `https://opentdb.com/api.php?amount=${this.number}`
        if(this.category) url += `&category=${this.category}`
        if(this.difficulty) url += `&difficulty=${this.difficulty}`
        if(this.type) url += `&type=${this.type}`

        axios.get(url)
          .then(resp => resp.data)
          .then(resp => {
            if(resp.response_code === 0) {
              this.setQuestions(resp)
            } else {
              EventBus.$emit('alert-error', 'Bad game settings. Try another combination.')
              this.$router.replace({ name: 'quiz' })
            }
          })
      },
      onAnswerSubmit(answer) {
        this.currentQuestion.correct = this.currentQuestion.questionData.correct_answer === answer;
        this.currentQuestion.userAnswer = answer
        this.nextQuestion()
      },
      setQuestions(resp) {
        resp.results.forEach(qst => {
          // 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
          const answers = this.shuffleArray([qst.correct_answer, ...qst.incorrect_answers])
          const question = {
            questionData: qst,
            answers: answers,
            userAnswer: null,
            correct: null
          }
          this.questions.push(question)
        })
        this.$root.$data.state = this.questions
        this.currentQuestion = this.questions[0]
        this.loading = false
      },
      nextQuestion() {
        const unansweredQuestions = this.questions.filter(q => !q.userAnswer)
        if(unansweredQuestions.length > 0) {
          this.currentQuestion = unansweredQuestions[0]
        } else {
          this.$router.replace({ name: 'quiz-result' })
        }
      }
    }
  }
</script>