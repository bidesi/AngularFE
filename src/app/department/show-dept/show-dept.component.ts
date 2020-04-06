import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Options } from 'selenium-webdriver';
import { Department } from 'src/app/models/deartment-model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  constructor(private deptService: DepartmentService) { }
  
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'deptId', 'deptName'];
  
  ngOnInit() {
    this.refreshDEptList();
  }

  refreshDEptList(){
    // var dummyData = [
    //     {deptId: 1, deptName: "Development"}, 
    //     {deptId: 2, deptName: "Finance"}, 
    //     {deptId: 3, deptName: "Human Resource"}
    // ];
    // this.listData = new MatTableDataSource(dummyData);


    this.deptService.getDeptList().subscribe(data =>{
      this.listData = new MatTableDataSource(data);
    });
  }

  onEdit(dep: Department){
    console.log("On edit: "+ dep);
  }

  onDelete(id: number){
    console.log("On click delete:"+ id);
  }
}
