<script>
  import Header from '$lib/Header.svelte';
  import MainNavigator from '$lib/MainNavigator.svelte';
  import ListSpots from '$lib/ListSpots.svelte';
  import AddSpot from '$lib/AddSpot.svelte';
  import SpotMap from "$lib/SpotMap.svelte";
 
</script>

<Header>
  <MainNavigator />
</Header>

<div class="columns">
  <div class="column">
    <ListSpots />
    <AddSpot />
  </div>
</div>