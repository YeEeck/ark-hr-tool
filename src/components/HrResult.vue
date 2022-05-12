<template>
  <div>
    <v-card dark v-for="(item, i) in res" :key="i" class="mt-4">
      <v-card-title
        ><v-btn
          depressed
          class="mr-4 mb-2"
          v-for="(text, i) in item.tag"
          :key="i"
          color="#A0BCC2"
          light
          >{{ text }}</v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-btn
          depressed
          class="mr-4 mb-2 font-weight-black"
          v-for="(operator, i) in item.operators"
          :key="i"
          :color="getOperatorBtnColor(operator.level)"
          >{{ operator.name }}
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
let _ = require("lodash");
function combine(data, selectNum, lastVal, result = []) {
  if (lastVal.length === selectNum || !data.length) {
    lastVal.length === selectNum && result.push(lastVal);
    return;
  }

  let newData = [].concat(data);
  let item = newData.shift();
  combine(newData, selectNum, lastVal.concat(item), result); // 选
  combine(newData, selectNum, lastVal, result); // 不选
  return result;
}
export default {
  data: () => ({
    operators: [],
    res: [],
    temp: [],
  }),
  props: { select: Array, words: Array },
  mounted() {
    this.operators = require("../assets/data.json");
  },
  methods: {
    calRes() {
      let list = this.select2words();
      let tryList = [];
      this.temp = [];
      for (let index = 1; index <= list.length; index++) {
        tryList = tryList.concat(combine(list, index, []));
      }
      // console.log(tryList);
      tryList.forEach((elem) => {
        // console.log(elem);
        let level6 = false;
        if (_.includes(elem, "高级资深干员")) {
          level6 = true;
        }
        let newTemp = { tag: JSON.parse(JSON.stringify(elem)), operators: [] };
        this.operators.forEach((elemOperator) => {
          let flag = true;
          if (elemOperator.level == 6 && !level6) {
            console.log();
          } else {
            for (let index = 0; index < elem.length; index++) {
              const element = elem[index];
              // let finded = false;
              // elemOperator.tag.forEach((elemOperatorTag) => {
              //   if (element == elemOperatorTag) {
              //     finded = true;
              //   }
              // });
              let finded = _.includes(elemOperator.tag, element);
              if (elemOperator.level == 6) {
                finded = _.includes(
                  elemOperator.tag.concat(["高级资深干员"]),
                  element
                );
              }
              if (elemOperator.level == 5) {
                finded = _.includes(
                  elemOperator.tag.concat(["资深干员"]),
                  element
                );
              }

              // console.log(elemOperator.tag);
              // console.log(finded);
              if (finded == false) {
                flag = false;
                break;
              }
            }
            if (flag) {
              newTemp.operators.push(elemOperator);
            }
          }
        });
        if (newTemp.operators.length != 0) {
          let minLevel = 10;
          newTemp.operators.forEach((operator) => {
            if (operator.level != 1) {
              if (operator.level < minLevel) {
                minLevel = operator.level;
              }
            }
          });
          if (minLevel == 10) {
            minLevel = 3;
          }
          newTemp.minLevel = minLevel;
          this.temp.push(newTemp);
        }
      });
      this.res = _.sortBy(this.temp, function (o) {
        return -o.minLevel * 100 + o.operators.length;
      });
    },
    select2words() {
      let list = [];
      for (let index = 0; index < this.select.length; index++) {
        const element = this.select[index];
        for (let index2 = 0; index2 < element.length; index2++) {
          const element2 = element[index2];
          if (element2) {
            list[list.length] = this.words[index][index2];
          }
        }
      }
      return list;
    },
    getOperatorBtnColor(level) {
      if (level == 6) {
        return "#ec7624";
      } else if (level == 5) {
        return "#c99200";
      } else if (level == 4) {
        return "#907790";
      } else if (level == 3) {
        return "#68A7AD";
      } else if (level == 2) {
        return "#83BD75";
      } else if (level == 1) {
        return "#000000";
      }
    },
  },
};
</script>
