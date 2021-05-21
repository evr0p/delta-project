
<template>
    <div id="body">
        <Header id="header"/>
        <Menu id="menu" @menu-selection="menuSelection"/>
        <NewsFeed id="newsfeed" class="menu-element" headerTitle="Newsfeed"/>
        <ContractArea id="contract" class="menu-element" headerTitle="Contract"/>
        <Footer id="footer"></Footer>
    </div>
</template>


<script>
import Header from './components/Header';
import Menu from './components/Menu';
import NewsFeed from './components/NewsFeed';
import ContractArea from './components/ContractArea';
import Footer from './components/Footer';


export default {
  name: "App",
  components: {
    Header,
    Menu,
    NewsFeed,
    ContractArea,
    Footer
  },

  methods: {
      menuSelection: function(...args) {
        Menu.methods.selectTab(...args);

        const menu_elements = document.querySelectorAll('.menu-element');

        for (const elem of menu_elements) {
            elem.style.visibility = "hidden";
        }

        const selected = document.querySelector(`#${args[0]}`);
        if (selected) {
            selected.style.visibility = 'visible';
        }
      }
  }
};
</script>


<style>
@import url('./css/fonts.css');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body, html {
    background: var(--bg-color);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

div#body {
    display: grid;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    grid-template-columns: minmax(150px, 250px) 2fr 1fr;
    grid-template-rows: 60px 1fr minmax(70px, 100px);
}


#header {
    /* background: yellow; */
    border-bottom: 1px solid var(--border-color-grey);
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 4;
}

#menu {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 2;
}


#newsfeed {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}


#contract {
    visibility: hidden;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}

#footer {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
    
}


@media (min-width: 550px) and (max-width: 1000px),
(min-width: 0px) and (max-width: 549px)
{

    div#body {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 0 1fr 0;
        grid-template-rows: 60px 1fr minmax(70px, 100px);
    }

    #menu,
    #contract
    {
        visibility: hidden;
    }
}


</style>
