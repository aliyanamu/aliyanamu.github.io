function invokeSpell (input) {
  const spells = [
      { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
      { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
      { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
      { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
      { q: 1, w: 2, e: 0, spellName: 'Tornado' },
      { q: 0, w: 3, e: 0, spellName: 'EMP' },
      { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
      { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
      { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
      { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
  ];
  input = input.split('')
  var countQ = 0, countW = 0, countE = 0, res;
  for (let i = 0;i < input.length; i++) {
    if (input[i] === 'q') countQ += 1
    else if (input[i] === 'w') countW += 1
    else if (input[i] === 'e') countE += 1
  }
  for (let i = 0;i < spells.length; i++) {
    if (spells[i].q === countQ && spells[i].w === countW && spells[i].e === countE) res = spells[i].spellName
  }
  if (res === undefined) return 'Combination does not exist'
  return res
}
