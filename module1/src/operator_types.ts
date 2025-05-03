{
  type FrontEnd = "JuniorDev" | "SeniorDev";

  const dev: FrontEnd = "SeniorDev";

  // Ternary Operator ,Optional Chaining ,nullish

  console.log("TypesScript Runnig :");
  console.log("..............................");

  const age: number = 50;
  const isAdult = age >= 18 ? "Adult" : "Child";

  const isAuthentic = 0;
  const Person = isAuthentic ?? "Guest";
  // console.log({Person});

  // Nullable Types

  const devs = (x: string | null) => {
    if (x) {
      console.log("Searching....");
    } else {
      console.log("Nothing to search");
    }
  };

  // devs(null)

  // Unknown Types
  const speedCheck = (value: unknown) => {
    if (typeof value === "number") {
      const speed = value * 3600;
      console.log(`The Speed is ${speed}`);
    } else if (typeof value === "string") {
      const [x, y] = value.split(" ");
      const result = parseFloat(x) * 745;
      console.log(result);
    } else {
      console.log("You Entered Wrong Input");
    }
  };

  // speedCheck("1000 hp")

  // Never Type

  const msg: string = "Hello World";
  const ans = msg.split(" ");
  const [a, b] = ans;
}
// ts-node-dev --respawn
//  --transpile-only
//   --project
//    ./module1/tsconfig.json
//     ./module1/src/operator_types.ts
