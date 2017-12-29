let greyscale = ` 
.greyscale img {
    filter: grayscale(1);
}
.greyscale img:hover {
    filter: grayscale(0);
}`;
let blur = ` 
.blur img {
    filter: url(/static/svg/filter.svg#blur);
    filter: blur(2px);
}
.blur img:hover {
    filter: blur(0);
}`;
let saturate = ` 
.saturate img {
    filter: saturate(300%);
}
.saturate img:hover {
    filter: saturate(100%);
}`;
let sepia = ` 
.sepia img {
    filter: sepia(1);
}
.sepia img:hover {
    filter: sepia(0);
}`;
let hueRotate = ` 
.hueRotate img {
    filter: hue-rotate(30deg);
}
.hueRotate img:hover {
    filter: hue-rotate(0);
}`;

let invert = ` 
.invert img {
    filter: invert(1);
}
.invert img:hover {
    filter: invert(0);
}`;

let brightness = ` 
.brightness img {
    filter: brightness(50%);
}
.brightness img:hover {
    filter: brightness(100%);
}`;

let contrast = ` 
.contrast img {
    filter: contrast(0.7);
}
.contrast img:hover {
    filter: contrast(1);
}`;
let imgShadow = ` 
.imgShadow {
    margin-bottom: 20em;
    -webkit-box-reflect: below -8px -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(255, 255, 255, 0.5)));
}`;


export default {
  "greyscale": greyscale,
  "blur": blur,
  "saturate": saturate,
  "sepia": sepia,
  "hueRotate": hueRotate,
  "invert": invert,
  "brightness": brightness,
  "imgShadow": imgShadow,
};