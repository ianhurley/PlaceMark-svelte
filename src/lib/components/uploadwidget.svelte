<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
  
    let widget;
    let imageUrl;
  
    onMount(() => {
      if ('cloudinary' in window) {
        widget = window.cloudinary.createUploadWidget(
          {
            cloudName: "dfz3wzukl",
            uploadPreset: "n7kmeyeh",
          },
          (error, result) => {
            if (!error && result && result.event === 'success') {
              imageUrl = result.info.secure_url;
            }
          }
        );
      }
    });
  
    function handleClick() {
      if (widget) {
        widget.open();
      }
    }
  </script>
  
  <button class="button is-rounded" on:click|preventDefault={handleClick}>Upload Photo</button>
  {#if imageUrl}
    <img src={imageUrl} alt="Uploaded Image" style="display: block; margin-top: 20px;">
  {/if}