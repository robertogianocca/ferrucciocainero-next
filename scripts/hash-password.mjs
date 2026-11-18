// Prints the value for ADMIN_PASSWORD_KARIN / ADMIN_PASSWORD_FERRUCCIO.
// Usage: npm run hash-password (the password is typed without being shown)
import { randomBytes, scryptSync } from "node:crypto";
import { createInterface } from "node:readline/promises";
import { Writable } from "node:stream";

let muted = false;
const output = new Writable({
  write(chunk, _encoding, callback) {
    if (!muted) process.stdout.write(chunk);
    callback();
  },
});
const rl = createInterface({ input: process.stdin, output, terminal: true });

process.stdout.write("Password: ");
muted = true;
const password = await rl.question("");
muted = false;
rl.close();
process.stdout.write("\n");

if (password.length < 10) {
  console.error("Usa una password di almeno 10 caratteri.");
  process.exit(1);
}

const salt = randomBytes(16).toString("base64url");
console.log(`${salt}:${scryptSync(password, salt, 64).toString("base64url")}`);
