<script>
    // @ts-nocheck
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let data = {
        labels: ["The Sea", "Rivers", "Waterfalls", "Loughs"],
        datasets: [
            {
                values: [0, 0, 0, 0]
            }
        ]
    };

    function populateBySpot(spotList) {
        spotList.forEach((spot) => {
            if (spot.categorey == "The Sea") {
                data.datasets[0].values[0] ++;
            } else if (spot.categorey == "Rivers") {
                data.datasets[0].values[1] ++;
            } else if (spot.categorey == "Waterfalls") {
                data.datasets[0].values[2] ++;
            } else if (spot.categorey == "Loughs") {
                data.datasets[0].values[3] ++;
            }
        });
    }
    
    async function refreshChart() {
        let spotList = await placemarkService.getAllSpots();
        populateBySpot(spotList);
    }

    onMount(async () => {
        refreshChart();
    });


</script>


<h1 class="title is-5">Swim Spots By Categorey</h1>
<Chart {data} type="bar" />