<template>
    <div style="text-align: left;">
    <label for="phone">Seu numero</label><br></br>
    <input type="tel" name="phone" id="phone" v-bind:value="modelValue" @input="$emit('update:modelValue', $event.target.value)">

    </div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
    modelValue: String
})

</script>