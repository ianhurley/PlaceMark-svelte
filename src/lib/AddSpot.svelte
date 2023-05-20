<script>
    // @ts-nocheck
    
        import { onMount } from "svelte";
        import { placemarkService } from "../services/placemark-service";
        import { goto } from "$app/navigation";
    
        let name = "";
        let county = "";
        let latitude = "";
        let longitude = "";
        let categorey = "";
        
        let swimList = [];

        let message = "Add Swim Spot";
    
        onMount(async () => {
            swimList = await placemarkService.getAllSwimlists();
        });
    
      async function createSpot() {
        if (name && county && latitude && longitude && categorey) {
          //const region = 
          //const swimlist = swimList.find((swimlist) => swimlist.title == swimList[0]);
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
              <input bind:value={name} class="input is-rounded" type="text" placeholder="Name" pattern={"^[A-Aa-z\s,]+$"} required>
              <small class="has-text-grey">Letters, spaces and commas only</small>
            </div>
            <div class="field">
              <input bind:value={county} class="input is-rounded" type="text" placeholder="County" pattern={"^[A-Aa-z\s,]+$"} required>
              <small class="has-text-grey">Letters, spaces and commas only</small>
            </div>
            <div class="field">
              <input bind:value={latitude} class="input is-rounded" type="number" step="0.000001" placeholder="Latitude" pattern={"^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$"} required>
              <small class="has-text-grey">Valid coordinates only</small>
            </div>
            <div class="field">
              <input bind:value={longitude} class="input is-rounded" type="number" step="0.000001" placeholder="Longitude" pattern={"^[-+]?([1-9]?\d(\.\d+)?|1[0-7]\d(\.\d+)?|180(\.0+)?)$"} required>
              <small class="has-text-grey">Valid coordinates only</small>
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
      
    