import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = "I'm out until Monday; urgent matters go to Future Me, who has not agreed to this and charges in snacks.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${text}\n`, "utf8");
