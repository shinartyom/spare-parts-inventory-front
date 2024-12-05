import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { APIService } from '../../api.service';
import { SparePartInterface } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  ApiService = inject(APIService);
  router = inject(Router);
  spareParts: SparePartInterface[] = [];

  ngOnInit() {
    this.ApiService.getAllSpareParts().subscribe((result) => {
      this.spareParts = result;
    });
  }

  cols: string[] = [
    'Spare Part ID',
    'Spare Part Name',
    'Spare Part Quantity',
    'Spare Part Price',
    'Spare Part CategoryName',
    'Details Spare Part',
    'Edit Spare Part',
    'Delete Spare Part',
  ];

  editSparePart(itemID: number) {
    this.router.navigateByUrl('/edit/' + itemID);
  }
  sparePartDetails(itemID: number) {
    this.router.navigateByUrl('/details/' + itemID);
  }
  DeleteSparePart(id: number) {
    this.ApiService.deleteSparePart(id).subscribe((r) => {
      this.ApiService.getAllSpareParts().subscribe((result) => {
        this.spareParts = result;
      });
      alert('Spare Part Deleted');
    });
  }
}
