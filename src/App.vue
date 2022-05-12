<template>
  <div id="app">
    <!-- App.vue -->
    <v-app>
      <v-app-bar app dark>
        <v-toolbar-title>明日方舟 公招计算器 By Yeck</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-airplane</v-icon></v-btn>
      </v-app-bar>

      <!-- 根据应用组件来调整你的内容 -->
      <v-main>
        <!-- 给应用提供合适的间距 -->
        <v-container fluid>
          <!-- 如果使用 vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </div>
</template>

<style>
#app {
  background-color: rgb(50, 50, 50);
}
</style>
