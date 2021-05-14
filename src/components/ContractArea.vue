<template>
    <div class="contract-area-container">
        <div class="header">
            <div class="header-title">{{ headerTitle }}</div>
            <div class="filter-area">
                <div class="filter-button green">ToolA</div>
                <div class="filter-button green">ToolB</div>
            </div>
        </div>
        <div class="enter-token-area">
            <div class="input-area">
                <label for="token-addr">Enter token address which to check</label>
                <input id="token-addr" class="token-addr-input"/>
            </div>
        </div>
        <div class="search-token-button">

        </div>

        <div class="token-detail-area">
            <p>
                Maybe some kind of code editor which displays functions of the contract
                with additional tools for filtering and searching token contract.
            </p>
            <div id="code-area">
                <!-- <v-ace-editor lang="javascript"> -->
                    <!-- console.log('hello'); -->
                <!-- </v-ace-editor> -->
            </div>
        </div>
    </div>
</template>

<script>
// import { VAceEditor } from 'vue3-ace-editor';

export default {
  name: 'ContractArea',
  components: {
    //   VAceEditor
  },

  props: {
    headerTitle: String
  }
}
</script>

<style scoped>
@import url('../css/fonts.css');
@import url('../css/root.css');

* {
    font-family: 'HeaderFontRegular';
    color: var(--on-bg-color-medium);
}

div.contract-area-container {
    padding: calc(var(--container-padding));
    border-right: 1px solid var(--border-color-grey);
}

div.header {
    display: flex;
    padding: 3px;
    margin-bottom: 20px;
    /* border-bottom: 1px solid var(--border-color-grey) */
}

div.header-title {
    font-family: 'HeaderFontBold';
    /* color: var(--header-color); */
    color: var(--on-bg-color-light);
    font-size: 2em;
    /* padding: 15px; */
}


div.filter-area {
    font-size: 0.85em;
    margin-right: 0;
    margin-left: auto;
    /* padding: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
}


div.filter-button {
    border-radius: 5px;
    padding: 4px 10px 4px 10px;
    margin: 3px;
    /* max-height: fit-content; */
    /* height: 20px; */
}

div.filter-button:hover {
    cursor: pointer;
}


.green {
    /* background: var(--secondary-color); */
    /* color: var(--on-secondary-color); */
    background-color: rgba(30, 202, 184, 0.15) !important;
    color: #1ecab8 !important;
}


div.enter-token-area {
    /* padding: calc(var(--container-padding) + 2px); */
}


div.enter-token-area .input-area {
    display: flex;
    flex-direction: column;
}

div.enter-token-area input {
    background: var(--bg-color-darker);
    margin-top: 10px;
    padding-left: 10px;
    width: 500px;
    color: var(--on-bg-color-light);
    outline: none;
    height: 3.0em;
    border-radius: 3px;
    border: 1px solid transparent;
    box-shadow: none;
}

div.enter-token-area input:focus {
    border: 1px solid var(--primary-color-semi);
    box-shadow: 0px 0px 3px 0.2px var(--primary-color);
}

div.token-detail-area {
    margin-top: 40px;
}


div.token-detail-area p {
    padding: 10px 5px 5px 5px;
    margin-bottom: 10px;
    width: 500px;
}


div#code-area {
    background: var(--bg-color-darker);
    width: 100%;
    height: 20vh;
    border-radius: 3px;
}

</style>
