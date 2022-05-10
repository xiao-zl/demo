<template>
  <div>
    <el-row>
      <el-col :span="24">
        <RouterHead />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <router-link to="/home/demo1">
          <el-button>demo1</el-button>
        </router-link>
        <router-link to="/home/demo2">
          <el-button>demo2</el-button>
        </router-link>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RouterHead from "../components/RouterHead.vue";
export default {
  name: "Home",
  components: {
    RouterHead,
  },
  data() {
    return {};
  },
};
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>