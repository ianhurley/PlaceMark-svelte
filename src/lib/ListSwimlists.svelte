<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";
  import { user } from "../stores";
  // import UploadWidget from '$lib/components/uploadwidget.svelte'

  let swimlists = [];

  onMount(async () => {
    try {
      swimlists = await placemarkService.getAllSwimlists();
      console.log(swimlists);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<main>
  <ul class="is-justify-content-space-between">
    {#each swimlists as swimlist}
    <div class="box box-link-hover-shadow m-1">
      <h2 class="title">
      <li>{swimlist.title}</li>
      </h2>
      <a href="/spot" class="button is-rounded">
        <span style="color: grey;">
        <i class="fa-regular fa-folder-open"></i>
        </span>
      </a>
      <a href="/" class="button is-rounded">
        <span style="color: grey;">
        <i class="fa-regular fa-trash-can"></i>
        </span>
      </a>
    </div>
    {/each}
  </ul>
</main>



