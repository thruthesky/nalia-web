import router from "@/router";

export class App {
  static error(e: any) {
    console.log(e);
    alert(e);
  }

  static success(message: string) {
    alert(message);
  }

  static open(route: string) {
    router.push({ path: route });
  }
}
