export default {
    template: `
    <section class="dev-lightbox">
        <a href="index.php"><img class="dev-logo" src="images/logo-symbol.svg" alt="logo"></a>
        <p class="close-dev-lightbox">X</p>

        <div class="project-con">
                <h3 class="project-title"></h3>
                <div class="dt-img-con">
                    <img class="dt-img" src="" alt="project desktop image">
                </div>
                <div class="desc">
                    <h4>Project Description:</h4>
                    <p class="project-desc"></p>
                    <h4>Team Members:</h4>
                    <p class="project-team"></p>
                </div>
                <div class="m-img">
                    <img class="m-img1" src="" alt="project mobile image 1">
                    <img class="m-img2" src="" alt="project mobile image 2">
                </div>

                <img class="project-lavendar" src="images/lavendar-pot.png" alt="">
        </div>
    </section>
    `
}