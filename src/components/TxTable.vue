<template>
    <div class="table-container">
        <div id="connection-title">{{startDestinationLocations}}</div>
        <table id="tx-table">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Abfahrt</th>
                    <th>Ankunft</th>
                    <th>Dauer</th>
                    <th>Umsteigen</th>
                    <th>Gleis</th>
                    <th>a</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(connection, index) in connections" :key="index"
                    v-bind:class="{ odd: index % 2 }"
                >
                    <td class="pictogram-container">
                        <div class="svg-container">
                            <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">
                                <path :d="connection.typeSvgData.data"></path>
                                <path :d="connection.typeSvgData.additional"></path>
                            </svg>
                        </div>
                        <div>{{connection.operator}}</div>
                    </td>
                    <td><div class="td line">{{connection.line}}</div></td>
                    <td><div class="td train-operator">{{connection.operator}}</div></td>
                    <td><div class="td departure-time">{{connection.departureTime}}</div></td>
                    <td><div class="td arrival-time">{{connection.arrivalTime}}</div></td>
                    <td><div class="td duration">{{connection.duration}}</div></td>
                    <td><div class="td hops">{{connection.hops}}</div></td>
                    <td><div class="td track">{{connection.track}}</div></td>
                    <td><div class="td price">{{connection.price}}</div></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
// import * as utils from "../tx.js";
import axios from 'axios';
/**
 * 
 */
export default {
    name: 'TxTable',
    props: {
        headerTitle: String
    },

    data() {
        return {
            connections: []
        }
    },

    mounted() {
        // const data = await this.fetchData();
        // console.log(`was created...elements: ${data.txs.length}`);
        // console.log(data.txs);
        // for (const tx of  data.txs) {
        //     this.props.push();

        // }

        this.fetchData().then((data) => {
            this.connections = this.formatConnectionsData(data.data.connections);
            console.log(this.connections);

            // this.txs = data.txs;
        });
        // this.data = {
            // txs: data.txs
        // };
            // txs: data.txs
        // };

    },

    props: {
        startDestinationLocations: String
    },

    methods: {
        async fetchData() {

            const data = await axios({
                method: 'get',
                // url: 'https://timetable.search.ch/api/route.json?from=Einsiedeln&to=Z%C3%BCrich,+F%C3%B6rrlibuckstr.+60',
                // url: 'https://fahrplan.search.ch/api/route.de.json?from=Einsiedeln&to=Z%C3%BCrich,+F%C3%B6rrlibuckstr.+60',
                url: 'https://fahrplan.search.ch/api/route.de.json?from=Bern&to=St.Gallen',
                // url: 'http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève',
                responseType: 'json'
            });
            // .then(function (response) {
            //     return response;
            //     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
            // });

            return data;
            // let txs;
            // const 
            // const txFetcher = new utils.ApiTxFetch();

            // try {
            //     await txFetcher.initTxs();
            // } catch (e) {
            //     console.log(e);
            // }

            // return txFetcher;
        },

        /**
         * 
         */
        formatConnectionsData(data) {
            const formated = [];
            for (let row of data) {
                formated.push({
                    line: row.legs[0].line,
                    trainType: row.legs[0].type_name,
                    operator: row.legs[0].operator,
                    departureTime: row.departure,
                    arrivalTime: row.arrival,
                    duration: row.duration,
                    hops: row.legs.length - 1,
                    track: row.legs[0].track,
                    price: 234.34,
                    typeSvgData: this.busSvgData(),
                });
            }

            return formated;
        },


        trainSvgData() {
            return {
                data: `M17.3 15.7c.2 0 .3-.1.3-.3l-.3-1.9h-3.2v2.2h3.2zm-6.7-9.5L12.3
                        5 10 3.7 7.7 5l1.8 1.2h1.1zm3.3 3.3c0 .2.1.3.3.3h1.6c.2 0
                        .3-.1.3-.3l-.3-2.4c0-.2-.2-.3-.3-.3h-1.3c-.2 0-.3.1-.3.3v2.4zM9.7
                        6.8H2.5v-.6h5.9L6.5 5 10 3l3.5 2-1.9 1.2h3.8c.5 0 .9.3.9.8l.8
                        5.9H2.5V9.8h7.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H2.5v-.6h7.2c.2
                        0 .3-.1.3-.3S9.9 8 9.7 8H2.5v-.6h7.2c.2 0 .3-.1.3-.3 0-.1-.1-.3-.3-.3zM6.5 
                        15c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6c-.9 0-1.6-.7-1.6-1.6m3.7 
                        0c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6M2.5 
                        2.8h15v-.3h-15v.3zm0 14.7h15v-.6h-15v.6zm0-3.9l3.4-.1v2.2H2.5v-2.1z`
            };
        },

        busSvgData() {
            return {
                data: `M4.2 9c0 .2.1.3.3.3h3.8c.2 0 .3-.1.3-.3V5.3c0-.2-.1-.3-.3-.3H4.6c-.2 
                       0-.4.1-.4.3V9zm5.1 1.2c0 .3.2.5.5.5s.5-.2.5-.5V5.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.8zm1.6 0c0 
                       .3.2.5.5.5s.5-.2.5-.5V5.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.8zm1.6.1c0 
                       .2.1.3.3.3h1.7c.2 0 .3-.1.3-.3v-.1l-1.3-4.9c0-.2-.2-.4-.5-.4s-.5.2-.5.5v4.9zM3.3 5H.5v-.7h12.6c.5 
                       0 1 .3 1.1.8l1.3 5v3.5c0 .3-.2.5-.5.5H9.2c-.3 0-.5-.2-.5-.5v-.1c0-1.6-1.3-2.9-2.9-2.9-1.6 0-2.9 1.3-2.9 2.9v.1c0 
                       .3-.2.5-.5.5H.5V9.4h2.8c.2 0 .3-.1.3-.3V5.3c0-.2-.1-.3-.3-.3z`,
                additional: `M5.8 14.7c.7 0 1.2-.6 1.2-1.2s-.5-1.3-1.2-1.3-1.3.6-1.3 1.3c0 
                             .7.6 1.2 1.3 1.2m0-3.4c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2c-1.2 
                             0-2.2-1-2.2-2.2s1-2.2 2.2-2.2`
            }
        },

        formatDateTime(dt) {
            return;
        },


        blockNumber() {
            return  
        }
    },
}
</script>


<style scoped>


div.pictogram-container {
    display: flex;
}

div.svg-conatiner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 20px;
    text-align: center;
    border-radius: 5px;

}

svg {
    height: 25px;
    width: 25px;
    border-radius: 5px;
    background: #27348b;
    fill: white;
}


.table-container {
    margin-top: 0px;
    /* height: 50vh; */
    overflow: auto;
    display: flex;
    /* max-width: 900px; */
    flex-direction: column;
    align-items: center;
}


div#connection-title {
    padding: 25px;
    margin: 25px 0 50px 0;
    text-align: center;
    height: 30px;
    width: 50%;
    font-size: 1.6em;
    color: var(--on-bg-color-light);
}


table#tx-table {
      transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
    position: relative;
    /* display: inline-block; */
    border-spacing: 0;
    border-collapse: separate !important;
    /* padding: 30px; */
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;
}


tbody {
    max-height: 400px;
    overflow-y: scroll;
}


table#tx-table th {
    position: sticky;
    top: 0;
    /* background: black; */
    /* background: transparent; */
    /* color: white; */
    text-align: left;
    padding: 5px;
}

table#tx-table tr {
    /* padding: 20px; */
    /* background: green; */
    background: var(--bg-color-new);
    min-height: 20px;
    color: var(--on-bg-color-light);
    border-radius: 10px;
}

table#tx-table td {
    padding: 8px;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
}



table#tx-table tr.odd {
    background: var(--bg-color-lighter);

}

h1 {
    color: black;
    font-size: 4em;
}


th {
    /* background: transparent; */
}


thead > tr  {
    color: var(--on-bg-color-medium);
    background: transparent !important;
}

</style>
