<script>
    // @ts-nocheck
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import SpotByChart from '$lib/SpotByChart.svelte';
    import SwimlistByChart from '$lib/SwimlistByChart.svelte';
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column box has-text-centered is-fullheight">
        <SpotByChart />
    </div>
    <div class="column box has-text-centered is-fullheight">
        <SwimlistByChart />
    </div>
</div>
