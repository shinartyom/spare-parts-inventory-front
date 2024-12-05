import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../../api.service';
import { SparePartInterface } from '../../types';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  APIService = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  sparePartCategories: any;

  editSparePart: SparePartInterface = {
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
    this.APIService.getSparePartByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((result) => {
      this.editSparePart = result;
    });

    this.APIService.getAllSparePartCategories().subscribe((result) => {
      this.sparePartCategories = result;
    });
  }

  home() {
    this.router.navigateByUrl('');
  }

  edit() {
    this.APIService.editSparePart(this.editSparePart).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }
}
