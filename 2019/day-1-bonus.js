// --- Part Two ---
// During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.
//
// Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.
//
// So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:
//
// A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
// What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

// --- Day 1: The Tyranny of the Rocket Equation ---
// Santa has become stranded at the edge of the Solar System while delivering presents to other planets! To accurately calculate his position in space, safely align his warp drive, and return to Earth in time to save Christmas, he needs you to bring him measurements from fifty stars.
//
// Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
//
// The Elves quickly load you into a spacecraft and prepare to launch.
//
// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.
//
// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
//
// For example:
//
// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.
//
// What is the sum of the fuel requirements for all of the modules on your spacecraft?

const masses = [
  143754,
  83242,
  124730,
  62796,
  128187,
  68925,
  60687,
  68800,
  112450,
  70696,
  94653,
  62124,
  82251,
  91514,
  79895,
  82973,
  71678,
  141671,
  88243,
  109553,
  135097,
  78026,
  100048,
  52113,
  109934,
  92274,
  62821,
  138384,
  90112,
  114684,
  137383,
  71727,
  143236,
  79842,
  101187,
  71202,
  131156,
  128805,
  105102,
  71319,
  88615,
  62024,
  126027,
  55321,
  91226,
  75020,
  136689,
  70265,
  97850,
  96536,
  135311,
  64962,
  87137,
  50402,
  70604,
  56879,
  60016,
  98231,
  136635,
  64590,
  143522,
  112152,
  142511,
  95350,
  83483,
  123681,
  123792,
  99044,
  139282,
  96610,
  116844,
  50416,
  110682,
  55137,
  69795,
  100411,
  110119,
  141558,
  90780,
  108063,
  102247,
  85487,
  107174,
  79009,
  131908,
  95164,
  120588,
  62031,
  51070,
  63773,
  128565,
  96458,
  91388,
  54345,
  52840,
  130519,
  51357,
  146851,
  68455,
  102463
];

const calculateFuel = mass => {
  const fuelRequired = Math.floor(mass / 3) - 2;
  if (fuelRequired <= 0) {
    return 0;
  } else {
    return fuelRequired + calculateFuel(fuelRequired);
  }
};

const calculateTotalFuel = () =>
  masses.reduce((total, mass) => total + calculateFuel(mass), 0);

console.log(calculateTotalFuel());
