<template>
    <div class="newsfeed-container">
        <div class="header">
            <div class="header-title">
                {{ headerTitle }}
                <i style="margin-left: 10px; font-size: 0.7em; color: var(--accent-color)" class="fa fa-chevron-down"/>
            </div>
            <div class="filter-area">
                <div class="filter-button green">Whales</div>
                <div class="filter-button green">Launches</div>
            </div>
        </div>
        <div class="newsfeed-body">
            <ol class="news-container">
                <li v-for="(elem, idx) in news" :key="idx" class="">
                    <news-element :news="elem"/>
                </li>
            </ol>
        </div>
    </div>
</template>


<script>
import NewsElement from './NewsElement';
const NEWS_API_KEY = 'wkrathsw40hnwxw6cal9ilmvl1qz6ljm2ffadmmc';
import axios from 'axios';


export default {
    components: {
        NewsElement
    },
    name: 'NewsFeed',
    props: {
        headerTitle: String
    },

   data() {
        return {
            news: [
                {},
                {},
                {},
                {},
                {},
            ]
        }
    },

    mounted() {
        // this.fetchNews().then((data) => {
        //     // console.log(data);
        //     // console.log(this.news);
        //     console.log(data.data.data);
        //     this.news = data.data.data;
        // });
    },

    methods: {
        async fetchNews() {
            const data = axios.get(`https://cryptonews-api.com/api/v1?tickers=BTC,ETH,XRP&items=50&token=${NEWS_API_KEY}`);
            return data;
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
}


div.newsfeed-container {
    overflow: hidden;
    margin: 0;
    border-right: 1px solid var(--border-color-grey);
    padding: 0;
}

div.header {
    display: flex;
}

div.header-title {
    font-family: 'HeaderFontBold';
    color: var(--on-bg-color-light);
    font-size: 2em;
    padding: var(--container-padding);
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



div.newsfeed-body {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
}


ol.news-container {
    padding: 2px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
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
</style>
