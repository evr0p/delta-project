<template>
    <div class="newsfeed-container">
        <div class="header">
            <div class="header-title">{{ headerTitle }}<i style="margin-left: 10px; font-size: 0.7em; color: var(--accent-color)" class="fa fa-chevron-down"/></div>
            <div class="filter-area">
                <div class="filter-button green">Whales</div>
                <div class="filter-button green">Launches</div>
            </div>
        </div>
        <div class="news-container">
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
            <div class="news-element">
                <p style="width: 23%"  class="loading">a</p>
                <p style="height: 15px"></p>
                <p style="width: 66%" class="loading">a</p>
                <p style="width: 88%"  class="loading">a</p>
                <p style="width: 60%"  class="loading">a</p>
                <p style="width: 80%"  class="loading">a</p>
                <p style="width: 79%"  class="loading">a</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NewsFeed',
    props: {
        headerTitle: String
    }
}
</script>

<style scoped>
@import url('../css/fonts.css');
@import url('../css/root.css');

* {
    box-sizing: border-box;
    font-family: 'HeaderFontRegular';
}


div.newsfeed-container {
    overflow-y: hidden;
    border-right: 1px solid var(--border-color-grey);
}

div.header {
    display: flex;
    /* padding: 3px; */
    /* border-bottom: 1px solid var(--border-color-grey); */
    /* box-shadow: 0 1px 2px #000000; */
    /* border-bottom: 1px solid var(--primary-color-dimm); */
    /* background: var(--surface-color-2dp); */
    /* background: linear-gradient(green, green); */
    /* background: var(--sur); */
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


div.news-container {
    /* padding: 2px; */
    height: 100%;
    /* max-height: 100%; */
    overflow-y: scroll;
    overflow-x: hidden;
    /* padding: 5px; */
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
}


div.news-element {
    background: var(--surface-color);
    /* background: white; */
    margin: 0;
    padding: 0;
    padding: 15px;
    width: 100%;
    /* border-radius: 2px; */
    /* margin-bottom: 2px; */
    height: 200px;
    border-bottom: 1px solid var(--border-color-grey);
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



@keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.loading {
  color: transparent;
  /* background: linear-gradient(100deg, #eceff1 30%, #f6f7f8 50%, #eceff1 70%); */
  background: linear-gradient(100deg, #000000 30%, var(--surface-color) 50%, #000000 70%);
  background-size: 400%;
  animation: loading 1.2s ease-in-out infinite;
  margin-bottom: 5px;
  border-radius: 3px;
}

</style>
