<script>
    // @ts-nocheck
    import Chart from "svelte-frappe-charts";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    let data = {
        labels: ["Ulster", "Munster", "Connaght", "Leinster"], 
        datasets: [
            {
                values: [0, 0, 0, 0]
            }
        ]
    };

    function populateBySwimlist(swimList) {
        swimList.forEach((swimlist) => {
            if (swimlist.title == "Ulster") {
                data.datasets[0].values[0] ++;
            } else if (swimlist.title == "Munster") {
                data.datasets[0].values[1] ++;
            } else if (swimlist.title == "Connaght") {
                data.datasets[0].values[2] ++;
            } else if (swimlist.title == "Leinster") {
                data.datasets[0].values[3] ++;
            }
        });
    }
    
    async function refreshChart() {
        let swimList = await placemarkService.getAllSwimlists();
        populateBySwimlist(swimList);
    }

    onMount(async () => {
        await refreshChart();
    });

</script>


<h1 class="title is-5">Swimlists By Region</h1>
<Chart {data} type="pie" />
