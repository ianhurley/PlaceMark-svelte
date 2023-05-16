<script>
    // @ts-nocheck
    
        import { onMount } from "svelte";
        import { placemarkService } from "../services/placemark-service";
        import { goto } from "$app/navigation";
    
        let name = "";
        let county = "";
        let latitude = 0;
        let longitude = 0;
        let categorey = "";
        let swimList = [];

        let message = "Add Swim Spot";
    
        onMount(async () => {
            swimList = await placemarkService.getAllSwimlists();
        });
    
      async function createSpot() {
        if (name && county && latitude && longitude && categorey) {
          const spot = {
            name: name,
            county: county,
            latitude: latitude,
            longitude: longitude,
            categorey: categorey
          };
          const success = await placemarkService.addSpot(spot);
          if (!success) {
                message = "Swim Spot not completed - some error occurred";
                return;
            }
            message = "Thanks! You Swim Spot has been added";
            goto("/spot");
        } else {
            message = "Please complete all fields";
        }
      }  
</script>
    
<form class="box" on:submit|preventDefault={createSpot}>
        <label for="label">Enter Swim Spot Details</label>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Name" bind:value={name}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="County" bind:value={county}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Latitude" bind:value={latitude}>
            </div>
            <div class="field">
              <input class="input is-rounded" type="text" placeholder="Longitude" bind:value={longitude}>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-rounded is-hoverable">
                  <select bind:value={categorey} required>
                    <option value="" disabled selected>Select Body of Water</option>
                    <option value="The Sea">The Sea</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Waterfalls">Waterfalls</option>
                    <option value="Loughs">Loughs</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button is-primary is-rounded">Add Spot</button>
</form>
      
    