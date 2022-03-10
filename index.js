var fac = {
    pyramid: 1,
    give: 1,
    darkness: 1,
    traveler: 1,
    worship: 1,
    light: 1,
    stop: 1,
    guardian: 1,
    kill: 1
};
var counter = {
    before_first: 0,
    before_third: 0,
    before_fourth: 0,
    num_glyphs: 0
};
var state = {
    before_first: -1,
    before_third: -1,
    before_fourth: -1
}; 

function toggle_div(glyph) {
    if (counter["num_glyphs"] < 3 || fac[glyph] == -1) {
        var x = document.getElementById(glyph);
        counter["num_glyphs"] += fac[glyph];
        var button_element = document.getElementById(glyph+'_btn');

        if (x.style.display === "none") {
            x.style.display = "block";
            fac[glyph] *= -1;
            button_element.className = 'highlight';
        } else {
            x.style.display = "none";
            fac[glyph] *= -1;
            button_element.className = 'normal';
        }
    }
} 

function location_header(area, glyph) {
    if (counter["num_glyphs"] < 3 || fac[glyph] == -1) {
        counter[area] += fac[glyph];
        if (state[area]  == 1 && counter[area] < 1) {
            document.getElementById(area).style.display = "none";
            state[area] *= -1;
        }
        else if (state[area]  == -1 && counter[area] > 0) {
            document.getElementById(area).style.display = "block";
            state[area] *= -1;
        }
    }
}