export class NewMessageEvent {
  constructor(
    public readonly userId: number,
    public readonly clientUserId: number,
  ) {}
}
