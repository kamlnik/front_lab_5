<template>
  <div>
    <div class="clickers-grid">
      <Clicker v-for="index in 100":key="index":amount="(index % 3) + 1" @button-clicked="() => showAlert(index)">
        <template #default>
          <button class="custom-btn"  :style="{ backgroundColor: getColor(index) }">
            нажмите (+{{ (index % 3) + 1 }})
          </button>
        </template>
      </Clicker>
    </div>
  </div>
</template>

<script setup>
import Clicker from './components/Clicker.vue';

function showAlert(clickerNumber) {
  alert(`Кликер ${clickerNumber} был нажат`);
}

const getColor = (i) => {
  const colors = ['#ff9800', '#f44336', '#2196f3'];
  return colors[i % colors.length];
};
</script>

<style scoped>
.clickers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.custom-btn {
  border: none;
  color: rgb(255, 255, 255);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
}
</style>