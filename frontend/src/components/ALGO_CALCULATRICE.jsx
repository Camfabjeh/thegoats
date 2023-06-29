export function costram(string) {
  if (string === "1 GO") {
    return 30;
  }
  if (string === "2 GO") {
    return 40;
  }
  if (string === "3 GO") {
    return 54;
  }
  return 0;
}

export function coststock(string) {
  if (string === "16 GO") {
    return 31;
  }
  if (string === "32 GO") {
    return 45;
  }
  if (string === "64 GO") {
    return 66;
  }
  return 0;
}

export function state(string) {
  if (string === "DEEE") {
    return 0;
  }
  if (string === "Réparable") {
    return 0.5;
  }
  if (string === "Bloqué") {
    return 0.1;
  }
  if (string === "Reconditionnable") {
    return 0.05;
  }
  return 1;
}

export function finalcost(a, b, c) {
  if (state(c) === 0) {
    return 0;
  }
  if (state(c) === 1) {
    return costram(a) + coststock(b);
  }
  return costram(a) + coststock(b) - (costram(a) + coststock(b)) * state(c);
}
