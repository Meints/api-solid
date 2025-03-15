export class LateCheckInValidationError extends Error {
  constructor() {
    super('The check-is can only be validated until 20 minutes of its creation')
  }
}
