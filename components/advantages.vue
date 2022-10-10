<template>
 <v-container>

 <H1 text="Advantages" />
            <v-row class="attributes">
                <v-col md="4" sm="12" v-for="d in data">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">{{d.icon}}</v-icon>
                        <p>{{d.text}}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>
<script>
import H1 from '../components/heading-style-a';
export default {
    components: { H1 },
    props: ['data']
};
</script>

    <style lang="scss" scoped>

.attributes {
.v-card {
    border-radius: 30px;
}

.v-card:hover {
    background: #009688;

    * {
        filter: brightness(0) invert(1);
    }
}
}
</style>