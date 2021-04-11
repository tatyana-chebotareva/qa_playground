function fancyPrint(firstString: string, secondString: string): string {
    //code goes here
    let result: string = `${firstString}***\n***${secondString}`;
    //same as
    //let result: string = `${firstString}`+"***\n***"+`${secondString}`;
    //or
    //let result: string = firstString+"***\n***"+secondString;
    return result;

  }

  console.log(fancyPrint("hi", "bye"));