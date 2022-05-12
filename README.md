# 明日方舟公开招募计算器

## 项目说明
本项目使用Vue2 + Vuetify框架进行开发。<br/>
在线网页链接：[Gitee Page](https://yeeeck.gitee.io/ark-hr-tool) [Github Page](https://yeeeck.github.io/ark-hr-tool/)

### 起因
其实不是很想写这个，因为网上说实话有很多现成的，比如 Bigfun、bilibili wiki 以及 PRTS 的。<br/>
但是各自都有些我用着很不爽的缺点。<br/>
想想还是自己重新写一个吧。

### 主要特性
1.移动端与PC双端UI适配。<br/>
2.排序结果更加人性化，即以词条组合结果中最低干员的星级降序排列。<br/>
3.支持用户手动添加干员信息，手动适配以后的更新。当然这不代表以后我就不更新了。(很快上线)

### 关于其他项目让我难以忍受的缺点
#### Bigfun
更新还是太慢了，在某个版本之后直接停止更新了，其他方面都挺好的，如果能开个手动导入干员能保证跟上版本更新的话就好了（这实际上被我作为我自己做的这版的首要Feature，毕竟我迟早会没时间持续更新，也没法保证我啥时候退坑方舟）。

#### bilibili wiki
没深度体验，数据还是比较新的。但是，结果的排序问题很大，我默认它会将必出4、5星干员的词条显示在上面，结果我因此错过了N张黄票...
每次计算要翻到最下面来保证自己没有漏看一个结论，也太麻烦了。

#### PRTS
同上，结果的排序问题很大。而且界面不适配移动端（那个按钮真的~~der~~小）

---

# Recruit calculator for Arknights

## Project description
This project was developed using the Vue2 + Vuetify framework.

### The genesis
I didn't really want to write this because there are honestly a lot of ready-made ones on the web, such as Bigfun, bilibili wiki and PRTS.<br/>
But each of them has some drawbacks that I find unpleasant to use.<br/>
I thought I'd write a new one myself.

### Main features
1. Dual UI adaptations for mobile and PC.<br/>
2. Sorting results are more user-friendly, i.e. in descending order by the star rating of the lowest operator in the word combination results.<br/>
3. Support users to manually add operator information and manually adapt to future updates. Of course this doesn't mean I won't update it in the future. (Coming online soon)

### About other projects that I can't stand
#### Bigfun
Updates are still too slow and stopped after a certain version, otherwise it's fine, if only there was a manual import operator to keep up with the updates (this was actually made my primary Feature for this version I made myself, after all, I'll run out of time to keep updating sooner or later, and there's no guarantee when I'll quit Arknights).

#### bilibili wiki
No in-depth experience, the data is still relatively new. However, the sorting of the results is very problematic, I defaulted it to show the words that must be 4 or 5 star cadres at the top, and as a result I missed out on many yellow tickets...
It's also too much of a pain to have to scroll to the bottom of each calculation to make sure I haven't missed a conclusion.

#### PRTS
As above, the sorting of the results is very problematic. And the interface is not mobile friendly (that button is really ~~der~~ small)

***Translated with www.DeepL.com/Translator (free version)***


## 项目部署（Vue）
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
