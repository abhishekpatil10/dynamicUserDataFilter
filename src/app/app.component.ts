import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked:boolean = false;
  checkboxValues: any[] = [];
 tr_:any = [
  {
    attributeId:'1',
    attributeTitle:'aa',
    isChecked: false,
    condition:[{'title':'IN','isCheck':false,'selectedCondition':'IN'}],
    allowedValue:[{'title':'a','isChecked_': false},{'title':'b','isChecked_': false},{'title':'c','isChecked_': false}]
  },
  {
    attributeId:'2',
    attributeTitle:'bb',
    isChecked: false,
    condition:[{'title':'IN','isCheck':false,'selectedCondition':'IN'},{'title':'NIN','isCheck':false,'selectedCondition':'NIN'}],
    allowedValue:[{'title':'d','isChecked_': false},{'title':'e','isChecked_': false},{'title':'f','isChecked_': false}]
  },
  {
    attributeId:'3',
    attributeTitle:'cc',
    isChecked: false,
    condition:[{'title':'IN','isCheck':false,'selectedCondition':'IN'},{'title':'CONTAIN','isCheck':false,'selectedCondition':'CONTAIN'}],
    allowedValue:[{'title':'g','isChecked_': false},{'title':'h','isChecked_': false},{'title':'i','isChecked_': false}]

  },
  {
    attributeId:'4',
    attributeTitle:'dd',
    isChecked: false,
    condition:[{'title':'IN','isCheck':false,'selectedCondition':'IN'},{'title':'BETWEEN','isCheck':false,'selectedCondition':'BETWEEN'}],
    allowedValue:[{'title':'j','isChecked_': false},{'title':'k','isChecked_': false},{'title':'l','isChecked_': false}]
  }
 ]
 favoriteSeason: string | undefined;
 seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(){}
  ngOnInit(){}
  setIsChecked(item: any, isChecked: boolean) {
    item.isChecked = isChecked;
    this.checkboxValues.push(item);
  }

  setIsSubCheck(item: any, index: number, isChecked: boolean) {
    item.allowedValue[index] = isChecked;
  }
onFormSubmit(f:any) {
  // getting all values in below formData;
  console.log('Checkbox values:', this.checkboxValues);
}
te__:any = [];
setRadioActive(a:any,b:any,c:any){
  a.condition[b].isCheck = c;
  // this.te__.push(a);
}
isShow:boolean = true;
Toggle_(){
this.isShow = !this.isShow;
}
}
