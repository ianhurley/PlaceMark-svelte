  <form action="/dashboard/addswimlist" method="POST">
    <div class="field">
    <label for="swimlist" class="label">Create Swimlist by Region:</label>
    <div class="control">
      <div class="select is-rounded is-hoverable">
        <select name="title" required>
          <option value="" disabled selected>Select Region</option>
          <option value="Ulster">Ulster</option>
          <option value="Munster">Munster</option>
          <option value="Connaght">Connaght</option>
          <option value="Leinster">Leinster</option>
        </select>
      </div>
    </div>
  </div>
    <button class="button is-primary is-rounded">Add Region</button>
  </form>

  <div class="section box">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label for="todo" class="label">Create Swimlist by Region</label>
      </div>
      <div class="field-body">
        <div class="field">
          <p class="control">
            <input id="todo" class="input" type="text" placeholder="Type something...">
          </p>
        </div>
        <button class="button">Add Region</button>
      </div>
    </div>
  </div>