export interface Speaker {
  speak: (name?: string) => string
}

export class PersonController implements Speaker {
  speak (name?: string): string {
    return `Ola ${name?.toUpperCase() ?? 'Fulano'}!!!`
  }
}
