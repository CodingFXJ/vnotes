<template>
  <div class="sidebar-button larr navicon-button " @click="$emit('toggle-sidebar')">
    <div class="navicon"></div>
    <!-- <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" class=""></path>
    </svg> -->
  </div>
</template>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display none
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 0.6rem
  left 1rem
  // .icon
  //   display block
  //   width 1.25rem
  //   height 1.25rem
.navicon-button 
  transition: .25s;
  cursor: pointer;
  user-select: none;
  opacity: 1;
  // 中线
  .navicon 
    position: absolute;
    top: 18px;
    width: 1.5rem;
    height: .25rem;
    background: #3eaf7c;
    transition: .5s;
    border-radius: 1rem;
    // 上下两根线
 .navicon 
    &:before,
    &:after  
      display: block;
      content: "";
      height: .25rem;
      width: 1.5rem;
      background: #3eaf7c;
      position: absolute;
      z-index: -1;
      transition: .5s .25s;
      border-radius: 1rem;
// .navicon:before { top: .55rem; }
.navicon:after { top: -.55rem; }
.navicon:before {
    top: 0.58rem;
}
// 点击前过度时间
.navicon-button .navicon:before, .navicon-button .navicon:after {
    transition: .25s;
  }

.navicon-button:hover {
    transition: .5s;
}
// 点击后
.open .navicon:before,
.open .navicon:after {
  transition: .5s;
}


.open.larr .navicon   {
      width: 1.8rem;
}
.open.larr .navicon:before  {
      width: 1.5rem;
      transform: rotate(35deg); transform-origin: left top;  
}
.open.larr .navicon:after {
    width: 1.5rem;
    transform: rotate(-35deg); transform-origin: left bottom;
    
}
.open:not(.steps) .navicon:before,
.open:not(.steps) .navicon:after {
  top: 0 !important;
}
@media (max-width: $MQMobile)
  .sidebar-button
    display block
</style>
