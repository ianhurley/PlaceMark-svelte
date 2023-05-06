
<script>
    import Header from '$lib/Header.svelte';
    import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
    <WelcomeNavigator />
</Header>


<section class="hero">
    <div class="hero-body has-text-centered">
      <p class="title">
        Welcome to Wild Swimming
      </p>
      <p class="box has-background-info has-text-white">
        Sign Up or Login to Manage and Organize Your Swim Spots
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

  
