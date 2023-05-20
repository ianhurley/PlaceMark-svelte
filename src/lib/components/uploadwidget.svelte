<script>
    // @ts-nocheck
    import { onMount } from 'svelte'

    let widget;

    onMount(() => {
        if('cloudinary' in window) {
            widget = window.cloudinary.createUploadWidget({
                cloudName: "dfz3wzukl",
                uploadPreset: "n7kmeyeh",
            }, (result) => {
                console.log(result)
            });

        }
    });

    function handleClick(){
        if(widget) {
            widget.open();
        }
    }
</script>

<button on:click|preventDefault={handleClick}>Upload</button>