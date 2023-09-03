import {Component} from '@angular/core';

@Component({
    selector:'emp',
    template:`
        <h1>Welcome to Angular Components</h1>
        <hr/>
        <div>
            Employee ID is: {{empID}}<br>
            Employee Name is: {{empName}}<br>
            Employee Salary is: {{empSalary}}<br>
        </div>
        <admin></admin>
    `,
    styles:['h1{color:green;text-align:center}']
})

export class EmployeeComponent{
    empID:number = 101;
    empName:string =  "Srikanth";
    empSalary:number = 12345;
}