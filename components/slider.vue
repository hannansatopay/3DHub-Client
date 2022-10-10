<template>
    <div class="home-slider">
        <img  class="desktop" position="bottom center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Banner_ydGwCVEwi.gif"  />
        <img class="mobile"  position="center center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Mobile_aqS0PBDSW.gif" />
    </div>
</template>

<style scoped>
.home-slider {
    background: white;
    overflow: hidden;
}

.home-slider .desktop{
    min-width: 100% !important;
}

.home-slider .mobile { 
    display: none;
}

@media (max-width: 480px) {

    .home-slider .desktop { 
        display: none;

    }

    .home-slider .mobile { 
        display: block;
    }
}
</style>