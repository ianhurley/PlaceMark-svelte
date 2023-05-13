<script>
    // @ts-nocheck
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";

    const mapConfig = {
        location: { lat: 53.3498053, lng: -6.2603097 },
        zoom: 10,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("spot-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup("SwimSpots");
        map.showLayerControl();
        const spots = await placemarkService.getAllSpots();
        spots.forEach((spot) => {
            addSpotMarker(map, spot);
        });
    });

    function addSpotMarker(map, spot) {
        const spotStr = `${spot.name}`;
        map.addMarker({ lat: spot.latitude, lng: spot.longitude }, spotStr, "Swim Spots");
    }
</script>

<div class="box" id="spot-map" style="height:75vh" />

