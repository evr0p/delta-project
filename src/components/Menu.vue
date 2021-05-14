
<template>
  <div class="menu-container">
    <div class="header">

    </div>
    <div class="menu-items-area">
        <div ref="menu-elem" class="menu-item newsfeed active" @click="$emit('menu-selection', 'newsfeed')">
            Newsfeed
        </div>
        <div ref="menu-elem" class="menu-item contract" @click="$emit('menu-selection', 'contract')">
            Contracts
        </div>
    </div>
    <div class="footer">

    </div>
  </div>
</template>



<script>
export default {
    name: 'Menu',
    methods: {
        selectTab: function(menu_elem) {
            const active_elem = document.querySelector('div.menu-item.active');
            active_elem.classList.remove('active');

            const elem = document.querySelector(`div.menu-item.${menu_elem}`);
            elem.classList.add('active');
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
    border-right: 1px solid var(--border-color-grey);
}

div.header {
    height: 30px;
}


div.menu-items-area {
    flex-direction: column;
    display: flex;
    align-items: center;
}


div.menu-item {
    width: 100%;
    font-family: 'HeaderFontRegular';
    padding: 20px;
    color: var(--on-bg-color-light);
    border-left: 4px solid transparent;
}

div.menu-item:hover {
    border-left: 4px solid var(--primary-color-dimm);
    color: var(--on-bg-color-light);
    background: var(--primary-color-very-dim);
    cursor: pointer;
}


div.menu-item.active {
    color: var(--primary-color-light);
    border-left: 4px solid var(--primary-color);
}



div.footer {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>

