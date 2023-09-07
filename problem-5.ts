function checkStringOrError(params: unknown): void {
  if (typeof params === "string") {
    console.log(params);
  } else {
    console.error("Error: Input is not a string");
  }
}

checkStringOrError("Hello Programmers!");
checkStringOrError(10);
