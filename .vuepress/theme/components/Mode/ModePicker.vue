<template>
  <div class="mode-options">
    <h4 class="title" style="text-align: center;">切换模式</h4>
    <ul class="color-mode-options">
      <li
        v-for="(mode, index) in modeOptions"
        :key="index"
        :class="getClass(mode.mode)"
        @click="selectMode(mode.mode)"
      ><i :class="mode.icon"></i></li>
    </ul>
  </div>
</template>

<script>
import applyMode from './applyMode'
export default {
  name: 'ModeOptions',

  data () {
    return {
      modeOptions: [
        { mode: 'dark', icon: 'iconfont icon-moonbyueliang' },
        { mode: 'auto', icon: 'iconfont icon-brightness-auto' },
        { mode: 'light', icon:'iconfont icon-taiyang2' }
      ],
      currentMode: 'auto'
    }
  },

  mounted () {
    // modePicker 开启时默认使用用户主动设置的模式
    this.currentMode = localStorage.getItem('mode') || this.$themeConfig.mode || 'auto'

    // Dark and Light autoswitches
    // 为了避免在 server-side 被执行，故在 Vue 组件中设置监听器
    var that = this
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
      that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
    })
    window.matchMedia('(prefers-color-scheme: light)').addListener(() => {
      that.$data.currentMode === 'auto' && applyMode(that.$data.currentMode)
    })

    applyMode(this.currentMode)
  },

  methods: {
    selectMode (mode) {
      if (mode !== this.currentMode) {
        this.currentMode = mode
        applyMode(mode)
        localStorage.setItem('mode', mode)
      }
    },
    getClass (mode) {
      return mode !== this.currentMode ? mode : `${mode} active`
    }
  }
}
</script>

<style lang="stylus">
.mode-options
  background-color var(--background-color)
  min-width: 85px;
  margin: 0;
  padding: 1em;
  box-shadow var(--box-shadow);
  border-radius: $borderRadius;
  .title
    margin-top 0
    margin-bottom .6rem
    font-weight bold
    color var(--text-color)
  .color-mode-options
    display: flex;
    flex-wrap wrap
    border:1px solid #aaa
    border-radius: 7px
    overflow: hidden
    li
      flex: 1;
      text-align: center;
      font-size 12px
      color var(--text-color)
      line-height 18px
      padding 3px 6px
      background-color var(--background-color)
      cursor pointer
      &.auto
        border-left:1px solid #aaa
        border-right:1px solid #aaa
      &.dark
        i
           font-size: 13px;
     
      &.active
        background-color: $accentColor;
        i
          color: #fff !important
      i
        color:#3eaf7c 
      
</style>
