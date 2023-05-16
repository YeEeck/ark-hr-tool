<template>
    <div class="home">
        <v-card dark class="mb-4 card-content">
            <v-card-title>资质</v-card-title>
            <v-card-text>
                <check-btn
                    v-for="(item, i) in words[0]"
                    class="mr-4 mb-2"
                    :checked="select[0][i]"
                    :label="item"
                    :key="i"
                    @change="checkBtnChange(0, i)"
                ></check-btn>
            </v-card-text>
        </v-card>
        <v-card dark class="mb-4 card-content">
            <v-card-title>位置</v-card-title>
            <v-card-text>
                <check-btn
                    v-for="(item, i) in words[1]"
                    class="mr-4 mb-2"
                    :checked="select[1][i]"
                    :label="item"
                    :key="i"
                    @change="checkBtnChange(1, i)"
                ></check-btn>
            </v-card-text>
        </v-card>
        <v-card dark class="mb-4 card-content">
            <v-card-title>职业</v-card-title>
            <v-card-text>
                <check-btn
                    v-for="(item, i) in words[2]"
                    class="mr-4 mb-2"
                    :checked="select[2][i]"
                    :label="item"
                    :key="i"
                    @change="checkBtnChange(2, i)"
                ></check-btn>
            </v-card-text>
        </v-card>
        <v-card dark class="mb-4 card-content">
            <v-card-title>特性</v-card-title>
            <v-card-text>
                <check-btn
                    v-for="(item, i) in words[3]"
                    class="mr-4 mb-2"
                    :checked="select[3][i]"
                    :label="item"
                    :key="i"
                    @change="checkBtnChange(3, i)"
                ></check-btn>
            </v-card-text>
        </v-card>
        <v-btn dark class="mb-4 red darken-1" @click="clear">清空</v-btn>
        <v-chip
            v-if="chipVersion"
            class="ml-4 mb-4"
            close
            color="green"
            outlined
            @click:close="chipVersion = false"
        >
            版本更新至2023年4月22日：卡达、铃兰、断崖
        </v-chip>
        <v-divider></v-divider>
        <hr-result
            :select="select"
            :words="words"
            ref="hrResultRef"
        ></hr-result>
    </div>
</template>

<script>
import CheckBtn from "../components/CheckBtn.vue"
import HrResult from "../components/HrResult.vue"
export default {
    name: "HomeView",
    components: { CheckBtn, HrResult },
    data: () => ({
        width: "40%",
        chipVersion: true,

        select: [
            [false, false, false],
            [false, false],
            [false, false, false, false, false, false, false, false],
            [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
        ],
        update: true,
        words: [
            ["新手", "资深干员", "高级资深干员"],
            ["近战位", "远程位"],
            [
                "先锋干员",
                "重装干员",
                "狙击干员",
                "术师干员",
                "近卫干员",
                "医疗干员",
                "辅助干员",
                "特种干员",
            ],
            [
                "治疗",
                "支援",
                "输出",
                "群攻",
                "减速",
                "生存",
                "防护",
                "削弱",
                "位移",
                "控场",
                "爆发",
                "召唤",
                "快速复活",
                "费用回复",
                "支援机械",
            ],
        ],
        selectBak: "",
    }),
    mounted() {
        if (this._isMobile()) {
            this.width = "100%"
        }
        this.selectBak = JSON.stringify(this.select)
    },
    methods: {
        checkBtnChange(row, col) {
            if (this.select[row][col] == undefined) {
                this.select[row].splice(col, 1, true)
                return
            }
            this.select[row].splice(col, 1, !this.select[row][col])
            this.$refs.hrResultRef.calRes()
        },
        _isMobile() {
            let flag = navigator.userAgent.match(
                /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
            )
            return flag
        },
        clear() {
            this.select = JSON.parse(this.selectBak)
            this.$nextTick(() => {
                this.$refs.hrResultRef.calRes()
            })
        },
    },
    computed: {
        cssVars() {
            return {
                "--width": this.width,
            }
        },
    },
}
</script>

<style scoped>
.card-content {
    width: var(--width);
}
</style>
