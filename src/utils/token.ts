export class Token {
  private static name = 'pokemon-clicker-auth-token';

  static get() {
    const token = localStorage.getItem(this.name);

    return token ?? '';
  }

  static save(token: string) {
    localStorage.setItem(this.name, token);
  }

  static drop() {
    localStorage.removeItem(this.name);
  }
}
