<script>
    let email = '';
    let password = '';
</script>

<form>
    <div class="field">
        <label class="label" for="email">Email</label>
        <input bind:value={email} class="input is-rounded" id="email" name="email" placeholder="Enter email" type="text" />
    </div>
    <div class="field">
        <label class="label" for="password">Password</label>
        <input bind:value={password} class="input is-rounded" id="password" name="password" placeholder="Enter Password" type="password" />
    </div>
    <div class="field is-grouped">
        <button class="button is-link is-rounded">Submit</button>
    </div>
</form>
