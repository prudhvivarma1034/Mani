import {Component} from '@angular/core';

@Component({
    selector:'dept',
    template:`
        <h2>Department Component</h2>
        <div>
            Department ID is: {{deptID}}<br>
            Department Name is: {{deptName}}
        </div>
        <admin></admin>
    `,
    styles:[]
})

export class DeptComponent{
    deptID:number = 10;
    deptName:string ='Information Technology';
}