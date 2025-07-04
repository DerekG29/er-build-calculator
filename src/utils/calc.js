// hp formula source: https://eldenring.wiki.fextralife.com/HP
function base_hp(vig) { 
  if (vig < 26) { return Math.floor(300+500*(((vig-1)/24)**1.5)); }
  if (vig < 41) { return Math.floor(800+650*(((vig-25)/15)**1.1)); }
  if (vig < 61) { return Math.floor(1450+450*(1-(1-((vig-40)/20))**1.2)); }
  return Math.floor(1900+200*(1-(1-((vig-60)/39))**1.2));
}

// fp formula source: https://eldenring.wiki.fextralife.com/FP
function base_fp(mnd) {
  if (mnd < 16) { return Math.floor(50+45*((mnd-1)/14)); }
  if (mnd < 36) { return Math.floor(95+105*((mnd-15)/20)); }
  if (mnd < 61) { return Math.floor(200+150*(1-(1-((mnd-35)/25))**1.2)); }
  return Math.floor(350+100*((mnd-60)/39));
}

// stamina formula source: https://eldenring.wiki.fextralife.com/stamina
function base_st(end) {
  if (end < 16) { return Math.floor(80+25*((end-1)/14)); }
  if (end < 36) { return Math.floor(105+25*((end-15)/15)); }
  if (end < 60) { return Math.floor(130+25*((end-30)/20)); }
  return Math.floor(155+15*((end-50)/49));
}

export default {
  base_hp,
  base_fp,
  base_st,
}