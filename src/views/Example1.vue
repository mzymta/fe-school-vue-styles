<template>
  <section class="example-1 section">
    <h2 class="title is-3">Example 1: use global styles inside components</h2>
    <div class="box">
      <h3 class="title is-5">Common button styles usage</h3>
      <div class="media-content">
        <div class="field">
          <button class="button">Button 1</button>
        </div>
        <div class="field">
          <button class="button is-outline">Button 2</button>
        </div>
        <div class="field">
          <button class="button is-primary">Button 2</button>
        </div>
        <div class="field">
          <button class="button is-primary is-large">Button 2</button>
        </div>
        <div class="field">
          <button class="button is-primary is-disabled is-large">Button 2</button>
        </div>
      </div>
    </div>
    <div class="box">
      <h3 class="title is-5">Table styles usage example</h3>
      <div class="media-content">
        <div class="table">
          <div class="table-head">
            <div class="table-row is-head">
              <div class="table-cell is-head">
                header 1
              </div>
              <div class="table-cell is-head">
                header 2
              </div>
              <div class="table-cell is-head">
                header 3
              </div>
              <div class="table-cell is-head">
                header 4
              </div>
            </div>
          </div>
          <div class="table-body">
            <div
              v-for="i in [1,2,3,4]"
              class="table-row">
              <div class="table-cell">
                cell 1
              </div>
              <div class="table-cell">
                cell 2
              </div>
              <div class="table-cell">
                cell 3
              </div>
              <div class="table-cell">
                cell 4
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
