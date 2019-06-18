<template>
  <div id="index">
    <h3>主页</h3>
    <ul>
      <li v-for="(item, index) in news" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      news: ["11111", "222222", "33333333", "444444"]
    };
  }
};
</script>