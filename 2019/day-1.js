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

const calculateModuleFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

const calculateTotalFuel = () =>
  masses.reduce((total, mass) => total + calculateModuleFuel(mass), 0);

console.log(calculateTotalFuel());
