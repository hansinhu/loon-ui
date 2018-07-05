<template>
  <div>
    <Badge :value="12" class="item">
      <span class="badge-test">评论</span>
    </Badge>
  </div>
</template>

<script>
import Badge from '../../src/packages/badge'
export default {
  data () {
    return {}
  },
  components: {
    Badge
  }
}
</script>
<style lang="scss">
.badge-test{
  border: 1px solid #999;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 4px;
}
</style>

