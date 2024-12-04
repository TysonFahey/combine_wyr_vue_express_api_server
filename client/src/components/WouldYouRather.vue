<script setup>
import { ref, watch } from "vue";

defineProps({
  // its going to expect these three pieces of data
  question: String, // String needs upper case S. it is a type
  answer1: String,
  answer2: String,
});

const choice = ref(null); // represents what the user chooses. null so that it doesn't load with both selected.

// components have to specify what kind of event they emit.
// Vue reccomends at least two words separated by - as to not get it confused with html events which are all one word
const emit = defineEmits(["answer-selected"]);

// function choiceMade() {
//   // emit event to tell parent the user has made a choice
//   emit("answer-selected", choice.value);
// }

watch(choice, () => {
  emit("answer-selected", choice.value);
});
// watches the choice variable. when it changes, emit the event that tells the parent the user has made a choice
</script>

<template>
  <div id="wyr">
    <h2>Make your choice!</h2>

    <p>{{ question }}</p>
    <!-- Displays the question prop defined at the top of this page in defineProps-->
    <div>
      <input
        v-model="choice"
        v-bind:value="answer1"
        type="radio"
        id="answer-1"
      />
      <!-- v-model="choice" make them work as radio buttons. v-bind:value means when it is selected its effective value will be answer 1 (triangle)... v-on:change="function" tells the parent when a change is made-->
      <label for="answer-1">{{ answer1 }}</label>
      <!-- for="answer-1" allows you to click on the label to select. Otherwise you would need to select in the circle of the radio button-->

      <input
        v-model="choice"
        v-bind:value="answer2"
        type="radio"
        id="answer-2"
      />
      <label for="answer-2">{{ answer2 }}</label>
    </div>
  </div>
  <!-- whole template-->
</template>

<style scoped>
#wyr {
  background-color: darkblue;
}

p {
  font-family: monospace;
}
</style>
