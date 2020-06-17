export class Goals {
        showDescription: boolean;
        constructor(public id: number,public name: string,public description: string, publicCompleteDate: Date){
          this.showDescription=false;
        }
      
}
