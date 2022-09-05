module DecoratorModule {
  interface Component {
    operation(): string;
  }

  class ConcreteComponent implements Component {
    operation(): string {
      return 'ConcreteComponent';
    }
  }

  class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
      this.component = component;
    }

    public operation(): string {
      return this.component.operation();
    }
  }

  class ConcreteDecoratorA extends Decorator {
    public operation(): string {
      return `ConcreteDecoratorA(${super.operation()})`;
    }
  }

  class ConcreteDecoratorB extends Decorator {
    public operation(): string {
      return `ConcreteDecoratorB(${super.operation()})`;
    }
  }

  function DecoratorCall(component: Component) {
    console.log(`RESULT: ${component.operation()}`);
  }

  const simple = new ConcreteComponent();
  console.log("Client: I've got a simple component:");
  DecoratorCall(simple);
  console.log('');

  const decorator1 = new ConcreteDecoratorA(simple);
  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log("Client: Now I've got a decorated component:");
  DecoratorCall(decorator2);
}
