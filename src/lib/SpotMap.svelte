<script>
    // @ts-nocheck
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    const mapConfig = {
        location: { lat: 53.54663, lng: -7.61402 },
        zoom: 7,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("spot-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup("All Swim Spots");
        map.addLayerGroup("The Sea");
        map.addLayerGroup("Rivers");
        map.addLayerGroup("Waterfalls");
        map.addLayerGroup("Loughs");

        map.showLayerControl();
        const spots = await placemarkService.getAllSpots();
        spots.forEach((spot) => {
            addSpotMarker(map, spot); 
        });
    });

    function addSpotMarker(map, spot) {
        const spotStr = `${spot.name}, ${spot.county}`;
        map.addMarker({ lat: spot.latitude, lng: spot.longitude }, spotStr, "All Swim Spots");
        if (spot.categorey === "The Sea") {
            const seaSpotStr = `${spot.name}, ${spot.county} (The Sea)`;
            map.addMarker({ lat: spot.latitude, lng: spot.longitude }, seaSpotStr, "The Sea");
        };
        if (spot.categorey === "Rivers") {
            const riverSpotStr = `${spot.name}, ${spot.county} (Rivers)`;
            map.addMarker({ lat: spot.latitude, lng: spot.longitude }, riverSpotStr, "Rivers");
        };
        if (spot.categorey === "Waterfalls") {
            const waterfallSpotStr = `${spot.name}, ${spot.county} (Waterfalls)`;
            map.addMarker({ lat: spot.latitude, lng: spot.longitude }, waterfallSpotStr, "Waterfalls");
        };
        if (spot.categorey === "Loughs") {
            const loughSpotStr = `${spot.name}, ${spot.county} (Loughs)`;
            map.addMarker({ lat: spot.latitude, lng: spot.longitude }, loughSpotStr, "Loughs");
        };
    }
</script>

<div class="box" id="spot-map" style="height:75vh" />

