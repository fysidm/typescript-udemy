class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk in ocean')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: string) {
  // will return undefined
  // console.log(target[key]);
  // will return undefined
  // console.log(target.color);
  // cuz decorator will not access that instance but just code
  // console.log(key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
