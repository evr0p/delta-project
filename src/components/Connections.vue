<template>
    <div class="newsfeed-container">
        <div class="connections-body">
            <div class="connections-box">
                <div class="header">
                    <div class="header-title">{{ headerTitle }}</div>
                    <div class="filter-area">
                        <!-- <div class="filter-button green">Whales</div> -->
                        <!-- <div class="filter-button green">Launches</div> -->
                    </div>
                </div>
                <div class="input-container">
                    <div class="input-area left">
                        <div class="input-field">
                            <label for="start-input">Abfahrtsort</label>
                            <input id="start-input" class="place-input"/>
                        </div>
                        <div class="input-field right">
                            <label for="destination-input">Zielort</label>
                            <input id="destination-input" class="place-input"/>                        
                        </div>
                    </div>
                    <div class="input-area secondary-row">
                        <div class="input-field">
                            <label for="via-input">Via</label>
                            <input id="via-input" class="place-input"/>                        
                        </div>
                        <div class=" input-field clock-input">
                            <label for="clock-input">Uhrzeit</label>
                            <input id="clock-input" class="place-input"/>                        
                        </div>                        
                    </div>
                </div>
                <!-- <li v-for="(elem, idx) in news" :key="idx" class="">
                    <main-connections-menu :news="elem"/>
                </li> -->
                <div id="search-button-area">
                    <button id="search-button">Suche Verbindungen</button>
                </div>
            </div>
            <div id="connection-table-container">
                <TxTable id="connections-table" startDestinationLocations="St.Gallen - Zurich"></TxTable>
            </div>
        </div>
    </div>
</template>


<script>
import MainConnectionsMenu from './MainConnectionsMenu';
import ConnectionsTable from './ConnectionsTable';
import TxTable from './TxTable.vue';
const NEWS_API_KEY = 'wkrathsw40hnwxw6cal9ilmvl1qz6ljm2ffadmmc';
import axios from 'axios';


export default {
    components: {
        MainConnectionsMenu,
        ConnectionsTable,
        TxTable
    },
    name: 'Connections',
    props: {
        headerTitle: String
    },

   data() {
        return {
            news: [],
            options: []
        }
    },

    mounted() {
        this.fetchNews().then((data) => {
            // console.log(data);
            // console.log(this.news);
            // console.log(data.data.data);
            // this.news = data.data.data;
        });
    },

    methods: {
        search(input) {
            if (input.length < 1) { return [] }
            return countries.filter(country => {
                // return country.toLowerCase()
                    // .startsWith(input.toLowerCase())
            });
        },
        async fetchNews() {
            // const data = axios.get(`https://cryptonews-api.com/api/v1?tickers=BTC,ETH,XRP&items=50&token=${NEWS_API_KEY}`);
            // return data;
        },
    }
}
</script>


<style scoped>
@import url('../css/fonts.css');
@import url('../css/root.css');

.newsfeed-container * {
    box-sizing: border-box;
    font-family: 'HeaderFontRegular';
    /* padding-top: 30px; */
}


tx-table {
    height: 200px;
}


div.newsfeed-container {
    overflow: hidden;
    margin: 0;
    border-right: 1px solid var(--border-color-grey);
    padding: 0;
}

div.header {
    display: flex;
    justify-content: center;
    /* padding: 10px 20px 0 20px; */
}

div.header-title {
    font-family: 'HeaderFontRegular';
    color: var(--on-bg-color-light);
    font-size: 1.2em;
    width: 100%;
    padding: calc(var(--container-padding) - 5px);
    padding-top: 0;
}

div.filter-area {
    font-size: 0.85em;
    margin-right: 0;
    margin-left: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}


div.input-container {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: var(--bg-color-lighter);
    border: 1px solid var(--border-color-darker);
}



div.connections-body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow-y: scroll;
}


div.connections-box {
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    width: 40%;
    min-width: 500px;
    max-width: 600px;
    /* height: 50%; */
    height: max-content;
    padding: 10px;
    background: rgb(25, 27, 31);
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
    border-radius: 24px;
    /* margin-top: 1rem; */
}

div.input-field {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-content: center;
    padding: 0 10px 0 10px;
}


div.input-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    /* flex-direction: column; */
    width: 100%;
    /* padding: 10px; */
    /* padding-bottom: 5px; */
    padding: 0px 5px 0px 5px;
    /* background: green; */
}
/* 
div.left, div.right {
    width: 50%;
    display: flex;
    justify-content: center;
}
 */

label {
    font-size: 0.9em;
    color: var(--on-bg-color-medium);
}

input {
    font-family: 'Monaco';
    background: var(--bg-color-darker);
    margin-top: 10px;
    padding-left: 10px;
    /* width: 500px; */
    color: var(--on-bg-color-light);
    outline: none;
    height: 3.0em;
    border-radius: 5px;
    border: 1px solid var(--border-color-medium);
    box-shadow: none;
    /* background: var(--bg-color); */
    background: var(--bg-color-darker);
}

input:focus {
    border: 1px solid var(--secondary-color-semi);
    box-shadow: 0px 0px 3px 0.2px var(--secondary-color);
}

div.token-detail-area {
    margin-top: 40px;
}



#search-button-area {
    width: 100%;
    margin-bottom: 0!important;
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding-bottom: 0px;
    padding: 13px 0 0 0;
    /* margin-top: auto; */
    /* margin-bottom: 0; */    
    /* bottom: 0; */
    /* position: absolute; */
}

button#search-button {
    /* background: var(--secondary-color-semi); */
    /* color: var(--on-bg-color-medium); */
    background: var(--secondary-color);
    color: white;
    outline: none;
    border: none;
    font-size: 1.1em;
    box-shadow: none;
    height: 50px;
    border-radius: 16px;
    width: 100%;
    /* margin-left: auto; */
    /* margin-right: auto; */
    /* font-weight: bold; */

}

input#clock-input {
    width: 100px;
}

div.secondary-row {
    justify-content: flex-start;
    margin-top: -15px;
    margin-bottom: 10px;
}

div.filter-button {
    border-radius: 5px;
    padding: 4px 10px 4px 10px;
    margin: 3px;
}

div.filter-button:hover {
    cursor: pointer;
}


.green {
    background-color: rgba(30, 202, 184, 0.15) !important;
    color: #1ecab8 !important;
}


#connection-table-container {
    width: 80%;
    height: 200px;
}



</style>
