<template>
<v-app>
    <v-app-bar absolute color="#fcb69f" src="https://madambeautysite.files.wordpress.com/2017/03/header-bg.png" app>
        <h1>Promotion</h1>
        <v-spacer />
    </v-app-bar>
    <v-main>
        <v-container>
            <div v-if="$store.state.page == 1">
                <additem />
            </div>
            <div v-if="$store.state.page == 2">
                <datatable />
            </div>

        </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app></v-footer>
</v-app>
</template>

<script>
import additem from "./components/additem"
import datatable from "./components/datatable"

export default {
    name: "App",

    components: {
        additem,
        datatable,

    },

    data() {
        return {
            page: 1,
            clipped: false,
            drawer: false,
            fixed: false,
            items: [{
                    icon: "mdi-database-search",
                    title: "Search",
                    to: "/",
                },
                {
                    icon: "mdi-account",
                    title: "About Me",
                    to: "/datatable",
                },
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
        };
    },
};
</script>
