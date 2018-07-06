<template>
  <div>
    <ln-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <Button slot="reference">hover 激活</Button>
    </ln-popover>

    <ln-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <Button slot="reference">click 激活</Button>
    </ln-popover>

    <ln-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </ln-popover>
    <Button v-popover:popover>focus 激活</Button>
  </div>
</template>

<script>
import Popover from '../../src/packages/popover'
import Button from '../../src/packages/button'
export default {
  data () {
    return {}
  },
  components: {
    Button,
    'ln-popover': Popover
  }
}
</script>
