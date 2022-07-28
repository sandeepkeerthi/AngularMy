import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-products-templates',
  templateUrl: './products-templates.component.html',
  styleUrls: ['./products-templates.component.scss']
})
export class ProductsTemplatesComponent implements OnInit {


  @ViewChild('matSort') sort:MatSort= new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;

  @ViewChild('matSort1') sort1:MatSort= new MatSort();
  @ViewChild('paginator1') paginator1!: MatPaginator;

  displayedColumns = ['productName', 'sproductTemplate', 'lastVersionStatus', 'versions'];
  ELEMENT_DATA : ElementObj[] = [
    {productName:'Product Data 0', sproductTemplate: 'Basic Flow', lastVersionStatus: 'valid', versions: '7 versions'},
    {productName:'Product Data 1', sproductTemplate: 'Basic Flow', lastVersionStatus: 'invalid', versions: '8 versions'},
  ];

  dataSource=new MatTableDataSource(this.ELEMENT_DATA);
  dataSource1=new MatTableDataSource(this.ELEMENT_DATA);

  constructor() { }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.dataSource1.sort = this.sort1;
    this.dataSource1.paginator = this.paginator1;
  }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface ElementObj {
  productName: string;
  sproductTemplate: string;
  lastVersionStatus: string;
  versions: string;

}
