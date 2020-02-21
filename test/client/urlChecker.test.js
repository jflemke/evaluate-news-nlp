import { isValidURL } from "../../src/client/js/urlChecker";

describe('Validate URLs', () => {
   test('it should declare the url as valid', () => {
       const input = 'www.google.de';

       expect(isValidURL(input)).toBe(true);
   });

    test('it should declare the url as valid', () => {
        const input = 'https://www.google.de';

        expect(isValidURL(input)).toBe(true);
    });

    test('it should declare the url as valid', () => {
        const input = 'https://www.wired.com/story/airbus-maveric-blended-wing-jet/';

        expect(isValidURL(input)).toBe(true);
    });

    test('it should declare the url as INvalid', () => {
        const input = 'hallo/bye';

        expect(isValidURL(input)).toBe(false);
    });

    test('it should declare the url as INvalid', () => {
        const input = 'xYz';

        expect(isValidURL(input)).toBe(false);
    });

});