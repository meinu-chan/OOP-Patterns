module ProxyModule {
  interface Subject {
    request(): void;
  }

  class RealSubject implements Subject {
    request(): void {
      console.log('RealSubjectL Handling request.');
    }
  }

  class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
      this.realSubject = realSubject;
    }

    request(): void {
      if (this.checkAccess()) {
        this.realSubject.request();
        this.logAccess();
      }
    }

    private checkAccess(): boolean {
      console.log('Proxy: Checking access prior to firing a real request.');

      return true;
    }

    private logAccess(): void {
      console.log('Proxy: Logging the time of request.');
    }
  }

  function ProxyCall(subject: Subject) {
    subject.request();
  }

  console.log('Client: Executing the client code with a real subject:');
  const realSubject = new RealSubject();
  ProxyCall(realSubject);

  console.log('');

  console.log('Client: Executing the same client code with a proxy:');
  const proxy = new Proxy(realSubject);
  ProxyCall(proxy);
}
