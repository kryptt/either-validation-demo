import * as O from 'fp-ts/lib/Option'
import emailAddress from 'email-addresses'

export const atLeastOneCapital = O.fromPredicate((s: string) =>
  /[A-Z]/g.test(s)
)

const digit = /[0-9]/g
const exactlyNDigits = (n) => new RegExp(`^${digit.source}{${n}}$`)

export const atLeastOneNumber = O.fromPredicate(digit.test)

export const digits = (n: number) => O.fromPredicate(exactlyNDigits(n).test)

const minLengthPred = (minLength: number) => (s: string) =>
  s.length >= minLength

const maxLengthPred = (maxLength: number) => (s: string) =>
  s.length <= maxLength

export const minLength = (n: number) => O.fromPredicate(minLengthPred(n))
export const maxLength = (n: number) => O.fromPredicate(maxLengthPred(n))

type Email = ReturnType<typeof emailAddress.parseOneAddress>

export const parseEmail = (email: string): O.Option<Email> =>
  O.fromNullable(emailAddress.parseOneAddress(email))
