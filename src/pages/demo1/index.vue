<template>
  <div>
    <h2>demo1</h2>
    <hr />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"> </el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "demo1",
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    //TODO
    handleClick(tab, event) {
      console.log(tab, event);
      this.activeName === "first"
        ? this.$path === "/home/demo1/people"
          ? ""
          : this.$router.push("/home/demo1/people")
        : this.$path === "/home/demo1"
        ? this.$router.push("/home/demo1")
        : "";

      // this.$router.push({
      //   name: "/home/demo1/people",
      // });
    },
  },
};
</script>