<template>
    <div id="app">
        <!-- App.vue -->
        <v-app>
            <v-app-bar app dark>
                <v-toolbar-title>明日方舟 公招计算器 By Yeck</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="startGitee">
                    <svg
                        t="1652374235456"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1418"
                        width="26"
                        height="26"
                    >
                        <path
                            d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                            fill="#FFFFFF"
                            p-id="1419"
                        ></path>
                    </svg>
                </v-btn>

                <v-btn icon @click="startGithub">
                    <svg
                        t="1652374350657"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2375"
                        width="30"
                        height="30"
                    >
                        <path
                            d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                            p-id="2376"
                            fill="#FFFFFF"
                        ></path>
                    </svg>
                </v-btn>
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

<script>
export default {
    methods: {
        startGitee() {
            window.open("https://gitee.com/YeEeck/ark-hr-tool", "_blank")
        },
        startGithub() {
            window.open("https://github.com/YeEeck/ark-hr-tool", "_blank")
        },
    },
}
</script>

<style>
#app {
    background-color: rgb(50, 50, 50);
    font-family: PingFang SC, HarmonyOS_Medium, Helvetica Neue, Microsoft YaHei,
        sans-serif;
}
</style>
