<template>
  <div id="index">
    <h3>商城</h3>
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
      news: ["服务1111", "服务1111", "服务1111", "服务1111"]
    };
  }
};
</script>