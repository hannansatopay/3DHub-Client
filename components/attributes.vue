<template>
 <v-container>
            <v-row class="attributes">
                <v-col md="4" sm="12">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">mdi-printer-3d</v-icon>
                        <h2>Printers</h2>
                    </v-card>
                </v-col>
                <v-col md="4" sm="12">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">mdi-cog-outline</v-icon>
                        <h2>Parts</h2>
                    </v-card>
                </v-col>
                <v-col md="4" sm="12">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">mdi-printer-3d-nozzle-outline</v-icon>
                        <h2>Services</h2>
                    </v-card>
                </v-col>
                <v-col md="4" sm="12">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">mdi-robot-industrial</v-icon>
                        <h2>Machine Servicing</h2>
                    </v-card>
                </v-col>
                <v-col md="4" sm="12">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">mdi-flask-empty-outline</v-icon>
                        <h2>Materials</h2>
                    </v-card>
                </v-col>
                <v-col md="4" sm="12">
                    <v-card class="mx-auto text-center" style="padding: 20px;">
                        <v-icon color="teal" size="75" class="mb-3">mdi-pencil-ruler</v-icon>
                        <h2>Design</h2>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>
<script>
export default {
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