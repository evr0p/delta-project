<template>
<div class="container">
    <div class="connections-box">
        <div class="header">
            <div class="header-title">{{ headerTitle }}</div>
            <div class="return-to-connections" @click="$emit('return-to-connections', 'hello')">
                &#60; Verbindungen suchen
            </div>
        </div>
        <div class="input-container">
            <div class="input-area left">
                <div class="input-field">
                    <label for="name">Name</label>
                    <input id="name" class="place-input" v-model="form.name" lazy/>
                </div>
                <div class="input-field right">
                    <label for="surname">Nachname</label>
                    <input id="surname" class="place-input" v-model="form.surname" lazy/>
                </div>
            </div>
            <div class="input-area secondary-row">
                <div class="input-field">
                    <label for="birthday-date">Geburtsdatum</label>
                    <input id="birthday-date" type="date" class="place-input" v-model="form.birthday"/>
                </div>
                <div class=" input-field clock-input">
                    <label for="discount-type">Ermässigungen</label>
                    <select id="discount-type" class="place-input">
                        <option v-for="(option, index) in discountOptions"
                            :key="index"
                            :selected="index == 0"
                            :value="option.value">
                            {{option.name}}
                        </option>
                    </select>
                </div>                        
            </div>
        </div>
        <div class="search-button-area" @click="a">
            <button class="search-button"></button>
        </div>
    </div>
    <div class="ticket-info-box">
        <div class="info-title">{{connection.from}} - {{connection.to}}</div>
        <div class="info-route">{{connection.description}}</div>
        <div class="info-hops">Umsteigen {{connection.hops}}</div>
        <div class="info-discount" v-if="form.discountOption != 'no_discount'">{{discountOptions[1].name}}</div>
    </div>
</div>
</template>


<script>
const moment = require('moment');
// import * as utils from "../tx.js";
import axios from 'axios';
import uniqueId from 'lodash.uniqueid';
/**
 * 
 */
export default {
    name: 'PaymentMenu',
    props: {
        data: Object,
        headerTitle: String,
        // startDestinationLocations: String,
        // startPlace: String,
        // destinationPlace: String,
        connection: Object
    },

    data() {
        return {
            news: [],
            options: [],
            exactTitle: '',
            form: {
                name: '',
                surname: '',
                birthday: '',
                discountOption: '',
            },

            discountOptions: [
                {name: 'keine Ermässigungen', value: 'no_discount'},
                {name: 'Halbtax', value: 'halbtax'}
            ],
        }
    },

    mounted() {
    },


    methods: {

    },
}
</script>


<style scoped>

* {
    font-family: 'HeaderFontRegular';
}


.container {
    width: 100%;
    margin-top: 55px;
    display: flex;
    justify-content: center;
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.return-to-connections {
    white-space: nowrap;
    padding: 5px;
    padding-right: 10px;
    cursor: pointer;
    /* width: 50px; */
    /* height: 10px; */
    color: var(--secondary-color-light);
    /* background: green; */
}

.return-to-connections:hover {
    text-decoration: underline;
}


.ticket-info-box {
    width: 250px;
    height: 300px;
    margin-left: 20px;
    border-radius: 16px;
    padding: 12px;
    border: 1px solid var(--bg-color);
    color: var(--on-bg-color-light);
        background: rgb(25, 27, 31);
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;

}

.info-title {
    font-size: 1.05em;
    margin-bottom: 15px;
    /* font-family: 'HeaderFontBold'; */
}

.info-route {
    color: var(--on-bg-color-medium);
}

.info-hops {
    font-size: 0.8em;
    padding-top: 10px;
    color: var(--on-bg-color-medium);
}


.error-input, .error-input:focus {
    border: 1px solid rgb(209, 100, 100);
    box-shadow: 0px 0px 3px 0.2px rgb(221, 101, 101);
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
    padding-top: 5px;
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
    /* margin-top: 55px; */
    width: 40%;
    min-width: 700px;
    max-width: 900px;
    /* height: 50%; */
    height: max-content;
    padding: 8px;
    background: rgb(25, 27, 31);
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
    border-radius: 24px;
    /* border-radius: 5px; */
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
    color: var(--on-bg-color-light);
}

input, select {
    background: var(--bg-color-darker);
    margin-top: 10px;
    padding-left: 10px;
    /* width: 500px; */
    color: var(--on-bg-color-light);
    outline: none;
    height: 3.0em;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    box-shadow: none;
    /* background: var(--bg-color); */
    background: var(--bg-color-darker);
}

input:focus {
    border: 1px solid var(--secondary-color);
    box-shadow: 0px 0px 3px 0.2px var(--secondary-color);
}


div.switch-arrow-div {
    position: fixed;
    border: 5px solid var(--bg-color-lighter);
    /* background: var(--bg-color); */
    background: rgb(25, 27, 31);
    margin-top: 27px;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    z-index: 3;
}

div.switch-arrow-div div {
    background: var(--bg-color-lighter);
}


.search-button-area {
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

button.search-button {
    /* background: var(--secondary-color-semi); */
    /* color: var(--on-bg-color-medium); */
    /* background: var(--secondary-color); */
    background: var(--button-color);
    color: white;
    outline: none;
    border: none;
    font-size: 1.1em;
    box-shadow: none;
    height: 45px;
    border-radius: 16px;
    width: 100%;
    cursor: pointer;
    /* margin-left: auto; */
    /* margin-right: auto; */
    /* font-weight: bold; */
}


button#search-button:hover {
    background: var(--secondary-color);
}

button#search-button:active {
    background: var(--button-color-pressed);
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


</style>

