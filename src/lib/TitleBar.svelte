<script>
    import { user } from "../stores.js";
    export let title = '';
</script>

<style>
    .box {
        height: 125px;
    }
</style>

<div class="box has-text-centered columns m-1">
    <div class="column">
        <i style="font-size: 75px; color: Dodgerblue;" class="fa-solid fa-person-swimming"></i>
    </div>
    <div class="column">
        <div class="title is-4">{title}</div>
    </div>
    <div class="column">
        <i style="font-size: 45px; color: Dodgerblue;" class="fa-solid fa-water" />
        {#if $user.email}
            <div class="is-size-7">{$user.email}</div>
        {:else}
            <div class="is-size-7">PlaceMark Svelte</div>
        {/if}
    </div>
</div>