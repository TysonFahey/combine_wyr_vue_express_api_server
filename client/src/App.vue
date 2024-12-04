<script setup>
import WouldYouRather from "./components/WouldYouRather.vue";

import { ref, onMounted } from "vue";
import wyrService from "./services/wyrService";

const wyrQuestion = ref("");
const wyrAnswer1 = ref("");
const wyrAnswer2 = ref("");

// This will store the user's answer after making a choice

const userSelection = ref("");

// onMounted will be called whenever it is on the screen. in this case app.vue is our main component so it will be right away
onMounted(() => {
  wyrService.getRandomWYR().then((wyrData) => {
    // expect data to be something like
    //{"question":"Have a cat-sized elephant or an elephant-sized cat?",
    //"answer1":"Cat-sized elephant",
    //"answer2":"Elephant-sized cat"}
    
    wyrQuestion.value = wyrData.question;
    wyrAnswer1.value = wyrData.answer1;
    wyrAnswer2.value = wyrData.answer2;
  });
});

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! you chose ${userChoice}`;
  // updates whatever is in const userSelection with whatever the user chose (userChoice)

  // choice.value in WouldYouRather.vue will be included in the answer selected event when it is emited.
  // When the event happens (when WouldYouRather shown below recieves an answer-selected event, it will call updateUserSelection) and whatever is in choice.value in WouldYouRather.vue will end up in the above function in userChoice in order to utalize it in App.vue.
  // in this case we use it to set it to userSelection.value.
}
</script>

<template>
  <div id="app-component">
    <h1>Hello Would You Rather?</h1>

    <WouldYouRather
      v-bind:question="wyrQuestion"
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection"
    >
    </WouldYouRather>
    <!-- Here we use bind to connect "question" from WouldYouRather file to the wyrQuestion const defined in the App.vue files script. It sends all of the data to the props in WouldYouRather.vue -->
    <p>{{ userSelection }}</p>
  </div>
</template>
<!-- Vue specific component-->

<style scoped>
p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
#app-component {
  background-color: darkolivegreen;
}
</style>
