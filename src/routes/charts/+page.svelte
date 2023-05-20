<script>
    // @ts-nocheck
    import Header from '$lib/Header.svelte';
    import MainNavigator from '$lib/MainNavigator.svelte';
    import SpotCategoreyByChart from '$lib/SpotCategoreyByChart.svelte';
    import SpotCountyByChart from '$lib/SpotCountyByChart.svelte';
</script>

<Header>
    <MainNavigator />
</Header>

<div class="columns">
    <div class="column box has-text-centered is-fullheight">
        <SpotCategoreyByChart />
    </div>
    <div class="column box has-text-centered is-fullheight">
        <SpotCountyByChart />
    </div>
</div>
