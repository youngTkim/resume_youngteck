export function distance(x1, y1, x2, y2) {
  const x = x2 - x1;
  const y = y2 - y1;
  // (x1,y1) 와 (x2,y2)의 대각 직선거리 반환
  return Math.sqrt(x * x + y * y);
}

export function pointCircle(px, py, cx, cy, r) {
  if (distance(px, py, cx, cy) <= r) {
    return true;
  } else {
    return false;
  }
}

export function linePoint(x1, y1, x2, y2, px, py) {
  const dist1 = distance(px, py, x1, y1);
  const dist2 = distance(px, py, x2, y2);
  const dist = dist1 + dist2;
  const lineLength = distance(x1, y1, x2, y2);
  const buffer = 0.1;
  if (dist >= lineLength - buffer && dist <= lineLength + buffer) {
    return true;
  } else {
    return false;
  }
}

export function lineCircle(x1, y1, x2, y2, cx, cy, r) {
  const lineLength = distance(x1, y1, x2, y2);
  const point =
    (cx - x1) * (x2 - x1) + ((cy - y1) * (y2 - y1)) / Math.pow(lineLength, 2);

  const px = x1 + point * (x2 - x1);
  const py = y1 + point * (y2 - y1);

  const onSegment = linePoint(x1, y1, x2, y2, px, py);
  if (!onSegment) return false;

  if (distance(px, py, cx, cy) < r) {
    return true;
  } else {
    false;
  }
}
// distance(x1, y1, x2, y2): 두 점 (x1, y1)과 (x2, y2) 사이의 거리를 구하는 함수입니다.
// 공식을 사용하여 두 점 사이의 거리를 계산하여 반환합니다.

// pointCircle(px, py, cx, cy, r): 점 (px, py)와 원의 중심 (cx, cy)와의 거리를 계산하고,
// 이 거리가 원의 반지름 r보다 작거나 같으면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 함수를 사용하여 특정 점이 원 안에 있는지 확인할 수 있습니다.

// linePoint(x1, y1, x2, y2, px, py): 점 (px, py)가 선분 (x1, y1) - (x2, y2) 위에 있는지 확인하는 함수입니다.
//  먼저 점과 두 선분의 끝점 사이의 거리를 계산하고, 이 거리가 선분의 길이에 얼마나 가까운지를 확인합니다. buffer라는 변수를 이용하여 오차를 허용합니다.
//  거리가 선분 길이 범위 내에 있으면 true를 반환하고, 그렇지 않으면 false를 반환합니다.

// lineCircle(x1, y1, x2, y2, cx, cy, r): 선분 (x1, y1) - (x2, y2)과 원의 중심 (cx, cy)와의 관계를 확인하는 함수입니다.
// 먼저 선분 위의 가장 가까운 점을 구한 후, 이 점과 선분 사이의 관계를 linePoint 함수를 사용하여 확인합니다. 그리고 원의 중심과 이 점 사이의 거리를 계산하여,
// 이 거리가 원의 반지름 r보다 작으면 true를 반환합니다. 그렇지 않으면 false를 반환합니다. 이 함수를 사용하여 선분과 원이 서로 교차하는지 확인할 수 있습니다.

// 위의 함수들은 점, 선, 원과 관련하여 계산을 수행하고, 그 결과를 true 또는 false로 반환하여 원하는 조건에 따라 처리할 수 있습니다.
