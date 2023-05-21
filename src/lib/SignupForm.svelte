<script lang="ts">
    import { goto } from "$app/navigation";
    import { placemarkService } from "../services/placemark-service";

    let firstName = "";
    let lastName = "";
    let email = "";
    let password = "";
    let errorMessage = "";

    async function signup() {
        console.log(`attemting to sign up email: ${email}`);
        let success = await placemarkService.signup(firstName, lastName, email, password);
        if (success) {
            goto("/");
        } else {
            errorMessage = "Error Trying to sign up";
        }
    }
</script>

<form on:submit|preventDefault={signup}>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label for="firstname" class="label">First Name</label>
          <input bind:value={firstName} id="firstname" class="input is-rounded" type="text" placeholder="Enter first name" name="firstName" pattern={"^[A-Z][a-z]{2,}$"} required>
          <small class="has-text-grey">First name must start with an uppercase letter and have at least 3 characters.</small>
        </div>
        <div class="field">
          <label for="lastname" class="label">Last Name </label>
          <input bind:value={lastName}  id="lastname" class="input is-rounded" type="text" placeholder="Enter last name" name="lastName" pattern={"^[A-Z][A-Za-z'-]{2,}$"} required>
          <small class="has-text-grey">Last name must start with an uppercase letter and have at least 3 characters.</small>
        </div>
      </div>
    </div>
    <div class="field">
      <label for="email" class="label">Email</label>
      <input bind:value={email} id="email" class="input is-rounded" type="email" placeholder="Enter email" name="email" required>
      <small class="has-text-grey">Please enter a valid email address.</small>
    </div>
    <div class="field">
      <label for="password" class="label">Password</label>
      <input bind:value={password} id="password" class="input is-rounded" type="password" placeholder="Enter Password" name="password" required>
      <small class="has-text-grey">Password must contain at least one digit and have at least 6 characters.</small>
    </div>
    <div class="field is-grouped">
      <button class="button is-link is-rounded">Sign Up</button>
    </div>
</form>
{#if errorMessage}
  <div class="section">
    {errorMessage}
  </div>
{/if}

