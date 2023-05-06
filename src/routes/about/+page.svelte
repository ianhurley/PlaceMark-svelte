<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>

<section class="hero">
    <div class="hero-body has-text-centered">
      <p class="title ">
        Wild Swimming : Organise and Manage your Swims </p>
      <p class="box">
        What makes the perfect swim? It's all about the most magical locations (and how to protect them), finessing your kitbag, keeping yourself and others safe, and maybe discovering a nice place for a warm-up cuppa and cake. Whether you're a seasoned dipper or a fledgling, Wild Swimming is the ultimate tool to organise your swim spots. From the dramatic Atlantic bays to cascading waterfalls and secret pools, the rugged Causeway Coast to the secluded loughs of the Wicklow Mountains, manage your spectacular swim spots across all four regions of Ireland.
      </p>
    </div>
  </section>
  
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-multiline">
        <div class="column is-3-desktop is-6-tablet is-12-mobile">
          <figure class="image is-square">
            <img src="/ulster.jpg" alt="ulster">
          </figure>
        </div>
        <div class="column is-3-desktop is-6-tablet is-12-mobile">
          <figure class="image is-square">
            <img src="/munster.jpg" alt="munster">
          </figure>
        </div>
        <div class="column is-3-desktop is-6-tablet is-12-mobile">
          <figure class="image is-square">
            <img src="/connaght.jpg" alt="connaght">
          </figure>
        </div>
        <div class="column is-3-desktop is-6-tablet is-12-mobile">
          <figure class="image is-square">
            <img src="/leinster.jpg" alt="leinster">
          </figure>
        </div>
      </div>
    </div>
  </section>