export class NewMessageAdminEvent {
  constructor(
    public readonly userId: number,
    public readonly clientId: number,
  ) {}
}
