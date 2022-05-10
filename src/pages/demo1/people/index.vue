<template>
  <div>
    <h3>people</h3>
    <hr>
    <search />
    <list />
  </div>
</template>

<script>
import search from '@/components/people/search'
import list from '@/components/people/list'
export default {
  name: "people",
  components:{search,list}
};
</script>