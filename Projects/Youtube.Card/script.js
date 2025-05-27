function Card(title, chName, views, videoage, duration, thumbnail) {
    let viewcount
    if (views < 1000) {
        viewcount = views;
    } else if (1000 < views < 1000000) {
        viewcount = views / 1000 + "K";
    } else (views > 1000000); {
        viewcount = views / 1000000 + "M";
    }

    let html = `<div class="container">
        <div class="cc">
        <div class="c1">
            <img src="$(thumbnail)" alt="">
            <div class="duration">$(duration)</div>
        </div>
        <div class="c2">
            <h3>$(title)</h3>
            <p>$(chName) • $(views) views • $(videoage) year ago</p>
        </div>
    </div>
</div>`

    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML
}

Card("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "/Items/card-img.avif")


