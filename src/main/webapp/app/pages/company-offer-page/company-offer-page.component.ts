import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'app/services/company.service';
import { Observable } from 'rxjs';
import { CompanyProfile, Offer } from 'app/types';

@Component({
  selector: 'jhi-company-offer-page',
  templateUrl: './company-offer-page.component.html',
  styleUrls: ['./company-offer-page.component.scss']
})
export class CompanyOfferPageComponent implements OnInit {
  public profile$: Observable<CompanyProfile> | undefined;
  public offers$: Observable<Offer[]> | undefined;

  constructor(private service: CompanyService) {}

  ngOnInit(): void {
    const sampleCompanyId = 'foo';
    this.offers$ = this.service.getOffers(sampleCompanyId);
    this.profile$ = this.service.getProfile(sampleCompanyId);
  }
}
