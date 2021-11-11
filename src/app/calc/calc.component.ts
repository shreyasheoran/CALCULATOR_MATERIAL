import { TOUCH_BUFFER_MS } from "@angular/cdk/a11y/input-modality/input-modality-detector";
import { Component, NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component(
  {
    selector: 'app-calc',
    templateUrl: './calc.component.html',
    styleUrls: ['./calc.component.css']
  }

)
export class CalcComponent{
constructor(private snackBar: MatSnackBar){
}

  openSnackBar(message:string,action:string){
    this.snackBar.open(message,action);
  }

  public num1:number;
  public num2: number;
  public ans: number;
  public num: number;
  public sum: number;
  public f: boolean;
  public str: string;

  add(){
    this.ans=this.num1+this.num2;
  }

  sub(){
    this.ans=this.num1-this.num2;
  }

  mul(){
    this.ans=this.num1*this.num2;
  }

  div(){
    this.ans=this.num1/this.num2;
  }

  fact(num: number){
    this.sum=1;
    if(num<0){
      alert("FACTORIAL OF A NEGATIVE NUMBER DOES NOT EXIST");
    }
    for (let index = 1; index <= num; index++) {
      if (num==0) {
        this.sum=1;
      }
      else {
        this.sum = this.sum*index;
      }

    }
  }

  prime(num: number){
    if(num>1){
      this.f=false;
      for (let index = 2; index <= num/2; index++) {
        if(num%index==0){
          this.f=true;
          break;
        }
      }
      if(this.f==true){
        this.str="Non Prime";
      }
      else{
        this.str = "Prime";
      }
    }
  else{
    alert("CANNOT CHECK FOR NEGATIVE NUMBERS OR 0");
  }
  }
}
