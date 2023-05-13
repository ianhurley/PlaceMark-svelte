<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
  
    let listSpots = [];
    onMount(async () => {
        listSpots = await placemarkService.getAllSpots();
    });
</script>

<div class="box">
    <table class="table is-fullwidth">
        <thead>
            <th>Name</th>
            <th>County</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Categorey</th>
            <th></th>
            <th></th>
        </thead>
        <tbody>
            {#each listSpots as spots}
                <tr>
                    <td>
                        {spots.name}
                    </td>
                    <td>
                        {spots.county}
                    </td>
                    <td>
                        {spots.latitude}
                    </td>
                    <td>
                        {spots.longitude}
                    </td>
                    <td>
                        {spots.categorey}
                    </td>
                    <td>
                        <a href="/" class="button is-rounded">
                          <span style="color: grey;">
                          <i class="fa-regular fa-edit"></i>
                          </span>
                        </a>
                      </td>
                      <td>
                        <a href="/" class="button is-rounded">
                          <span style="color: grey;">
                          <i class="fa-regular fa-trash-can"></i>
                          </span>
                        </a>
                      </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>