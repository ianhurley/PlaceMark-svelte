<script>
  import Header from '$lib/Header.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
  import ListSwimlists from '$lib/ListSwimlists.svelte';
  import SpotCategoreyByChart from '$lib/SpotCategoreyByChart.svelte';
  import SpotCountyByChart from '$lib/SpotCountyByChart.svelte';
  import AddSwimlist from '$lib/AddSwimlist.svelte';
 
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
  <div class="column">
    <ListSwimlists />
    <AddSwimlist />
  </div>
  <div class="column box has-text-centered">
    <SpotCategoreyByChart />
    <SpotCountyByChart />
  </div>
</div>