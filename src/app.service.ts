export class App {
  static error(e: any) {
    console.log(e);
    alert(e);
  }

  static open(route: string) {
    console.log("open", route);
  }
}
