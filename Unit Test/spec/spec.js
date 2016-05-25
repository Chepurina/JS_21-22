describe("НАБОР ТЕСТОВ №1. Результат < 10^9, % не учитывается", function() {
  it("1) n > 1, результат не больше 3*10^4", function() {
    expect(unit.pow(2,10)).toBe(1024);
	expect(unit.pow(6,3)).toBe(216);
  });
  it("2) n > 1, результат больше 3*10^4", function() {
	expect(unit.pow(9,5)).toBe(59049);	
    expect(unit.pow(3,11)).toBe(177147);
  });
  it("3) n = 1", function() {
	expect(unit.pow(3,1)).toBe(3);	
    expect(unit.pow(10,1)).toBe(10);
  });
});

describe("НАБОР ТЕСТОВ №2. % учитывается", function() {
  it("1) n > 1, промежуточный результат не больше 3*10^4", function() {
	expect(unit.pow(2,10,100)).toBe(24);	
    expect(unit.pow(6,5,1000)).toBe(776);
  });
  it("2) n > 1, результат больше 3*10^4", function() {
	expect(unit.pow(5,25,100000)).toBe(53125);	
    expect(unit.pow(3,15,1000000)).toBe(348907);
  });
  it("3) n = 1", function() {
	expect(unit.pow(5,1,10)).toBe(5);	
    expect(unit.pow(2,1,100)).toBe(2);
  });
});

describe("НАБОР ТЕСТОВ №3. Некорректные входные данные", function() {
  it("1) Один из параметров является строкой", function() {
	expect(unit.pow("a",5,1000)).toEqual(NaN);
	expect(unit.pow(9,"b",5)).toEqual(NaN);
	expect(unit.pow(9,5,"c")).toEqual(NaN);
  });
  it("2) Входные данные - дробные числа", function() {
	expect(unit.pow(2.1,10,1000)).toEqual(NaN);	
	expect(unit.pow(2,10.1,100)).toEqual(NaN);
	expect(unit.pow(2,10,100.1)).toEqual(NaN);
  });
});


