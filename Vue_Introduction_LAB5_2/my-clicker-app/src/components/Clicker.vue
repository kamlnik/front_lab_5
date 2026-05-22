<template>
  <div class="clicker">
    <span class="counter">{{ count }}</span>
    <div class="click-area" @click="increment">
      <slot>
        <button class="default-btn">+{{ amount }}</button>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// пропс amount (п.6)
const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits(['button-clicked']);

const count = ref(0);

const increment = () => {
  count.value += props.amount;
  emit('button-clicked');
};



</script>