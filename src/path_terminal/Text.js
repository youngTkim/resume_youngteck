export class Text {
  constructor(ctx) {
    this.ctx = ctx;
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;
  }

  setText(str, density) {
    const myText = str;
    const fontWidth = 700;
    const fontSize = 800;
    const fontName = "Hind";

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ctx.font = `${fontWidth} ${fontSize}px ${fontName}`;
    this.ctx.fillStyle = `rgba(0, 0, 0, 0.3)`;
    this.ctx.textBaseline = "middle";
    const fontPos = this.ctx.measureText(myText);
    this.ctx.fillText(
      myText,
      (this.stageWidth - fontPos.width) / 2,
      fontPos.actualBoundingBoxAscent +
        fontPos.actualBoundingBoxDescent +
        (this.stageHeight - fontSize) / 2
    );
    return this.dotPos(density);
  }
  dotPos(density) {
    const imageData = this.ctx.getImageData(
      0,
      0,
      this.stageWidth,
      this.stageHeight
    ).data;
    console.log(imageData);

    const particles = [];
    let i = 0;
    let width = 0;
    let pixel;
    for (let height = 0; height < this.stageHeight; height += density) {
      ++i;
      const slide = i % 2 === 0;
      width = 0;
      if (slide === 1) {
        width += 6;
      }
      for (width; width < this.stageWidth; width += density) {
        pixel = imageData[width + height * this.stageWidth * 4 - 1];
        if (
          pixel !== 0 &&
          width > 0 &&
          width < this.stageWidth &&
          height > 0 &&
          height < this.stageHeight
        ) {
          particles.push({
            x: width,
            y: height,
          });
        }
      }
    }
    return particles;
  }
}
