const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

cnv.width = innerWidth;
cnv.height = innerHeight;

function bezierStep(points, t) {
  let list = [...points];
  let newList = [];

  while (list.length > 1) {
    for (let i = 0; i < list.length - 1; i++) {
      newList.push(list[i].lerp(list[i + 1], t));
    }

    list = [...newList];
    newList = [];
  }

  return list[0];
}

function bezier(points, stepSize) {
  const vertices = [];

  for (let i = 0; i < 1; i += stepSize) {
    vertices.push(bezierStep(points, i));
  }

  return vertices;
}

function randCurve() {
  setTimeout(() => {
    requestAnimationFrame(randCurve);
  }, 1000);

  const points = [];
  for (let i = 0; i < 10; i++) {
    points[i] = new vec(Math.random(), Math.random());
  }

  const curve = bezier(points, 0.01);

  ctx.beginPath();

  curve.map((point) => {
    ctx.lineTo(point.x * cnv.width, point.y * cnv.height)
  });

  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.stroke();
}

randCurve();