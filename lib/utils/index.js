function varuint_to_bytes(value) {
    if (value <= 0x7F) return Buffer.from([value])
    const result = [];
    while(value) {
        const temp = value & 0x7F;
        value >>= 7;
        result.push(value ? temp | 0x80 : temp);
    }

    return Buffer.from(result);
}
function bytes_to_varuint(bytes) {
    let result = 0
    let bitpos = 0
    for (const byte of bytes) {
        result |= (byte & 0x7F) << bitpos;
        bitpos += 7;
        if ((byte & 0x80) === 0) return result;
    }
    return null
}
function recv_varuint(next) {
    const raw = [ next() ];
    while (raw[raw.length - 1] !== null && raw[raw.length - 1] & 0x80) raw.push(next());
    if (raw[raw.length - 1] === null) return null;
    return bytes_to_varuint(Buffer.from(raw));
}
module.exports = {
    varuint_to_bytes,
    bytes_to_varuint,
    recv_varuint
}