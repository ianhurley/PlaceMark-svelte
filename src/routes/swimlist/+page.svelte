<script>
  import Header from '$lib/Header.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
  import ListSwimlists from '$lib/ListSwimlists.svelte';
  import SpotCategoreyByChart from '$lib/SpotCategoreyByChart.svelte';
 
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
  <div class="column">
    <ListSwimlists />
  </div>
  <div class="column box has-text-centered">
    <SpotCategoreyByChart />
  </div>
</div>