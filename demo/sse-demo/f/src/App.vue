<script setup>
import { reactive } from "vue";
const dataArr = reactive([]);
const eventSource = new EventSource("/api");
eventSource.onmessage = (e) => {
  if (e.data === "end") {
    eventSource.close();
  } else {
    dataArr.push(e.data);
  }
};
eventSource.onopen = () => {};
eventSource.onerror = (err) => {
  if (eventSource.readyState === EventSource.CLOSED) {
    console.log("sse连接已关闭", err);
  }
};
</script>

<template>
  <div>
    {{ dataArr }}
  </div>
</template>


<style scoped>
</style>
