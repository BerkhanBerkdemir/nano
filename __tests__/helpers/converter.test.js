const Converter = require('../../code/helpers/converter');

test('29 $NANO converts to raw', () => {
  const attribute = new Converter(29);
  expect(attribute.toRaw()).toBe(29000000000000000000000000000000);
});

test('3.004126 $NANO converts to raw', () => {
  const attribute = new Converter(3.004126);
  expect(attribute.toRaw()).toBe(3004126000000000000000000000000);
});

test('Wrong type of amount leads to Error', () => {
  const attribute = new Converter('340');
  expect(() => {
    attribute.toRaw();
  }).toThrowError('Amount is not specified as expected');
});

test('-0.23 $NANO converts to raw', () => {
  const attribute = new Converter(-0.23);
  expect(() => {
    attribute.toRaw();
  }).toThrowError('Amount cannot be negative');
});

xtest('0 $NANO converts to raw', () => {
  const attribute = new Converter(0);
  expect(attribute.toRaw()).toBe(0);
});

test('29 * 10^30 raw converts to $NANO', () => {
  const attribute = new Converter(29000000000000000000000000000000);
  expect(attribute.toNano()).toBe(29);
});

test('3004126 * 10^24 raw converts to $NANO', () => {
  const attribute = new Converter(3004126000000000000000000000000);
  expect(attribute.toNano()).toBe(3.004126);
});
