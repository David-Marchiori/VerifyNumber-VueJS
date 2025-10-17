<script setup>
import { ref } from 'vue';
import InputPhoneNumber from './components/InputPhoneNumber.vue'
import {useVerifyNumber} from "./composable/useVerifyNumber.js"

const getNumber = ref("");

const {mensagemErro} = useVerifyNumber(getNumber);

</script>

<template>
  <h2>Preencha o numero de celular, para valida-lo</h2>
  <InputPhoneNumber v-model="getNumber"/>
  <div class="validadorcontainer" style="text-align: left;">
{{ mensagemErro }}

</div>


</template>

<style scoped>

</style>
