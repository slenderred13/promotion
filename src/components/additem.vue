<template>
<div>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" label="Name promotion" required></v-text-field>
        <v-text-field v-model="price" type="number" label="Price" required></v-text-field>
        <v-text-field v-model="detail" label="Detail" required></v-text-field>
        <v-text-field v-model="duration" label="Duration DD/MM/YYYY - DD/MM/YYYY" required></v-text-field>
        <v-btn :disabled="!add" color="success" class="mr-4" @click="validate">
            Add Promotion
        </v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> CLEAR FORM </v-btn>
        <v-btn class="mr-4" @click="page">See all</v-btn>
    </v-form>
</div>
</template>

<script>
export default {
    data: () => ({
        add: true,
        name: "",
        price: "",
        detail: "",
        duration: "",

    }),
    methods: {
        validate() {
            if (this.name) {
                let payload = {
                    name: this.name,
                    price: this.price,
                    detail: this.detail,
                    duration: this.duration,
                };
                this.$store.dispatch("setItem", payload);
            }
        },
        reset() {
            this.$refs.form.reset();
        },
        page() {
            this.$store.state.page = 2;
        },
    },
};
</script>

<style>
</style>
