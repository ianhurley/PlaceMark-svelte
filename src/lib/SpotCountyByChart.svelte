<script>
    // @ts-nocheck
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let data = {
        labels: ["Dublin", "Wicklow", "Antrim", "Armagh", "Clare", "Limerick", "Waterford", "Sligo", "Mayo"], //list limited to seed data
        datasets: [
            {
                values: [0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    };

    function populateBySpot(spotList) {
        spotList.forEach((spot) => {
            if (spot.county == "Dublin") {
                data.datasets[0].values[0] ++;
            } else if (spot.county == "Wicklow") {
                data.datasets[0].values[1] ++;
            } else if (spot.county == "Antrim") {
                data.datasets[0].values[2] ++;
            } else if (spot.county == "Armagh") {
                data.datasets[0].values[3] ++;
            } else if (spot.county == "Clare") {
                data.datasets[0].values[4] ++;
            } else if (spot.county == "Limerick") {
                data.datasets[0].values[5] ++;
            } else if (spot.county == "Waterford") {
                data.datasets[0].values[6] ++;
            } else if (spot.county == "Sligo") {
                data.datasets[0].values[7] ++;
            } else if (spot.county == "Mayo") {
                data.datasets[0].values[8] ++;
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


<h1 class="title is-5">Swim Spots By County</h1>
<Chart {data} type="pie" />
