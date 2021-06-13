
<template>
  <div class="menu-container">
    <div class="header">

    </div>
    <div class="menu-items-area">
        <div ref="menu-elem" class="menu-item connections active" @click="$emit('menu-selection', 'connections')">
            Verbindungen
        </div>
        <div ref="menu-elem" class="menu-item history" @click="$emit('menu-selection', 'history')">
            meine Fahrten
        </div>
        <div ref="menu-elem" class="menu-item account" @click="$emit('menu-selection', 'account')">
            Konto
        </div>
        <!-- <div ref="menu-elem" class="menu-item contract" @click="$emit('menu-selection', 'About us')">
            About us
        </div> -->
    </div>
    <!-- <div class="footer">

    </div> -->
  </div>
</template>


<script>
export default {
    name: 'Menu',
    methods: {
        selectTab: function(menu_elem) {

            console.log(this.$refs);

            const active_elem = document.querySelector('div.menu-item.active');
            if (active_elem) {
                active_elem.classList.remove('active');
            }

            const elem = document.querySelector(`div.menu-item.${menu_elem}`);
            if (elem) {
                elem.classList.add('active');
            }
        }
    }
}
</script>


<style scoped>
@import url('../css/root.css');
@import url('../css/fonts.css');

* {
    box-sizing: border-box;
}

.icon {
    color: var(--icon-color);
}

div.menu-container {
    display: flex;
    flex-direction: column;
    /* border-right: 1px solid var(--border-color-grey); */
}

div.header {
    height: 30px;
}


div.menu-items-area {
    /* flex-direction: column; */
    display: flex;
    justify-content: center;
    align-items: center;
}


div.menu-item {
    width: 200px;
    height: calc(100% - 2.5px);
    font-family: 'HeaderFontRegular';
    padding: 20px;
    text-align: center;
    color: var(--on-bg-color-medium);
    border-bottom: 1.5px solid transparent;
}

div.menu-item:hover {
    border-bottom: 1.5px solid var(--secondary-color);
    color: var(--on-bg-color-light);
    /* background: var(--primary-color-very-dim); */
    cursor: pointer;
}


div.menu-item.active {
    color: var(--primary-color-light);
    color: white;
    font-weight: bold;
    /* color: var(--secondary-color-light); */
    /* border-bottom: 1px solid var(--primary-color); */
    border-bottom: 1.5px solid var(--secondary-color-light);
    transition: all linear 0.2;
}


/* 
div.footer {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
} */


</style>

