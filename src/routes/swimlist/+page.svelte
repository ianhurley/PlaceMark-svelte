<script>
  import Header from '$lib/Header.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
  import ListSwimlists from '$lib/ListSwimlists.svelte';
  import SpotByChart from '$lib/SpotByChart.svelte';
 
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
  <div class="column">
    <ListSwimlists />
  </div>
  <div class="column box has-text-centered">
    <SpotByChart />
  </div>
</div>