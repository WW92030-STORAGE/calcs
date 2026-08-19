function invalidInput(element_id) {
  document.getElementById(element_id).textContent = "INVALID INPUT :(";
}

function setText(element_id, text) {
  document.getElementById(element_id).textContent = text;
}

function setInnerHTML(element_id, text) {
  document.getElementById(element_id).innerHTML = text;
}

function getValue(element_id) {
  return document.getElementById(element_id).value;
}

function getElement(element_id) {
  return document.getElementById(element_id);
}

function button1() {
  // BEGIN INPUT
  
  const input1 = getValue("input1");
  
  // PROCESSING
  
  // || 0 is a thing for exception handling
  const a = input1;
  
  // COMPUTE
  const result1 = getLocatorColor(a);
  const hexcode = rgb2hex(result1);

  // RETURN
  setText("result1", "RESULT = " + result1 + " | " + hexcode);
  document.getElementById("swatch1").style.backgroundColor = hexcode;
}

function uuidHex(uuid) {
    const hex_pre = "0x";
    const schplit = uuid.split("-");
    console.log(schplit);
    // 8, 4, 4, 4, 12

    let res = 0n;
    res |= BigInt(hex_pre + schplit[0]);
    res <<= 16n;
    res |= BigInt(hex_pre + schplit[1]);
    res <<= 16n;
    res |= BigInt(hex_pre + schplit[2]);
    res <<= 16n;
    res |= BigInt(hex_pre + schplit[3]);
    res <<= 48n;
    res |= BigInt(hex_pre + schplit[4]);
    return res;
}

// Java UUID hashCode method
function uuidHash(uuid) {
    let uuid_hex = uuidHex(uuid);

    let upper = uuid_hex >> 64n;
    let lower = uuid_hex & ((1n << 64n) - 1n);
    let first_xor = lower ^ upper;

    let upper2 = first_xor >> 32n;
    let lower2 = first_xor & ((1n << 32n) - 1n);
    return upper2 ^ lower2;
}

function getLocatorColor(uuid) {
    let uuid_hash = uuidHash(uuid);
    let true_hash = Number(uuid_hash);
    console.log(uuid_hash, true_hash);
    return [(true_hash >> 16) & 255, (true_hash >> 8) & 255, true_hash & 255];
}

function rgb2hex(rgb) {
    return ("#" + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16)).toUpperCase();
}