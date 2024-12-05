import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { SparePartInterface } from '../../types';
import { APIService } from '../../api.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  router = inject(Router);
  sparePartDetail: SparePartInterface = {
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
  APIservice = inject(APIService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    this.APIservice.getSparePartByID(
      this.activatedRoute.snapshot.params['id']
    ).subscribe((resultedItem) => {
      this.sparePartDetail = resultedItem;
    });
  }
  home() {
    this.router.navigateByUrl('home');
  }
}
