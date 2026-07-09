const encryptText = document.getElementById("encrypt-text");
const encryptPassword = document.getElementById("encrypt-password");
const encryptOutput = document.getElementById("encrypt-output");
const encryptBtn = document.getElementById("encrypt-btn");
const copyEncryptBtn = document.getElementById("copy-encrypt-btn");

const decryptCiphertext = document.getElementById("decrypt-ciphertext");
const decryptPassword = document.getElementById("decrypt-password");
const decryptOutput = document.getElementById("decrypt-output");
const decryptBtn = document.getElementById("decrypt-btn");
const copyDecryptBtn = document.getElementById("copy-decrypt-btn");

const status = document.getElementById("status");

function setStatus(message, type = "") {
  status.textContent = message;
  status.className = `status${type ? ` ${type}` : ""}`;
}

async function copyToClipboard(text, button) {
  await navigator.clipboard.writeText(text);
  const original = button.textContent;
  button.textContent = "Copied!";
  setTimeout(() => {
    button.textContent = original;
  }, 1500);
}

encryptBtn.addEventListener("click", async () => {
  setStatus("");
  encryptBtn.disabled = true;

  try {
    const result = await encrypt(encryptText.value, encryptPassword.value);
    encryptOutput.value = result;
    copyEncryptBtn.disabled = false;
    setStatus("Encrypted successfully.", "success");
  } catch (error) {
    encryptOutput.value = "";
    copyEncryptBtn.disabled = true;
    setStatus(error.message, "error");
  } finally {
    encryptBtn.disabled = false;
  }
});

decryptBtn.addEventListener("click", async () => {
  setStatus("");
  decryptBtn.disabled = true;

  try {
    const result = await decrypt(decryptCiphertext.value, decryptPassword.value);
    decryptOutput.value = result;
    copyDecryptBtn.disabled = false;
    setStatus("Decrypted successfully.", "success");
  } catch (error) {
    decryptOutput.value = "";
    copyDecryptBtn.disabled = true;
    setStatus(error.message, "error");
  } finally {
    decryptBtn.disabled = false;
  }
});

copyEncryptBtn.addEventListener("click", async () => {
  if (!encryptOutput.value) return;
  await copyToClipboard(encryptOutput.value, copyEncryptBtn);
});

copyDecryptBtn.addEventListener("click", async () => {
  if (!decryptOutput.value) return;
  await copyToClipboard(decryptOutput.value, copyDecryptBtn);
});
