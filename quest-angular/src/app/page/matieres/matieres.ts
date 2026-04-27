import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Matiere } from '../../model/matiere';
import { MatiereService } from '../../service/matiere';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matieres',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './matieres.html',
  styleUrl: './matieres.css',
})
export class Matieres {

  matieres$!: Observable<Matiere[]>;
  newMatiere: Matiere = {libelle: ''};
  router: Router = inject(Router);

  constructor(private matiereService: MatiereService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadMatieres();
  }

  reload() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate([ '/matieres' ]);
     });
  }

  loadMatieres() {
   this.matieres$ = this.matiereService.getAll();
  }

  addMatiere() {
    this.matiereService.add(this.newMatiere).subscribe(()  => {this.reload()});
  }

  deleteMatiere(id: number) {
    this.matiereService.delete(id).subscribe(()  => {this.reload()});
  }


}
