import { amort } from "./amort";

document.querySelector("#root").innerHTML = amort(10_000, 0.06, 36);
