<script>
    import TitleBar from './TitleBar.svelte';
</script>

<div class="columns is-vcentered is-flex">
    <div class="column is-half">
        <TitleBar title={'Wild Swimming'}/>
    </div>
    <div class="column is-half">
        <slot />
    </div>
</div>


