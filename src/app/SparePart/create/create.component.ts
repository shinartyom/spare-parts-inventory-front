import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { SparePartInterface } from '../../types';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  ApiService = inject(APIService);
  router = inject(Router);
  sparePartCategories: any;

  createSparePart: SparePartInterface = {
    sparePartId: 0,
    sparePartName: '',
    sparePartPrice: 0,
    sparePartQuantity: 0,
    sparePartCategoryID: 0,
    spareCategory: {
      spareCategoryId: 0,
      spareCategoryName: '',
    },
  };

  ngOnInit() {
    this.ApiService.getAllSparePartCategories().subscribe((result) => {
      this.sparePartCategories = result;
    });
  }
  create() {
    this.createSparePart.spareCategory = this.sparePartCategories.find(
      (category: any) =>
        category.spareCategoryId === this.createSparePart.sparePartCategoryID
    );

    this.ApiService.createSparePart(this.createSparePart).subscribe(() => {
      alert('Spare Part Created');
      this.router.navigateByUrl('home');
    });
  }
}
