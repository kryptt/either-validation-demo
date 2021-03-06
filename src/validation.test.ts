import {
  atLeastOneCapital,
  atLeastOneNumber,
  minLength,
  maxLength,
  parseEmail,
  digits
} from './validation'

it('validates at least one capital', () => {
  expect(atLeastOneCapital('aa')).toBeNone()
  expect(atLeastOneCapital('aA')).toBeSome('aA')
})

it('validates at least one number', () => {
  expect(atLeastOneNumber('')).toBeNone()
  expect(atLeastOneNumber('a')).toBeNone()
  expect(atLeastOneNumber('a1')).toBeSome('a1')
})

it('validates eight digits', () => {
  expect(digits(8)('')).toBeNone()
  expect(digits(8)('123')).toBeNone()
  expect(digits(8)('12345678')).toBeSome('12345678')
  expect(digits(8)('123456789')).toBeNone()
})

it('validates min length', () => {
  expect(minLength(3)('')).toBeNone()

  expect(minLength(3)('ab')).toBeNone()
  expect(minLength(2)('ab')).toBeSome('ab')

  expect(minLength(3)('abc')).toBeSome('abc')
})

it('validates max length', () => {
  expect(maxLength(2)('')).toBeSome('')

  expect(maxLength(2)('ab')).toBeSome('ab')
  expect(maxLength(2)('abc')).toBeNone()

  expect(maxLength(3)('abc')).toBeSome('abc')
})

it('validates email addresses', () => {
  expect(parseEmail('')).toBeNone()
  expect(parseEmail('foo')).toBeNone()
  expect(parseEmail('foo@bar.com')).toBeSome()
})
