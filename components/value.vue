<template>
  <v-container>
    <v-row class="attributes">
      <v-col md="4" sm="12" class="col-sm-12">
        <v-card elevation="0" class="start mx-auto">
          <v-card-text class="front">
            <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8204_-ZsGzTORo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660071717875" width="150">
            <h2 class="mt-3 text-white">Flexible Design</h2>
          </v-card-text>
          <v-card class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="back pb-0">
                <h1 class="text-black mb-3">Flexible Design</h1>
                <p>Allows for more complex designs and prints VS traditional manufacturing process</p>
              </v-card-text>
            </v-card>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="col-sm-12">
        <v-card elevation="0" class="start mx-auto">
          <v-card-text class="front">
            <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8206_7-QULUkGr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660071719343" width="150">
            <h2 class="mt-3 text-white">Rapid Prototyping</h2>
          </v-card-text>
          <v-card class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="back pb-0">
                <h1 class="text-black mb-3">Rapid Prototyping</h1>
                <p>Faster, Economical and More efficient</p>
              </v-card-text>
            </v-card>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="col-sm-12">
        <v-card elevation="0" class="start mx-auto">
          <v-card-text class="front">
            <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8205_lbPgEQTjs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660071718275" width="150">
            <h2 class="mt-3 text-white">Print On-Demand</h2>
          </v-card-text>
          <v-card class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="back pb-0">
                <h1 class="text-black mb-3">Print On-Demand</h1>
                <p>Less space required to stock inventory</p>
              </v-card-text>
            </v-card>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="col-sm-12">
        <v-card elevation="0" class="start mx-auto">
          <v-card-text class="front">
            <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8201_HJUAnnXUG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660071714228" width="150">
            <h2 class="mt-3 text-white">Fast Design / Production</h2>
          </v-card-text>
          <v-card class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="back pb-0">
                <h1 class="text-black mb-3">Fast Design / Production</h1>
                <p>Faster than moulded / machined parts. Design process is faster and more efficient as STL / CAD files are created, which are ready to print</p>
              </v-card-text>
            </v-card>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="col-sm-12">
        <v-card elevation="0" class="start mx-auto">
          <v-card-text class="front">
            <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8203_AYwH5nUi7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660071714216" width="150">
            <h2 class="mt-3 text-white">Minimizing Waste</h2>
          </v-card-text>
          <v-card class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="back pb-0">
                <h1 class="text-black mb-3">Minimizing Waste</h1>
                <p>Each production uses only the amount of material required. Little / no wastage</p>
              </v-card-text>
            </v-card>
        </v-card>
      </v-col>
      <v-col md="4" sm="12" class="col-sm-12">
        <v-card elevation="0" class="start mx-auto">
          <v-card-text class="front">
            <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8202_bcvEZuvdJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660071714212" width="150">
            <h2 class="mt-3 text-white">Environment Friendly</h2>
          </v-card-text>
          <v-card class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
              <v-card-text class="back pb-0">
                <h1 class="text-black mb-3">Environment Friendly</h1>
                <p>By minimizing waste from production, the process is inherently environmentally friendly</p>
              </v-card-text>
            </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
}
</script>

<style lang="scss">
@media (max-width: 991.98px) {
  .attributes.row {
    flex-direction: column;
  }
}
</style>

<style lang="scss" scoped>

@media (max-width: 991.98px) {
  .col-sm-12 {
    flex: 1;
    max-width: 100%;
    width: 100%;
  }

  .row {
    flex-direction: column;
  }

  .inverse {
    flex-direction: column-reverse;
  }
}

.start {
  border-radius: 0px;
  transition: 0.3s;
}

.start:hover {
      transform: scale(1.05);
    z-index: 9;
    border-radius: 20px;
    box-shadow: 0px 6px 31px rgb(0 0 0 / 12%)!important;
    overflow: hidden;
}

.row .col:nth-child(odd) .start {
  background: #009688;
}

.row .col:nth-child(even) .start {
  background: #313131;
}

.row {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.v-card {
  box-shadow: none!important;
}
.col {
  padding: 0px;
}

.v-card--reveal {
    bottom: 0;
    opacity: 0!important;
    position: absolute;
    width: 100%;
  }
.v-card:hover {
  .v-card--reveal {
    opacity: 1!important;
  }
}

.front, .back {
  position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.v-card.start {
  height: 0;
  padding-top: 100%;
}
</style>