<script setup>
import {ref,provide} from 'vue'
import myInput from './components/myInput.vue';
import addButton from './components/addButton.vue';
import deleteButton from './components/deleteButton.vue';
import wordList from './components/wordList.vue';
let words = ref([])
let word = ref('')
provide('word', word)
provide('words', {
  'words': words,
  'deleteWord': deleteWord,
  'addWord':addWord
})
function deleteWord(index) {
  words.value.splice(index,1)
}
function addWord(words,word) {
  words.push(word)
}

</script>

<template>
  <myInput placeholder="请输入单词" ></myInput>
  <addButton></addButton>
  <deleteButton></deleteButton>
  <wordList></wordList>
  <h1>你好Vue</h1>
</template>


