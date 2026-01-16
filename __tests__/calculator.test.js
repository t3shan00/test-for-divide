import { divide } from '../src/calculator.js';

describe ('divide', () => {
    it('divides two numbers', () => {
        expect(divide(100000, 250)).toBe(400);
    });

    it('divides two negative numbers', () => {
        expect(divide(-54, -9)).toBe(6);
    });

    it('divides zero by a positive number', () => {
        expect(divide(0, 87)).toBe(0);
    });

    it('divides zero by a negative number', () => {
        expect(divide(0, -9)).toBe(-0);
    });

    it('Numerator is not a number', () => {
        expect(() => divide('a', 8)).toThrow(TypeError);
        expect(() => divide('a', 8)).toThrow('Both arguments must be numbers');
    });

    it('Denominator is not a number', () => {
        expect(() => divide(84, 'b')).toThrow(TypeError);
        expect(() => divide(84, 'b')).toThrow('Both arguments must be numbers');
    });

    it('Numerator and Denominator are not numbers', () => {
        expect(() => divide('a', 'b')).toThrow(TypeError);
        expect(() => divide('a', 'b')).toThrow('Both arguments must be numbers');
    });

    it('Denominator is 0', () => {
        expect(() => divide(6758, 0)).toThrow(RangeError);
        expect(() => divide(6758, 0)).toThrow('Division by zero is not allowed');
    });

    it('Both Numerator and Denominator are zero', () => {
        expect(() => divide(0, 0)).toThrow(RangeError);
        expect(() => divide(0, 0)).toThrow('0 divided by 0 is undefined');
    });

    it('Error when numerator is NaN', () => {
        expect(() => divide(NaN, 56)).toThrow(TypeError);
        expect(() => divide(NaN, 56)).toThrow('Arguments cannot be NaN');
    });

    it('Error when Denominator is NaN', () => {
        expect(() => divide(7564, NaN)).toThrow(TypeError);
        expect(() => divide(8675, NaN)).toThrow('Arguments cannot be NaN');
    });
})