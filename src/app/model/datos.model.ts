export class DatosCliente  {
      public name: string[] = ['Digíte el nombre'];
      public address: string[] = ['Digíte el nombre'];
      public phone: string[] = ['Digíte el nombre'];
      public contact: string[] = ['Digíte el nombre'];
      public nit: string[] = ['Digíte el nombre'];
  constructor(
      name?: string[],
      address?: string[],
      phone?: string[],
      contact?: string[],
      nit?: string[]
  ) {}
}

export class DatosProceso {

  constructor(
      public active?: string[],
      public client?: string[],
      public posicion?: string[],
      public dateInspection?: string[],
      public orderService?: string[]
  ) {}
}

export class DatosEmpresa {

  constructor(
      public name?: string[],
      public dateMaintenance?: string[]
  ) {}
}

export class DatosInstalacion {

  constructor(
      public identification?: string[],
      public dateStartService?: string[],
      public dateFinalInspection?: string[]
  ) {}
}