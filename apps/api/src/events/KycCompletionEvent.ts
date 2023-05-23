export class KycCompletionEventsAdmin {
  constructor(
    public readonly userId: number,
    public readonly message: string,
    public readonly adminUserId: number,
  ) {}
}

export class KycCompletionEventClient {
  constructor(
    public readonly userId: number,
    public readonly message: string,
    public readonly clientUserId: number,
  ) {}
}
