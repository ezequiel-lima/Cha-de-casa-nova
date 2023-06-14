import { ItensName } from "./itensName-model";

export class Itens {
  constructor (
    public id: number,
    public description: string,
    public status: boolean,
    public amount: number,
    public itensName: ItensName[]
  ) {

  }
}
