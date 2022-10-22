const { sum, range, person, toggle } = require('./index');


describe('test index.js file', () => {
    it('sums 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    });

    it('has 2', () => {//toContain: 배열비교메소드
        expect(range(1, 3)).toContain(2);
    });

    it("make person", () => {
    expect(person("kim", 20)).toEqual({//객체비교메소드
            name: "kim",
            age: 20,
        });
    });

    it("returns false", () => {//참값확인메소드
        expect(toggle(true)).toBeFalsy();
        expect(toggle(true)).not.toBeTruthy();
    });
});

//toBe - Matcher함수
//jest에서 오브젝트 테스트하는방법: toEqual
//나머지 2개 테스트 코드예제도 작성하기