function ipv4_bits(string){
    let parte = string.split('.');
    let result = '';
    for (let i=0; i < parte.length; i++) {
      let part = parseInt(parte[i]);
      let bits = part.toString(2);
      while (bits.length < 8) {
        bits = '0' + bits;
      }
      result += bits;
    }
    return result;
}
console.log(ipv4_bits("192.168.0.1"));